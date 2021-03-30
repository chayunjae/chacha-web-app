import React from 'react'
import AboutWrap from './AboutStyle'

type Props = {
    isAct: "INDEX" | "ABOUT" | "SKILLS" | "PROJECT" | "CONTACT";
    globalTheme: boolean;
}

export default function About(props: Props) {
    return (
        <AboutWrap
            className="time-font"
            theme={props.globalTheme}
        >
            <div className="title-wrap">
                ABOUT.
                <div className={`title-line ${props.isAct === "ABOUT" && "under-line-about"}`} />
            </div>

        </AboutWrap>
    )
}
