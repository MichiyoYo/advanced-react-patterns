import PropTypes from 'prop-types';
import { authors } from '../authors/authors';
export const LargeBookListItem = ({ book }) => {
  const { title, releaseDate, pages, author_id } = book;
  const author = authors.find((author) => author.id === author_id);
  return (
    <li>
      <h2>Title: {title}</h2>
      <p>Release Date: {releaseDate}</p>
      <p>Pages: {pages}</p>
      <p>Author: {author ? `${author.name} ${author.surname}` : 'Unknown'}</p>
    </li>
  );
};

LargeBookListItem.propTypes = {
  book: PropTypes.object,
};
