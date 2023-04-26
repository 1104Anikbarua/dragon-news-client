import React, { useEffect, useState } from 'react';
import Categories from '../Categories/Categories';
import imageOne from '../../assets/1.png';
import imageTwo from '../../assets/2.png';
import imageThree from '../../assets/3.png';
import moment from 'moment';
import { HiOutlineCalendar } from 'react-icons/hi2';

const LeftNavigation = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('https://batch-7-milestone-10-m-5-dragon-news-server.vercel.app/categories')
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
            <div>
                <div>
                    <img src={imageOne} alt="" />
                    <p className='fw-bolder'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className='d-flex align-items-center justify-content-start text-secondary'>
                        <p className='me-5'>Sports</p>
                        <p><HiOutlineCalendar className='me-2'></HiOutlineCalendar>{moment().format('MMM D,YYYY')}</p>
                    </div>
                </div>
                <div>
                    <img src={imageTwo} alt="" />
                    <p className='fw-bolder'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className='d-flex align-items-center justify-content-start text-secondary'>
                        <p className='me-5'>Sports</p>
                        <p><HiOutlineCalendar className='me-2'></HiOutlineCalendar>{moment().format('MMM D,YYYY')}</p>
                    </div>
                </div>
                <div>
                    <img src={imageThree} alt="" />
                    <p className='fw-bolder'>Bayern Slams Authorities Over Flight Delay to Club World Cup</p>
                    <div className='d-flex align-items-center justify-content-start text-secondary'>
                        <p className='me-5'>Sports</p>
                        <p><HiOutlineCalendar className='me-2'></HiOutlineCalendar>{moment().format('MMM D,YYYY')}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftNavigation;