import React, { useEffect, useState } from 'react';
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom';
import Spinner from '../Spinner/Spinner';
import db from '../../services/firebase';
import { collection, getDocs, query, where } from "firebase/firestore";

const ItemListContainer = () => {
    const { idCategoria } = useParams();
    const [productos, setProductos] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const getData = async (idCategoria) => {
        try {
            setIsLoading(true)
            const document = idCategoria ? query(collection(db, "items"), where('categoria', '==', idCategoria))
                : collection(db, "items")
            const col = await getDocs(document)
            const result = col.docs.map((doc) => doc = { id: doc.id, ...doc.data() })
            setProductos(result)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getData(idCategoria)
    }, [idCategoria])

    return (
        <div className='div-item'>
            {isLoading && <Spinner />}
            <ItemList productos={productos} />
        </div>
    );
};

export default ItemListContainer;