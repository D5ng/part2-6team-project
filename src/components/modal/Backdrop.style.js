import styled from 'styled-components';

const StyledBackdrop = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 90;
`;

export default StyledBackdrop;
