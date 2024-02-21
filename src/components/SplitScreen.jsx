import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Panel = styled.div`
  flex: 1;
`;

export const SplitScreen = ({ Left, Right }) => {
  return (
    <Container>
      <Panel>{Left}</Panel>
      <Panel>{Right}</Panel>
    </Container>
  );
};

SplitScreen.propTypes = {
  Left: PropTypes.node,
  Right: PropTypes.node,
};
