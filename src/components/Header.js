import React from 'react'
import calmlogo from "./images/calm-logo.png";
import { useState, useEffect } from 'react';
import Brightness2OutlinedIcon from '@material-ui/icons/Brightness2Outlined';
import OpacityIcon from '@material-ui/icons/Opacity';
import FlareIcon from '@material-ui/icons/Flare';
import EcoOutlinedIcon from '@material-ui/icons/EcoOutlined';
import Brightness5OutlinedIcon from '@material-ui/icons/Brightness5Outlined';
import { LoginModal } from './Modal/LoginModal';
import 'bootstrap/dist/css/bootstrap.css';

function Header() {

    const [showModal, setShowModal] = useState(false);
  
    const [NavColor, setNavColor] = useState('rgb(0 0 0 / 0%)')
    const [NavColor2, setNavColor2] = useState('white')

    const listenScrollEvent = () => {
        if (window.scrollY > 400) {
            setNavColor('white')
            setNavColor2('black')
        } else {
            setNavColor('rgb(0 0 0 / 0%)')
            setNavColor2('white')
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', listenScrollEvent)

    }, [])

    return (<>
        <LoginModal show={showModal} setShowModal={setShowModal} />

        <div>
            <nav className="navbar navbar-expand-lg navbar-light ">
                <div style={{ background: NavColor }} className="containner-fluid" id="container_fluiid">
                    <img className="company_logo" src={calmlogo} alt="Calm logo" />
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <button style={{ color: NavColor2}} className="For_business" >For Business</button>
                        <button onClick={()=>setShowModal(true)}  style={{ color: NavColor2 }} className="Login" >Log in</button>
                        <button style={{ color: NavColor2 }} className="try_calm_for_free" >Try Calm for Free</button>

                    </div>
                </div>
            </nav>
            <div className="inner-login">
                <h1 className="head1">Find Your Calm</h1>
                <h4 className="head2">Our goal is to help you improve your health and happiness.</h4>
                <h4 className="head3">What can we help with today?</h4>

                <div className="improve"><Brightness2OutlinedIcon/>Improve sleep quality</div>
                <div className="improve"><OpacityIcon/>Reduce stress or anxiety</div>
                <div className="improve"><FlareIcon/>Improve focus</div>
                <div className="improve"><EcoOutlinedIcon/>Self-improvement</div>
                <div className="improve"><Brightness5OutlinedIcon/>Something else</div>
            </div>
        </div>
        </>
    )
}


export default Header
