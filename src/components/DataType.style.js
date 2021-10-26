import styled from "styled-components";

export const DataType = styled.p`
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  color: #868686;
  line-height: 19px;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: ${(props => props.align)};
  margin: ${(props => props.margin)};
`