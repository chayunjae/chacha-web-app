import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Props = {
    globalTheme: boolean;
    setTheme: (bool: boolean) => void;
    menuToggle: "NONE" | boolean;
    setMenuToggle: (bool: "NONE" | boolean) => void;
    curPage: "INDEX" | "SKILLS" | "ABOUT" | "PROJECT" | "CONTACT"
    setClockWrap: (bool: boolean) => void;
    clockWrap: "NONE" | boolean;
    hour: string;
    minute: string;
}

function Header(props: Props) {

    return (
        <div className="header-wrap pdr-55-l-15">
            {props.curPage !== "INDEX" && <div className={`header-logo ${props.menuToggle === "NONE" ? "show-default" : props.menuToggle ? "hide-box" : "show-box"}`} />}

            <div className="header-nav-wrap">
                <div className={`clock time-font cur ${props.clockWrap === true && "hide-data"} ${props.menuToggle === "NONE" ? "show-default" : props.menuToggle ? "hide-box" : "show-box"}`}
                    onClick={() => props.setClockWrap(true)}
                >
                    {props.hour} <span className="tiktok">:</span> {props.minute}

                </div>

                <div className={`header-icon ${props.menuToggle === "NONE" ? "show-default" : props.menuToggle ? "hide-box" : "show-box"}`}>
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className={props.menuToggle === "NONE" ? "show-default" : props.menuToggle ? "hide-box" : "show-box"}>
                    <div className="toggle-wrap cur" onClick={() => {
                        props.setTheme(!props.globalTheme)
                        if (props.globalTheme) {
                            document.body.style.backgroundColor = "#000"
                        } else {
                            document.body.style.backgroundColor = "#fff"
                        }
                    }} >
                        <div className="toggle-dot" />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Header;