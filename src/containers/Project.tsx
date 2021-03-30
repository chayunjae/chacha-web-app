import React from 'react'
import ProjectWrap from './ProjectStyle'

type Props = {
    isAct: "INDEX" | "ABOUT" | "SKILLS" | "PROJECT" | "CONTACT";
    globalTheme: boolean;
}

export default function Project(props: Props) {
    return (
        <ProjectWrap
            className="time-font"
            theme={props.globalTheme}
        >
            <div className="title-wrap">PROJECT.
            <div className={`title-line ${props.isAct === "PROJECT" && "under-line-project"}`} />
            </div>

        </ProjectWrap>
    )
}
