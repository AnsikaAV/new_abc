import React from 'react';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';
import { Tag } from 'antd';
import './index.css';
import { FaLocationArrow, FaRegThumbsUp, FaDollarSign, FaComment } from "react-icons/fa";
import profile from '../../../images/avatar.jpg'

const SearchContent = ({ data }) => {
    console.log(data)
    const services = data?.services ? data.services.split(',') : [];
    if (!data) {
        return "loading...."; // Or some other fallback UI
      }

    return (
        <div className="mb-4 rounded" style={{ background: '#f3f3f3' }}>
            <div className='doc-img-fluid d-flex align-items-center justify-content-center  d-sm-none m-2'>
            {data?.img !== null ? (
                <img src={data?.img} className="img-fluid"  />
            ) : (
                <img src={profile} className="img-fluid"  />
            )}
                    </div>
            <div className='d-flex p-3 justify-content-between'>
                <div className='d-flex gap-3'>
                    <div className='doc-img-fluid d-flex align-items-center d-none d-md-block' style={{ width: '300px', height: '200px' }}>
                    {data?.img !== null ? (
                <img src={data?.img} className="img-fluid "  />
            ) : (
                <img src={profile} className="img-fluid"  />
            )}
                    </div>
                    <div className="doc-info">
                        <h5 className='mb-0'><Link to={`/doctors/profile/${data?.id}`}>{data?.firstName + ' ' + data?.lastName}</Link></h5>
                  
                        <div className='d-flex align-items-center'>
                        </div>

                        <div className="clinic-details">
              
                        
                        </div>
                    
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
                        <Link to={`/booking/${data?.id}`} className="apt-btn">Book Appointment</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SearchContent