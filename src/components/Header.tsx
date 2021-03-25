import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Props = {
    globalTheme: boolean;
    setTheme: (bool: boolean) => void;
    menuToggle: boolean;
    setMenuToggle: (bool: boolean) => void;
    curPage: "INDEX" | "SKILLS" | "ABOUT" | "PROJECT" | "CONTACT"
}

function Header(props: Props) {
    return (
        <div className="header-wrap pdr-55-l-15">
            {props.curPage !== "INDEX" && <div className={`header-logo ${props.menuToggle ? "hide-box" : "show-box"}`} />}

            <div className="header-nav-wrap">
                <div className={`header-icon ${props.menuToggle ? "hide-box" : "show-box"}`}>
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <div className={props.menuToggle ? "hide-box" : "show-box"}>
                    <div className="toggle-wrap cur" onClick={() => {
                        props.setTheme(!props.globalTheme)
                    }} >
                        <div className="toggle-dot" />
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Header;