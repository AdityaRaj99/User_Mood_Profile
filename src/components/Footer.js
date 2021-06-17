import React from 'react'
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

function Footer() {
    return (
        <div>
            <div className="Footer">
                <div className="footer-details">
                    <div className="Company-details">
                        <h4>Company</h4>
                        <a className="about" href="#">About</a>
                        <a className="Careers" href="#">Careers</a>
                        <a className="Press" href="#">Press</a>
                        <a className="Blog" href="#">Blog</a>
                        <a className="Meet_our_Instructor" href="#">Meet our Instructor</a>
                        <a className="Calm_Science" href="#">Calm Science</a>
                        <a className="Brand_Partnerships" href="#">Brand Partnerships </a>
                    </div>
                    <div className="Offers-details">
                        <h4>Offers</h4>
                        <a className="Buy a Gift" href="#">Buy a Gift</a>
                        <a className="Redeem a Gift" href="#">Redeem a Gift</a>
                        <a className="Calm for Business" href="#">Calm for Business</a>
                    </div>
                    <div className="Help-details">
                        <h4>Help</h4>
                        <a className="FAQ" href="#">FAQ</a>
                        <a className="FAQ" href="#">FAQ</a>
                        <a className="Terms" href="#">Terms</a>
                        <a className="Privacy" href="#">Privacy</a>
                        <a className="CCPA Nlotice" href="#">CCPA Nlotice</a>
                        <a className="Opt Out of Targated Ads" href="#">Opt Out of Targated Ads</a>
                        <a className="Cookies" href="#">Cookies</a>
                    </div>
                    <div className="icon-details">
                        <a className="insta" href="#"><InstagramIcon /></a>
                        <a className="fb" href="#"><FacebookIcon /></a>
                        <a className="twi" href="#"><TwitterIcon /></a>
                    </div>
                </div>
                <div className="copyright">
                    Copyright © 2021 Calm. All rights reservedss
                </div>
            </div>
        </div>
    )
}

export default Footer
