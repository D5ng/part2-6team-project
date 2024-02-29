import styled from 'styled-components';

const colors = {
  green: 'var(--green200)',
};

export const Section = styled.section`
  background-color: ${({ $bgColor }) => colors[$bgColor] || 'var(--gray100)'};
`;

export const PaperWrapper = styled.div`
  width: 100%;
  max-width: 1200px;
  margin-left: auto;
  margin-right: auto;
  padding: 113px 0 246px 0;
  display: grid;
  grid-template-columns: repeat(3, 384px);
  gap: 24px;
`;
