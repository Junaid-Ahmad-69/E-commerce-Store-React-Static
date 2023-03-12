import React from 'react';
import Logo from "../../assets/logo.png"
import {
    InboxIcon,
    LoginIcon,
    UsersIcon,
    LinkIcon
} from "@heroicons/react/outline";
import style from "./footer.module.css"

const Footer = () => {
    return (
        <div className={style.footerWrapper}>
            <hr/>
            <div className={style.Footer}>
                <div className={style.logo}>
                    <img src={Logo} alt="footer-logo"/>
                    <span>Amazon</span>
                </div>


                <div className={style.footerContainer}>
                    <div className={style.footerDetail}>
                        <span>Contact US</span>
                        <span className={style.footerPngLine}>
                            {/*<LocationMarkerIcon className={style.footerIcon}/>*/}
                            <span>111 north avenue Orland, FL 32801</span>
                        </span>

                        <span className={style.footerPngLine}>
                            {/*<PhoneIcons className={style.footerIcon}/>*/}
                            <a href="tel:+92313-4210104">+92313-4210104</a>
                        </span>

                        <span className={style.footerPngLine}>
                            <InboxIcon className={style.footerIcon}/>
                            <a href="mailto:support@amazon.com">support@amazon.com</a>
                        </span>
                    </div>
                </div>


                <div className={style.footerContainer}>
                    <div className={style.footerDetail}>
                        <span>Contact US</span>
                        <span className={style.footerPngLine}>
                            <LoginIcon className={style.footerIcon}/>
                            <span>Sign In</span>
                        </span>
                    </div>
                </div>


                <div className={style.footerContainer}>
                    <div className={style.footerDetail}>
                        <span>Company</span>
                        <span className={style.footerPngLine}>
                            <UsersIcon className={style.footerIcon}/>
                            <a href="/about"><p>About us</p></a>
                        </span>
                    </div>
                </div>

                <div className={style.footerContainer}>
                    <div className={style.footerDetail}>
                        <span>Resources</span>
                        <span className={style.footerPngLine}>
                            <LinkIcon className={style.footerIcon}/>
                            <p>Safety Privacy & Terms</p>
                        </span>
                    </div>
                </div>


            </div>
            <div className={style.footerCopyRight}>
                <span>CopyRight &#169;2023 by Sandhu, Inc. </span>
                <p>All rights reserved.</p>

            </div>
        </div>
    );
};

export default Footer;
