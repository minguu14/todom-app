import { ChangeEvent, FormEvent, useState } from "react";
import "./Form.css";
import { useAppDispatch } from "../../hooks/redux";
import uuid from "react-uuid";
import { addTodoLists, completedTodoRemove } from "../../store/listsSlice/listsSlice";


const Form: React.FC = () => {
  
  const [todoValue, setTodoValue] = useState("");

  const dispatch = useAppDispatch();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoValue(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    if (!todoValue) {
      e.preventDefault();
      return;
    }

    e.preventDefault();

    const todoData = {
      id: uuid(),
      title: todoValue,
      isChecked: false,
      isEdit: false,
    };

    dispatch(addTodoLists(todoData));
    setTodoValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="form_container">
      <label htmlFor="todo"></label>
      <input
        className="todo_bar"
        type="text"
        name="todo"
        value={todoValue}
        placeholder="맹~하지 말고 할 거 입력해주세요."
        onChange={handleChange}
      />
      <input type="submit" value="작성" className="btn" />
      <button className="btn completedTodoRemove" onClick={()=>dispatch(completedTodoRemove())}>완료된 목록 지우기</button>
    </form>
  );
};

export default Form;
