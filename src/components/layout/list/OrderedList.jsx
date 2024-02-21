import PropTypes from 'prop-types';

const OrderedList = ({ items, resourceName, ItemComponent }) => {
  return (
    <ol>
      {items?.map((item, i) => (
        <ItemComponent {...{ [resourceName]: item }} key={i} />
      ))}
    </ol>
  );
};

OrderedList.propTypes = {
  items: PropTypes.array,
  resourceName: PropTypes.string,
  ItemComponent: PropTypes.node,
};

export default OrderedList;
