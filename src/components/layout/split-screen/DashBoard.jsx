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
      <SplitScreen leftWidth={1} rightWidth={3}>
        <Sidebar title='Menu' />
        <Main title='Main Content' />
      </SplitScreen>
    </Container>
  );
};

export default DashBoard;
