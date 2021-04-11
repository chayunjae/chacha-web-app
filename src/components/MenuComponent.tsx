import React from 'react';

type Props = {
    show: "NONE" | boolean;
    setMenuToggle: (bool: "NONE" | boolean) => void
    setCurPage: (page: "INDEX" | "ABOUT" | "PROJECT" | "CONTACT" | "ETC") => void;
}

function MenuComponent(props: Props) {
    return (
        <div className={`menu-modal-wrap ${props.show ===
            "NONE" ? "show-default" : props.show ? "show-box" : "hide-box"}`}>
            <div className="pd-20 menu-nav-wrap">
                <div style={{ width: '100%', height: '80%' }}>
                    <div className="cur" onClick={() => {
                        props.setMenuToggle(false)
                        props.setCurPage("INDEX")
                    }}><h2>HOME</h2></div>
                    <div className="cur" onClick={() => {
                        props.setMenuToggle(false)
                        props.setCurPage("ABOUT")
                    }}><h2>ABOUT</h2></div>
                    <div className="cur" onClick={() => {
                        props.setMenuToggle(false)
                        props.setCurPage("PROJECT")
                    }}><h2>PROJECT</h2></div>
                    <div className="cur" onClick={() => {
                        props.setMenuToggle(false)
                        props.setCurPage("CONTACT")
                    }}><h2>CONTACT</h2></div>
                </div>

            </div>
        </div>
    );
}

export default MenuComponent;