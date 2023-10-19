import styled from 'styled-components';

export const StyledRegister = styled.div`
  height: 88.2vh;
  z-index:1
  /* background: url('https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    center/cover no-repeat; */
  /* filter: blur(8px); */
`;

export const StyledBlurWrapper = styled.div`
  position:absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index:-1;
    background: url('https://images.unsplash.com/photo-1508873699372-7aeab60b44ab?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')
    center/cover no-repeat;
  filter: blur(8px);

`