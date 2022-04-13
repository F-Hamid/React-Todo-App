import React, { useState } from "react";
import "../style.css";
// import "bootstrap/dist/css/bootstrap.min.css";

export const List = ({ items, removeList, removeItem, editItem }) => {
  const id = new Date().getSeconds().toString();

  const itemRender = () => {
    return items.map(({ item, key }, i) => {
      return (
        <div key={key} className="input-group mb-3">
          <span className="input-group-text item-icon " id="basic-addon1">
            #{i + 1}
          </span>

          <input
            readOnly
            type="text"
            className="form-control"
            aria-describedby="basic-addon1"
            defaultValue={item}
          ></input>
          <div className="input-group-text item" id="basic-addon1">
            <i
              onClick={() => editItem(key)}
              className="fa-solid fa-pencil item-icon"
            ></i>
            <i
              onClick={() => removeItem(key)}
              className="fa-solid fa-trash-can"
            ></i>
          </div>
        </div>
      );
    });
  };

  return (
    <>
      <form key={id} className="center list ">
        <h2 className="header">Todo List</h2>
        {itemRender()}
      </form>
      <button
        onClick={removeList}
        className="btn btn-danger mb-3 button "
        type="button"
      >
        Remove List
      </button>
    </>
  );
};

export default List;
