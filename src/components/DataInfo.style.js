import styled from "styled-components";

export const DataInfo = styled.p`
  font-size: ${(props => props.fontSize)};
  font-style: normal;
  font-weight: ${(props => props.fontWeight)};
  line-height: 40px;
  letter-spacing: 0;
  text-align: left;
  color: #FFFFFF;
  margin: ${(props => props.margin)};
`