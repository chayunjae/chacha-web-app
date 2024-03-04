import React, { useEffect, useState, useRef } from 'react'
import { toast, ToastContainer } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import ContactWrap from './ContactStyle'
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef<HTMLFormElement>(null);
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
        window.scrollY >= 4500 && setOnTitle1("on")
        window.scrollY >= 4600 && setOnTitle2("on")
    };

    const msg_success = () => toast.success("메세지 전송성공")
    const msg_error = (text: string) => toast.error("메세지 전송실패 reason : " + text)
    const onsubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();

        emailjs
            .sendForm('service_68dc1vp', 'template_ld1shri', e.currentTarget, {
                publicKey: 'xv82oKT_BruEjDU1Y',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    msg_success()
                },
                (error) => {
                    console.log('FAILED...', error.text);
                    msg_error(error.text)
                },
            );

        e.currentTarget.reset()
    }
    return (
        <ContactWrap>
            <div className='wrap pdt-30'>
                <div id="nav-contact" className="anchor_trim"></div>
                <div className={`cav-font_b section-title color-p pdb-50 ${onTitle1}`}>
                    Contact
                </div>
                <div className={`form-wrap ${onTitle2}`}>
                    <div className='form-box-back card-shadow position_a'>
                    </div>
                    <div className='form-box card-shadow position_a'>
                        <form ref={form} onSubmit={onsubmit}>
                            <div className='mb-2'>
                                <div className='cav-font_b mb-1 fs-1_25'>Email</div>
                                <div><input required className='default-input' name='usr_email' type='email' /></div>

                            </div>
                            <div className='mb-2'>
                                <div className='cav-font_b mb-1 fs-1_25'>Title</div>
                                <div><input required className='default-input' name="usr_title" type='text' /></div>
                            </div>
                            <div className='mb-2'>
                                <div className='cav-font_b mb-1 fs-1_25'>Message</div>
                                <div><textarea required className='default-textarea' name='message' rows={10}></textarea></div>
                            </div>
                            <div>
                                <button className='default-btn cav-font_b fw-bold' type='submit'>SEND</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </ContactWrap>
    )
}
