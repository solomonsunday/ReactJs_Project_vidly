import React from "react";

const ListGroup = props => {
  const { items, textProperty, valueProperty, onItemSelect } = props;
  return (
    <ul className="list-group" style={{ cursor: "pointer" }}>
      {items.map(item => (
        <li
          onClick={() => onItemSelect(item)}
          key={item[valueProperty]}
          className="list-group-item"
        >
          {item[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
