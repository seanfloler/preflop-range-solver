import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  position: relative;
  max-width: 100%;
  display: flex;
  max-height: 100%;
  min-height: 50px;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 16px;
  background-color: #ff1744;
  border-radius: 12px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  svg {
    margin-right: 8px;
  }
`;

const PreviousButton = styled(Button)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  bottom: 20px;
`;

const NextButton = styled(Button)`
  position: absolute;
  top: 50%;
  right: 0px;
  transform: translateY(-50%);
`;

interface Props {
  range: string;
  ranges: string[];
  route: string;
  onClickPrevious: () => void;
  onClickNext: () => void;
}

const RangeViewerButtons: React.FC<Props> = ({
  range,
  ranges,
  route,
  onClickPrevious,
  onClickNext,
}) => {
  const index = ranges.indexOf(range);
  const previousIndex = index === 0 ? ranges.length - 1 : index - 1;
  const nextIndex = index === ranges.length - 1 ? 0 : index + 1;
  const previousRange = ranges[previousIndex];
  const nextRange = ranges[nextIndex];

  return (
    <Wrapper>
      <PreviousButton
        to={`${route}/${previousRange.replace(/ /g, '_')}`}
        onClick={onClickPrevious}
      >
        PREV ({previousRange})
      </PreviousButton>
      <NextButton
        to={`${route}/${nextRange.replace(/ /g, '_')}`}
        onClick={onClickNext}
      >
        NEXT ({nextRange})
      </NextButton>
    </Wrapper>
  );
};

export default RangeViewerButtons;
