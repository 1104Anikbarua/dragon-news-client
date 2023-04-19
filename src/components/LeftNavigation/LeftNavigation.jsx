import React, { useEffect, useState } from 'react';

const LeftNavigation = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/categories')
            .then(response => response.json())
            .then(data => setCategories(data))
    }, [])

    console.log(categories)

    return (
        <div>
            <p className='fw-bolder'>All Category</p>
            <div>

            </div>
        </div>
    );
};

export default LeftNavigation;