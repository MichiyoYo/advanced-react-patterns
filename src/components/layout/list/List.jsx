import PropTypes from 'prop-types';

const List = ({ ListType, items, resourceName, ItemComponent }) => {
  return (
    <ListType>
      {items?.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </ListType>
  );
};

List.propTypes = {
  ListType: PropTypes.node,
  items: PropTypes.array,
  resourceName: PropTypes.string,
  ItemComponent: PropTypes.node,
};

export default List;
