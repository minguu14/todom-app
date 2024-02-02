import { ChangeEvent, FormEvent, useState } from "react";
import "./App.css";
import Lists from "./components/Lists/Lists";
import { ListData } from "./model/listData";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import uuid from 'react-uuid';
import storage from "./utils/storage";


const initialListsData:ListData = storage.get("listsData")
  ? storage.get("listsData")
  : [];

function App() {
  
  const [listsData, setListsData] = useState<ListData>(initialListsData);
  const [todoValue, setTodoValue] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!todoValue) {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    const newTodoData = {
      id: uuid(),
      title: todoValue,
      isChecked: false,
      isEdit: false,
    };

    setListsData((prev:ListData) => [...prev, newTodoData]);
    setTodoValue("");
    storage.set("listsData",[...listsData,newTodoData]);
  };

  return (
    <>
      <div className="container">
          <Header/>
          {listsData.map((list) => (
            <Lists
              key={list.id}
              id={list.id}
              title={list.title}
              isChecked={list.isChecked}
              isEdit={list.isEdit}
              listsData={listsData}
              setListsData={setListsData}
            />
          ))}
          <Form
            todoValue={todoValue}
            handlerChange={handleChange}
            handleSubmit={handleSubmit}
          />
        </div>
    </>
  );
}

export default App;
