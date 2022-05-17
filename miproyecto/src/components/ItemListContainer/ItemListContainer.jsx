import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import { collection, getDocs, getFirestore, query, where, limit } from 'firebase/firestore';

function getItemDetalle(idCategoria) {
    const myPromise = new Promise((resolve, reject) => {
        const itemList = [
            {
                id: 1,
                categoria: 'nacional',
                nombre: 'River Plate',
                descripcion: 'Camiseta principal - Temporada 2022',
                imagen: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-river-adidas-oficial-blanca-100020fq7660001-_3_1.jpg',
                stock: 4,
                precio: '$12.000',
            },
            {
                id: 2,
                categoria: 'nacional',
                nombre: 'Boca Juniors',
                descripcion: 'Camiseta principal - Temporada 2022',
                imagen: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-boca-adidas-oficial-azul-24965351-100020gu1883001-1.jpg',
                stock: 3,
                precio: '$12.000',
            },
            {
                id: 3,
                categoria: 'nacional',
                nombre: 'Ferro Carril Oeste',
                descripcion: 'Camiseta principal - Temporada 2022',
                imagen: 'https://http2.mlstatic.com/D_NQ_NP_794837-MLA49502113546_032022-O.webp',
                stock: 1,
                precio: '$8.000',
            },
            {
                id: 4,
                categoria: 'nacional',
                nombre: 'Racing Club',
                descripcion: 'Camiseta principal - Temporada 2022',
                imagen: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-racing-kappa-oficial-blanca-85569411-3950235165zw801-1.jpg',
                stock: 3,
                precio: '$9.000',
            },
            {
                id: 5,
                categoria: 'internacional',
                nombre: 'Napolí',
                descripcion: 'Camiseta principal - Temporada 2022',
                imagen: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-napoli-kappa-alternativa-blanca-395023119ziw05e-1.jpg',
                stock: 8,
                precio: '$13.500',
            },
            {
                id: 6,
                categoria: 'internacional',
                nombre: 'Barcelona',
                descripcion: 'Camiseta principal - Temporada 2022',
                imagen: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-barcelona-nike-oficial-standard-azul-510020cd4232456-1.jpg',
                stock: 5,
                precio: '$15.000',
            },
            {
                id: 7,
                categoria: 'internacional',
                nombre: 'Arsenal',
                descripcion: 'Camiseta alternativa - Temporada 2022',
                imagen: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-adidas-arsenal-alternativa-amarilla-100020eh5635001-1.jpg',
                stock: 6,
                precio: '$13.500',
            },
            {
                id: 8,
                categoria: 'seleccion',
                nombre: 'Colombia',
                descripcion: 'Camiseta alternativa - Mundial 2018',
                imagen: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-colombia-adidas-alternativa-azul-100020fi5295001-1.jpg',
                stock: 3,
                precio: '$11.999',
            },
            {
                id: 9,
                categoria: 'seleccion',
                nombre: 'Argentina',
                descripcion: 'Camiseta principal - Mundial 2018',
                imagen: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-de-argentina-adidas-oficial-authentic-blanca-100020dp0225001-1.jpg',
                stock: 5,
                precio: '$11.999',
            },
            {
                id: 10,
                categoria: 'seleccion',
                nombre: 'Alemania',
                descripcion: 'Camiseta principal - Mundial 2018',
                imagen: 'https://cdn.solodeportes.com.ar/media/catalog/product/cache/7c4f9b393f0b8cb75f2b74fe5e9e52aa/c/a/camiseta-alemania-adidas-oficial-blanca-15745389-100020eh6105001-1.jpg',
                stock: 8,
                precio: '$11.999',
            }
        ];

        const itemFiltrados = idCategoria ? itemList.filter(item => item.categoria === idCategoria) : itemList;
        // const productsFiltered = category ? productsList.filter(p => p.category === category) : productsList;
        setTimeout(() => {
            resolve(itemFiltrados);
        }, 2000)
    });
    return myPromise
}


const ItemListContainer = () => {
    const { idCategoria } = useParams();
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true)
        getItemDetalle(idCategoria)
            .then((response) => setProductos(response))
            .finally(() => {
                setIsLoading(false);
            });
    }, [idCategoria]);

    // useEffect(() => {
    //     const db = getFirestore();
    //     const itemCollection = collection(db, 'items');

    //     const q = query(
    //         itemCollection,
    //         where('precio','>',10000),
    //         limit(1)
    //     )

    //     getDocs(q)
    //         .then(snapshot => {
    //             console.log(snapshot.docs.map(doc => {
    //                 return { ...doc.data(), id: doc.id } // .data() trae los datos, y agrego el id
    //             }))
    //         })
    // }, []);

    return (
        <div className='div-item'>
            {isLoading && <Spinner />}
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;