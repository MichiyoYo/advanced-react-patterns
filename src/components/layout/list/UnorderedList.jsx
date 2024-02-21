import PropTypes from 'prop-types';

export const UnorderedList = ({ items, resourceName, ItemComponent }) => {
  return (
    <ul>
      {items?.map((item, i) => (
        <ItemComponent key={i} {...{ [resourceName]: item }} />
      ))}
    </ul>
  );
};

UnorderedList.propTypes = {
  items: PropTypes.array,
  resourceName: PropTypes.object,
  ItemComponent: PropTypes.node,
};
