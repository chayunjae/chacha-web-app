import styled from "styled-components";
import WhiteLogo from "../images/logo-white.png";
import BlackLogo from "../images/logo-black.png";

export default styled.section<{ theme: boolean }>`
  transition: all 0.3s ease;
  height: 100vh;
  background-color: ${({ theme }) =>
    theme === true ? `var(--white-bg-color)` : `var(--dark-bg-color)`};
  color: ${({ theme }) =>
    theme === true ? `var(--white-font-color)` : `var(--dark-font-color)`};
  // 헤더 CSS
  .header-wrap {
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
  }
  .header-wrap,
  .header-nav-wrap,
  .toggle-wrap {
    display: flex;
    align-items: center;
  }
  .header-logo {
    flex: 1;
    height: 30px;
    transition: all 0.3s ease;
    background-image: ${({ theme }) =>
      theme === true ? `url(${BlackLogo})` : `url(${WhiteLogo})`};
    background-size: 30px;
    background-repeat: no-repeat;
  }
  .header-nav-wrap {
    flex: 2;
    justify-content: flex-end;
  }
  .header-icon {
    font-size: 1.25rem;
  }
  .toggle-wrap {
    width: 35px;
    height: 20px;
    border-radius: 30px;
    transition: all 0.3s ease;
    background-color: ${({ theme }) =>
      theme === true
        ? `var(--white-toggle-bg-color)`
        : `var(--dark-toggle-bg-color)`};
    overflow: hidden;
    padding: 0 1px;
    margin-left: 15px;
  }
  .toggle-dot {
    width: 18px;
    height: 18px;
    position: relative;
    left: ${({ theme }) => (theme === true ? "0px" : "17px")};
    border-radius: 100px;
    transition: all 0.3s ease;
    background-color: #fff;
    box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.7);
  }
  .hamberger-wrap {
    position: fixed;
    z-index: 20;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    height: 50px;
    right: 0;
  }
  .menu-wrap {
    display: flex;
    width: 25px;
    height: 30px;
    margin-right: 15px;
    flex-direction: column;
    justify-content: center;
  }
  .menu-btn-bar {
    width: 100%;
    height: 4px;
    transition: all 0.3s ease;
    background-color: ${({ theme }) =>
      theme === true ? `var(--dark-bg-color)` : `var(--white-bg-color)`};
    margin-bottom: 5px;
  }
  .menu-btn-bar:last-child {
    margin-bottom: 0px;
  }

  .menu-modal-wrap {
    position: fixed;
    opacity: 0;
    z-index: 0;
    transition: all 0.3s ease;
    background-color: ${({ theme }) =>
      theme === true
        ? `var(--dark-menu-bg-color)`
        : `var(--white-menu-bg-color)`};
    backdrop-filter: blur(7px);
    color: var(--white-font-color);
    width: 100%;
    height: 100%;
    &.show-default {
      display: none;
    }
  }
  .delay-view {
    opacity: 0;
    transition-delay: all 0.6s ease;
    position: absolute;
    opacity: 0;
    z-index: -1;
  }

  .menu-nav-wrap {
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }

  .clock {
    display: flex;
    height: 30px;
    line-height: 35px;
    margin: 0 15px;
    padding: 0 10px;
    transition: all 0.4s ease;
    &:hover {
      background-color: ${({ theme }) =>
        theme === true ? `var(--gray-w-bg-color)` : `var(--gray-b-bg-color)`};
      backdrop-filter: blur(7px);
      -webkit-backdrop-filter: blur(7px);
      border-radius: 6px;
    }
  }

  .clock-box {
    background-color: ${({ theme }) =>
      theme === true ? `var(--gray-w-bg-color)` : `var(--gray-b-bg-color)`};
    position: fixed;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 16vw;
  }
  // 메인 CSS
  .main-wrap {
    padding-top: 50px;
  }
`;
