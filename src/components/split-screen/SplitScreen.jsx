import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;

const Panel = styled.div`
  flex: ${(prop) => prop.flex};
`;

export const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Panel flex={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};

SplitScreen.propTypes = {
  children: PropTypes.array,
  leftWidth: PropTypes.number,
  rightWidth: PropTypes.number,
};
