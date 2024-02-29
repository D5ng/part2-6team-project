import styled from 'styled-components';

const colors = {
  green: 'var(--green200)',
};

export const Section = styled.section`
  background-color: ${({ $bgColor }) => colors[$bgColor] || 'var(--white)'};
  min-height: calc(100vh - 63px);
`;

export const PaperWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 113px 0 0 0;
`;
