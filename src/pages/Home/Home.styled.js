import { styled } from 'styled-components';

export const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
  height: 92vh;
  background: url('https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    center/cover no-repeat;
`;

export const StyledHeading = styled.h1`
  padding-right: 25px;
  text-align: end;
  color: ${props => props.theme.colors.white};
`;
export const StyledText = styled.h3`
  padding-right: 25px;
  display: block;
  max-width: 500px;
  text-align: end;
  color: ${props => props.theme.colors.text};
`;