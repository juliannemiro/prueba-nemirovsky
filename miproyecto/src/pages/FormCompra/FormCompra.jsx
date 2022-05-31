import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContexProvider";
import db from '../../services/firebase';
import Spinner from '../../components/Spinner/Spinner';
import './FormCompra.css'

const FormCompra = () => {
    const { cartList, totalAcum, limpiarCarrito } = useCartContext();

    const [isLoading, setIsLoading] = useState(false);
    const [orderID, setOrderID] = useState()
    const [errorCompra, setErrorCompra] = useState(false)
    const [comprador, setComprador] = useState({
        Nombre: '',
        Email: '',
        Telefono: ''
    })

    const { Nombre, Email, Telefono } = comprador

    const handleInputChange = (e) => {
        setComprador(({
            ...comprador,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (totalAcum() > 0) {
            const items = cartList.map(e => { return { id: e.id, titulo: e.nombre, precio: e.precio, cantidad: e.cantidad } })
            const fecha = new Date()
            const total = totalAcum()
            const data = { comprador, items, fecha, total }
            generarOrden(data)
        }
        else {
            setErrorCompra(true);

        }
    }

    const generarOrden = async (data) => {
        setIsLoading(true)
        try {
            const col = collection(db, "orders")
            const order = await addDoc(col, data)
            setOrderID(order.id)
            limpiarCarrito()
        } catch (error) {
            console.log(error);
            setErrorCompra(true);
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className='formContainer'>
            {isLoading ? <Spinner />
                : (!orderID && !errorCompra && <div>
                    <h1>Finalizando Compra</h1>
                    <hr />
                    <h4>Ingrese datos del comprador:</h4>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <div className="input-group-prepend">
                            <input
                                type="text"
                                className="form-control"
                                name="Nombre"
                                placeholder="Nombre y apellido"
                                value={Nombre}
                                onChange={handleInputChange}
                                required
                            />
                            <br />
                            <input
                                type="email"
                                className="form-control"
                                name="Email"
                                placeholder="Email"
                                value={Email}
                                onChange={handleInputChange}
                                required
                            />
                            <br />
                            <input
                                type="number"
                                className="form-control"
                                name="Telefono"
                                placeholder="Telefono"
                                value={Telefono}
                                onChange={handleInputChange}
                                required
                            />
                            <br /><br />

                            <button className="btn btn-success" type="submit">Realizar Compra</button>

                        </div>
                    </form>
                </div>
                )
            }

            <div>
                {
                    orderID && (
                        <div className="compraConfirmada">
                            <h4>¡Enhorabuena, su compra ha sido realizada con éxito!</h4> <br />
                            <h6>{`Su código de compra es: ${orderID}`}</h6><br />
                            <Link to="/"><h5>Volver al catálogo</h5></Link>
                        </div>
                    )
                }
            </div>

            <div>
                {
                    errorCompra && (
                        <div className="compraRechazada">
                            ¡Lo sentimos! No hemos podido procesar la operación. Por favor, vuelva a cargar su carrito de compras. <br />

                            <Link to="/"><h6>Empezar nuevamente</h6></Link>
                        </div>
                    )
                }
            </div>

        </div>
    )
}

export default FormCompra