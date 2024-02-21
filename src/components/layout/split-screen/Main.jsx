import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  background-color: #878787;
`;

const Main = ({ title }) => {
  return <Container>{title}</Container>;
};

export default Main;

Main.propTypes = {
  title: PropTypes.string,
};
