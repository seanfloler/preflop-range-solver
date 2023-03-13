import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ButtonGrid } from '../components/ButtonGrid';
import NavigationButton from '../components/Navigation/NavigationButton';
import { positions } from '../models/positions';

const RFIVs3Bet: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = (position: string) => {
    navigate(`/rfi-vs-3bet/${position}`);
  };

  return (
    <Container>
      <ButtonGrid>
        {positions.map((position) => (
          <NavigationButton
            key={position}
            onClick={() => handleClick(position)}
            name={position}
          />
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

export default RFIVs3Bet;
