import React,{useState} from 'react';
import BaseLayoutWrap from "./BaseLayoutStyle";

type Props ={
    children:JSX.Element;
}

function BaseLayout(props:Props) {
    const [globalTheme,setTheme] = useState("black")

    return (
        <BaseLayoutWrap theme={globalTheme}>
            <div style={{padding:10}}>
                {props.children}
            </div>
            <div style={{margin:10}}>
                <button className="cur" onClick={()=>{
                    if(globalTheme==="black") {
                            setTheme("white")
                    }else{
                        setTheme("black")
                    }
                }}>theme change</button>
            </div>
        </BaseLayoutWrap>
    );
}

export default BaseLayout;