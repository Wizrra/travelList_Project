import React from "react";

export default function Display({ list, deleteItem }) {
  return (
    <div className="display">
      <ul>
        {list.map((x, i) => (
          <li key={i}>
            <input type="checkbox" name="" id="" />
            <span>{x.amount}</span>
            <span>{x.item}</span>
            {/* <span>&times;</span> */}
            <button onClick={() => deleteItem(x.item)}>✖</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
