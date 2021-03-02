import styled from "styled-components";

interface IProps {
  center?: boolean;
}

export const Title = styled.h3<IProps>`
  ${({ center }) => center && `text-align: center;`}
  padding: 1.5rem;
`;
