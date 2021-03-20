import React, { useState } from 'react';
import BaseLayoutWrap from "./BaseLayoutStyle";
import Header from "./Header";

type Props = {
    children: JSX.Element;
}

function BaseLayout(props: Props) {
    const [globalTheme, setTheme] = useState(false)
    console.log(globalTheme)
    return (
        <BaseLayoutWrap theme={globalTheme}>
            <Header
                globalTheme={globalTheme}
                setTheme={setTheme}
            />
            {/* 임시 */}
            <div style={{
                display: "flex",
                justifyContent: "center",
                paddingTop: 90
            }}>
                <img alt="" src={`chacha-web-app/logo-${globalTheme ?
                    "black" : "white"}.png`} />
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