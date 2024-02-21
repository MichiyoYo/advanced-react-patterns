import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  background-color: #4a4a4a;
`;

const Sidebar = ({ title }) => {
  return <Container>{title}</Container>;
};

export default Sidebar;

Sidebar.propTypes = {
  title: PropTypes.string,
};
