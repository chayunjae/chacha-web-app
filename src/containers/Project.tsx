/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import ProjectWrap from './ProjectStyle'
import smoothscroll from 'smoothscroll-polyfill';

type Props = {
    isAct: "INDEX" | "ABOUT" | "SKILLS" | "PROJECT" | "CONTACT";
    globalTheme: boolean;
}

const CONFIG_SETINTER_SEC = 50;
const CONFIG_SETTIME_SEC = 300;

export default function Project(props: Props) {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    //spacing = (curWid / [스크롤 이동 값])
    const [eleList, setEleList] = useState([
        { text: "PROJECT-A", val: "A", math: 1, spacing: 1.52 },
        { text: "PROJECT-B", val: "B", math: 2.2, spacing: 0.325 },
        { text: "PROJECT-C", val: "C", math: 3.4, spacing: 7.5 },
        { text: "PROJECT-D", val: "D", math: 4.6, spacing: 6.3 },
        { text: "PROJECT-E", val: "E", math: 5.8, spacing: 5.1 },
        { text: "PROJECT-F", val: "F", math: 6, spacing: 3.9 },
        { text: "PROJECT-G", val: "G", math: 6.2, spacing: 2.71 }
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
                console.log(scroll)
                if (scroll < backupHei || scroll >= backupHei + curHei) {
                    scrollRef.current.scrollTop = backupHei + (scroll % curHei);
                }
            }
        }
    };
    const viewList = () => {
        return eleList.map((obj: { text: string, val: string, math: number, spacing: number }, idx: number) => {
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
                                        console.log("2")
                                        if (scrollRef.current) {
                                            scrollRef.current.scrollTo({ left: itemOffSetWid - targetOffSetWid, behavior: "smooth" });
                                        }
                                    } else {
                                        console.log("4")

                                        if (scrollRef.current) {
                                            scrollRef.current.scrollTo({ left: curWid, behavior: "smooth" });
                                        }

                                        setTimeout(() => {
                                            if (scrollRef.current) {
                                                scrollRef.current.scrollLeft = itemOffSetWid - 2;
                                            }
                                        }, CONFIG_SETTIME_SEC + 50)
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
                                console.log("PC 버전까지")
                                let scroll = scrollRef.current.scrollTop;
                                let itemOffSetHei = curHei * 2;
                                let cardHei = e.currentTarget.offsetHeight;
                                let cardParentHei = e.currentTarget.parentElement?.offsetHeight;
                                let targetOffSetHei = cardHei * obj.spacing;
                                let spotMath = curHei + cardHei * obj.math;

                                let switch1 = Math.ceil(scroll) >= Math.ceil(itemOffSetHei - targetOffSetHei)
                                let switch2 = Math.ceil(scroll) >= Math.ceil((itemOffSetHei - targetOffSetHei) - cardParentHei * 2)
                                let switch3 = Math.ceil(scroll) >= Math.ceil((itemOffSetHei - targetOffSetHei) + cardParentHei * 2)
                                // window.requestAnimationFrame
                                if (scrollRef.current) {
                                    console.log("????")
                                    scrollRef.current.scrollTo({ top: 1820, behavior: "smooth" });
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
                    if (scrollRef.current) {
                        scrollRef.current.scrollTop = backupHei;
                    }
                }
            }
        }
    })

    return (
        <ProjectWrap
            theme={props.globalTheme}
        >
            <div className={`time-font title-wrap ${props.isAct === "PROJECT" && "show-box_view"}`}>
                <div>
                    PROJECT.
                <div className={`title-line ${props.isAct === "PROJECT" && "under-line-project"}`} />
                </div>
            </div>
            <div className="blur-wrap"></div>
            <div className="blur-wrap de-b browser"></div>
            <div ref={scrollRef}
                onScroll={handleScroll}
                className={`contents-wrap ${props.isAct === "PROJECT" ? "view-project-list-wrap" : "hide-wrap"} `}>
                {viewTemp(4, "front")}
                <div
                    ref={contentRef}
                    className={`contents-list view-project-list`}>
                    {viewList()}
                </div>
                {viewTemp(4, "back")}
            </div>
            <div className="blur-wrap de-m"></div>
        </ProjectWrap>
    )
}
