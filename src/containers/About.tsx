import React, { useEffect, useRef, useState } from 'react'
import AboutWrap, { ParallaxFirst, ParallaxThird, ScrollNotice } from './AboutStyle'

type Props = {
    isAct: "INDEX" | "ABOUT" | "PROJECT" | "CONTACT" | "ETC";
    globalTheme: boolean;
}

export default function About(props: Props) {
    const [textAni, setTextAni] = useState(false)
    const [arrowAni, setArrowAni] = useState(false)
    const [nextScreen, setNextScreen] = useState(false)
    const [xPosition, setPosition] = useState(0);
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
                    console.log("??")
                    setNextScreen(true)
                } else {
                    setNextScreen(false)
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
            <div id="about-scroll" ref={contentRef} onScroll={parallaxFunc} className={`time-font introduce-wrap ${props.isAct === "ABOUT" ? "view-project-list-wrap" : "hide-wrap"}`}>
                <div style={{ height: "1000vh", position: "relative" }}>
                    <ScrollNotice isShow={arrowAni} isPage={props.isAct === "ABOUT"} theme={props.globalTheme}>
                        <div>
                            <div>Scroll</div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div className="arrow" />
                            </div>
                        </div>

                    </ScrollNotice>
                    <ParallaxFirst isShow={textAni}>
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
                    <ParallaxThird isShow={textAni}>

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
                                        transition: "all 0.3s ease",
                                        color: props.globalTheme ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)"
                                    }}
                                >1993.10.28</div>
                                <div className={"brdw flex2"}
                                    style={{
                                        fontSize: "5vw",
                                        opacity: `${(xPosition - 1200) / 400 <= 3.5 ? 0 : 1}`,
                                        transition: "all 0.3s ease"
                                    }}
                                >Interactive</div>
                                <div className={"brdw flex1"}
                                    style={{
                                        fontSize: "8vw", lineHeight: 1, textAlign: "end",
                                        opacity: `${(xPosition - 1200) / 400 <= 5.5 ? 0 : 1}`,
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
                                        transition: "all 0.3s ease"
                                    }}
                                >PASSION</div>
                            </div>
                            <div className={"brdw disf mb-1"} style={{ height: "5vw" }}>
                                <div className={"brdw flex4"}
                                    style={{
                                        fontSize: "4vw", textAlign: "start",
                                        opacity: `${(xPosition - 1200) / 400 <= 6.3 ? 0 : 1}`,
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
                                                transition: "all 0.3s ease"
                                            }}
                                        >퍼블리싱</div>
                                        <div className={"brdw flex2"}
                                            style={{
                                                fontSize: "4.1vw",
                                                opacity: `${(xPosition - 1200) / 400 <= 5.7 ? 0 : 1}`,
                                                transition: "all 0.3s ease",
                                                color: props.globalTheme ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.4)"
                                            }}
                                        >Android</div>
                                        <div className={"brdw flex1-5 kor-font"}
                                            style={{
                                                fontSize: "3.3vw",
                                                opacity: `${(xPosition - 1200) / 400 <= 3.8 ? 0 : 1}`,
                                                transition: "all 0.3s ease"
                                            }}
                                        >웹 디자이너</div>
                                    </div>
                                    <div className={"brdw disf"}>
                                        <div className={"brdw flex1"}
                                            style={{
                                                fontSize: "9vw", lineHeight: 1.25,
                                                opacity: `${(xPosition - 1200) / 400 <= 4.3 ? 0 : 1}`,
                                                transition: "all 0.3s ease"
                                            }}
                                        >UI/UX</div>
                                        <div className={"brdw flex1 kor-font"}
                                            style={{
                                                fontSize: "5.5vw", lineHeight: 2.15,
                                                opacity: `${(xPosition - 1200) / 400 <= 4.5 ? 0 : 1}`,
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
                                        transition: "all 0.3s ease"
                                    }}
                                >개발자</div>
                            </div>
                        </div>
                    </ParallaxThird>
                    {/* <ScrollNotice isShow={nextScreen} isPage={props.isAct === "ABOUT"} theme={props.globalTheme}>
                        <div className="cur">
                            <div>Click</div>
                            <div style={{ display: "flex", justifyContent: "center" }}>
                                <div className="arrow" />
                            </div>
                        </div>

                    </ScrollNotice> */}
                </div>
            </div>
        </AboutWrap >
    )
}