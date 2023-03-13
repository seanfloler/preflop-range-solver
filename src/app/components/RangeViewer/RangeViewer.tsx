import React, { useState } from 'react';
import styled from 'styled-components';
import { FaArrowLeft } from 'react-icons/fa';
import BackButton from '../BackButton';
import RangeViewerButtons from './RangeViewerButtons';
import { Box } from '@mui/material';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  position: relative;
  gap: 16px;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

interface Props {
  imageSrc: string;
  alt: string;
  ranges: string[];
  parentRoute: string;
}

const RangeViewer: React.FC<Props> = ({
  imageSrc,
  alt,
  ranges,
  parentRoute,
}) => {
  const [range, setPosition] = useState(alt);

  const handlePreviousRange = () => {
    const index = ranges.indexOf(range);
    const previousIndex = index === 0 ? ranges.length - 1 : index - 1;
    setPosition(ranges[previousIndex]);
  };

  const handleNextRange = () => {
    const index = ranges.indexOf(range);
    const nextIndex = index === ranges.length - 1 ? 0 : index + 1;
    setPosition(ranges[nextIndex]);
  };
  function showRange(): React.ReactNode {
    if (ranges.length >= 2) {
      return (
        <RangeViewerButtons
          ranges={ranges}
          range={range}
          route={parentRoute}
          onClickPrevious={handlePreviousRange}
          onClickNext={handleNextRange}
        />
      );
    }
  }

  return (
    <Container>
      <Box
        sx={{
          display: 'flex',
          width: '100%',
        }}
      >
        <BackButton to={parentRoute}>
          <FaArrowLeft />
          BACK
        </BackButton>
      </Box>

      <Box>
        <Image src={imageSrc} alt={alt} />
        {showRange()}
      </Box>
    </Container>
  );
};

export default RangeViewer;
