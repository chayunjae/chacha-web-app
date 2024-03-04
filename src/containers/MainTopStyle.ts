import styled from "styled-components";

export default styled.section`
  .title-sub-wrap {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .title-sub {
    font-size: 10rem;
    font-weight: bold;
    color: #a570cf;
  }
  .custom-hr {
    height: 1.5px;
    width: 100%;
    background-color: #deb4ff;
    margin: 1rem 0;
  }
  .top-desc-wrap {
    margin-top: 1rem;
    left: 0;
    position: absolute;
    width: 100%;
    height: 130px;
  }
  .back_sub {
    color: #666666;
    z-index: 1;
  }
  .hide_opa {
    opacity: 0;
  }

  .top-desc-wrap:hover .hide_opa {
    opacity: 1;
    margin-top: 1.25rem;
    font-weight: bold;
  }
  .top-desc-wrap:hover .back_sub {
    color: #e9e9e9;
    z-index: -1;
  }

  .kor-desc {
    font-size: 1.25rem;
  }
  .eng-desc {
    font-size: 2rem;
  }
  /* h1 {
    font-size: 5rem;
    position: relative;
    transform: skew(var(--skew));
    transform: skew(var(--skew)) scale(var(--scale));
  }
  h1::after,
  h1::before {
    content: attr(data-text);
    position: absolute;
    width: 100%;
    transition: clip-path 30ms ease-in;
  }

  h1::before {
    left: 5px;
    text-shadow: 2px -2px red;
    clip-path: polygon(
      0 var(--t1),
      100% var(--t1),
      100% var(--b1),
      0 var(--b1)
    );
  }

  h1::after {
    left: -5px;
    text-shadow: -2px 2px skyblue;
    clip-path: polygon(
      0 var(--t2),
      100% var(--t2),
      100% var(--b2),
      0 var(--b2)
    );
  } */

  @media (max-width: 1300px) {
    .title-sub {
      font-size: 6.5rem;
    }
    .top-desc-wrap {
      height: 100px;
    }
    .top-desc-wrap:hover .hide_opa {
      margin-top: 0.9rem;
    }
    .kor-desc {
      font-size: 1rem;
    }
    .eng-desc {
      font-size: 1.5rem;
    }
  }
  @media (max-width: 800px) {
    .title-sub {
      font-size: 4rem;
    }
    .kor-desc {
      font-size: 0.8rem;
      padding: 0 1rem;
      word-break: keep-all;
    }
    .eng-desc {
      font-size: 1rem;
      padding: 0 1rem;
      word-break: keep-all;
    }
  }
`;
