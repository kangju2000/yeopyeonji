import styled from 'styled-components';

export const Home = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const Header = styled.header`
  height: 66px;
  text-align: center;
  margin-bottom: 10px;
  background: url('src/assets/logo.png') no-repeat center;
`;

export const ButtonBox = styled.div`
  display: flex;
  justify-content: space-between;
  column-gap: 10px;
`;

export const InputBox = styled.input`
  width: 100%;
  height: 100%;
  margin: 10px 0px;
  padding: 16px;
  border: 1px solid #e7ecf3;
  border-radius: 8px;
  background-color: #f8fafd;
`;
