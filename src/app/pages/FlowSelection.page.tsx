import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { ButtonGrid } from '../components/ButtonGrid';
import NavigationButton from '../components/Navigation/NavigationButton';
import BackButton from '../components/BackButton';
import { FaArrowLeft } from 'react-icons/fa';
import { Box } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

interface Props {
  routePath: string;
  flows: string[];
}

const FlowSelectionPage: React.FC<Props> = ({ routePath, flows }) => {
  const navigate = useNavigate();

  const handleClick = React.useCallback(
    (flow: string) => {
      navigate(`${routePath}/${flow.replace(/ /g, '_')}`);
    },
    [navigate, routePath]
  );

  const backPath = React.useCallback(() => {
    const path = routePath.split('/');
    path.pop();
    return path.length === 1 ? '/Home' : path.join('/');
  }, [routePath]);

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
        }}
      >
        <BackButton to={backPath()}>
          <FaArrowLeft />
          BACK
        </BackButton>
      </Box>
      <ButtonGrid>
        {flows.map((flow) => (
          <NavigationButton
            key={flow}
            onClick={() => handleClick(flow)}
            name={flow}
          />
        ))}
      </ButtonGrid>
    </Container>
  );
};

export default FlowSelectionPage;
