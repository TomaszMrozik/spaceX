import styled from "styled-components";

export const PathButton = styled.button`
  border: solid #F4F6FA;
  border-width: 0 5px 5px 0;
  display: inline-block;
  background: none;
  padding: 6px;
  transform: rotate(${(props => props.transform)});
  -webkit-transform: rotate(${(props => props.transform)});
  margin: ${(props => props.margin)};
  :hover {
    cursor: pointer;
  }
    `;