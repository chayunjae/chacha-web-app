import styled from "styled-components";

export default styled.section<{ theme: boolean }>`
  text-align: center;
  .title-wrap {
    font-weight: bolder;
    font-size: 16vw;
    user-select: none;
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
    &:hover,
    &:active {
      transform: scale(1.2, 1.2);
    }
  }
  .start-el {
    flex: 1;
  }

  .m-auto {
    margin: 0 auto;
  }

  @media (max-width: 768px) {
    .contents-wrap {
      flex-direction: column;
      overflow-y: scroll;
      height: unset;
      width: 65vw;
    }
    .contents-list {
      flex-direction: column;
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
    .round-box {
      width: 75vw;
      height: 10vw;
    }
  }
`;
