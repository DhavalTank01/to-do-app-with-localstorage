import React, { useState, useEffect } from "react";
import img1 from "./images/logo.png";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import EditIcon from "@mui/icons-material/Edit";
import Card from "@mui/material/Card";
const Todo = () => {
  const [inputData, setInputData] = useState("");
  const [editId, SetEditId] = useState();
  const [toggleBtn, SetToggleBnt] = useState(false);

  // get data from localstroage
  const getLocalData = () => {
    const lists = localStorage.getItem("mytodolist");
    if (lists) {
      return JSON.parse(lists);
    } else {
      return [];
    }
  };

  // add item
  const [Data, setData] = useState(getLocalData());
  const addItem = () => {
    if (!inputData) {
      alert("Please enter task.");
    } else if (inputData && toggleBtn) {
      setData(
        Data.map((cele) => {
          if (cele.id === editId) {
            return { ...cele, name: inputData };
          }
          return cele;
        })
      );
      setInputData("");
      SetToggleBnt(false);
      SetEditId(null);
    } else {
      const newInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      };
      setData([...Data, newInputData]);
      setInputData("");
      SetToggleBnt(false);
    }
  };

  // delete item
  const deleteItem = (id) => {
    const newList = Data.filter((cele) => {
      return cele.id !== id;
    });
    setData(newList);
  };

  // edit item
  const editItem = (id) => {
    const item = Data.find((cele) => {
      return cele.id === id;
    });
    setInputData(item.name);
    SetEditId(id);
    SetToggleBnt(true);
  };

  const handleRemoveAll = () => {
    setData([]);
    setInputData("");
    SetToggleBnt(false);
    SetEditId(null);
  }

  // adding localstorage
  useEffect(() => {
    localStorage.setItem("mytodolist", JSON.stringify(Data));
  }, [Data]);

  return (
    <>
      <div className="container-md">
        <div className="container-fluid d-flex justify-content-center align-items-center flex-wrap">
          <Card sx={{ maxWidth: 600 }} className="main-box">
            <div className="container">
              <figure>
                <img src={img1} alt="logo" className="logo-img"></img>
                <figcaption className="logo-title">
                  add your list here
                </figcaption>
              </figure>
              <div className="input-groups">
                <input
                  type="text"
                  placeholder="Add list here"
                  required
                  name="item"
                  id="item"
                  onChange={(event) => {
                    setInputData(event.target.value);
                  }}
                  value={inputData}
                />
                <Button variant="outlined" onClick={addItem}>
                  {toggleBtn === false ? <AddIcon /> : <EditIcon />}
                </Button>
              </div>
              <div className="list-box">
                <div className="list-group">
                  {Data.map((cele, id) => {
                    return (
                      <a
                        className="list-group-item list-group-item-action"
                        key={id}
                        href="#"
                      >
                        <span className="px-3">{id + 1}</span>
                        {cele.name}
                        <span className="icon-box">
                          <span
                            className="icon1 px-2"
                            onClick={() => {
                              editItem(cele.id);
                            }}
                          >
                            <EditIcon />
                          </span>
                          <span
                            className="icon2"
                            onClick={() => {
                              deleteItem(cele.id);
                            }}
                          >
                            <DeleteOutlineIcon />
                          </span>
                        </span>
                      </a>
                    );
                  })}
                </div>
              </div>
              <div className="showbtn">
                <Button
                  variant="outlined"
                  className="btn3"
                  onClick={handleRemoveAll}
                >
                  Remove All
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </>
  );
};

export default Todo;
