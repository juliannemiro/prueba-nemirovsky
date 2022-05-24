import { useState } from 'react';
import { collection, addDoc } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { useCartContext } from "../../Context/CartContexProvider";
import db from '../../services/firebase';
import Spinner from '../../components/Spinner/Spinner';


const FormCompra = () => {
    const { cartList, totalAcum, limpiarCarrito } = useCartContext();

    const [isLoading, setIsLoading] = useState(false);
    const [orderID, setOrderID] = useState()
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

    const generarOrden = async (data) => {
        setIsLoading(true)
        try {

            const col = collection(db, "orders")
            const order = await addDoc(col, data)
            setOrderID(order.id)
            limpiarCarrito()
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const items = cartList.map(e => { return { id: e.id, titulo: e.nombre, precio: e.precio, cantidad: e.cantidad } })
        const fecha = new Date()
        const total = totalAcum()
        const data = { comprador, items, fecha, total }
        console.log("data", data)
        generarOrden(data)


    }


    return (
        <>


            {isLoading ? <Spinner />
                : (!orderID && <div>
                    <h1>Finalizando Compra</h1>
                    <hr />
                    <h4>Completar Datos:</h4>
                    <br />
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="Nombre"
                            placeholder="Nombre"
                            value={Nombre}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="email"
                            name="Email"
                            placeholder="Email"
                            value={Email}
                            onChange={handleInputChange}
                            required
                        />
                        <br />
                        <input
                            type="number"
                            name="Telefono"
                            placeholder="Telefono"
                            value={Telefono}
                            onChange={handleInputChange}
                            required
                        />
                        <br /><br />
                        <input
                            type="submit"
                            value="Finalizar Compra"
                            className="btn btn-success"
                        />
                    </form>
                </div>)
            }

            <div>
                {
                    orderID && (
                        <div>
                            <h1>¡Compra realizada con Exito!</h1> <br/>
                            <h4>{`Su código de compra es: ${orderID}`}</h4><br/>
                            <Link to="/"><h5>Realizar otra compra</h5></Link>
                        </div>
                    )
                }
            </div>

        </>
    )
}

export default FormCompra