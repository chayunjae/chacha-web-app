import React, { useEffect, useState } from 'react'
import AboutWrap from './AboutStyle2'



export default function About2() {
    const [onTitle1, setOnTitle1] = useState("off");
    const [onTitle2, setOnTitle2] = useState("off");

    const [onTitle3, setOnTitle3] = useState("off"); //그랑벵
    const [onTitle4, setOnTitle4] = useState("off"); //블록뱅크 - 이미지 없음 / 폐쇄됨
    const [onTitle5, setOnTitle5] = useState("off"); // 위킵 - 홈페이지
    const [onTitle6, setOnTitle6] = useState("off"); // 이노버전스 - 셀러/서플라이어
    const [onTitle7, setOnTitle7] = useState("off");
    const [onTitle8, setOnTitle8] = useState("off");
    const [onTitle9, setOnTitle9] = useState("off");
    const [onTitle10, setOnTitle10] = useState("off");
    const [onTitle11, setOnTitle11] = useState("off");
    const [onTitle12, setOnTitle12] = useState("off");
    const [onTitle13, setOnTitle13] = useState("off");

    //개인 웹 프로젝트 4개
    //개인 앱 프로젝트 1~2개

    const [careerList, setCareerList] = useState([
        {
            title: "그랑벵코리아",
            dateStr: "2018.05 ~ 2018.11",
            descArr: ["홈페이지 디자인 리뉴얼 및 유지보수"],
            ySpot: 100,
            nodeAlign: "left",
            isShow: 2300
        },
        {
            title: "블록뱅크",
            dateStr: "2018.12 ~ 2019.08",
            descArr: [
                "가상거래소 홈페이지 리뉴얼 및 유지보수",
                "메인 홈페이지 유지보수",
                "가상화폐 클라운드 펀딩 페이지 개발"
            ],
            ySpot: 195,
            nodeAlign: "right",
            isShow: 2400
        },
        {
            title: "위킵(주)",
            dateStr: "2019.12 ~ 2021.04",
            descArr: [
                "홈페이지 리뉴얼 및 유지보수",
                "셀러 및 서플라이어 아웃소싱 페이지 개발",
                "셀러 및 서플라이어 전용 소개 페이지 개발",
                "위킵 FBW 풀필먼트 서비스 개발"
            ],
            ySpot: 335,
            nodeAlign: "left",
            isShow: 2550
        },
        {
            title: "이노버전스(주)",
            dateStr: "2021.05 ~ 2023.12",
            descArr: [
                "인재육성 홈페이지 리뉴얼 및 유지보수",
                "시민투표 홈페이지 및 앱 유지보수",
                "도도리파크 홈페이지 개발 및 유지보수",
                "홍익메이커랜드 홈페이지 개발 및 유지보수",
                "ABC BOOTCAMP 홈페이지 개발 및 유지보수"
            ],
            ySpot: 500,
            nodeAlign: "right",
            isShow: 2700
        }
    ]);
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll); //clean up
        };
    }, []);

    const handleScroll = () => {
        window.scrollY >= 2000 && setOnTitle1("on")
        window.scrollY >= 2200 && setOnTitle2("on")
        window.scrollY >= 2300 && setOnTitle3("on")
        window.scrollY >= 2400 && setOnTitle4("on")
        window.scrollY >= 2550 && setOnTitle5("on")
        window.scrollY >= 2700 && setOnTitle6("on")
    };

    const careerNode = () => {
        return careerList.map((obj: {
            title: String, dateStr: String, descArr: Array<String>,
            ySpot: number, nodeAlign: String, isShow: number
        }, idx: number) => {
            let scrollY = window.scrollY
            return <div key={idx} className={`line-circle-wrap position_a d-flex justify-content-center align-items-center ${scrollY >= obj.isShow ? "on" : "off"}`}
                style={{ top: obj.ySpot + "px" }}>
                <div className="line-circle"></div>
                <div className={`line-flat ${obj.nodeAlign}`}></div>
                <div className={`line-date poor-font ${obj.nodeAlign}`}>{obj.dateStr}</div>
                <div className={`desc-wrap poor-font ${obj.nodeAlign}`}>
                    <span className='fs-1_25'>{obj.title}</span>
                    {obj.descArr.map((str: String, descIdx: number) => {
                        return <span key={descIdx}><br />- {str}</span>
                    })}
                </div>
            </div>
        })
    }

    return (
        <AboutWrap>
            <div className='wrap'>
                <div className={`cav-font_b section-title color-w pdb-30 ${onTitle1}`}>
                    Career
                </div>
                <div className={`d-flex justify-content-center pdb-30 position_r base-height ${onTitle2}`}>
                    <div className='base-line position_a base-height'>
                    </div>
                    {careerNode()}


                    {/* <div className={`line-circle-wrap position_a d-flex justify-content-center align-items-center ${onTitle3}`}
                        style={{ top: "100px" }}>
                        <div className="line-circle"></div>
                        <div className="line-flat left"></div>
                        <div className='line-date left poor-font'>2018.05 ~ 2018.11</div>
                        <div className='desc-wrap left poor-font '>
                            <span className='fs-1_25'>그랑벵코리아</span>
                            <br />- 홈페이지 디자인 리뉴얼 및 유지보수
                        </div>
                    </div>
                    <div className={`line-circle-wrap position_a d-flex justify-content-center align-items-center ${onTitle4}`}
                        style={{ top: "300px" }}>
                        <div className="line-circle"></div>
                        <div className="line-flat right"></div>
                        <div className='line-date right poor-font'>2018.12 ~ 2019.08</div>
                        <div className='desc-wrap right poor-font'>
                            <span className='fs-1_25'>블록뱅크</span>
                            <br />- 가상거래소 홈페이지 리뉴얼 및 유지보수
                            <br />- 메인 홈페이지 유지보수
                            <br />- 가상화폐 클라운드 펀딩 페이지 개발
                        </div>
                    </div>
                    <div className={`line-circle-wrap position_a d-flex justify-content-center align-items-center ${onTitle5}`}
                        style={{ top: "500px" }}>
                        <div className="line-circle"></div>
                        <div className="line-flat left"></div>
                        <div className='line-date left poor-font'>2019.12 ~ 2021.04</div>
                        <div className='desc-wrap left poor-font '>
                            <span className='fs-1_25'>위킵(주)</span>
                            <br />- 홈페이지 리뉴얼 및 유지보수
                            <br />- 셀러 및 서플라이어 아웃소싱 페이지 개발
                            <br />- 셀러 및 서플라이어 전용 소개 페이지 개발
                            <br />- 위킵 FBW 풀필먼트 서비스 개발
                        </div>
                    </div>
                    <div className={`line-circle-wrap position_a d-flex justify-content-center align-items-center ${onTitle6}`}
                        style={{ top: "700px" }}>
                        <div className="line-circle"></div>
                        <div className="line-flat right"></div>
                        <div className='line-date right poor-font'>2021.05 ~ 2023.12</div>
                        <div className='desc-wrap right poor-font '>
                            <span className='fs-1_25'>이노버전스(주)</span>
                            <br />- 인재육성 홈페이지 리뉴얼 및 유지보수
                            <br />- 시민투표 홈페이지 및 앱 유지보수
                            <br />- 도도리파크 홈페이지 개발 및 유지보수
                            <br />- 메이커랜드 홈페이지 개발 및 유지보수
                            <br />- 유클리드 홈페이지 개발 및 유지보수
                        </div>
                    </div> */}
                </div>
            </div>

        </AboutWrap>
    )
}