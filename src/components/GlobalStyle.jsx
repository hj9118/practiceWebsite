import styled from 'styled-components';

const Button = styled.button`
  font-size: 20px;
  font-weight: bold;
  font-family: 'Roboto';
  border-radius: 16px;
  padding: 28px 39px;
`;

export const DefaultBtn = styled(Button)`
  background-color: #274c5b;
  color: #fff;
  :hover {
    border: 1px solid #274c5b;
    background-color: #fff;
    color: #274c5b;
    .arrow {
      color: #fff;
      transform: translate(5px);
      transition: all .2s ease 0s
    }
  }
  .arrow {
    background-color: #335b6b;
    border-radius: 50%;
    margin-left: 10px;
    vertical-align: text-top;
  }
`;
