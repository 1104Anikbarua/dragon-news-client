import React from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NewsCard = (props) => {
    const { news } = props;
    // console.log(news)
    const { _id, thumbnail_url, title, total_view, rating, others_info, details, category_id, image_url, author } = news;
    const { img, name, published_date } = author;
    const { badge, number } = rating;
    return (
        <Card className="mb-5">
            <Card.Header>Featured</Card.Header>
            <Card.Title>{title}</Card.Title>
            <Card.Body>
                <Card.Img variant="top" src={image_url} />
                <Card.Text className='text-secondary'>
                    {details.slice(0, 250)}...<Link to={`/news/${_id}`} className='text-warning text-decoration-none fw-bolder'>Read More</Link>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted">

                <small className="text-muted">{number}</small>
                <small className="text-muted">{total_view}</small>

            </Card.Footer>
        </Card>
    );
};

export default NewsCard;