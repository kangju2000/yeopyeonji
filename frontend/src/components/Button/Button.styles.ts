import styled, { css } from 'styled-components';

const colorCSS = {
  primary: css`
    background-color: #007fff;
    color: white;
  `,
  secondary: css`
    background-color: #4fa6ff;
    color: white;
  `,
};

export const Button = styled.button<{ color: 'primary' | 'secondary' }>`
  width: 100%;
  padding: 16px 0px;
  border: none;
  border-radius: 8px;
  ${({ color }) => colorCSS[color]}
`;
