import React from 'react';
import { useParams } from 'react-router-dom';

const Category = () => {
    const { id } = useParams();
    return (
        <div>
            <p>This is category data {id}</p>
        </div>
    );
};

export default Category;