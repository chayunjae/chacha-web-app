import styled from "styled-components";

export default styled.section`
  padding: 0 10rem;
  .wrap {
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
  }
  .form-wrap {
    height: 850px;
    position: relative;
    display: flex;
    justify-content: center;
  }
  .form-wrap .form-box,
  .form-wrap .form-box-back {
    width: 650px;
    height: 610px;
    margin: 0 auto;
    padding: 4rem 1rem;
    border-radius: 2rem;
  }
  .form-wrap .form-box {
    background-color: #ffffff;
  }
  .form-wrap .form-box-back {
    background-color: #deb4ff;
    transform: rotate(350deg);
  }
  .form-wrap .default-input,
  .form-wrap .default-textarea {
    font-family: "Arial";
  }
  .form-wrap .default-input,
  .form-wrap .default-textarea,
  .form-wrap .default-btn {
    width: 500px;
    box-sizing: border-box;
  }

  .form-wrap .default-input {
    border: 1px solid #dddddd;
    height: 40px;
    padding: 4px 8px;
    font-size: 1.15rem;
    transition: all 0.2s ease-in-out;
  }
  .form-wrap .default-textarea {
    border: 1px solid #dddddd;
    padding: 8px;
    resize: none;
    font-size: 1.15rem;
  }

  .form-wrap .default-input:hover,
  .form-wrap .default-textarea:hover,
  .form-wrap .default-input:focus,
  .form-wrap .default-input:focus-visible,
  .form-wrap .default-textarea:focus,
  .form-wrap .default-textarea:focus-visible {
    outline: 2px solid #deb4ff;
  }

  .form-wrap .default-btn {
    font-size: 1.25rem;
    padding: 0.7rem 1rem;
    border: none;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.15) 0rem 0.5rem 1rem !important;
    background-color: #ffffff;
    color: #a570cf;
    transition: all 0.2s ease-in-out;
  }
  .form-wrap .default-btn:hover {
    background-color: #a570cf;
    color: #ffffff;
  }
`;
