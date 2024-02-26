import styled from "styled-components";

export default styled.section`
  .section-wrap {
    background-color: #deb4ff;
    padding: 10rem;
    height: 800px;
  }

  .wrap {
    max-width: 1300px;
    margin: 0 auto;
    text-align: center;
  }
  .slide-wrap {
    height: 600px;
    overflow: hidden;
    position: relative;
  }

  .slide-btn-wrap {
    z-index: 3;
    top: 240px;
  }
  .slide-box {
    z-index: 2;
  }
  .slide-btn-wrap .slide-btn-box .prev-btn,
  .slide-btn-wrap .slide-btn-box .next-btn {
    border-radius: 100%;
    background-color: #ffffff;
    width: 30px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }

  .slide-btn-box.off .prev-btn {
    cursor: default;
  }

  .prev-btn-wrap {
    left: -40px;
  }
  .next-btn-wrap {
    right: -40px;
  }
  .slide-item-wrap {
    width: 460px;
    height: 460px;
  }
  .slide-item {
    transform: scale(0.8);
    cursor: pointer;
    overflow: hidden;
    width: 300px;
    height: 300px;
  }
  .slide-item.cur {
    transform: scale(1.1);
  }
  .slide-item:hover {
    transform: scale(0.9);
  }
  .slide-item.cur:hover {
    transform: scale(1.2);
  }

  .round-act {
    transition-delay: 4s;
    transition: all 0.15s ease;
    width: 0px !important;
    height: 0px !important;
    border-radius: 100%;
    padding: 0;

    /* filter: blur(0.6rem); */
    /* animation-name: showcard;
    animation-duration: 0.6s;
    animation-timing-function: ease;
    animation-fill-mode: forwards; */
  }

  .slide-item.round-act .item-contents {
    opacity: 0;
  }

  .overlay-wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 4;
    opacity: 0;
    background-color: rgba(0, 0, 0, 0.7);
  }

  .slide-item.cur:hover .overlay-wrap {
    opacity: 1;
  }

  .act-card-wrap {
    z-index: -1;
    width: 100%;
    height: 100%;
    top: 0;
  }
  .act-card {
    padding: 0;
    width: 0px;
    height: 0px;
    border-radius: 100%;
    background-color: #ffffff;
  }

  .act-card-wrap.big-panel {
    z-index: 10;
    animation-name: showcardback;
    animation-delay: 0.5s;
    animation-duration: 0.3s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  .act-card-wrap.big-panel .act-card {
    animation-name: showcard;
    animation-delay: 0.5s;
    animation-duration: 0.15s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
  .act-card-wrap.none-panel {
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.25);
    animation-name: hidecardback;
    animation-delay: 0.5s;
    animation-duration: 0.2s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
  .act-card-wrap.none-panel .act-card {
    padding: 2rem;
    width: 90%;
    height: 90%;
    border-radius: 30px;
    animation-name: hidecard;
    animation-duration: 0.25s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }

  @keyframes showcardback {
    100% {
      background-color: rgba(0, 0, 0, 0.25);
    }
  }
  @keyframes hidecardback {
    100% {
      z-index: -1;
      background-color: transparent;
    }
  }

  @keyframes showcard {
    30% {
      filter: blur(1rem);
    }
    100% {
      padding: 2rem;
      width: 85%;
      height: 90%;
      border-radius: 20px;
    }
  }
  @keyframes hidecard {
    30% {
      filter: blur(1rem);
    }
    100% {
      padding: 0;
      width: 0%;
      height: 0%;
      border-radius: 100%;
    }
  }

  .square_dot {
    width: 20px;
    height: 20px;
    background-color: #deb4ff8f;
    position: absolute;
    left: -13px;
    top: -8px;
    z-index: 1;
    border-radius: 0.25rem;
  }
  .contents-title {
    position: relative;
    z-index: 2;
  }
  .more-btn-wrap {
    height: 100%;
  }
  .more-btn {
    color: #a570cf;
    background-color: #ffffff;
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
  }

  .act-card-content,
  .close-btn {
    opacity: 0;
  }
  .act-card-content {
    height: 100%;
  }

  .close-btn {
    right: -30px;
    top: 5px;
    cursor: pointer;
    color: #ffffff;
  }

  .act-card-wrap.big-panel .act-card .act-card-content,
  .act-card-wrap.big-panel .act-card .close-btn {
    animation-name: show_default;
    animation-delay: 0.7s;
    animation-duration: 0.15s;
    animation-timing-function: ease-in-out;
    animation-fill-mode: forwards;
  }
  .act-card-wrap.none-panel .act-card .act-card-content,
  .act-card-wrap.none-panel .act-card .close-btn {
    opacity: 0;
  }

  @keyframes show_default {
    100% {
      opacity: 1;
    }
  }
  @keyframes hide_default {
    100% {
      opacity: 0;
    }
  }

  .act-project-slide-wrap {
    height: 600px;
    overflow: hidden;
    position: relative;
  }

  .act-project-slide-box {
    z-index: 3;
  }
  .act-project-slide-item-wrap {
    width: 900px;
    height: 650px;
    padding: 10px;
  }
  .act-project-slide-item {
    overflow: hidden;
    width: 100%;
    height: 100%;
  }
  .proj-title {
    font-size: 1.8rem;
    font-weight: bold;
  }
  .proj-date {
    font-weight: bold;
    color: #999999;
  }
  .proj-detail {
    font-size: 1.1rem;
  }
`;
