import PropTypes from 'prop-types';
import { books } from '../books/books';
import { SmallBookListItem } from '../books/SmallListItem';
import List from '../../List';

export const LargeAuthorListItem = ({ author }) => {
  const { name, surname, age, country, id } = author;
  const collection = books.filter((book) => book.author_id === id);

  return (
    <li>
      <h3>
        Name: {name} {surname}
      </h3>
      <p>Age: {age}</p>
      <p>Country: {country}</p>
      <div>
        <h4>Books:</h4>
        <List
          items={collection}
          resourceName='book'
          ItemComponent={SmallBookListItem}
        />
      </div>
    </li>
  );
};

LargeAuthorListItem.propTypes = {
  author: PropTypes.object,
};
