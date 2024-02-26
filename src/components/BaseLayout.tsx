import React, { useEffect, useState } from 'react';
import BaseLayoutWrap from "./BaseLayoutStyle";
import Header from "./Header";

type Props = {
    children: JSX.Element;
    globalTheme: boolean;
    setTheme: (bool: boolean) => void;
}

function BaseLayout(props: Props) {
    const [onTitle1, setOnTitle1] = useState("off");
    const [menuToggle, setMenuToggle] = useState<"NONE" | boolean>("NONE")

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        window.scrollY >= 100 && setOnTitle1("on")
        window.scrollY < 100 && setOnTitle1("off")
    };

    return (
        <BaseLayoutWrap>
            <Header
                globalTheme={props.globalTheme}
                setTheme={props.setTheme}
                menuToggle={menuToggle}
                setMenuToggle={setMenuToggle}

            />
            <div>
                {props.children}
            </div>
            <a href='#top' className={`poor-font fw-bold fs-1_25 top-btn card-shadow ${onTitle1}`}>TOP</a>
        </BaseLayoutWrap>
    );
}

export default BaseLayout;