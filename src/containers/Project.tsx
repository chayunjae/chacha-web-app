/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import ProjectWrap from './ProjectStyle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faArrowRight, faTimes } from "@fortawesome/free-solid-svg-icons";

export default function Project() {
    const [onTitle1, setOnTitle1] = useState("off");
    const [onTitle2, setOnTitle2] = useState("off");
    const [onTitle3, setOnTitle3] = useState("off");
    const [isActive, setIsActive] = useState<"off" | Boolean>("off");

    const [leftVal, setLeftVal] = useState(460);
    const [leftCnt, setLeftCnt] = useState(1);

    const [leftVal2, setLeftVal2] = useState(0);

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
            desc: <div className="poor-font proj-desc">
                <div className='proj-title'>이노버전스 - 유클리드 ABC부트캠프</div>
                <div className='proj-date mb-2'>2023.01 ~ 2023.10</div>
                <div className='proj-detail'>
                    - 청년 대상 AI/SW + ESG 역량 강화 교육 제공
                    <br /> - 프로그래밍 IT 교육 신청관리 서비스
                    <br /> - Front-end 및 Back-end 개발 및 유지보수 담당
                    <br /> - 네이버 클라우드 서버 호스팅관리
                    <br /> - Front 사용 기술 : Spring / Jsp / javascript / jqurey
                    <br /> - Back 사용 기술 : Java / Dwr / ibatis /mysql
                    <br /> - URL : https://abcbootcamp.kr/
                </div>
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
            desc: <div className="poor-font proj-desc">
                <div className='proj-title'>이노버전스 - 홍익세종캠퍼스 메이커랜드</div>
                <div className='proj-date mb-2'>2022.02 ~ ing</div>
                <div className='proj-detail'>
                    - 제조 기반의 전문 메이커 양성
                    <br /> - 3D 프린트 장비,재료 제공 및 교육 서비스
                    <br /> - Front-end 및 Back-end 개발 및 유지보수 담당
                    <br /> - 네이버 클라우드 서버 호스팅관리
                    <br /> - Front 사용 기술 : Spring / Jsp / javascript / jqurey
                    <br /> - Back 사용 기술 : Java / Dwr / ibatis / mysql
                    <br /> - URL : https://himakerland.com/
                </div>
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
            desc: <div className="poor-font proj-desc">
                <div className='proj-title'>이노버전스 - 싱싱장터 도도리파크</div>
                <div className='proj-date mb-2'>2021.09 ~ 2024.01</div>
                <div className='proj-detail'>
                    - 세종시 농촌테마파크 공원 홈페이지
                    <br /> - 전자정부 프레임워크 사용
                    <br /> - Front-end 및 Back-end 개발 및 유지보수 담당
                    <br /> - 네이버 클라우드 서버 호스팅관리
                    <br /> - Front 사용 기술 : Spring / Jsp / javascript / jqurey
                    <br /> - Back 사용 기술 : Java / Dwr / egovframework / maraidb
                    <br /> - URL : https://dodoripark.or.kr/
                </div>
            </div>
        },
        {
            title: "이노버전스 - 세종시청 시민투표",
            thumb: "/chacha-web-app/images/project/s_v/s_v1.png",
            type: 1,
            slideArr: [
                "/chacha-web-app/images/project/s_v/s_v1.png"
            ],
            desc: <div className="poor-font proj-desc">
                <div className='proj-title'>이노버전스 - 세종시청 시민투표</div>
                <div className='proj-date mb-2'>2021.05 ~ 2023.10</div>
                <div className='proj-detail'>
                    - 세종시 모든 시민이 참여할 수 투표 서비스
                    <br /> - 전자정부 프레임워크 사용
                    <br /> - Front-end 및 Back-end 리뉴얼 및 유지보수 담당
                    <br /> - 시청 내부망 서버 관리
                    <br /> - 서버전환 후 네이버 클라우드 서버 호스팅관리
                    <br /> - Front 사용 기술 : Spring / Jsp / javascript / jqurey
                    <br /> - Back 사용 기술 : Java / Dwr / egovframework / Oracle / Tibero
                    <br /> - URL : http://www.sejong.go.kr/vote/ (폐쇄)
                </div>
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
            desc: <div className="poor-font proj-desc">
                <div className='proj-title'>이노버전스 - 세종시인재평생교육원</div>
                <div className='proj-date mb-2'>2021.05 ~ ing</div>
                <div className='proj-detail'>
                    - 평생학습 제공 및 장학금 지원 서비스
                    <br /> - 학습공간 공유 및 동아리 활동관리
                    <br /> - 전자정부 프레임워크 사용
                    <br /> - Front-end 및 Back-end 리뉴얼 및 유지보수 담당
                    <br /> - 네이버 클라우드 서버 호스팅관리
                    <br /> - Front 사용 기술 : Spring / Jsp / javascript / jqurey
                    <br /> - Back 사용 기술 : Java / Dwr / ibatis / egovframework / mysql
                    <br /> - URL : https://www.sjhle.or.kr/
                </div>
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
            desc: <div className="poor-font proj-desc">
                <div className='proj-title'>위킵 - FBW 서비스</div>
                <div className='proj-date mb-2'>2020.12 ~ 2021.04</div>
                <div className='proj-detail'>
                    - 풀필먼트 자동화 시스템 서비스
                    <br /> - Front-end 및 Back-end 개발 참여
                    <br /> - 물류 데이터 연동을 통해 이커머스 물류 네트워크 구축
                    <br /> - 플랫폼, 오픈마켓 API 연동 (주문수집,주문매칭,송장출력)
                    <br /> - Front 사용 기술 : React / Redux saga / typescript / styled-components
                    <br /> - Back 사용 기술 : Node.js / express / mysql
                    <br /> - URL : https://fbw.wekeep.co.kr/
                </div>
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
            desc: <div className="poor-font proj-desc">
                <div className='proj-title'>위킵 - 홈페이지</div>
                <div className='proj-date mb-2'>2020.08 ~ 2021.04</div>
                <div className='proj-detail'>
                    - 풀필먼트 자동화 시스템 서비스 소개 페이지
                    <br /> - Front-end 및 Back-end 개발 참여
                    <br /> - Front 사용 기술 : React / Redux saga / typescript / styled-components
                    <br /> - Back 사용 기술 : Node.js / express / mysql
                    <br /> - URL : https://www.wekeep.co.kr/
                </div>
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
            desc: <div className="poor-font proj-desc">
                <div className='proj-title'>위킵 - 셀웨이 홈페이지</div>
                <div className='proj-date mb-2'>2020.10 ~ 2021.04</div>
                <div className='proj-detail'>
                    - 드랍쉬핑 판매전문 플랫폼
                    - 상품 관리 및 아웃소싱 서비스 소개 페이지
                    <br /> - Front-end 및 Back-end 개발 참여
                    <br /> - Front 사용 기술 : React / Redux saga / typescript / styled-components
                    <br /> - Back 사용 기술 : Node.js / express / mysql
                    <br /> - URL : https://www.sellway.co.kr/
                </div>
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
            desc: <div className="poor-font proj-desc">
                <div className='proj-title'>위킵 - 아웃소싱 플랫폼</div>
                <div className='proj-date mb-2'>2019.12 ~ 2021.04</div>
                <div className='proj-detail'>
                    - 쇼핑몰 판매관리, 주문수집, 행정업무 관리
                    <br /> - 공급자 상품관리 및 셀러 아웃소싱 플랫폼
                    <br /> - Front-end 및 Back-end 개발 참여
                    <br /> - Front 사용 기술 : React / Redux saga / typescript / styled-components
                    <br /> - Back 사용 기술 : Node.js / express / mysql
                    <br /> - URL : https://supplier.sellway.co.kr/ | https://store.sellway.co.kr/
                </div>
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
            desc: <div className="poor-font proj-desc">
                <div className='proj-title'>블록뱅크 - 비트나루</div>
                <div className='proj-date mb-2'>2018.12 ~ 2019.08</div>
                <div className='proj-detail'>
                    - AlphaPoint 매칭엔진 사용 거래소
                    <br /> - 기능 추가 및 유지보수 참여
                    <br /> - 웹 소켓을 사용하여 모든 데이터 송&middot;수신
                    <br /> - 데이터 송&middot;수신 및 거래는 Smart Contract를 통해 관리
                    <br /> - Cloudflare 보안사용
                    <br /> - Front 사용 기술 : Next.js / React / Mobx / typescript / styled-components / Rxjs
                    <br /> - Back 사용 기술 : Node.js / websocket / mysql
                    <br /> - URL : https://www.bitnaru.com <br />(구버전 - 현재는 새로운 페이지 이전)</div>
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
            desc: <div className="poor-font proj-desc">
                <div className='proj-title'>그랑벵코리아 - 홈페이지 </div>
                <div className='proj-date mb-2'>2018.05 ~ 2018.11</div>
                <div className='proj-detail'>
                    - 와인 글라스 및 액세서리 전문 쇼핑몰
                    <br /> - 리뉴얼 및 유지보수 담당
                    <br /> - 서버호스팅 : Cafe24 호스팅
                    <br /> - Front 사용 기술 : HTML5 / CSS3 / Javascript / Jquery 사용
                    <br /> - URL : https://grandvin.co.kr/</div>

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
        let total = 11

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
                                    <div className='act-project-slide-box position_a d-flex align-items-center' style={{ left: leftVal2 + 25 }}>
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
                            <div className='flex2 d-flex justify-content-center align-items-center pdl-15'>
                                {projectList[showMoreIdx].desc}
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </ProjectWrap>
    )
}
