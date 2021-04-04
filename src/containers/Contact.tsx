import React from 'react'
import ContactWrap from './ContactStyle'
type Props = {
    isAct: "INDEX" | "ABOUT" | "SKILLS" | "PROJECT" | "CONTACT";
    globalTheme: boolean;
}
export default function Contact(props: Props) {
    return (
        <ContactWrap
            className="time-font"
            theme={props.globalTheme}
        >
            <div className="title-wrap">
                <div>
                    CONTACT.
            <div className={`title-line ${props.isAct === "CONTACT" && "under-line-contact"}`} />
                </div>
            </div>
        </ContactWrap>
    )
}
