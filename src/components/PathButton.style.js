import styled from "styled-components";

export const PathButton = styled.path`
  border: solid white;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 6px;
  transform: rotate(${(props => props.transform)});
  -webkit-transform: rotate(${(props => props.transform)});
  margin: ${(props => props.margin)};
    `;