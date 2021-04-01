import React, { useState } from 'react'
import ProjectWrap from './ProjectStyle'

type Props = {
    isAct: "INDEX" | "ABOUT" | "SKILLS" | "PROJECT" | "CONTACT";
    globalTheme: boolean;
}


export default function Project(props: Props) {
    const [eleList, setEleList] = useState([
        "A", "B", "C", "D", "E", "F"
    ])
    const [startScroll, setStartScroll] = useState(0)
    const [isAction, setIsAction] = useState(false)

    function dragFunc(val: number, type: "start" | "end") {
        console.log(val)
        console.log(type)
        if (type === "start") {
            setStartScroll(val)
        } else {
            if (startScroll > val) {
                console.log("<- 이쪽 ")
            } else if (startScroll < val) {
                console.log("이쪽 -> ")
            } else {
                console.log("그대로")
            }
            setStartScroll(0)
        }
    }

    return (
        <ProjectWrap
            theme={props.globalTheme}
        >
            <div className="time-font title-wrap">PROJECT.
            <div className={`title-line ${props.isAct === "PROJECT" && "under-line-project"}`} />
            </div>
            {/* <div className={`contents-wrap ${props.isAct === "PROJECT" ? "" : "hide-wrap"} `}> */}
            <div className={`contents-wrap ${props.isAct === "PROJECT" ? "view-project-list-wrap" : "hide-wrap"} `}>
                {/* <div className={`contents-list ${props.isAct === "PROJECT" && ""} `}> */}
                {/* <div className={`contents-list ${props.isAct === "PROJECT" && "view-project-list"} `}> */}
                <div
                    className={`contents-list ${props.isAct === "PROJECT" && "view-project-list"} `}

                    onMouseDown={(e) => {
                        dragFunc(e.clientX, "start")
                    }}
                    onMouseUp={(e) => {
                        dragFunc(e.clientX, "end")
                    }}
                    onTouchStart={(e) => {
                        dragFunc(e.changedTouches[0].clientX, "start")
                    }}
                    onTouchEnd={(e) => {
                        dragFunc(e.changedTouches[0].clientX, "end")
                    }}
                    onWheelCapture={(e) => {
                        if (e.deltaX < 0) {
                            if (!isAction) {
                                if (startScroll === 0) {
                                    setStartScroll(e.deltaX)
                                    setIsAction(true)
                                }
                            } else {
                                if (startScroll > e.deltaX) {
                                    console.log(">>>>>>")
                                    setStartScroll(0)
                                    setIsAction(false)
                                }
                            }
                        } else if (e.deltaX > 0) {
                            if (!isAction) {
                                if (startScroll === 0) {
                                    setStartScroll(e.deltaX)
                                    setIsAction(true)
                                }
                            } else {
                                if (startScroll < e.deltaX) {
                                    console.log("<<<<<<")
                                    setStartScroll(0)
                                    setIsAction(false)
                                }
                            }
                        } else {
                            return;
                        }
                    }}
                >
                    {eleList.map((val: string, idx: number) => {
                        return <div className="start-el" key={idx}>
                            <div className="round-box" style={{ margin: "0 20px" }}>
                                {val + idx}
                            </div>
                        </div>
                    })}







                    {/* <div className="prev-el">
                        <div className="round m-auto">
                            PREV
                    </div>
                    </div>
                    <div className="center-el">
                        <div className="round m-auto">
                            CENTER
                    </div>
                    </div>
                    <div className="next-el">
                        <div className="round m-auto">
                            NEXT
                    </div>
                    </div>
                    <div className="end-el">
                        <div className="round m-auto">
                            END
                    </div>
                    </div> */}
                </div>
            </div>
        </ProjectWrap>
    )
}
