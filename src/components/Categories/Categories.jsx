import React from 'react';
import { Link } from 'react-router-dom';

const Categories = (props) => {
    const { category } = props;
    const { id, name } = category
    return (
        <p className='d-flex align-items-center'>
            <Link className='text-decoration-none fs-5 fw-medium text-secondary' to={`/categories/${id}`}>{name}</Link>
        </p>
    );
};

export default Categories;