import React from 'react';
import { Link } from 'react-router-dom';
import showImg from '../../../../images/specialities/specialities-01.png'
import StarRatings from 'react-star-ratings';
import { Tag } from 'antd';
import './index.css';
import { FaLocationArrow, FaRegThumbsUp, FaDollarSign, FaComment } from "react-icons/fa";

const SearchContent = ({ data }) => {
    
    //const services = data?.services.split(',')
    const services = data?.services ? data.services.split(',') : [];
    console.log("search" + services)
    const handleClick = () => {
        localStorage.setItem('doctor', JSON.stringify(data));
      };

    if (!data) {
        return null; // Or some other fallback UI
      }
    return (

        // Assuming this code is inside a component
        
               <div className="mb-4 rounded" style={{ background: '#f3f3f3' }}>              
                <div className='d-flex p-3 justify-content-between'>
                    <div className='d-flex gap-3'>
                        <div className='doc-img-fluid d-flex align-items-center'>
                            {data?.img && <img src={data?.img} className="img-fluid" alt="User Image" />}
                        </div>
                        <div className="doc-info">
                            <h5 className='mb-0'>{data?.firstName + ' ' + data?.lastName}</h5>
                    
        
                            <div className='d-flex align-items-center'>
                                <div>
                                    <StarRatings
                                        rating={5}
                                        starRatedColor="#f4c150"
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension="15px"
                                        starSpacing="2px"
                                    />
                                </div>
                                <div>(4)</div>
                            </div>
        
                            <div className="clinic-details">
                                <p className="form-text text-secondary"><FaLocationArrow /> {data?.address}, {data?.country}</p>
                            </div>
                            {
                                services.map((item, id) => (
                                    <Tag key={id + 51}>{item}</Tag>
        
                                ))
                            }
                        </div>
                    </div>
                    <div className="doc-info-right me-3">
                        <div className="clini-infos">
                            <ul>
                            <li><FaRegThumbsUp />  97%</li>
                            <li><FaComment /> 4 Feedback</li>
                            <li><FaDollarSign /> {data?.price ? data?.price : "Not Available Now"}</li>
                            </ul>
                        </div>
                        <div className="clinic-booking">
                    </div>
                    </div>
                </div>
        </div>
        
    )
}
export default SearchContent;