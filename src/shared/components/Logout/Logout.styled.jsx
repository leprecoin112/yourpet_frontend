import styled from "@emotion/styled";

const LogoutBtn = styled.button`
  cursor: pointer;
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
  padding: 0;
  width: 100px;
  border: none;
  background: none;
  stroke: #54ADFF;

  font-family: ${({ theme }) => theme.fonts.main.medium};
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;

  color: ${({theme}) => theme.colors.gray}
`;


export { LogoutBtn };