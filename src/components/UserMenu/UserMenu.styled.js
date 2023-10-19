import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

export const StyledHeadUser = styled.div`
  display: flex;
  gap: 30px;
  align-items: flex-start;
  justify-content: center;
  /* margin-left: 20px; */
`;

export const StyledUserInfo = styled.div`
display: flex;
gap:5px;
`

export const StyledUserName = styled.h3`
  color: #ffb703;
`;

export const StyledLogOut = styled(Link)`
  margin:0 auto;
`