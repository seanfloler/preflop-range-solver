import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ButtonGrid } from '../components/ButtonGrid';
import { pages } from '../models/pages';
import NavigationButton from '../components/Navigation/NavigationButton';

const FacingRFI: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (page: string) => {
    navigate(`/${page}`);
  };

  return (
    <Container>
      <ButtonGrid>
        {Object.keys(pages).map((page) => (
          <NavigationButton key={page} onClick={() => handleClick(page)} name={pages[page]}/>
        ))}
      </ButtonGrid>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default FacingRFI;
