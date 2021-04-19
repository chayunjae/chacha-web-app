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
  .test-box {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .progress-ring__circle {
    transition: 0.6s stroke-dashoffset;
    transition-duration: 0.9s;
    transform: rotate(-90deg);
    transform-origin: 50% 25%;
    stroke-dasharray: 600, 600;
    /* stroke-dashoffset: 110; */
  }
  @media (max-width: 768px) {
    .title-box {
      position: relative;
      top: -20vw;
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
