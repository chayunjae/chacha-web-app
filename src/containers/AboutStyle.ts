import styled from "styled-components";

export default styled.section<{ theme: boolean }>`
  text-align: center;
  .title-wrap {
    font-weight: bolder;
    font-size: 16vw;
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
`;
