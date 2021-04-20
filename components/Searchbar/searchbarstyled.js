import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  border: none;
  padding: 14px 0;
  text-indent: 5px;
  padding-left: 5px;
  &::placeholder {
    color: #b9bdcf;
    font-weight: 400;
    font-size: 12px;
    line-height: 14.06px;
  }
  &:focus {
      outline: none;
  }
`;
