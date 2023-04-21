import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { HiArrowLongLeft } from 'react-icons/hi2';
import { Link, useLoaderData } from 'react-router-dom';
import './NewsDetails.css'
import EditorsInsight from '../../EditorsInsight/EditorsInsight';

const NewsDetail = () => {
    const detailNews = useLoaderData();
    console.log(detailNews)
    const { image_url, details, title, category_id } = detailNews;
    return (
        <div>
            <Card className='mb-5'>
                <Card.Body>
                    <Card.Img className='mb-2' variant="top" src={image_url} />
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/categories/${category_id}`}>
                        <Button className='detail-btn' variant="primary"><HiArrowLongLeft></HiArrowLongLeft> All News In This Category</Button>
                    </Link>
                </Card.Body>
            </Card>
            <EditorsInsight></EditorsInsight>
        </div>
    );
};

export default NewsDetail;