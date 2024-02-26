import React, { useEffect, useRef, useState } from 'react'
import MainWrap from './MainTopStyle'
// type Props = {
//     isAct: "INDEX" | "ABOUT" | "PROJECT" | "CONTACT" | "ETC";
//     globalTheme: boolean;
// }



export default function MainTop() {


    return (
        <MainWrap>
            <div className='wrap title-sub-wrap'>
                <div>
                    <div className="title-sub cav-font_b">
                        CHA YUN JAE
                    </div>
                    <div className="title-sub cav-font_b">
                        PORTFOLIO
                    </div>
                    <div className='custom-hr' />
                    <div className='top-desc-wrap d-flex justify-content-center'>
                        <div className='d-flex justify-content-center'>
                            <div className='poor-font  position_a fs-1_25 hide_opa'>안녕하세요 풀 스택 웹 개발자 차윤재입니다.<br />
                                저는 직관적인고 역동적인 사용자 경험을 위해 노력하며,<br />
                                안정적이고 효율적인 시스템 및 서비스 구성을 위해 항상 노력하는 개발자입니다.</div>
                        </div>
                        <div className='d-flex justify-content-center'>
                            <div className='cav-font_b position_a fs-2 back_sub'>Hello I'm Cha Yun-jae, full-stack web developer.<br />
                                I'm striving for an intuitive and dynamic user experience and<br />
                                developers who always strive to create stable and efficient systems and services.</div>
                        </div>

                    </div>
                </div>
            </div>
        </MainWrap >
    )
}


// let interval;
// function glitch(element) {
//     let count = 0
//     interval = setInterval(() => {
//         // element
//         const skew = Math.random() * 20 - 10
//         // element::before
//         const top1 = Math.random() * 100
//         const btm1 = Math.random() * 100
//         // element::after
//         const top2 = Math.random() * 100
//         const btm2 = Math.random() * 100
// 
//         element.style.setProperty('--skew', `${skew}deg`)
//         element.style.setProperty('--t1', `${top1}%`)
//         element.style.setProperty('--b1', `${btm1}%`)
//         element.style.setProperty('--t2', `${top2}%`)
//         element.style.setProperty('--b2', `${btm2}%`)
//         element.style.setProperty('--scale', `1`)
// 
//         count++
// 
//         if (count % 15 === 0) {
//             const bigSkew = Math.random() * 180 - 90
//             element.style.setProperty('--skew', `${bigSkew}deg`)
//         }
// 
//         if (count % 30 === 0) {
//             const bigScale = 1 + Math.random() / 2
//             element.style.setProperty('--scale', `${bigScale}`)
//         }
//     }, 100)
// }
// useEffect(() => {
//     const conetnt1 = document.getElementById('content1')
//     const conetnt2 = document.getElementById('content2')
//     glitch(conetnt1)
//     glitch(conetnt2)
//     return () => {
//         clearInterval(interval)
//     }
// })