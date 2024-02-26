import React, { useEffect, useState } from 'react'
import AboutWrap from './AboutStyle'



export default function About() {

    const [onTitle1, setOnTitle1] = useState("off");
    const [onTitle2, setOnTitle2] = useState("off");
    const [onTitle3, setOnTitle3] = useState("off");
    const [onTitle4, setOnTitle4] = useState("off");

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    const handleScroll = () => {
        //console.log(window.scrollY)
        window.scrollY >= 800 && setOnTitle1("on")
        window.scrollY >= 900 && setOnTitle2("on")
        window.scrollY >= 1150 && setOnTitle3("on")
        window.scrollY >= 1200 && setOnTitle4("on")
    };
    return (
        <AboutWrap>
            <div id="nav-about" className="anchor_trim"></div>
            <div className='wrap'>
                <div className={`cav-font_b section-title color-p pdb-30 ${onTitle1}`}>
                    About
                </div>
                <div className={`title-sub-wrap pdb-30 ${onTitle2}`}>
                    <div className="card m-1 card-shadow md d-flex flex-wrap">
                        <div className='box-3 mb-3'>
                            <div className='poor-font box-title mb-2'>이름</div>
                            <div className='poor-font box-content fs-1_5 mt-3'>차윤재</div>
                        </div>
                        <div className='box-3 mb-3'>
                            <div className='poor-font box-title mb-2'>생년월일</div>
                            <div className='poor-font box-content fs-1_5 mt-3'>1993.10.28</div>
                        </div>
                        <div className='box-3 mb-3'>
                            <div className='poor-font box-title mb-2'>주소</div>
                            <div className='poor-font box-content fs-1_5 mt-3'>세종특별자치시 대평동</div>
                        </div>
                        <div className='box-3 mb-3'>
                            <div className='poor-font box-title mb-2'>연락처</div>
                            <div className='poor-font box-content fs-1_5 mt-3'>010-7370-2517</div>
                        </div>
                        <div className='box-3 mb-3'>
                            <div className='poor-font box-title mb-2'>이메일</div>
                            <div className='poor-font box-content fs-1_5 mt-3'>ckdbswo93@gmail.com</div>
                        </div>
                        <div className='box-3 mb-3'>
                            <div className='poor-font box-title mb-2'>학력</div>
                            <div className='poor-font box-content fs-1_5 mt-3'>학점은행제<br /><span className='fs-1'>(전문학사 - 컴퓨터네트워크 전공)</span></div>
                        </div>

                    </div>
                </div>
                <div className={`cav-font_b section-title color-p pdb-30 ${onTitle3}`}>
                    Skill & Strength
                </div>
                <div className={`title-sub-wrap pdb-30 ${onTitle4}`}>
                    <div className="card m-1 card-shadow sm d-flex flex-wrap">
                        <div className='box-2 box-img-wrap d-flex justify-content-center align-items-center'>
                            <img src={require("../images/logo/html5.png")} alt='' />
                        </div>
                        <div className='box-2 box-img-wrap d-flex justify-content-center align-items-center'>
                            <img src={require("../images/logo/css3.png")} alt='' />
                        </div>
                        <div className='box-2 box-img-wrap d-flex justify-content-center align-items-center'>
                            <img src={require("../images/logo/java_original.png")} alt='' />
                        </div>
                        <div className='box-2 box-img-wrap d-flex justify-content-center align-items-center'>
                            <img src={require("../images/logo/spring.png")} alt='' />
                        </div>
                        <div className='box-2 box-img-wrap d-flex justify-content-center align-items-center'>
                            <img src={require("../images/logo/js.png")} alt='' />
                        </div>
                        <div className='box-2 box-img-wrap d-flex justify-content-center align-items-center'>
                            <img src={require("../images/logo/react.png")} alt='' />
                        </div>
                        <div className='box-2 box-img-wrap d-flex justify-content-center align-items-center'>
                            <img src={require("../images/logo/node.png")} alt='' />
                        </div>
                        <div className='box-2 box-img-wrap d-flex justify-content-center align-items-center'>
                            <img src={require("../images/logo/typescript.png")} alt='' />
                        </div>
                        <div className='box-2 box-img-wrap d-flex justify-content-center align-items-center'>
                            <img src={require("../images/logo/mysql.png")} alt='' />
                        </div>
                        <div className='box-2 box-img-wrap d-flex justify-content-center align-items-center'>
                            <img src={require("../images/logo/mariadb.png")} alt='' />
                        </div>
                    </div>
                </div>
            </div>
        </AboutWrap>
    )
}