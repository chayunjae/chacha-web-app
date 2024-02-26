import styled from "styled-components";
import WhiteLogo from "../images/logo-white.png"; //삭제 필요
import BlackLogo from "../images/logo-black.png";

export default styled.section`
  transition: all 0.3s ease;
  height: 100vh;
  .grad-trim {
    height: 200px;
    background: rgb(222, 180, 255);
    background: linear-gradient(
      0deg,
      rgba(222, 180, 255, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }
  .grad-trim.reverse {
    height: 100px;
    background: rgb(222, 180, 255);
    background: linear-gradient(
      180deg,
      rgba(222, 180, 255, 1) 0%,
      rgba(255, 255, 255, 1) 100%
    );
  }
  *::-webkit-scrollbar {
    display: none;
  }
  * {
    transition: all 0.5s ease;
  }
  .header-wrap {
    position: fixed;
    box-sizing: border-box;
    width: 100%;
    height: 50px;
    transition: all 0.3s ease;
    z-index: 10;
  }

  .header-wrap,
  .header-nav-wrap,
  .toggle-wrap {
    display: flex;
    align-items: center;
  }
  .header-logo {
    flex: 1;
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    background-size: 30px;
    background-repeat: no-repeat;
  }
  .header-logo_b {
    background-image: url(${BlackLogo});
  }
  .header-logo_w {
    background-image: url(${WhiteLogo});
  }
  .header-nav-wrap {
    flex: 2;
    justify-content: flex-end;
  }
  .header-icon {
    font-size: 1.25rem;
  }
  .header-icon.w {
    color: #ffffff;
  }

  .p-gb {
    background-color: #a570cf;
  }

  .header-anchor {
    height: 30px;
    line-height: 30px;
    font-size: 1.25rem;
    font-weight: 900;
    cursor: pointer;
  }
  .header-anchor a {
    text-decoration: none;
    color: #a570cf;
  }
  .header-nav-wrap.white .header-anchor a {
    color: #ffffff;
  }
  .anchor_trim {
    padding: 50px;
  }

  .top-btn {
    bottom: 2rem;
    right: 2rem;
    position: fixed;
    width: 65px;
    height: 65px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 100%;
    background-color: #fff;
    color: #000;
    text-decoration: none;
  }

  .section-title {
    font-size: 4rem;
    font-weight: bold;
  }
  .section-title.color-p {
    color: #a570cf;
  }
  .section-title.color-w {
    color: #ffffff;
  }
  .off {
    opacity: 0;
  }
  .on {
    opacity: 1;
  }
  // 메인 CSS

  .card {
    border-radius: 0.25rem;
    padding: 2rem;
    width: 100%;
    background-color: #ffffff;
  }
  .card.md {
    height: 300px;
  }

  .card.sm {
    height: 200px;
  }

  .card-shadow {
    box-shadow: 0rem 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
  }

  .box-2 {
    flex: 20%;
  }
  .box-3 {
    flex: 30%;
  }
`;
