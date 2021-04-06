import styled from "styled-components";

export default styled.section<{ theme: boolean }>`
  text-align: center;
  .de-m {
    display: none;
  }
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
  .contents-wrap {
    height: 0;
    padding: 0;
    overflow-x: scroll;
    margin: 0 auto;
    display: flex;
    width: 85vw;
    &::-webkit-scrollbar {
      display: none;
    }
  }
  .contents-list {
    display: flex;
    align-items: center;
    opacity: 0;
    height: 100%;
  }
  .hide-wrap {
    display: none;
    height: 0vw;
  }
  .round-box {
    display: flex;
    transition: all 0.1s ease;
    justify-content: center;
    align-items: center;
    background-color: ${({ theme }) =>
      theme === true ? `var(--dark-bg-color)` : `var(--white-bg-color)`};
    color: ${({ theme }) =>
      theme !== true ? `var(--white-font-color)` : `var(--dark-font-color)`};
    font-size: 2vw;
    font-weight: bolder;
    width: 20vw;
    height: 30vw;
    margin: 0 2vw;
    box-shadow: 0 3px 7px
      ${({ theme }) =>
        theme === true ? `rgba(0,0,0,0.6)` : `rgba(255,255,255,0.5)`};
    cursor: pointer;
    &:hover {
      /* transform: scale(1.2, 1.2); */
    }
  }
  .project-card-action {
    box-shadow: unset;
    border-radius: 100%;
    width: 20vw;
    height: 20vw;
    &:hover {
      transform: unset;
    }
  }
  .start-el {
    flex: 1;
  }

  .m-auto {
    margin: 0 auto;
  }
  .blur-wrap {
    width: 10vw;
    height: calc(100vh - 8vh);
    position: absolute;
    z-index: 30;
    background-color: ${({ theme }) =>
      theme !== true ? `var(--dark-bg-color)` : `var(--white-bg-color)`};
    filter: blur(6px);
    &.browser {
      right: 0;
    }
  }
  @media (max-width: 768px) {
    .de-m {
      display: block;
    }
    .de-b {
      display: none;
    }
    .title-wrap {
      padding-top: 0;
      height: 100vh;
    }
    .contents-wrap {
      flex-direction: column;
      overflow-y: scroll;
      height: unset;
      width: 90vw;
    }
    .contents-list {
      flex-direction: column;
      flex: 1;
      height: unset;
    }
    .round-b0x {
      font-size: 6vw;
    }
    .m-auto {
      margin: 3vw auto;
    }

    .start-el {
      margin-bottom: 3vw;
    }
    .blur-wrap {
      width: 100%;
      height: 10vh;
      background-color: ${({ theme }) =>
        theme !== true ? `var(--dark-bg-color)` : `var(--white-bg-color)`};
      filter: blur(6.5px);
      position: absolute;
      z-index: 30;
      margin-top: -6vw;
    }
    .round-box {
      width: 75vw;
      height: 25vh;
      margin: 3vw 0;
      font-size: 6vw;
      &:hover,
      &:active {
        transform: scale(1.2, 1.2);
      }
    }
    .project-card-action {
      border-radius: 0;
      width: 20vw;
      height: 20vw;
      font-size: 3vw;
      &:hover {
        transform: unset;
      }
    }
  }
`;
