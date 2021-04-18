import React, { useEffect, useState } from 'react'
import ContactWrap from './ContactStyle'
type Props = {
    isAct: "INDEX" | "ABOUT" | "PROJECT" | "CONTACT" | "ETC"
    globalTheme: boolean;
}
export default function Contact(props: Props) {
    const [pagesetData, setPagesetData] = useState(595)
    useEffect(() => {
        setTimeout(() => {
            setPagesetData(100)
        }, 4000)
    }, [])
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
            <div className="test-box" onClick={() => {
                setPagesetData(pagesetData + 100)
            }}>
                <svg height="400" width="400">
                    <circle
                        className="progress-ring__circle"
                        cx="100"
                        cy="100"
                        r="90"
                        stroke="#fff"
                        strokeWidth="8"
                        strokeDashoffset={pagesetData}
                        fill="transparent"
                    />
                </svg>
                <svg height="400" width="400">
                    <circle
                        className="progress-ring__circle"
                        cx="100"
                        cy="100"
                        r="90"
                        stroke="#fff"
                        strokeWidth="8"
                        strokeDashoffset={pagesetData}
                        fill="transparent"
                    />
                </svg>
                <svg height="400" width="400">
                    <circle
                        className="progress-ring__circle"
                        cx="100"
                        cy="100"
                        r="90"
                        stroke="#fff"
                        strokeWidth="8"
                        strokeDashoffset={pagesetData}
                        fill="transparent"
                    />
                </svg>
            </div>
        </ContactWrap>
    )
}
