import styled from "styled-components";

export default styled.section`
  background-color: #deb4ff;
  padding: 10rem 10rem 0 10rem;
  .wrap {
    max-width: 1400px;
    margin: 0 auto;
    text-align: center;
  }
  .title-sub-wrap {
    //height: 100vh;
    display: flex;
    /* align-items: center; */
    justify-content: center;
  }
  .base-height {
    height: 700px;
  }
  .base-line {
    width: 2px;
    background-color: #ffffff;
  }
  .line-circle-wrap,
  .line-circle {
    border-radius: 100%;
  }
  .line-circle-wrap {
    width: 20px;
    height: 20px;
    border: 2px solid #ffffff;
    background-color: #deb4ff;
  }
  .line-circle {
    width: 10px;
    height: 10px;
    background-color: #ffffff;
  }

  .line-flat {
    height: 2px;
    width: 150px;
    background-color: #ffffff;
    position: absolute;
  }

  .line-flat.left {
    left: 20px;
  }
  .line-flat.right {
    right: 20px;
  }

  .desc-wrap {
    width: 300px;
    top: 22px;
    position: absolute;
    color: #ffffff;
    font-weight: bold;
  }
  .line-date {
    color: #ffffff;
    position: absolute;
    width: 150px;
    font-weight: bold;
  }
  .line-date.left {
    left: 170px;
  }
  .desc-wrap.left {
    left: 190px;
    text-align: left;
  }
  .line-date.right {
    right: 170px;
  }
  .desc-wrap.right {
    right: 190px;
    text-align: right;
  }
`;
