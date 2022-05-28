import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import "./ItemListDetailContainer.css"
import Spinner from '../Spinner/Spinner';
import db from '../../services/firebase';
import { doc, getDoc } from "firebase/firestore";


const ItemDetailContainer = () => {
    const [itemDetalle, setItemDetalle] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { id } = useParams();

    const getItemDetalle = async (id) => {
        try {
            const document = doc(db, "items", id);
            const response = await getDoc(document); // no me anda con await getDoc(document) 
            console.log(response)
            const result = { id: response.id, ...response.data() }
            console.log(result)
            setItemDetalle(result)
        } catch (error) {
            console.log(error)
        }
    }


    useEffect(() => {
        setIsLoading(true);
        getItemDetalle(id);
        setIsLoading(false);
    }, [id]);

    return (
        <>
            {isLoading && <Spinner />}
            {isLoading === false &&
                <ItemDetail itemDetalle={itemDetalle} />
            }
        </>
    );
}

export default ItemDetailContainer;