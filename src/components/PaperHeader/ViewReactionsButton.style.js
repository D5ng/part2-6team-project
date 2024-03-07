import styled from 'styled-components';

export const ViewReactionsContainer = styled.div`
  position: relative;
`;

export const ViewReactionsButton = styled.button`
  width: 36px;
  height: 36px;
  padding: 6px;
  margin: 0 8px 0 2px;
  position: relative;
  img {
    width: 24px;
    height: 24px;
  }
`;

export const ReactionsWrapper = styled.div`
  z-index: 9999;
  visibility: ${({ hidden }) => (hidden ? 'hidden' : 'visible')};
  padding: 24px;
  border-radius: 8px;
  border: 1px solid var(--gray300);
  box-shadow: 0px 2px 12px 0px rgba(0, 0, 0, 0.08);
  background: var(--white);
  position: absolute;
  top: calc(100% + 12px);
  right: 20px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;
`;
