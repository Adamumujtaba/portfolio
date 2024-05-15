import { Outlet } from 'react-router-dom';

import styled from 'styled-components';

function AppLayout() {
  return (
    <Wrapper>
      <Outlet />
      {/* <Footer /> */}
    </Wrapper>
  );
}

export default AppLayout;

const Wrapper = styled.div`
  background: #000;
  overflow-x: hidden;
  min-height: 100vh;
  padding: 20px;
`;
