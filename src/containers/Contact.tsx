import React, { useEffect, useState } from 'react'
import ContactWrap from './ContactStyle'
type Props = {
    isAct: "INDEX" | "ABOUT" | "PROJECT" | "CONTACT" | "ETC"
    globalTheme: boolean;
}
export default function Contact(props: Props) {

    //     useEffect(() => {
    // 
    //     }, [])
    return (
        <ContactWrap
            theme={props.globalTheme}
        >
            <div className="title-wrap time-font">
                <div>
                    CONTACT.
                    <div className={`title-line ${props.isAct === "CONTACT" && "under-line-contact"}`} />
                </div>
            </div>
            <div className="test-box">

            </div>
        </ContactWrap>
    )
}
