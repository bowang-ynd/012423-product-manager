import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Outlet } from 'react-router-dom';

const AllProducts = () => {
    
    const [products, setProducts] = useState(null);
    const [flag, setFlag] =useState(false);

    useEffect( () => {
        const controller = new AbortController();
        axios.get('http://localhost:8000/api/products', { signal: controller.signal })
            .then( res => {
                setProducts(res.data);
            })
            .catch( err => console.log(err) );
        return () => controller.abort();
    }, [flag]);

// http://localhost:8000/api/products

    return (
        <div>
            <h2 className='text-center'>Product Manager</h2>
            <Outlet context={{ products, flag, setFlag }}/>
        </div>
    )
}

export default AllProducts