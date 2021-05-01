import styled from "styled-components";

export default styled.section<{ theme: boolean }>`
  text-align: center;
  .title-wrap {
    font-weight: bolder;
    font-size: 16vw;
    user-select: none;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-top: 50px;
    height: calc(100vh - 50px);
  }
  .title-line {
    height: 3px;
    width: 0;
    margin: 0 auto;
    background-color: ${({ theme }) =>
      theme === true ? `var(--dark-bg-color)` : `var(--white-bg-color)`};
    position: relative;
    top: -5vw;
  }
  .introduce-wrap {
    padding: 0 5vw;
    height: 0;
    overflow-y: scroll;
  }
  .skill-box {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    perspective: 200vw;
  }
  .center-box {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .panel {
    position: relative;
    width: 90vw;
    height: 80vh;
    text-align: center;
    transition: transform 0.8s;
    transform-style: preserve-3d;
    display: flex;
    align-items: center;
    justify-content: center;
    &.show-career {
      transform: rotateY(180deg);
    }
    &.show-skill {
      transform: rotateY(0deg);
    }
  }
  .panel-skill,
  .panel-career {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  /* .panel-skill {
  } */
  .panel-career {
    background-color: rgba(255, 255, 255, 0.05);
    transform: rotateY(180deg);
  }
  .skill-title {
    font-size: 4vw;
    margin-top: 0.3vw;
    line-height: 1.3;
  }
  .career-title {
    font-size: 8vw;
  }
  .skill-wrap {
    width: 70vw;
    height: 5vh;
    margin: 1vw 0;
    display: flex;
    .label {
      flex: 1;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-weight: 500;
      font-size: 0.8rem;
    }
    .percentage {
      flex: 5;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      background-color: ${({ theme }) =>
        theme === true ? `var(--dark--per-color)` : `var(--white--per-color)`};
    }
  }
  .progress-ring__circle {
    transition: 0.6s stroke-dashoffset;
    transition-duration: 0.9s;
    transform: rotate(-90deg);
    transform-origin: 50% 25%;

    /* stroke-dashoffset: 110; */
  }
  @media (max-width: 768px) {
    .title-box {
      position: relative;
      top: -20vw;
    }
    .skill-title {
      font-size: 8vw;
      margin-bottom: 3vw;
    }
    .skill-wrap {
      width: 90vw;
      margin: 2vw 0;
      height: 4.5vh;
      .label {
        min-width: 30vw;
      }
    }
  }
`;

export const Pfill = styled.div<{ per: number }>`
  width: ${({ per }) => (per ? per : "0")}%;
  height: 100%;
  border-radius: 0 4px 4px 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  .per-val {
    margin-right: 1vw;
  }
  @media (max-width: 768px) {
    .per-val {
      margin-right: 3vw;
    }
  }
`;

export const ScrollNotice = styled.section<{
  isShow: boolean;
  isPage: boolean;
  isClick?: boolean;
  theme: boolean;
  topValue: number;
}>`
  ${({ isShow, isPage }) =>
    isPage ? (isShow ? `opacity:1;` : `opacity:0;`) : `opacity:0;`}
  transition: all 0.4s ease-in;
  font-size: 2vw;
  position: fixed;
  bottom: ${({ topValue }) => (topValue === 0 ? "4vh" : "100vh")};
  z-index: ${({ isClick, isShow }) => (isClick ? (isShow ? 2 : -1) : -1)};
  display: flex;
  justify-content: center;
  width: calc(100vw - 10vw);

  .arrow {
    border-bottom: 3px solid;
    border-right: 3px solid;
    border-color: ${({ theme }) =>
      theme === true ? `var(--dark-bg-color)` : `var(--white-bg-color)`};
    transition: all 0.2s linear;
    width: 1.2vw;
    height: 1.2vw;
    transform: rotate(45deg);
    position: relative;
    animation-name: bounsani;
    animation-duration: 0.4s;
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }
  @media (max-width: 768px) {
    .click-text {
      font-size: 5vw;
    }
  }
`;

export const ParallaxFirst = styled.section<{
  isShow: boolean;
  topValue: number;
}>`
  ${({ isShow }) => (isShow ? `display: flex;` : `display: none;`)}
  transition: all 0.4s ease-in;
  font-size: 30vw;
  position: fixed;
  top: ${({ topValue }) => (topValue === 0 ? "0" : "-" + topValue + "vh")};
  z-index: -1;
  height: 100vh;
  align-items: center;
`;

export const ParallaxSecond = styled.section<{
  isShow: boolean;
  topValue: number;
}>`
  ${({ isShow }) => (isShow ? `display: flex;` : `display: none;`)}
  transition: all 0.3s ease-in-out;
  position: fixed;
  z-index: -1;
`;

export const ParallaxThird = styled.section<{
  isShow: boolean;
  topValue: number;
}>`
  ${({ isShow }) => (isShow ? `display: flex;` : `display: none;`)}
  transition: all 0.4s ease-in-out;
  position: fixed;
  top: ${({ topValue }) => (topValue === 0 ? "0" : "-" + topValue + "vh")};
  z-index: -1;
  width: calc(100vw - 10vw);
  height: 100vh;
  justify-content: center;
  align-items: center;
  .brdw {
    /* border: 1px solid #fff; */
  }
  .disf {
    display: flex;
  }
  .flex1 {
    flex: 1;
  }
  .flex1-3 {
    flex: 1.3;
  }
  .flex1-5 {
    flex: 1.5;
  }
  .flex2 {
    flex: 2;
  }
  .flex3 {
    flex: 3;
  }
  .flex4 {
    flex: 4;
  }
  .mb-1 {
    margin-bottom: 1vw;
  }
  .text-card {
    position: fixed;
    transition: all 0.4s ease-in-out;
    &.desc-first {
      font-size: 15vw;
      bottom: 0;
      right: 5vw;
    }
    &.desc-myself {
      text-align: start;
      font-size: 2.4vw;
      bottom: 23vw;
      left: 5vw;
    }
    &.desc-lets {
      font-size: 4vw;
      bottom: 16vw;
      left: 5vw;
    }
    &.desc-for {
      font-size: 3.1vw;
      bottom: 45vw;
      right: 5vw;
    }
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const ParallaxFourth = styled.section<{
  isShow: boolean;
  topValue: number;
}>`
  display: none;
  @media (max-width: 768px) {
    ${({ isShow }) => (isShow ? `display: flex;` : `display: none;`)}
    transition: all 0.4s ease-in-out;
    position: fixed;
    top: ${({ topValue }) => (topValue === 0 ? "-5vh" : "-" + topValue + "vh")};
    z-index: -1;
    width: calc(100vw - 10vw);
    height: 100vh;
    justify-content: center;
    align-items: center;
    .brdw {
      /* border: 1px solid #fff; */
    }
    .disf {
      display: flex;
    }
    .flex1 {
      flex: 1;
    }
    .flex1-3 {
      flex: 1.3;
    }
    .flex1-5 {
      flex: 1.5;
    }
    .flex2 {
      flex: 2;
    }
    .flex3 {
      flex: 3;
    }
    .flex4 {
      flex: 4;
    }
    .mb-1 {
      margin-bottom: 1vw;
    }
    .text-card {
      position: fixed;
      transition: all 0.4s ease-in-out;
      &.desc-first {
        font-size: 15vw;
        bottom: 0;
        right: 5vw;
      }
      &.desc-myself {
        text-align: start;
        font-size: 2.4vw;
        bottom: 23vw;
        left: 5vw;
      }
      &.desc-lets {
        font-size: 4vw;
        bottom: 16vw;
        left: 5vw;
      }
      &.desc-for {
        font-size: 3.1vw;
        bottom: 45vw;
        right: 5vw;
      }
    }
  }
`;

export const ParallaxStar = styled.div<{
  isShow: boolean;
  theme: boolean;
}>`
  ${({ isShow }) => (isShow ? `display: flex;` : `display: none;`)}
  transition: all 0.1s linear;
  position: fixed;
  .star-bg {
    background-color: ${({ theme }) =>
      theme === true ? `var(--dark-bg-color)` : `var(--white-bg-color)`};
  }
`;

export const SkillStackSvg = styled.svg`
  flex: 1;
  /* height: 25vw; */
`;

export const StackCircle = styled.circle<{
  pagesetData: number;
}>`
  stroke: #fff;
  stroke-width: 10;
  stroke-dasharray: 600;
  stroke-dashoffset: ${({ pagesetData }) => pagesetData};
  stroke-linecap: round;
  fill: transparent;
  cy: 25%;
  cx: 25%;
  r: 7vw;
`;
