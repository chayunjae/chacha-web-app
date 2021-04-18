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
`;
