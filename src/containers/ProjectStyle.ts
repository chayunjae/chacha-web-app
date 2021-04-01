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
    /* border: 1px solid #fff; */
    //PIN 위치 표시 보더
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
    justify-content: center;
    align-items: center;
    background-color: #fff;
    font-size: 2vw;
    font-weight: bolder;
    color: #000;
  }
  .round {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #fff;
    font-size: 2vw;
    font-weight: bolder;
    color: #000;
  }
  .round-box {
    width: 8.5vw;
    height: 8.5vw;
  }
  .start-el,
  .end-el {
    flex: 1;
    .round {
      width: 8.5vw;
      height: 8.5vw;
    }
  }
  .prev-el,
  .next-el {
    flex: 2;
    .round {
      width: 15vw;
      height: 15vw;
    }
  }
  .center-el {
    flex: 3;
    .round {
      width: 26vw;
      height: 26vw;
    }
  }
  .start-el,
  .prev-el,
  .center-el,
  .next-el,
  .end-el {
    .round {
      border: 1px solid #fff;
      border-radius: 100%;
    }
  }
  .m-auto {
    margin: 0 auto;
  }

  @media (max-width: 1100px) {
    .contents-wrap {
      overflow-y: hidden;
    }
    .contents-list {
      flex-direction: column;
    }
    .round {
      font-size: 6vw;
    }
    .m-auto {
      margin: 3vw auto;
    }
    .start-el,
    .end-el {
      .round {
        width: 25vw;
        height: 25vw;
      }
    }
    .prev-el,
    .next-el {
      .round {
        width: 40vw;
        height: 40vw;
      }
    }
    .center-el {
      .round {
        width: 70vw;
        height: 70vw;
      }
    }
  }
`;
