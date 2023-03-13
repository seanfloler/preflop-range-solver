import React from 'react';
import styled from 'styled-components';

interface Props {
  name: string;
  onClick: () => void;
}

const Button = styled.button`
  min-width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: #ff1744;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border: none;
  margin: 10px;
  font-size: 1.5rem;
  color: #fff;
  cursor: pointer;
  opacity: 0.75;
  transition: background-color 0.2s ease;

  &:hover {
    opacity: 1;
  }
`;

const NavigationButton: React.FC<Props> = ({ name, onClick }) => {
  return <Button onClick={onClick}>{name}</Button>;
};

export default NavigationButton;
