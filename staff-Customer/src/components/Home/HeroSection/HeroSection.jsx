import React from 'react';
import './index.css';
import { Link, useNavigate } from 'react-router-dom';
import { FloatButton, ConfigProvider, Space } from 'antd';
import { FaRobot } from 'react-icons/fa';


const HeroSection = () => {
    const history = useNavigate();
    const handleButtonClick = () => {
        history('/chat');
      };
    return (
        <section id="hero" class="d-flex align-items-center">
            <div className="container">
                <div>
                    <h1>Your Most Trusted <br />Restaurant Partner</h1>
                    {/* <small>serunt rem suscipit placeat.</small> */}
                </div>
                <div className="d-flex flex-wrap justify-content-start gap-2">
                    <Link to={'/doctors'} className="btn-get-started scrollto">Search Sections</Link>
                </div>
            </div>
        </section>
    )
}
export default HeroSection;