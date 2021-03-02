import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 1rem;

  @media (max-width: 450px) {
    .ui.card {
      box-shadow: none;
      width: 100%;
    }
  }
`;
