import React from 'react';
import { Link } from 'react-router-dom';
import * as S from '@Components/ui/PrimaryComponent.style';

/**
 * PrimaryLink 컴포넌트
 * @component
 * @param {Object} props - React 컴포넌트 props
 * @param {string|React.ReactNode} props.children - 링크 내용
 * @param {string} props.url - 이동할 URL
 * @returns {React.ReactElement} - PrimaryLink 컴포넌트
 */
function PrimaryLink({ children, url }) {
  return (
    <S.PrimaryLink as={Link} to={url}>
      {children}
    </S.PrimaryLink>
  );
}

export default PrimaryLink;
