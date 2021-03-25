import React, { useState } from 'react';
import BaseLayoutWrap from "./BaseLayoutStyle";
import Header from "./Header";
import WhiteLogo from "../images/logo-white.png";
import BlackLogo from "../images/logo-black.png";
import MenuComponent from './MenuComponent';

type Props = {
    children: JSX.Element;
}

function BaseLayout(props: Props) {
    const [globalTheme, setTheme] = useState(false)
    const [menuToggle, setMenuToggle] = useState(false)
    console.log(globalTheme)
    return (
        <BaseLayoutWrap theme={globalTheme}>
            <div className="hamberger-wrap">
                <div className={`menu-wrap cur ${menuToggle ? "origin-menu" : "trans-menu"}`} onClick={() => setMenuToggle(!menuToggle)}>
                    <div className={`menu-btn-bar ${menuToggle ? "ham-ani-1" : "ham-ani-none none1"}`} />
                    <div className={`menu-btn-bar ${menuToggle ? "hide-box" : "show-box"}`} />
                    <div className={`menu-btn-bar ${menuToggle ? "ham-ani-2" : "ham-ani-none none2"}`} />
                </div>
            </div>
            <MenuComponent show={menuToggle} />
            <Header
                globalTheme={globalTheme}
                setTheme={setTheme}
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}
            />
            {/* 임시 */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 90
            }}>
                <div style={{ width: 300 }}>
                    <img alt="" style={{ width: "100%" }} src={globalTheme ? BlackLogo : WhiteLogo} />
                </div>
            </div>
            {/* 임시 */}
            {/* <div className="main-wrap"> */}
            <div>
                {props.children}
            </div>

        </BaseLayoutWrap>
    );
}

export default BaseLayout;