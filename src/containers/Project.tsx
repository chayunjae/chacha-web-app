/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from 'react'
import ProjectWrap from './ProjectStyle'

type Props = {
    isAct: "INDEX" | "ABOUT" | "SKILLS" | "PROJECT" | "CONTACT";
    globalTheme: boolean;
}


export default function Project(props: Props) {
    const contentRef = useRef<HTMLDivElement | null>(null);
    const scrollRef = useRef<HTMLDivElement | null>(null);
    const [eleList, setEleList] = useState([
        { val: "A", math: 1, spacing: 1.52 },
        { val: "B", math: 2.2, spacing: 0.325 },
        { val: "C", math: 3.4, spacing: 5.1 },
        { val: "D", math: 4.6, spacing: 3.9 },
        { val: "E", math: 5.8, spacing: 2.71 }
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
                // console.log("cur curWid", curWid)
                // console.log("cur scroll", scroll)
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
        return eleList.map((obj: { val: string, math: number, spacing: number }, idx: number) => {
            return <div className="start-el" key={idx}>
                <div
                    onClick={(e) => {
                        setIsClick(true)
                        if (scrollRef.current) {
                            let scroll = scrollRef.current.scrollLeft;
                            let itemOffSetWid = curWid * 2;
                            let cardWid = e.currentTarget.offsetWidth;
                            let targetOffSetWid = cardWid * obj.spacing;
                            let spotMath = curWid + cardWid * obj.math;
                            console.log(scroll)
                            console.log(itemOffSetWid - targetOffSetWid)
                            console.log(spotMath)
                            // PIN
                            // PIN
                            // PIN 위치 이동값 조건문 조정 필요 !!
                            // PIN
                            // PIN
                            // PIN
                            let switch1 = scroll >= curWid;
                            let switch2 = scroll >= curWid && scroll < curWid;
                            let switch3 = scroll < curWid;

                            if (obj.val === "C") {

                                if (scroll < spotMath) {
                                    console.log("IF")
                                    if (scrollRef.current) {
                                        scrollRef.current.scrollTo({ left: itemOffSetWid - targetOffSetWid, behavior: "smooth" });
                                    }
                                } else if (scroll > spotMath) {
                                    console.log("ELSE")
                                    if (scrollRef.current) {
                                        scrollRef.current.scrollTo({ left: itemOffSetWid, behavior: "smooth" });
                                    }
                                    setTimeout(() => {
                                        if (scrollRef.current)
                                            scrollRef.current.scrollTo({ left: itemOffSetWid - targetOffSetWid, behavior: "smooth" });
                                    }, (Math.floor(scroll / cardWid) * 40))
                                }

                            }
                            // console.log("scroll", scroll)
                            // console.log("curWid", curWid)
                            // console.log("itemOffSetWid", itemOffSetWid)
                            // console.log("scroll >= curWid", switch1)

                            // console.log("scroll >= curWid && scroll < curWid", switch2)
                            // console.log("scroll < curWid", switch3)
                            // console.log("itemOffSetWid - targetOffSetWid", itemOffSetWid - targetOffSetWid)

                            // console.log("scroll3", scroll)
                            //                             if (obj.val === "C") {
                            //                                 console.log("IF C")
                            //                                 // if (scrollRef.current)
                            //                                 // scrollRef.current.scrollTo({ left: itemOffSetWid - targetOffSetWid, behavior: "smooth" });
                            //                             } else {
                            // 
                            //                                 if (scroll >= curWid && scroll < curWid) {
                            //                                     // if (obj.val === "A" || obj.val === "B") {
                            //                                     console.log("IF")
                            //                                     scrollRef.current.scrollLeft = itemOffSetWid - 4;
                            //                                     setTimeout(() => {
                            //                                         // if (scrollRef.current)
                            //                                         // scrollRef.current.scrollTo({ left: itemOffSetWid - targetOffSetWid, behavior: "smooth" });
                            //                                     }, 100)
                            //                                     // } else {
                            //                                     //     console.log("ELSE1")
                            //                                     //     if (scrollRef.current)
                            //                                     //         scrollRef.current.scrollTo({ left: itemOffSetWid - targetOffSetWid, behavior: "smooth" });
                            //                                     // }
                            //                                 } else {
                            //                                     console.log("ELSE2")
                            //                                     // if (scrollRef.current)
                            //                                     // scrollRef.current.scrollTo({ left: itemOffSetWid - targetOffSetWid, behavior: "smooth" });
                            // 
                            //                                 }
                            //                             }
                        }
                        setIsView(obj.val + idx)
                    }}
                    id={`id-${obj.val}`}
                    className={`round-box ${obj.val} ${isView === obj.val + idx && "project-card-action"}`}>
                    {obj.val + idx}
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
