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
            <div className="main-wrap">
                {props.children}
            </div>
        </BaseLayoutWrap>
    );
}

export default BaseLayout;