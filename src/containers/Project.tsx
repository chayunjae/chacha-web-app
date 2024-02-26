/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import ProjectWrap from './ProjectStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
    const [onTitle1, setOnTitle1] = useState("off");
    const [onTitle2, setOnTitle2] = useState("off");
    const [onTitle3, setOnTitle3] = useState("on");
    const [isActive, setIsActive] = useState<"off" | Boolean>("off");

    const [leftVal, setLeftVal] = useState(-4600);
    const [leftCnt, setLeftCnt] = useState(12);

    const [showMoreIdx, setShowMoreIdx] = useState(0);

    const [projectList, setProjectList] = useState([
        {
            title: "이노버전스 - 유클리드 ABC부트캠프",
            thumb: "/chacha-web-app/images/project/s_ah/s_ah1.png",
            type: 16,
            slideArr: [
                "/chacha-web-app/images/project/s_ah/s_ah2.png",
                "/chacha-web-app/images/project/s_ah/s_ah3.png",
                "/chacha-web-app/images/project/s_ah/s_ah4.png",
                "/chacha-web-app/images/project/s_ah/s_ah5.png",
                "/chacha-web-app/images/project/s_ah/s_ah6.png",
                "/chacha-web-app/images/project/s_ah/s_ah7.png",
                "/chacha-web-app/images/project/s_ah/s_ah8.png",
            ],
            desc: <div>
                이노버전스 - 유클리드 ABC부트캠프
            </div>
        },
        {
            title: "이노버전스 - 홍익세종캠퍼스 메이커랜드",
            thumb: "/chacha-web-app/images/project/s_mh/s_mh1.png",
            type: 16,
            slideArr: [
                "/chacha-web-app/images/project/s_mh/s_mh1.png",
                "/chacha-web-app/images/project/s_mh/s_mh2.png",
                "/chacha-web-app/images/project/s_mh/s_mh3.png",
                "/chacha-web-app/images/project/s_mh/s_mh4.png",
                "/chacha-web-app/images/project/s_mh/s_mh5.png",
                "/chacha-web-app/images/project/s_mh/s_mh6.png",
                "/chacha-web-app/images/project/s_mh/s_mh7.png",
                "/chacha-web-app/images/project/s_mh/s_mh8.png",
                "/chacha-web-app/images/project/s_mh/s_mh9.png",
                "/chacha-web-app/images/project/s_mh/s_mh10.png",
            ],
            desc: <div>
                이노버전스 - 홍익세종캠퍼스 메이커랜드
            </div>
        },
        {
            title: "이노버전스 - 싱싱장터 도도리파크",
            thumb: "/chacha-web-app/images/project/s_dh/s_dh1.png",
            type: 16,
            slideArr: [
                "/chacha-web-app/images/project/s_dh/s_dh1-1.png",
                "/chacha-web-app/images/project/s_dh/s_dh2.png",
                "/chacha-web-app/images/project/s_dh/s_dh3.png",
                "/chacha-web-app/images/project/s_dh/s_dh4.png",
                "/chacha-web-app/images/project/s_dh/s_dh5.png",
            ],
            desc: <div>
                이노버전스 - 싱싱장터 도도리파크
            </div>
        },
        {
            title: "이노버전스 - 세종시청 시민투표",
            thumb: "/chacha-web-app/images/project/s_v/s_v1.png",
            type: 1,
            slideArr: [
                "/chacha-web-app/images/project/s_v/s_v1.png"
            ],
            desc: <div>
                이노버전스 - 세종시청 시민투표
            </div>
        },
        {
            title: "이노버전스 - 세종시인재평생교육원",
            thumb: "/chacha-web-app/images/project/s_ih/s_ih1.png",
            type: 16,
            slideArr: [
                "/chacha-web-app/images/project/s_ih/s_ih1.png",
                "/chacha-web-app/images/project/s_ih/s_ih2.png",
                "/chacha-web-app/images/project/s_ih/s_ih3.png",
                "/chacha-web-app/images/project/s_ih/s_ih4.png",
                "/chacha-web-app/images/project/s_ih/s_ih5.png",
                "/chacha-web-app/images/project/s_ih/s_ih6.png",
                "/chacha-web-app/images/project/s_ih/s_ih7.png",
                "/chacha-web-app/images/project/s_ih/s_ih8.png",
            ],
            desc: <div>
                이노버전스 - 세종시인재평생교육원
            </div>
        },
        {
            title: "위킵 - FBW 서비스",
            thumb: "/chacha-web-app/images/project/w_f/w_f1.png",
            type: 16,
            slideArr: [
                "/chacha-web-app/images/project/w_f/w_f1.png",
                "/chacha-web-app/images/project/w_f/w_f2.png",
                "/chacha-web-app/images/project/w_f/w_f3.png",
                "/chacha-web-app/images/project/w_f/w_f4.png",
                "/chacha-web-app/images/project/w_f/w_f5.png",
                "/chacha-web-app/images/project/w_f/w_f6.png",
            ],
            desc: <div>
                위킵 - FBW 서비스
            </div>
        },
        {
            title: "위킵 - 홈페이지",
            thumb: "/chacha-web-app/images/project/w_wh/w_wh1.png",
            type: 16,
            slideArr: [
                "/chacha-web-app/images/project/w_wh/w_wh1.png",
                "/chacha-web-app/images/project/w_wh/w_wh2.png",
                "/chacha-web-app/images/project/w_wh/w_wh3.png",
                "/chacha-web-app/images/project/w_wh/w_wh4.png",
                "/chacha-web-app/images/project/w_wh/w_wh5.png",
                "/chacha-web-app/images/project/w_wh/w_wh6.png",
                "/chacha-web-app/images/project/w_wh/w_wh7.png",
                "/chacha-web-app/images/project/w_wh/w_wh8.png",
                "/chacha-web-app/images/project/w_wh/w_wh9.png",
                "/chacha-web-app/images/project/w_wh/w_wh10.png",
            ],
            desc: <div>
                위킵 - 홈페이지
            </div>
        },
        {
            title: "위킵 - 셀웨이 홈페이지",
            thumb: "/chacha-web-app/images/project/w_sh/w_sh1.png",
            type: 16,
            slideArr: [
                "/chacha-web-app/images/project/w_sh/w_sh1.png",
                "/chacha-web-app/images/project/w_sh/w_sh2.png",
                "/chacha-web-app/images/project/w_sh/w_sh3.png",
                "/chacha-web-app/images/project/w_sh/w_sh4.png",
                "/chacha-web-app/images/project/w_sh/w_sh5.png",
                "/chacha-web-app/images/project/w_sh/w_sh6.png",
                "/chacha-web-app/images/project/w_sh/w_sh7.png",
                "/chacha-web-app/images/project/w_sh/w_sh8.png",
                "/chacha-web-app/images/project/w_sh/w_sh9.png",
                "/chacha-web-app/images/project/w_sh/w_sh10.png",
                "/chacha-web-app/images/project/w_sh/w_sh11.png",
                "/chacha-web-app/images/project/w_sh/w_sh12.png",
                "/chacha-web-app/images/project/w_sh/w_sh13.png",
            ],
            desc: <div>
                위킵 - 셀웨이 홈페이지
            </div>
        },
        {
            title: "위킵 - 아웃소싱 플랫폼",
            thumb: "/chacha-web-app/images/project/w_sp/w_sp1.png",
            type: 16,
            slideArr: [
                "/chacha-web-app/images/project/w_sp/w_sp1.png",
                "/chacha-web-app/images/project/w_sp/w_sp2.png",
                "/chacha-web-app/images/project/w_sp/w_sp3.png",
                "/chacha-web-app/images/project/w_sp/w_sp4.png",
                "/chacha-web-app/images/project/w_sp/w_sp5.png",
                "/chacha-web-app/images/project/w_sp/w_sp6.png",
                "/chacha-web-app/images/project/w_sp/w_sp7.png",
                "/chacha-web-app/images/project/w_sp/w_sp8.png",
            ],
            desc: <div>
                위킵 - 아웃소싱 플랫폼
            </div>
        },
        {
            title: "블록뱅크 - 비트나루",
            thumb: "/chacha-web-app/images/project/b_c/b_c2.png",
            type: 16,
            slideArr: [
                "/chacha-web-app/images/project/b_c/b_c2.png",
                "/chacha-web-app/images/project/b_c/b_c4.png",
            ],
            desc: <div>
                블록뱅크 - 비트나루
            </div>
        },
        {
            title: "블록뱅크 - 홈페이지",
            thumb: "/chacha-web-app/images/project/b_h/b_h1.png",
            type: 16,
            slideArr: [
                "/chacha-web-app/images/project/b_h/b_h1.png",
                "/chacha-web-app/images/project/b_h/b_h2.png",
            ],
            desc: <div>
                블록뱅크 - 홈페이지
            </div>
        },
        {
            title: "그랑벵코리아",
            thumb: "/chacha-web-app/images/project/g_h/g_h1.png",
            type: 16,
            slideArr: [
                "/chacha-web-app/images/project/g_h/g_h1.png",
                "/chacha-web-app/images/project/g_h/g_h2.png",
                "/chacha-web-app/images/project/g_h/g_h3.png",
                "/chacha-web-app/images/project/g_h/g_h4.png",
            ],
            desc: <div>
                그랑벵코리아
            </div>
        },
    ])

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    const handleScroll = () => {
        //console.log(window.scrollY)
        window.scrollY >= 3500 && setOnTitle1("on")
        window.scrollY >= 3650 && setOnTitle2("on")
    };

    const activeBox = (idx: number) => {
        setShowMoreIdx(idx)
        const target = document.getElementById("box" + (idx + 1)) as HTMLDivElement

        if (target.className.indexOf("round-act") === -1) {
            target.className = target.className + " round-act"
            setIsActive(true)
        }
    }
    const slideEvent = (type: String) => {
        let total = 12

        if (type === "prev") {
            let prevCnt = leftCnt
            if (leftCnt > 1) {
                prevCnt = leftCnt - 1
                if (prevCnt === 1) {
                    setOnTitle3("off")
                }
                setLeftVal(leftVal + 460)
            } else {
                prevCnt = 1
                setOnTitle3("off")
            }
            setLeftCnt(prevCnt)

        } else {
            let nextCnt = leftCnt
            if (leftCnt !== total) {
                nextCnt = leftCnt + 1
                if (nextCnt === 2) {
                    setOnTitle3("on")
                }
                setLeftVal(leftVal - 460)
            } else {
                setLeftVal(460)
                nextCnt = 1
                setOnTitle3("off")
            }
            setLeftCnt(nextCnt)
        }

    }

    const closeActCard = () => {
        let opener = document.getElementsByClassName("round-act")[0].className
        setIsActive(false)
        setTimeout(() => {
            document.getElementsByClassName("round-act")[0].className = opener.replace("round-act", "");
        }, 500);
    }


    return (
        <ProjectWrap>
            <div className='section-wrap'>


                <div className='wrap pdt-30'>
                    <div id="nav-project" className="anchor_trim"></div>
                    <div className={`cav-font_b section-title color-w pdb-30 ${onTitle1}`}>
                        Project
                    </div>
                    <div className={`slide-btn-wrap position_r ${onTitle2}`}>
                        <div className={`slide-btn-box position_a d-flex prev-btn-wrap ${onTitle3}`}>
                            <div className="prev-btn card-shadow" onClick={() => slideEvent("prev")}><FontAwesomeIcon icon={faArrowLeft} /></div>
                        </div>
                        <div className={`slide-btn-box position_a d-flex next-btn-wrap`}>
                            <div className="next-btn card-shadow" onClick={() => slideEvent("next")}><FontAwesomeIcon icon={faArrowRight} /></div>
                        </div>
                    </div>
                    <div className={`slide-wrap ${onTitle2}`}>
                        <div className='slide-box d-flex align-items-center position_a' style={{ top: 30, left: leftVal - 40 }}>
                            {
                                projectList.map((obj: { title: string, thumb: string, type: number }, idx: number) => {
                                    let cnt = idx + 1
                                    return <div key={idx} className='slide-item-wrap d-flex justify-content-center align-items-center'>
                                        <div
                                            key={idx} id={"box" + (idx + 1)}
                                            className={`slide-item card m-3 card-shadow ${leftCnt === cnt ? 'cur' : leftCnt - 1 === cnt ? "prev" : leftCnt + 1 === cnt ? "next" : ""}`}
                                        >
                                            <div className='overlay-wrap' onClick={(e) => {
                                                let type = leftCnt === cnt ? 'cur' : leftCnt - 1 === cnt ? "prev" : leftCnt + 1 === cnt ? "next" : ""
                                                if (type === "cur") {
                                                    activeBox(idx)
                                                } else if (type === "prev") {
                                                    slideEvent(type)

                                                } else if (type === "next") {
                                                    slideEvent(type)

                                                }
                                            }}>
                                                <div className='d-flex justify-content-center align-items-center more-btn-wrap'>
                                                    <div className='poor-font more-btn fs-1_5 fw-bold'>
                                                        MORE
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='item-contents'>
                                                <div style={{ height: 225 }} className='mb-2'>
                                                    <img className='mt-2' src={obj.thumb} alt="project_images" style={obj.type === 1 ? { width: "60%" } : { width: "100%" }} />

                                                </div>
                                                <div className='poor-font fw-bold fs-1 d-flex justify-content-center'>
                                                    <div className='position_r'>
                                                        <div className='square_dot'></div>
                                                        <span className='contents-title'>{obj.title}</span>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                })
                            }

                        </div>
                    </div>
                </div>
            </div>
            <div className={`act-card-wrap position_f d-flex justify-content-center align-items-center ${onTitle2} ${isActive === "off" ? "" : isActive ? "big-panel" : "none-panel"}`} onClick={(e) => {
                if (e.target !== e.currentTarget) return;
                closeActCard()
            }}>

                <div className={`act-card card-shadow position_a`} >
                    <div className='position_a fs-1_5 close-btn' onClick={(e) => closeActCard()}><FontAwesomeIcon icon={faTimes} /></div>
                    <div className='act-card-content d-flex align-items-center'>
                        <div className='d-flex flex1 pd-20'>
                            <div className='flex4'>
                                <div className='act-project-slide-wrap d-flex align-items-center'>
                                    <div className='act-project-slide-box position_a d-flex align-items-center'>
                                        {projectList[showMoreIdx].slideArr.map((path: string, idx: number) => {
                                            return <div key={idx} className='act-project-slide-item-wrap d-flex align-items-center justify-content-center'>
                                                <div className='act-project-slide-item'>
                                                    <img className='mt-2' src={path} alt="project_images" style={{ width: "100%" }} />
                                                </div>
                                            </div>;
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className='flex2'>
                                {projectList[showMoreIdx].desc}
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </ProjectWrap>
    )
}
