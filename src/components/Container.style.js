import styled from "styled-components";

export const Container = styled.div`
  max-width: 1100px;
  height: ${(props => props.height)};
  display: flex;
  justify-content: ${(props => props.justifyContent)};
  align-items: ${(props => props.alignItems)};
  margin: 0 auto;
  flex-direction: ${(props => props.direction)};
`