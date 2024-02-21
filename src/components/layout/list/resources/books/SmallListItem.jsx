import PropTypes from 'prop-types';

export const SmallBookListItem = ({ book }) => {
  const { title, releaseDate } = book;

  return (
    <li>
      <h5>Title: {title}</h5>
      <h6>Release Date: {releaseDate}</h6>
    </li>
  );
};

SmallBookListItem.propTypes = {
  book: PropTypes.object,
};
