import React, { useEffect, useRef, useState } from 'react'
import AboutWrap, { ParallaxFirst, ParallaxThird, ParallaxFourth, ScrollNotice, ParallaxStar } from './AboutStyle'
import { isMobile } from "react-device-detect"

type Props = {
    isAct: "INDEX" | "ABOUT" | "PROJECT" | "CONTACT" | "ETC";
    globalTheme: boolean;
}

export default function About(props: Props) {
    const [textAni, setTextAni] = useState(false)
    const [arrowAni, setArrowAni] = useState(false)
    const [nextScreen, setNextScreen] = useState(false)
    const [xPosition, setPosition] = useState(0);
    const [isTopValue, setIsTopValue] = useState(0)
    const [isClickMe, setIsClickMe] = useState(0)
    const [pagesetData, setPagesetData] = useState(595)
    const contentRef = useRef<HTMLDivElement | null>(null);
    function parallaxFunc() {
        if (contentRef.current) {
            const scroll = contentRef.current.scrollTop;
            const singleHei = contentRef.current.offsetHeight
            const lastScroll = contentRef.current.scrollHeight - singleHei * 2
            setPosition(scroll)
            // console.log(scroll)
            if (scroll > 100) {
                setArrowAni(false)
                if (scroll > lastScroll) {
                    setNextScreen(true)
                    setIsTopValue(15)
                } else {
                    setNextScreen(false)
                    setIsTopValue(0)
                }
            } else {
                setArrowAni(true)
            }
        }
    }

    useEffect(() => {
        if (props.isAct === "ABOUT") {
            setTimeout(() => {
                setTextAni(true)
                setArrowAni(true)
            }, 3000)
        } else {
            setTextAni(false)
            setArrowAni(false)
        }
    }, [props.isAct])

    useEffect(() => {
        setTimeout(() => {
            setPagesetData(100)
        }, 4000)
    }, [])
    return (
        <AboutWrap
            theme={props.globalTheme}
        >
            <div className={`time-font title-wrap ${props.isAct === "ABOUT" && "show-box_view"}`}>
                <div className="title-box">
                    ABOUT.
                <div className={`title-line ${props.isAct === "ABOUT" && "under-line-about"}`} />
                </div>
            </div>
            <div id="about-scroll" ref={contentRef} onScroll={parallaxFunc} className={`time-font introduce-wrap ${props.isAct === "ABOUT" ? "view-project-list-wrap2" : "hide-wrap"}`}>
                <div style={{ height: "1000vh", position: "relative" }}>
                    <ScrollNotice topValue={isTopValue} isShow={arrowAni} isPage={props.isAct === "ABOUT"} theme={props.globalTheme}>
                        <div>
                            <div className="click-text">Scroll</div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div className="arrow" />
                            </div>
                        </div>

                    </ScrollNotice>
                    <ParallaxFirst topValue={isTopValue} isShow={textAni}>
                        <div
                            style={{
                                marginRight: "6vw",
                                transition: "all 0.3s linear",
                                opacity:
                                    (xPosition - 100) / 100 >= 1 ? 1 : (xPosition - 100) / 100,
                                color: props.globalTheme
                                    ? `rgba(0,0,0,${-((xPosition - 1000) / 400) > 0.15
                                        ? 1
                                        : 1 - ((xPosition - 1000) / 400)})`
                                    : `rgba(255,255,255,${-((xPosition - 1000) / 400) > 0.15
                                        ? 1
                                        : 1 - ((xPosition - 1000) / 400)})`
                            }}>I</div>
                        <div
                            style={{
                                transition: "all 0.3s linear",
                                opacity:
                                    (xPosition - 500) / 200 >= 1 ? 1 : (xPosition - 500) / 200,
                                color: props.globalTheme
                                    ? `rgba(0,0,0,${-((xPosition - 1000) / 400) > 0.15
                                        ? 1
                                        : 1 - ((xPosition - 1000) / 400)})`
                                    : `rgba(255,255,255,${-((xPosition - 1000) / 400) > 0.15
                                        ? 1
                                        : 1 - ((xPosition - 1000) / 400)})`
                            }}>AM</div>
                    </ParallaxFirst>
                    <ParallaxThird topValue={isTopValue} isShow={textAni} className="device-b">
                        <div className={"brdw"} style={{ width: "100vw", paddingTop: "6.5vw" }}>
                            <div className={"brdw disf mb-1"} style={{ height: '5vw' }}>
                                <div className={"brdw flex1-3"}
                                    style={{
                                        position: "absolute",
                                        marginTop: `${(xPosition - 1200) / 400 <= 1.6 ? 26 : 0}vw`,
                                        fontSize: `${(xPosition - 1200) / 400 <= 1.6 ? 10 : 5}vw`,
                                        textAlign: "start",
                                        lineHeight: 1.5,
                                        transition: "all 0.3s ease",
                                        opacity: (xPosition - 1200) / 400 >= 1 ? 1 : (xPosition - 1200) / 400
                                    }}
                                >
                                    CHA YUN JAE
                                </div>
                                <div className={"brdw flex1-5"}
                                    style={{
                                        fontSize: "3.1vw", textAlign: "end",
                                        opacity: `${(xPosition - 1200) / 400 <= 5.2 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 5.2 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease",
                                        color: "rgba(202, 69, 255,0.9)"
                                    }}
                                >For better Web experience</div>
                            </div>
                            <div className={"brdw disf mb-1"} style={{ height: '5vw' }}>
                                <div className={"brdw flex2"}
                                    style={{
                                        fontSize: "5vw", textAlign: "start",
                                        opacity: `${(xPosition - 1200) / 400 <= 2.8 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 2.8 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease",
                                        color: props.globalTheme ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)"
                                    }}
                                >1993.10.28</div>
                                <div className={"brdw flex2"}
                                    style={{
                                        fontSize: "5vw",
                                        opacity: `${(xPosition - 1200) / 400 <= 3.5 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 3.5 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease"
                                    }}
                                >Interactive</div>
                                <div className={"brdw flex1"}
                                    style={{
                                        fontSize: "8vw", lineHeight: 1, textAlign: "end",
                                        opacity: `${(xPosition - 1200) / 400 <= 5.5 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 5.5 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease",
                                        color: props.globalTheme ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)"
                                    }}
                                >IOS</div>
                            </div>
                            <div className={"brdw disf"}>
                                <div className={"brdw flex1-5 kor-font"}
                                    style={{
                                        fontSize: "2.4vw", textAlign: "start",
                                        opacity: `${(xPosition - 1200) / 400 <= 3.2 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 3.2 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    저는 UI 효과, 애니메이션 및 직관적이고<br />
                            역동적인 사용자 경험 또는 안정적이고<br />
                            효율적인 시스템 및 서비스 구성을 위해<br />
                            항상 노력하는 개발자입니다.<br />
                                </div>
                                <div className={"brdw flex2"}
                                    style={{
                                        fontSize: "10vw", lineHeight: 1.3,
                                        opacity: `${(xPosition - 1200) / 400 <= 6 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 6 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease"
                                    }}
                                >PASSION</div>
                            </div>
                            <div className={"brdw disf mb-1"} style={{ height: "5vw" }}>
                                <div className={"brdw flex4"}
                                    style={{
                                        fontSize: "4vw", textAlign: "start",
                                        opacity: `${(xPosition - 1200) / 400 <= 6.3 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 6.3 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.45s ease",
                                        color: "rgba(202, 69, 255,0.9)"
                                    }}
                                >
                                    Let's make something special
                                </div>
                                <div className={"brdw flex1 kor-font"}
                                    style={{
                                        fontSize: "7.5vw", textAlign: "end", lineHeight: 0.5,
                                        opacity: `${(xPosition - 1200) / 400 <= 5 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 5 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease"
                                    }}
                                >백엔드</div>
                            </div>
                            <div className={"brdw disf mb-1"}>
                                <div className={"brdw flex2"}>
                                    <div className={"brdw disf"}
                                        style={{ lineHeight: 1.1 }}
                                    >
                                        <div className={"brdw flex1 kor-font"}
                                            style={{
                                                fontSize: "3.3vw",
                                                textAlign: "start",
                                                opacity: `${(xPosition - 1200) / 400 <= 4 ? 0 : 1}`,
                                                filter: `${(xPosition - 1200) / 400 <= 4 ? "blur(30px)" : "blur(0px)"}`,
                                                transition: "all 0.3s ease"
                                            }}
                                        >퍼블리싱</div>
                                        <div className={"brdw flex2"}
                                            style={{
                                                fontSize: "4.1vw",
                                                opacity: `${(xPosition - 1200) / 400 <= 5.7 ? 0 : 1}`,
                                                filter: `${(xPosition - 1200) / 400 <= 5.7 ? "blur(30px)" : "blur(0px)"}`,
                                                transition: "all 0.3s ease",
                                                color: props.globalTheme ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)"
                                            }}
                                        >Android</div>
                                        <div className={"brdw flex1-5 kor-font"}
                                            style={{
                                                fontSize: "3.3vw",
                                                opacity: `${(xPosition - 1200) / 400 <= 3.8 ? 0 : 1}`,
                                                filter: `${(xPosition - 1200) / 400 <= 3.8 ? "blur(30px)" : "blur(0px)"}`,
                                                transition: "all 0.3s ease"
                                            }}
                                        >웹 디자이너</div>
                                    </div>
                                    <div className={"brdw disf"}>
                                        <div className={"brdw flex1"}
                                            style={{
                                                fontSize: "9vw", lineHeight: 1.25,
                                                opacity: `${(xPosition - 1200) / 400 <= 4.3 ? 0 : 1}`,
                                                filter: `${(xPosition - 1200) / 400 <= 4.3 ? "blur(30px)" : "blur(0px)"}`,
                                                transition: "all 0.3s ease"
                                            }}
                                        >UI/UX</div>
                                        <div className={"brdw flex1 kor-font"}
                                            style={{
                                                fontSize: "5.5vw", lineHeight: 2.15,
                                                opacity: `${(xPosition - 1200) / 400 <= 4.5 ? 0 : 1}`,
                                                filter: `${(xPosition - 1200) / 400 <= 4.5 ? "blur(30px)" : "blur(0px)"}`,
                                                transition: "all 0.3s ease"
                                            }}
                                        >프론트엔드</div>
                                    </div>
                                </div>
                                <div className={"brdw flex1-3 kor-font"}
                                    style={{
                                        fontSize: "15vw",
                                        lineHeight: 1,
                                        textAlign: "end",
                                        opacity: `${(xPosition - 1200) / 400 <= 2.5 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 2.5 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease"
                                    }}
                                >개발자</div>
                            </div>
                        </div>
                    </ParallaxThird>
                    <ParallaxFourth topValue={isTopValue} isShow={textAni} className="device-m">
                        <div className={"brdw"} style={{ width: "100vw", paddingTop: "6.5vw" }}>
                            <div className={"brdw disf"}>
                                <div className={"brdw flex1"}
                                    style={{
                                        position: "relative",
                                        top: `${(xPosition - 1200) / 400 <= 1.6 ? 49 : 0}vw`,
                                        fontSize: `${(xPosition - 1200) / 400 <= 1.6 ? 10 : 12}vw`,
                                        textAlign: "start",
                                        transition: "all 0.3s ease",
                                        lineHeight: 0.9,
                                        opacity: (xPosition - 1200) / 400 >= 1 ? 1 : (xPosition - 1200) / 400
                                    }}
                                >
                                    CHA YUN JAE
                                </div>
                            </div>
                            <div className={"brdw disf"}>
                                <div className={"brdw flex4"}
                                    style={{
                                        fontSize: "4.5vw", textAlign: "start",
                                        opacity: `${(xPosition - 1200) / 400 <= 5.2 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 5.2 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease",
                                        color: "rgba(202, 69, 255,0.9)"
                                    }}
                                >For better Web experience</div>
                                <div className={"brdw flex1"}
                                    style={{
                                        fontSize: "7vw", lineHeight: 1.1, textAlign: "center",
                                        opacity: `${(xPosition - 1200) / 400 <= 5.5 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 5.5 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease",
                                        color: props.globalTheme ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)"
                                    }}
                                >IOS</div>
                            </div>
                            <div className={"brdw disf"}>
                                <div className={"brdw"}>
                                    <div className={"brdw"}
                                        style={{
                                            fontSize: "5vw", textAlign: "start",
                                            opacity: `${(xPosition - 1200) / 400 <= 2.8 ? 0 : 1}`,
                                            filter: `${(xPosition - 1200) / 400 <= 2.8 ? "blur(30px)" : "blur(0px)"}`,
                                            transition: "all 0.3s ease",
                                            lineHeight: 1.3,
                                            color: props.globalTheme ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)"
                                        }}
                                    >1993.10.28</div>
                                    <div className={"brdw"}
                                        style={{
                                            fontSize: "5.5vw", lineHeight: 1.1,
                                            opacity: `${(xPosition - 1200) / 400 <= 6 ? 0 : 1}`,
                                            filter: `${(xPosition - 1200) / 400 <= 6 ? "blur(30px)" : "blur(0px)"}`,
                                            transition: "all 0.3s ease"
                                        }}
                                    >PASSION</div>
                                </div>
                                <div className={"brdw disf flex2"} style={{ height: "11vw" }}>
                                    <div className={"brdw"}
                                        style={{
                                            fontSize: "9vw",
                                            opacity: `${(xPosition - 1200) / 400 <= 3.5 ? 0 : 1}`,
                                            filter: `${(xPosition - 1200) / 400 <= 3.5 ? "blur(30px)" : "blur(0px)"}`,
                                            transition: "all 0.3s ease",
                                            lineHeight: 1.6,
                                            marginLeft: "2vw"
                                        }}
                                    >Interactive</div>
                                </div>
                            </div>

                            <div className={"brdw"} >
                                <div className={"brdw flex1-5 kor-font"}
                                    style={{
                                        fontSize: "6.3vw", textAlign: "start",
                                        opacity: `${(xPosition - 1200) / 400 <= 3.2 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 3.2 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease"
                                    }}
                                >
                                    저는 UI 효과, 애니메이션 및 직관적이고<br />
                            역동적인 사용자 경험 또는 안정적이고<br />
                            효율적인 시스템 및 서비스 구성을 위해<br />
                            항상 노력하는 개발자입니다.<br />
                                </div>
                                <div className={"brdw flex1-5 kor-font"}
                                    style={{
                                        fontSize: "5vw",
                                        opacity: `${(xPosition - 1200) / 400 <= 3.8 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 3.8 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease",
                                        textAlign: "end",
                                        marginTop: "-8vw",
                                        color: props.globalTheme ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)"
                                    }}
                                >웹 디자이너</div>
                            </div>

                            <div className={"brdw disf"}>
                                <div className={"brdw flex4"}
                                    style={{
                                        marginTop: "1vw",
                                        fontSize: "5.1vw", textAlign: "start",
                                        opacity: `${(xPosition - 1200) / 400 <= 6.3 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 5 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.45s ease",
                                        color: "rgba(202, 69, 255,0.9)"
                                    }}
                                >
                                    Let's make something special
                                </div>
                            </div>

                            <div className={"brdw disf"} style={{ height: "8vw" }}>
                                <div className={"brdw flex1"}
                                    style={{
                                        fontSize: "10vw", lineHeight: 1.25,
                                        opacity: `${(xPosition - 1200) / 400 <= 4.3 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 4.3 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease"
                                    }}
                                >UI/UX</div>
                                <div className={"brdw flex1"}
                                    style={{
                                        fontSize: "5vw",
                                        lineHeight: 1.3,
                                        opacity: `${(xPosition - 1200) / 400 <= 5.7 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 5.7 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease",
                                        color: props.globalTheme ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)"
                                    }}
                                >Android</div>
                                <div className={"brdw flex1 kor-font"}
                                    style={{
                                        fontSize: "7vw", lineHeight: 1,
                                        opacity: `${(xPosition - 1200) / 400 <= 4.5 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 4.5 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease"
                                    }}
                                >프론트엔드</div>
                            </div>

                            <div className={"brdw disf"}>
                                <div className={"brdw flex1-3 kor-font"}
                                    style={{
                                        fontSize: "8.5vw",
                                        display: "flex",
                                        alignItems: "flex-end",
                                        textAlign: "start",
                                        lineHeight: 1,
                                        opacity: `${(xPosition - 1200) / 400 <= 4 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 4 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease",
                                        color: props.globalTheme ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)"
                                    }}
                                >퍼블리싱</div>
                                <div className={"brdw flex1 kor-font"}
                                    style={{
                                        fontSize: "8vw", display: "flex",
                                        alignItems: "flex-end", textAlign: "end", lineHeight: 1,
                                        opacity: `${(xPosition - 1200) / 400 <= 5 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 5 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease",
                                        justifyContent: "center"
                                    }}
                                >백엔드</div>
                                <div className={"brdw flex2 kor-font"}
                                    style={{
                                        fontSize: "18vw",
                                        lineHeight: 0.75,
                                        textAlign: "end",
                                        opacity: `${(xPosition - 1200) / 400 <= 2.5 ? 0 : 1}`,
                                        filter: `${(xPosition - 1200) / 400 <= 2.5 ? "blur(30px)" : "blur(0px)"}`,
                                        transition: "all 0.3s ease"
                                    }}
                                >개발자</div>
                            </div>
                        </div>
                    </ParallaxFourth>
                    <ParallaxStar
                        className={`${(xPosition - 1200) / 100 >= 1 ? "star-ani" : "star-ani-d"}`}
                        isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 1200) / 5) + "vh",
                            // top: "99vh",
                            left: "0vw"
                        }}>
                        <div className="star"
                        //  style={{ backgroundColor: "red" }} 
                        />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 300) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 300) / 7) + "vh",
                            // top: "99vh",
                            left: "10vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 1800) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 1800) / 2) + "vh",
                            // top: "99vh",
                            left: "70vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 1100) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 1100) / 5) + "vh",
                            // top: "99vh",
                            left: "20vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 500) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 500) / 15) + "vh",
                            // top: "99vh",
                            left: "30vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 1600) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 1600) / 13) + "vh",
                            // top: "99vh",
                            left: "60vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 900) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 1900) / 15) + "vh",
                            // top: "99vh",
                            left: "50vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 2000) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 2000) / 8) + "vh",
                            // top: "99vh",
                            left: "100vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 2500) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 2500) / 20) + "vh",
                            // top: "99vh",
                            left: "80vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 3000) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 3000) / 4) + "vh",
                            // top: "99vh",
                            left: "90vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 4500) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 4500) / 3) + "vh",
                            // top: "99vh",
                            left: "40vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar
                        className={`${(xPosition - 1200) / 100 >= 1 ? "star-ani" : "star-ani-d"}`}
                        isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 2700) / 5) + "vh",
                            // top: "99vh",
                            left: "22vw"
                        }}>
                        <div className="star"
                        //  style={{ backgroundColor: "red" }} 
                        />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 300) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 600) / 25) + "vh",
                            // top: "99vh",
                            left: "5vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 1800) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 2900) / 2) + "vh",
                            // top: "99vh",
                            left: "65vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 1100) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 2300) / 5) + "vh",
                            // top: "99vh",
                            left: "15vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 500) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 1200) / 15) + "vh",
                            // top: "99vh",
                            left: "25vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 1600) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 600) / 13) + "vh",
                            // top: "99vh",
                            left: "55vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 900) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 2750) / 15) + "vh",
                            // top: "99vh",
                            left: "45vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 2000) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 200) / 8) + "vh",
                            // top: "99vh",
                            left: "95vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 2500) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 3200) / 20) + "vh",
                            // top: "99vh",
                            left: "75vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 3000) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 1000) / 4) + "vh",
                            // top: "99vh",
                            left: "85vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ParallaxStar className={`${(xPosition - 4500) / 100 >= 1 ? "star-ani" : "star-ani-d"}`} isShow={textAni}
                        style={{
                            top: (100 - (xPosition - 400) / 3) + "vh",
                            // top: "99vh",
                            left: "35vw"
                        }}>
                        <div className="star" />
                    </ParallaxStar>
                    <ScrollNotice isClick topValue={isClickMe} isShow={nextScreen} isPage={props.isAct === "ABOUT"} theme={props.globalTheme}>
                        <div >
                            <div
                                className="cur click-text"
                                onClick={() => {
                                    setIsTopValue(100)
                                    setIsClickMe(100)
                                    const dom = document.getElementById("detail-dom cur-page")
                                    if (dom) {
                                        dom.scrollTo({ top: window.innerHeight * 2, behavior: "smooth" });
                                        dom.style.overflow = "hidden"
                                    }
                                }}
                            >{isMobile ? "Touch" : "Click"}</div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div className="arrow" />
                            </div>
                        </div>
                    </ScrollNotice>
                </div>
            </div>
            <div className="test-box" onClick={() => {
                setPagesetData(pagesetData + 100)
            }}>
                <svg height="400" width="400">
                    <circle
                        className="progress-ring__circle"
                        cx="100"
                        cy="100"
                        r="90"
                        stroke="#fff"
                        strokeWidth="8"
                        strokeDashoffset={pagesetData}
                        fill="transparent"
                    />
                </svg>
                <svg height="400" width="400">
                    <circle
                        className="progress-ring__circle"
                        cx="100"
                        cy="100"
                        r="90"
                        stroke="#fff"
                        strokeWidth="8"
                        strokeDashoffset={pagesetData}
                        fill="transparent"
                    />
                </svg>
                <svg height="400" width="400">
                    <circle
                        className="progress-ring__circle"
                        cx="100"
                        cy="100"
                        r="90"
                        stroke="#fff"
                        strokeWidth="8"
                        strokeDashoffset={pagesetData}
                        fill="transparent"
                    />
                </svg>
                <svg height="400" width="400">
                    <circle
                        className="progress-ring__circle"
                        cx="100"
                        cy="100"
                        r="90"
                        stroke="#fff"
                        strokeWidth="8"
                        strokeDashoffset={pagesetData}
                        fill="transparent"
                    />
                </svg>
            </div>
        </AboutWrap >
    )
}