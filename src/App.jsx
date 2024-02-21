import List from './components/layout/list/List';
import { LargeAuthorListItem } from './components/layout/list/resources/authors/LargeListItem';
import { authors } from './components/layout/list/resources/authors/authors';
import { LargeBookListItem } from './components/layout/list/resources/books/LargeListItem';
import { books } from './components/layout/list/resources/books/books';

function App() {
  return (
    <>
      <h2>Large list books</h2>
      <List
        ListType='ul'
        items={books}
        resourceName='book'
        ItemComponent={LargeBookListItem}
      />

      <h2>Large List Authors</h2>
      <List
        ListType='ol'
        items={authors}
        resourceName='author'
        ItemComponent={LargeAuthorListItem}
      />
    </>
  );
}

export default App;
