import React, { useEffect } from 'react';
import Footer from '../Shared/Footer/Footer';
import { FaBriefcase, FaCalendarCheck, FaRegClock, FaLocationArrow, FaCalendarAlt, FaLink, FaAlignLeft  } from "react-icons/fa";
import { Link, useNavigate, useParams } from 'react-router-dom';
import { Button, Tag, Tooltip } from 'antd';
import moment from 'moment';
import { Empty } from 'antd';
import Header from '../Shared/Header/Header';
import { useGetSingleAppointmentQuery } from '../../redux/api/appointmentApi';
import { clickToCopyClipBoard } from '../../utils/copyClipBoard';

const BookingSuccess = () => {
    const { id } = useParams();
    const { data } = useGetSingleAppointmentQuery(id);
    console.log(data)

    const navigate = useNavigate();

    useEffect(() => {
        const timeOut = setTimeout(() => {
            if (!data?.id) {
                navigate('/');
            }
        }, 5000)
        return () => clearTimeout(timeOut)
    }, [navigate, data])

    return (
        <>
            <Header />
            <div className="container mx-auto d-flex justify-content-center align-items-center text-center">
                {
                    data?.id ?

                        <div className=" p-3" style={{ marginTop: '8rem', marginBottom: '5rem', height: '60vh', background: '#f8f9fa', maxWidth: '400px' }}>

                            <div className='border-bottom my-2'>
                                <FaCalendarCheck style={{ fontSize: '2.5rem' }} className='text-success' />
                                <h6 className='py-2'>Reservation is scheduled</h6>
                                <p className='text-secondary border rounded-pill form-text text-success border-success'>Check your Inbox an email with all details!</p>
                            </div>


                            <div>
                                <Tooltip title="Copy Tracking Id">
                                    <Button>
                                        <h6>Tracking<Tag color="#87d068" className='ms-2 text-uppercase' onClick={() => clickToCopyClipBoard(data?.trackingId)}>{data?.trackingId}</Tag></h6>
                                    </Button>
                                </Tooltip>
                            </div>


                            
                        </div>
                        :
                        <div className='rounded p-3 d-flex flex-column justify-content-center align-items-center' style={{ background: "#f8f9fa", marginTop: '8rem', marginBottom: '5rem' }} >
                            <Empty />
                            <h6 className='p-2 my-3'>You will be redirect to homepage !</h6>
                        </div>
                }
            </div>
            <Footer />
        </>

    )
}

export default BookingSuccess