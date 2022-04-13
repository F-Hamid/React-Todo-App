import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "../style.css";

import List from "./List";

const TodoInput = () => {
  const [text, setText] = useState();
  const [typing, setTyping] = useState("");
  const [items, setItems] = useState([]);
  const [id, setId] = useState(1);
  const [addList, setAddList] = useState(false);

  // const inputRef = useRef();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setText(typing);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [typing]);
  // props.list(items);

  // On typing
  const onChange = (e) => {
    setTyping(e.target.value);
  };

  // Submit new Item
  const onSubmit = (e) => {
    e.preventDefault();
    if (text) {
      setId(uuidv4());
      setItems([...items, { item: text, key: id }]);
      setTyping("");
      setAddList(true);
    } else {
      console.log("no text");
    }
  };

  // Clear All Items
  const removeList = () => {
    setItems([]);
    setAddList(false);
  };
  // Edit Item

  const editItem = (id) => {
    const newList = items.filter((item) => item.key !== id);
    setItems(newList);
    const editText = items.find((item) => item.key === id);
    setTyping(editText.item);
  };
  // Clear one Item
  const removeItem = (id) => {
    let newList = items.filter((item) => item.key !== id);
    setItems(newList);

    if (newList.length === 0) {
      removeList();
    }
  };

  return (
    <>
      <form onSubmit={onSubmit} className="center ">
        <h2 className="header">Todo</h2>
        <div className="input-group mb-3">
          <span className="input-group-text" id="basic-addon1">
            <i className="fa-solid fa-check-double"></i>
          </span>

          <input
            type="text"
            className="form-control"
            placeholder="Enter Item"
            aria-label="Enter Item"
            aria-describedby="basic-addon1"
            onChange={onChange}
            value={typing}
          />
        </div>
        <button
          onClick={onSubmit}
          type="submit"
          className="btn btn-success mb-3 button "
        >
          Add Item
        </button>
      </form>
      {addList ? (
        <div className="center">
          <List
            items={items}
            removeList={removeList}
            removeItem={removeItem}
            editItem={editItem}
          />
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default TodoInput;
