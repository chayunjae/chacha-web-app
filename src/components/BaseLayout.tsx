import React, { useEffect, useState } from 'react';
import BaseLayoutWrap from "./BaseLayoutStyle";
import Header from "./Header";
import MenuComponent from './MenuComponent';
import dayjs from 'dayjs'

type Props = {
    children: JSX.Element;
    curPage: "INDEX" | "ABOUT" | "SKILLS" | "PROJECT" | "CONTACT";
    setCurPage: (page: "INDEX" | "ABOUT" | "SKILLS" | "PROJECT" | "CONTACT") => void;
    globalTheme: boolean;
    setTheme: (bool: boolean) => void;
}

function BaseLayout(props: Props) {
    const [menuToggle, setMenuToggle] = useState<"NONE" | boolean>("NONE")
    const [clockWrap, setClockWrap] = useState<"NONE" | boolean>("NONE")
    const [hour, setHour] = useState("00");
    const [minute, setMinute] = useState("00");
    const [second, setSecond] = useState("00");
    let clock;
    function loopFunc() {
        clock = setInterval(() => {
            setHour(dayjs(new Date().getTime()).format("HH"))
            setMinute(dayjs(new Date().getTime()).format("mm"))
            setSecond(dayjs(new Date().getTime()).format("ss"))
        }, 1000)
    }
    useEffect(() => {
        loopFunc()
        return () => {
            clearInterval(clock)
        }
    })
    return (
        <BaseLayoutWrap theme={props.globalTheme}>
            <div className={`clock-box time-font ${clockWrap === "NONE" ? "none-clock" : clockWrap ? "show-clock" : "hide-clock"}`} onClick={() => setClockWrap(false)}>
                <div className={`${clockWrap === "NONE" ? "clock-content-none" : clockWrap ? "clock-content-show" : "clock-content-hide"}`}> {hour} <span className="tiktok">:</span> {minute}<span className="tiktok">:</span> {second}</div>
            </div>
            <div className="hamberger-wrap">
                <div className={`menu-wrap cur ${menuToggle === "NONE" ? "show-default" : menuToggle ? "origin-menu" : "trans-menu"}`} onClick={() => {
                    if (menuToggle === "NONE") {
                        setMenuToggle(true)
                    } else {
                        setMenuToggle(!menuToggle)
                    }
                }}>
                    <div className={`menu-btn-bar ${menuToggle === "NONE" ? "show-default" : menuToggle ? "ham-ani-1" : "ham-ani-none none1"}`} />
                    <div className={`menu-btn-bar ${menuToggle === "NONE" ? "show-default" : menuToggle ? "hide-box" : "show-box"}`} />
                    <div className={`menu-btn-bar ${menuToggle === "NONE" ? "show-default" : menuToggle ? "ham-ani-2" : "ham-ani-none none2"}`} />
                </div>
            </div>
            <MenuComponent show={menuToggle} setMenuToggle={setMenuToggle} setCurPage={props.setCurPage} />
            <Header
                globalTheme={props.globalTheme}
                setTheme={props.setTheme}
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}
                curPage={props.curPage}
                clockWrap={clockWrap}
                setClockWrap={setClockWrap}
                hour={hour}
                minute={minute}
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