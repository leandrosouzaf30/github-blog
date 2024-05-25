import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1rem;
  margin-bottom: 4rem;
  input {
    flex: 1;
    border-radius: 0.5rem;
    border: ${props => props.theme["base-border"]} solid 1px;
    background: ${props => props.theme["base-input"]};
    color: ${props => props.theme["base-text"]};
    padding: 1rem;
    &::placeholder {
      color: ${props => props.theme["base-text"]};
    }
  }
  `;