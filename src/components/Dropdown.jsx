import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Dropdown = () => {

  return (
    <Wrapper>
      <li>
        <Link to='/service'>Service</Link>
      </li>
      <li>
        <Link to='/service-single'>Service Single</Link>
      </li>
      <li>
        <Link to='/portfolio'>Portfolio</Link>
      </li>
      <li>
        <Link to='/our-team'>Our Team</Link>
      </li>
      <li>
        <Link to='/blog'>Blog</Link>
      </li>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: absolute;
  top: 75px;
  background-color: #eff6f1;
  width: 185px;
  padding: 20px 20px 20px 5px;
  li {
    position: relative;
    padding: 8px 10px;
    font-size: 18px;
    font-weight: 500;
  }
`;
