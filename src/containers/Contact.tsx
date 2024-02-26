import React, { useEffect, useState } from 'react'
import ContactWrap from './ContactStyle'

export default function Contact() {
    const [onTitle1, setOnTitle1] = useState("off");
    const [onTitle2, setOnTitle2] = useState("off");

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    const handleScroll = () => {
        //console.log(window.scrollY)
        window.scrollY >= 4000 && setOnTitle1("on")
    };
    return (
        <ContactWrap>
            <div className='wrap pdt-30'>
                <div id="nav-project" className="anchor_trim"></div>
                <div className={`cav-font_b section-title color-p pdb-30 ${onTitle1}`}>
                    Contact
                </div>

            </div>
        </ContactWrap>
    )
}
