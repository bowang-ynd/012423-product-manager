import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useOutletContext } from 'react-router-dom';

const blankProduct = {
    title: '',
    price: 1,
    description: ''
}

const CreateProduct = () => {
    
    const navigate = useNavigate();
    const { flag, setFlag } = useOutletContext();
    const [ formProduct, setFormProduct ] = useState(blankProduct);
    const [ errors, setErrors ] = useState(null);

    // handle front-end validation
    const [ titleError, setTitleError ] = useState(null);
    const [ priceError, setPriceError ] = useState(null);
    const [ descriptionError, setDescriptionError ] = useState(null);
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormProduct({
            ...formProduct,
            [name]: value
        });

        console.log(e.target.value)
        if (e.target.name === 'title') {
            if (e.target.value !== '' && e.target.value.length < 3){
                setTitleError('Title should have at least 3 characters!');
            } else {
                setTitleError(null);
            }
        } else if (e.target.name === 'price') {
            if (e.target.value <= 0) {
                setPriceError('Price should be greater than 0!');
            } else {
                setPriceError(null);
            }
        } else if (e.target.name === 'description') {
            if (e.target.value !== '' && e.target.value.length < 10){
                setDescriptionError('Description should have at least 10 characters!');
            } else {
                setDescriptionError(null);
            }
        }
        console.log(titleError);
        console.log(priceError);
        console.log(descriptionError);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/products', formProduct)
            .then( res => {
                console.log(res.data);
                setFlag(!flag);
                setErrors(null);
                navigate('/products');
            })
            .catch( err => {
                console.log(err);
                setErrors(err.response.data.errors);
            } );
    };

    return (
        <div>
            <h2>Create a new product!</h2>
            <div className="card">
                <div className="card-body">
                    <form onSubmit={ handleSubmit }>
                        <div className="mb-3">
                            <label htmlFor="title" className="form-lable">Title: </label>
                            <input type="text" name='title' className="form-control" value={formProduct.title} onChange={ handleChange } />
                            {
                                titleError && 
                                <span className='form-text text-danger'>{titleError}</span>
                            }
                            {
                                errors?.title && 
                                <span className='form-text text-danger'>{errors.title.message}</span>
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="price" className="form-lable">Price: </label>
                            <input type="number" name='price' className="form-control" value={formProduct.price} onChange={ handleChange } />
                            {
                                priceError && 
                                <span className='form-text text-danger'>{priceError}</span>
                            }
                            {
                                errors?.price && 
                                <span className='form-text text-danger'>{errors.price.message}</span>
                            }
                        </div>
                        <div className="mb-3">
                            <label htmlFor="description" className="form-lable">Description: </label>
                            <textarea name="description" id="description" className="form-control" value={formProduct.description} onChange={ handleChange } />
                            {
                                descriptionError && 
                                <span className='form-text text-danger'>{descriptionError}</span>
                            }
                            {
                                errors?.description && 
                                <span className='form-text text-danger'>{errors.description.message}</span>
                            }
                        </div>
                        <div className='d-flex justify-content-end'>
                            <button type="submit" className="btn btn-primary">Create!</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default CreateProduct