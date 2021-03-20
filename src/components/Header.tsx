import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from "@fortawesome/free-brands-svg-icons";

type Props = {
    globalTheme: boolean;
    setTheme: (bool: boolean) => void;
}

function Header(props: Props) {
    return (
        <div className="header-wrap pdrl-20">
            <div className="header-logo" />
            <div className="header-nav-wrap">
                <div className={'header-icon'}>
                    <FontAwesomeIcon icon={faGithub} />
                </div>
                <div>
                    <div className="toggle-wrap cur" onClick={() => {
                        props.setTheme(!props.globalTheme)
                    }} >
                        <div className="toggle-dot" />
                    </div>

                </div>
                <div className="menu-wrap">
                    <div className="menu-btn-bar" />
                    <div className="menu-btn-bar" />
                    <div className="menu-btn-bar" />
                </div>
            </div>
        </div>
    );
}

export default Header;