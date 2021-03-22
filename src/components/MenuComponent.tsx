import React from 'react';

type Props = {
    show: boolean;
}

function MenuComponent(props: Props) {
    return (
        <div className={`menu-modal-wrap ${props.show ? "show-box" : "hide-box"}`}>
            <div className="pd-20">
                <h1>MENU.</h1>
                <h2>PROJECT.</h2>
                <h2>ETC.</h2>
            </div>
        </div>
    );
}

export default MenuComponent;