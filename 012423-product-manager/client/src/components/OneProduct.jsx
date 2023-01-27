import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useParams, useNavigate, useOutlet, useOutletContext } from 'react-router-dom';

const OneProduct = () => {
    
    const navigate = useNavigate();
    const { id } = useParams();
    const { flag, setFlag } = useOutletContext();
    const [product, setProduct] = useState(null);

    useEffect( () => {
        const controller = new AbortController();
        axios.get(`http://localhost:8000/api/products/${id}`, { signal: controller.signal })
            .then( res => {
                console.log(res);
                setProduct(res.data);
            })
            .catch( err => console.log(err) );
        return () => controller.abort();
    }, []);

    const handleDelete = (e) => {
        e.preventDefault();
        axios.delete(`http://localhost:8000/api/products/${id}`)
            .then( res => {
                console.log(res.data);
                setFlag(!flag);
                navigate('/products');
            })
            .catch( err => console.log(err) );
    }
    
    return (
        <div>
            <h4>Your Product: </h4>
            <div className='card mb-3'>
                {
                    product &&
                    <>
                        <div className="card-body">
                            <div className="card-body">
                                <p>Title: { product.title }</p>
                                <p>Price: { product.price }</p>
                                <p>Description: { product.description }</p>
                            </div>
                        </div>
                    </>
                }
                <div className="card-footer d-flex justify-content-end">
                    <Link className='btn btn-primary me-3' to={`/products/${id}/edit`}>Edit</Link>
                    <button className="btn btn-primary" onClick={ handleDelete }>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default OneProduct