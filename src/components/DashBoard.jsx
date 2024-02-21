import Main from './Main';
import Sidebar from './Sidebar';
import { SplitScreen } from './SplitScreen';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  height: 100vw;
`;

const DashBoard = () => {
  return (
    <Container>
      <SplitScreen Left={<Sidebar />} Right={<Main />} />
    </Container>
  );
};

export default DashBoard;
