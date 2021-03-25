import React, { useState } from 'react';
import BaseLayoutWrap from "./BaseLayoutStyle";
import Header from "./Header";
import MenuComponent from './MenuComponent';

type Props = {
    children: JSX.Element;
    curPage: "INDEX" | "ABOUT" | "SKILLS" | "PROJECT" | "CONTACT";
    setCurPage: (page: "INDEX" | "ABOUT" | "SKILLS" | "PROJECT" | "CONTACT") => void;
    globalTheme: boolean;
    setTheme: (bool: boolean) => void;
}

function BaseLayout(props: Props) {
    const [menuToggle, setMenuToggle] = useState(false)

    return (
        <BaseLayoutWrap theme={props.globalTheme}>
            <div className="hamberger-wrap">
                <div className={`menu-wrap cur ${menuToggle ? "origin-menu" : "trans-menu"}`} onClick={() => setMenuToggle(!menuToggle)}>
                    <div className={`menu-btn-bar ${menuToggle ? "ham-ani-1" : "ham-ani-none none1"}`} />
                    <div className={`menu-btn-bar ${menuToggle ? "hide-box" : "show-box"}`} />
                    <div className={`menu-btn-bar ${menuToggle ? "ham-ani-2" : "ham-ani-none none2"}`} />
                </div>
            </div>
            <MenuComponent show={menuToggle} setMenuToggle={setMenuToggle} setCurPage={props.setCurPage} />
            <Header
                globalTheme={props.globalTheme}
                setTheme={props.setTheme}
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}
                curPage={props.curPage}
            />
            {/* 임시 */}

            {/* 임시 */}
            {/* <div className="main-wrap"> */}
            <div>
                {props.children}
            </div>

        </BaseLayoutWrap>
    );
}

export default BaseLayout;