import './index.css';
import { FaHospitalUser, FaCalendarAlt, FaHospital } from "react-icons/fa";
const DoctorDashCard = () => {
    const cardData = [
        
    ]
    return (

        <div className="row mb-4 p-3 rounded" style={{ background: '#f8f9fa' }}>
            {
                cardData.map((item, index) => (
                    <div className="col-md-12 col-lg-4" key={index + 8}>
                        <div className='d-flex gap-2 align-items-center dash-card'>
                            <div className='dash-card-icon'>
                                {item.icon}
                            </div>
                            <div className="dash-widget-info">
                                <h6 className='mb-0'>{item.title}</h6>
                                <h4 className='my-1'>{item.amount}</h4>
                                <p className="form-text">{item.date}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>

    )
}
export default DoctorDashCard;