import React, { useEffect, useState } from 'react';
import { Link, useOutletContext } from 'react-router-dom';

const AllProducts = () => {
    
    const { products, flag, setFlag } = useOutletContext();
    
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>
                        <th>All Products: </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products && products.map( product => {
                            return (
                                <tr key={ product._id }>
                                    <td>{ <Link to={`/products/${ product._id}`}> { product.title }</Link> }</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default AllProducts