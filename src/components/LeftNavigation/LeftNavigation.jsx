import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';

const LeftNavigation = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])

    // console.log(categories)

    return (
        <div>
            <p className='fw-bolder'>All Category</p>
            <div className='ms-5'>
                {
                    categories.map((category) => <Categories
                        category={category}
                        key={category.id}
                    ></Categories>)
                }
            </div>
        </div>
    );
};

export default LeftNavigation;