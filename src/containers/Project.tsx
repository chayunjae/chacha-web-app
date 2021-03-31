import React from 'react'
import ProjectWrap from './ProjectStyle'

type Props = {
    isAct: "INDEX" | "ABOUT" | "SKILLS" | "PROJECT" | "CONTACT";
    globalTheme: boolean;
}

export default function Project(props: Props) {
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
                <div className={`contents-list ${props.isAct === "PROJECT" && "view-project-list"} `}>
                    <div className="start-el">
                        <div className="round m-auto">
                            START
                    </div>
                    </div>
                    <div className="prev-el">
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
                    </div>
                </div>
            </div>
        </ProjectWrap>
    )
}
