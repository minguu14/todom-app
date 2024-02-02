import { ChangeEvent, FormEvent } from "react";
import "./Form.css";

type FormProps = {
  todoValue: string;
  handlerChange(e: ChangeEvent<HTMLInputElement>): void;
  handleSubmit(e: FormEvent<HTMLFormElement>): void;
};

const Form: React.FC<FormProps> = ({
  todoValue,
  handlerChange,
  handleSubmit,
}) => {

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
    </form>
  );
};

export default Form;
