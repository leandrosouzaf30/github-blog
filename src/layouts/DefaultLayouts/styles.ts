import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 90rem;
  margin: 5rem auto;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0 10.5rem;

  background: ${(props) => props.theme['background']};
  display: flex;
  flex-direction: column;
  `