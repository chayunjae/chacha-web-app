/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import ProjectWrap from './ProjectStyle_back'
import smoothscroll from 'smoothscroll-polyfill';


type Props = {
    isAct: "INDEX" | "ABOUT" | "PROJECT" | "CONTACT" | "ETC"
    globalTheme: boolean;
}

const CONFIG_SETINTER_SEC = 80;
const CONFIG_SETTIME_SEC = 500;

export default function Project(props: Props) {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    //spacing = (curWid / [스크롤 이동 값])
    //spacingM 

    //A 3237 1.035
    //B 1761 9.375
    //C 2014 7.945
    //D 2249 6.62
    //E 2504 5.176
    //F 2740 3.845
    //G 2990 2.43
    const [eleList, setEleList] = useState([
        { text: "PROJECT-A", val: "A", math: 1, spacing: 1.52, spacingM: 15.4 },
        { text: "PROJECT-B", val: "B", math: 2.2, spacing: 0.325, spacingM: 8.5 },
        { text: "PROJECT-C", val: "C", math: 3.4, spacing: 7.5, spacingM: 9.5 },
        { text: "PROJECT-D", val: "D", math: 4.6, spacing: 6.3, spacingM: 10.6 },
        { text: "PROJECT-E", val: "E", math: 5.8, spacing: 5.1, spacingM: 12 },
        { text: "PROJECT-F", val: "F", math: 6, spacing: 3.9, spacingM: 13.1 },
        { text: "PROJECT-G", val: "G", math: 6.2, spacing: 2.71, spacingM: 14.2 }
    ])
    const [curWid, setCurWid] = useState(0);
    const [curHei, setCurHei] = useState(0);
    const backupWid = curWid;
    const backupHei = curHei;

    const [isView, setIsView] = useState("")
    const [isClick, setIsClick] = useState(false)

    const handleScroll = () => {
        if (scrollRef.current) {
            if (window.outerWidth > 768) {
                const scroll = scrollRef.current.scrollLeft;
                if (scroll < backupWid || scroll >= backupWid + curWid) {
                    scrollRef.current.scrollLeft = backupWid + (scroll % curWid);
                }
            } else {
                const scroll = scrollRef.current.scrollTop;
                if (scroll < backupHei || scroll >= backupHei + curHei) {
                    scrollRef.current.scrollTop = backupHei + (scroll % curHei);
                }
            }
        }
    };
    const viewList = () => {
        return eleList.map((obj: { text: string, val: string, math: number, spacing: number, spacingM: number }, idx: number) => {
            return <div className="start-el" key={idx}>
                <div
                    onClick={(e) => {
                        setIsClick(true)
                        if (scrollRef.current && e.currentTarget.parentElement) {
                            if (window.outerWidth > 768) {
                                let scroll = scrollRef.current.scrollLeft;
                                let itemOffSetWid = curWid * 2;
                                let cardWid = e.currentTarget.offsetWidth;
                                let cardParentWid = e.currentTarget.parentElement?.offsetWidth;
                                let targetOffSetWid = cardWid * obj.spacing;
                                let spotMath = curWid + cardWid * obj.math;

                                let switch1 = Math.ceil(scroll) >= Math.ceil(itemOffSetWid - targetOffSetWid)
                                let switch2 = Math.ceil(scroll) >= Math.ceil((itemOffSetWid - targetOffSetWid) - cardParentWid * 2)
                                let switch3 = Math.ceil(scroll) >= Math.ceil((itemOffSetWid - targetOffSetWid) + cardParentWid * 2)

                                if (obj.val === "A" || obj.val === "B") {
                                    if (switch1 || switch2) {
                                        if (scrollRef.current) {
                                            scrollRef.current.scrollTo({ left: itemOffSetWid - targetOffSetWid, behavior: "smooth" });
                                        }
                                    } else {
                                        if (scrollRef.current) {
                                            scrollRef.current.scrollTo({ left: curWid, behavior: "smooth" });
                                        }

                                        setTimeout(() => {
                                            if (scrollRef.current) {
                                                scrollRef.current.scrollLeft = itemOffSetWid - 2;
                                            }
                                        }, CONFIG_SETTIME_SEC)
                                        setTimeout(() => {
                                            if (scrollRef.current)
                                                scrollRef.current.scrollTo({ left: itemOffSetWid - targetOffSetWid, behavior: "smooth" });
                                        }, Math.floor(spotMath / cardWid) * CONFIG_SETINTER_SEC)
                                    }
                                } else if (obj.val === "C" || obj.val === "D") {
                                    if (!switch3) {
                                        if (scrollRef.current) {
                                            scrollRef.current.scrollTo({ left: itemOffSetWid - targetOffSetWid, behavior: "smooth" });
                                        }
                                    } else {
                                        if (scrollRef.current) {
                                            scrollRef.current.scrollTo({ left: itemOffSetWid, behavior: "smooth" });
                                        }

                                        setTimeout(() => {
                                            if (scrollRef.current) {
                                                scrollRef.current.scrollLeft = curWid;
                                            }
                                        }, CONFIG_SETTIME_SEC)
                                        setTimeout(() => {
                                            if (scrollRef.current)
                                                scrollRef.current.scrollTo({ left: itemOffSetWid - targetOffSetWid, behavior: "smooth" });
                                        }, Math.floor(spotMath / cardWid) * CONFIG_SETINTER_SEC)
                                    }
                                } else {
                                    if (scrollRef.current) {
                                        scrollRef.current.scrollTo({ left: itemOffSetWid - targetOffSetWid, behavior: "smooth" });
                                    }
                                }
                            } else {
                                let scroll = scrollRef.current.scrollTop;
                                let itemOffSetHei = curHei * 2;
                                let cardHei = e.currentTarget.offsetHeight;

                                let spotMath = curHei + cardHei * obj.math;
                                if (obj.val === "B") {
                                    if (spotMath < scroll) {
                                        scrollRef.current.scrollTo({ top: itemOffSetHei, behavior: "smooth" });
                                        setTimeout(() => {
                                            if (scrollRef.current) { scrollRef.current.scrollTop = curHei + 1 }
                                        }, CONFIG_SETTIME_SEC)
                                        setTimeout(() => {
                                            scrollRef.current && scrollRef.current.scrollTo({ top: cardHei * obj.spacingM, behavior: "smooth" });
                                        }, Math.floor(spotMath / cardHei) * CONFIG_SETINTER_SEC)
                                    } else {
                                        scrollRef.current.scrollTo({ top: cardHei * obj.spacingM, behavior: "smooth" });
                                    }
                                } else if (obj.val === "A") {
                                    if (spotMath > scroll) {
                                        scrollRef.current.scrollTop = itemOffSetHei - 2;
                                        setTimeout(() => {
                                            scrollRef.current && scrollRef.current.scrollTo({ top: cardHei * obj.spacingM, behavior: "smooth" });
                                        }, Math.floor(spotMath / cardHei) * CONFIG_SETINTER_SEC)
                                    } else {
                                        scrollRef.current.scrollTo({ top: cardHei * obj.spacingM, behavior: "smooth" });
                                    }
                                } else {
                                    scrollRef.current.scrollTo({ top: cardHei * obj.spacingM, behavior: "smooth" });
                                }



                            }
                        }
                        setIsView(obj.val + idx)
                    }}
                    id={`id-${obj.val}`}
                    className={`round-box ${obj.val} ${isView === obj.val + idx && "project-card-action"}`}>
                    {obj.text}
                </div>
            </div>
        })
    }
    function viewTemp(num: number, type: "front" | "back") {
        let tempArr = [] as any
        for (let i = 0; i < num; i++) {
            tempArr.push(<div key={type + i} className={`contents-list view-project-list ${type + i}`}>
                {viewList()}
            </div>)
        }
        return tempArr
    }

    //     const slideEvent = (type: String) => {
    //         let total = 11
    // 
    //         if (type === "prev") {
    //             let prevCnt = leftCnt
    //             if (leftCnt > 1) {
    //                 prevCnt = leftCnt - 1
    //                 if (prevCnt === 1) {
    //                     setOnTitle3("off")
    //                 }
    //                 setLeftVal(leftVal + 460)
    //             } else {
    //                 prevCnt = 1
    //                 setOnTitle3("off")
    //             }
    //             setLeftCnt(prevCnt)
    // 
    //         } else {
    //             let nextCnt = leftCnt
    //             if (leftCnt !== total) {
    //                 nextCnt = leftCnt + 1
    //                 if (nextCnt === 2) {
    //                     setOnTitle3("on")
    //                 }
    //                 setLeftVal(leftVal - 460)
    //             } else {
    //                 setLeftVal(460)
    //                 nextCnt = 1
    //                 setOnTitle3("off")
    //             }
    //             setLeftCnt(nextCnt)
    //         }
    // 
    //     }

    // const slideEvent2 = (type: String, total: number) => {
    //     let cnt = leftCnt2
    //     if (type === "prev") {
    //         if (leftCnt2 > 1) {
    //             cnt = leftCnt2 - 1
    //             if (cnt === 1) {
    //                 setOnTitle4("off")
    //             }
    //             setLeftVal2(leftVal2 + 920);
    //         } else {
    //             cnt = 1
    //             setOnTitle4("off")
    //         }
    //     } else {
    //         if (leftCnt2 !== total) {
    //             cnt = leftCnt2 + 1
    //             if (cnt === 2) {
    //                 setOnTitle4("on")
    //             }
    //             setLeftVal2(leftVal2 - 920);
    //         } else {
    //             setLeftVal2(0);
    //             cnt = 1
    //             setOnTitle4("off")
    //         }
    //     }
    //     setLeftCnt2(cnt)
    // }

    useEffect(() => {
        smoothscroll.polyfill();
    }, [])

    useEffect(() => {
        if (!isClick) {
            if (contentRef.current) {
                if (window.outerWidth > 768) {
                    setCurWid(contentRef.current.offsetWidth);
                    if (scrollRef.current) {
                        scrollRef.current.scrollLeft = backupWid;
                    }
                } else {
                    setCurHei(contentRef.current.offsetHeight);
                    console.log(backupHei)
                    setTimeout(() => {
                        if (scrollRef.current) {
                            scrollRef.current.scrollTo(0, backupHei + 30);
                        }
                    }, 1500)
                }
            }
        }
    })

    return (
        <ProjectWrap
            theme={props.globalTheme}
        >
            <div className={`time-font title-wrap ${props.isAct === "PROJECT" && "show-box_view"}`}>
                <div className="title-box">
                    PROJECT.
                    <div className={`title-line ${props.isAct === "PROJECT" && "under-line-project"}`} />
                </div>
            </div>
            <div className="blur-wrap"></div>
            <div className="blur-wrap de-b browser"></div>
            <div ref={scrollRef}
                onScroll={handleScroll}
                className={`contents-wrap ${props.isAct === "PROJECT" ? "view-project-list-wrap" : "hide-wrap"}`}>
                {viewTemp(2, "front")}
                <div
                    ref={contentRef}
                    className={`contents-list view-project-list`}>
                    {viewList()}
                </div>
                {viewTemp(2, "back")}
            </div>
            <div className="blur-wrap de-m"></div>
            {/* <div className={`slide-btn-wrap position_r ${onTitle2}`}>
                        <div className={`slide-btn-box position_a d-flex prev-btn-wrap ${onTitle3}`}>
                            <div className="prev-btn card-shadow" onClick={() => slideEvent("prev")}><FontAwesomeIcon icon={faChevronLeft} /></div>
                        </div>
                        <div className={`slide-btn-box position_a d-flex next-btn-wrap`}>
                            <div className="next-btn card-shadow" onClick={() => slideEvent("next")}><FontAwesomeIcon icon={faChevronRight} /></div>
                        </div>
                    </div> */}

            {/* <div className={`slide-wrap ${onTitle2}`}>
                        <div className='slide-box d-flex align-items-center position_a' >
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
                                                    <div className='poor-font more-btn fs-1_25 fw-bold'>
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
                    </div> */}

            {/* <div className={`slide-btn-wrap position_r`}>
                                    <div className={`slide-btn-box position_a d-flex prev-btn-wrap ${onTitle4}`}>
                                        <div className="prev-btn card-shadow" onClick={() => slideEvent2("prev", projectList[showMoreIdx].slideArr.length)}><FontAwesomeIcon icon={faChevronLeft} /></div>
                                    </div>
                                    <div className={`slide-btn-box position_a d-flex next-btn-wrap ${projectList[showMoreIdx].slideArr.length < 2 && "off"}`}>
                                        <div className="next-btn card-shadow" onClick={() => slideEvent2("next", projectList[showMoreIdx].slideArr.length)}><FontAwesomeIcon icon={faChevronRight} /></div>
                                    </div>
                                </div>
                                <div className='act-project-slide-wrap d-flex align-items-center'>
                                    <div className='act-project-slide-box position_a d-flex align-items-center' style={{ left: leftVal2 + 15 }}>
                                        {projectList[showMoreIdx].slideArr.map((path: string, idx: number) => {
                                            return <div key={idx} className='act-project-slide-item-wrap d-flex align-items-center justify-content-center'>
                                                <div className='act-project-slide-item d-flex justify-content-center align-items-center'>
                                                    <img className='mt-2' src={path} alt="project_images" style={projectList[showMoreIdx].type === 1 ? { width: "60%" } : { width: "100%" }} />
                                                </div>
                                            </div>;
                                        })}
                                    </div>
                                </div> */}

        </ProjectWrap>
    )
}

