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
        "A", "B", "C", "D", "E", "F", "G", "H", "I"
    ])
    const [curWid, setCurWid] = useState(0);
    const [curHei, setCurHei] = useState(0);
    const backupWid = curWid;
    const backupHei = curHei;
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
        return eleList.map((val: string, idx: number) => {
            return <div className="start-el" key={idx}>
                <div
                    onClick={() => {
                        // if (scrollRef.current) {
                        //     scrollRef.current.scrollTo({ left: 952, behavior: "smooth" });
                        // }
                    }}
                    className={`round-box ${val}`}>
                    {val + idx}
                </div>
            </div>
        })
    }
    useEffect(() => {
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

    })

    return (
        <ProjectWrap
            theme={props.globalTheme}
        >
            <div className="time-font title-wrap">PROJECT.
                <div className={`title-line ${props.isAct === "PROJECT" && "under-line-project"}`} />
            </div>
            {/* <div style={{width:500,height:200,border:"1p"}}></div> */}
            <div ref={scrollRef}
                onScroll={handleScroll}
                className={`contents-wrap ${props.isAct === "PROJECT" ? "view-project-list-wrap" : "hide-wrap"} `}>
                <div className={`contents-list view-project-list`}>
                    {viewList()}
                </div>
                <div className={`contents-list view-project-list`}>
                    {viewList()}
                </div>
                <div className={`contents-list view-project-list`}>
                    {viewList()}
                </div>
                <div
                    ref={contentRef}
                    className={`contents-list view-project-list`}>
                    {viewList()}
                </div>
                <div className={`contents-list view-project-list`}>
                    {viewList()}
                </div>
                <div className={`contents-list view-project-list`}>
                    {viewList()}
                </div>
                <div className={`contents-list view-project-list`}>
                    {viewList()}
                </div>
            </div>
        </ProjectWrap>
    )
}
