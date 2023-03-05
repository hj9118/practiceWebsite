import React from 'react';
import styled from 'styled-components';

const Guide = () => {
  return (
    <>
      <Banner> Style Guide</Banner>

    </>
  );
};

const Banner = styled.div`
  width: 100vw;
  height: 469px;
  background-color: #FAFAFA;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 50px;
  font-weight: 900;
  color: #274C5B;
`;

export default Guide;
