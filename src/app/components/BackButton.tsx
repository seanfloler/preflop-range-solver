import { Link } from 'react-router-dom';
import styled from 'styled-components';

const BackButton = styled(Link)`
  display: flex;
  align-items: center;
  height: 40px;
  padding: 0px 16px;
  background-color: rgb(255, 23, 68);
  border-radius: 12px;
  text-decoration: none;
  color: white;
  font-weight: bold;
  svg {
    margin-right: 8px;
  }
`;
export default BackButton;
