import React from "react";

const List = props => {
  const listClass = `list-group goal-list my-4`;
  const listItemClass = "list-group-item";

  return (
    <ul className={listClass}>
      {props.items.map(item => (
        <li className={listItemClass} key={item.id}>
          <span
            onClick={() => props.toggleItem && props.toggleItem(item.id)}
            style={{ textDecoration: item.complete ? "line-through" : "none" }}
          >
            {item.name}
          </span>
          <button
            className="btn btn-danger btn-sm ml-2"
            onClick={() => props.removeItem(item)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
};

export default List;
