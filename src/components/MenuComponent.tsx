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
                    <div style={{
                        margin: "0.8em 0"
                    }}>
                        <span
                            className="cur"
                            onClick={() => {
                                props.setMenuToggle(false)
                                props.setCurPage("INDEX")
                                sessionStorage.HISTORY_PAGE = "INDEX"
                            }}
                            style={{
                                fontSize: "1.5em",
                                fontWeight: "bold",
                            }}>
                            HOME
                        </span>
                    </div>
                    <div style={{
                        margin: "0.8em 0"
                    }}>
                        <span
                            className="cur"
                            onClick={() => {
                                props.setMenuToggle(false)
                                props.setCurPage("ABOUT")
                                sessionStorage.HISTORY_PAGE = "ABOUT"
                            }}
                            style={{
                                fontSize: "1.5em",
                                fontWeight: "bold",
                            }}>
                            ABOUT
                        </span>
                    </div>
                    <div style={{
                        margin: "0.8em 0"
                    }}>
                        <span
                            className="cur"
                            onClick={() => {
                                props.setMenuToggle(false)
                                props.setCurPage("PROJECT")
                                sessionStorage.HISTORY_PAGE = "PROJECT"
                            }}
                            style={{
                                fontSize: "1.5em",
                                fontWeight: "bold",
                            }}>
                            PROJECT
                        </span>
                    </div>
                    <div style={{
                        margin: "0.8em 0"
                    }}>
                        <span
                            className="cur"
                            onClick={() => {
                                props.setMenuToggle(false)
                                props.setCurPage("CONTACT")
                                sessionStorage.HISTORY_PAGE = "CONTACT"
                            }}
                            style={{
                                fontSize: "1.5em",
                                fontWeight: "bold",
                            }}>
                            CONTACT
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MenuComponent;