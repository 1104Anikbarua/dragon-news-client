import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsCard from '../NewsCard/NewsCard';

const Category = () => {
    const { id } = useParams();
    const categoryData = useLoaderData();
    console.log(categoryData)
    return (
        <div>
            <p>This is category data {categoryData?.length}</p>
            <div>
                {
                    categoryData.map((news, index) => <NewsCard
                        news={news}
                        key={news._id}
                    ></NewsCard>)
                }
            </div>
        </div>
    );
};

export default Category;