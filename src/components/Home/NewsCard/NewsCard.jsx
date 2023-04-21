import moment from 'moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HiEye, HiOutlineBookmark, HiOutlineShare, HiStar } from 'react-icons/hi2'
import Rating from 'react-rating';
import { FaStarHalfAlt } from 'react-icons/fa';
import { RiStarHalfLine } from 'react-icons/ri';

const NewsCard = (props) => {
    const { news } = props;
    // console.log(news)
    const { _id, thumbnail_url, title, total_view, rating, others_info, details, category_id, image_url, author } = news;
    const { img, name, published_date } = author;
    const { badge, number } = rating;
    return (
        <Card className="mb-5">
            <Card.Header className='bg-light d-flex align-items-center border border-0'>
                <Image src={img} alt='author image' roundedCircle width={'40px'} height={'40px'}></Image>
                <div className='ms-2 flex-grow-1'>
                    <p className='mb-0 fs-5 fw-semibold'>{name}</p>
                    <p className='text-secondary'>{moment(published_date).format('YYYY-MM-D')}</p>
                </div>
                <div className='text-secondary fs-3'>
                    <HiOutlineBookmark className='me-2'></HiOutlineBookmark>
                    <HiOutlineShare></HiOutlineShare>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant="top" src={image_url} />
                <Card.Text className='text-secondary'>
                    {details.slice(0, 250)}...<Link to={`/news/${_id}`} className='text-warning text-decoration-none fw-bolder'> Read More</Link>
                </Card.Text>
            </Card.Body>
            <Card.Footer className="text-muted d-flex align-items-center bg-white border border-top border-0">
                <div className='flex-grow-1'>
                    <Rating
                        placeholderRating={number}
                        readonly
                        emptySymbol={<RiStarHalfLine></RiStarHalfLine>}
                        placeholderSymbol={<HiStar className='text-warning text-opacity-75'></HiStar>}
                        fullSymbol={<HiStar className='text-warning'></HiStar>}>

                    </Rating>
                    <small className="text-muted ms-2">{number}</small>
                </div>

                <div>
                    <HiEye className='me-1 fs-5'></HiEye>
                    <small className="text-muted">{total_view}</small>
                </div>

            </Card.Footer>
        </Card>
    );
};

export default NewsCard;