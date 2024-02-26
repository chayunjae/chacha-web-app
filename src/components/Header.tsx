import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Props = {
    globalTheme: boolean;
    setTheme: (bool: boolean) => void;
    menuToggle: "NONE" | boolean;
    setMenuToggle: (bool: "NONE" | boolean) => void;
}

function Header(props: Props) {
    const [onTitle1, setOnTitle1] = useState("purple");

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    const handleScroll = () => {
        window.scrollY >= 2600 && setOnTitle1("white")
        window.scrollY < 2600 && setOnTitle1("purple")
    };

    return (
        <div className='header-wrap pdrl-15'>
            <div id="top" />
            <div className={`header-logo ${onTitle1 === 'purple' ? 'header-logo_b' : 'header-logo_w'} show-box`} />

            <div className={`header-nav-wrap ${onTitle1}`}>

                <div className='header-anchor cav-font_b mr-1'>
                    <a href="#nav-about">ABOUT</a>
                </div>
                <div className='header-anchor cav-font_b mr-1'>
                    <a href="#nav-project">PROJECT</a>
                </div>
                <div className='header-anchor cav-font_b mr-1'>
                    <a href="#nav-contact">CONTACT</a>
                </div>

                <div className={`header-icon show-default`}>
                    <span className="cur" onClick={() => window.location.href = "https://github.com/chayunjae"}><FontAwesomeIcon icon={faGithub} /></span>
                </div>


            </div>
        </div>
    );
}

export default Header;