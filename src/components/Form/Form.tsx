import { ChangeEvent, FormEvent } from "react";
import "./Form.css";
import { ListData } from "../../model/listData";
import storage from "../../utils/storage";
import { useAppSelector } from "../../hooks/redux";

type FormProps = {
  todoValue: string;
  handlerChange(e: ChangeEvent<HTMLInputElement>): void;
  handleSubmit(e: FormEvent<HTMLFormElement>): void;
  listsData: ListData;
  setListsData: React.Dispatch<React.SetStateAction<ListData>>;
};

const Form: React.FC<FormProps> = ({
  todoValue,
  handlerChange,
  handleSubmit,
  listsData,
  setListsData,
}) => {

  const todoLists = useAppSelector((state) => state.list.listsData)

  const completedTodoRemove = () => {
    const completedTodo = todoLists.filter(list => list.isChecked !== true);
    setListsData(completedTodo);
    storage.set("listsData", completedTodo);
  } 

  return (
    <form onSubmit={handleSubmit} className="form_container">
      <label htmlFor="todo"></label>
      <input
        className="todo_bar"
        type="text"
        name="todo"
        value={todoValue}
        placeholder="맹~하지 말고 할 거 입력해주세요."
        onChange={handlerChange}
      />
      <input type="submit" value="작성" className="btn" />
      <button className="btn completedTodoRemove" onClick={completedTodoRemove}>완료된 목록 지우기</button>
    </form>
  );
};

export default Form;
