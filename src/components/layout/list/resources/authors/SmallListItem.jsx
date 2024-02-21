import PropTypes from 'prop-types';

export const SmallAuthorListItem = ({ author }) => {
  const { name, surname, age } = author;

  return (
    <li>
      <h3>
        Name: {name} {surname}
      </h3>
      <p>Age: {age}</p>
    </li>
  );
};

SmallAuthorListItem.propTypes = {
  author: PropTypes.object,
};
