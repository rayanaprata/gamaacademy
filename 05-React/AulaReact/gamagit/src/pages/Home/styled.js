import styled from "styled-components";

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Input = styled.input`
  border: 1px solid #ddd;
  height: 1.5rem;
  padding: 0 0.5rem;
  border-radius: 0.25rem 0 0 0.25rem;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }
`;

export const Button = styled.button`
  height: 1.63rem;
  border: 1px solid #ddd;
  background: #f7f7f7;
  color: #333;
  border-radius: 0 0.25rem 0.25rem 0;
  cursor: pointer;

  &:focus,
  &:active {
    outline: none;
    box-shadow: none;
  }

  &:hover {
    background: #333;
    color: #f7f7f7;
  }
`;

export const ErrorMessage = styled.span`
  display: block;
  font-size: 0.65rem;
  color: red;
  font-weight: bold;
  margin-top: 1rem;
`;
