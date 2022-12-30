import styled from "styled-components";

export const Container = styled.header`
  background: #d73035;
  height: 198px;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  max-width: 1216px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  & .page-details {
    h1,
    h2 {
      color: #ffffff;
    }
    h1 {
      font-size: 32px;
      margin-bottom: 6px;
    }
    h2 {
      font-weight: 400;
      font-size: 16px;
      opacity: 0.9;
    }
  }
`;
