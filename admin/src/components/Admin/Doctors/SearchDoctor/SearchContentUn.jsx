import React from 'react';
import { Link } from 'react-router-dom';
import showImg from '../../../../images/specialities/specialities-01.png'
import { useVerifyDoctorMutation } from '../../../../redux/api/authApi';
import { useEffect } from 'react';
import StarRatings from 'react-star-ratings';
import { Tag } from 'antd';
import './index.css';
import { FaLocationArrow, FaRegThumbsUp, FaDollarSign, FaComment } from "react-icons/fa";
import { message } from 'antd';

const SearchContent = ({ data }) => {

    const [verifyDoctor, { data: pData, isSuccess: pIsSuccess, isError: pIsError, error: pError, isLoading: pIsLoading }] = useVerifyDoctorMutation();
    
    //const services = data?.services.split(',')
    const services = data?.services ? data.services.split(',') : [];
    console.log("search" + services)
    const handleSuccess = () => {
        message.success('Successfully Logged in');
    }

    useEffect(() => {
        if (!pIsError && pIsSuccess) {
            handleSuccess();
        }
    
    }, [pIsError, pIsSuccess  ])

    const handleClick = async () => {
        if (!data) {
          console.error('No data available');
          return;
        }
    
        try {
          const response = await verifyDoctor(data.id);
          console.log('Verification response:', response);
        } catch (error) {
          console.error('Error verifying doctor:', error);
        }
      };

  

   
    return (

        // Assuming this code is inside a component
        
               <div className="mb-4 rounded" style={{ background: '#f3f3f3' }}>              
                <div className='d-flex p-3 justify-content-between'>
                    <div className='d-flex gap-3'>
                        <div className='doc-img-fluid d-flex align-items-center'>
                            {data?.img && <img src={data?.img} className="img-fluid" alt="User Image" />}
                        </div>
                        <div className="doc-info">
                            <h5 className='mb-0'> {data?.firstName + ' ' + data?.lastName}</h5>
                            
        
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
        
                        </div>
                    </div>
                    <div className="doc-info-right me-3">
                        <div className="clini-infos">
                            <ul>
                                <li><FaComment /> 4 Feedback</li>
                                <li><FaLocationArrow /> Healthy, Sri Lanka</li>
                            </ul>
                        </div>
                        <div className="clinic-booking">
                        <Link onClick={handleClick}  className="view-pro-btn">Verify</Link>

                    </div>
                    </div>
                </div>
        </div>
        
    )
}
export default SearchContent;