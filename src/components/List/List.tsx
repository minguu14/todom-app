import "./List.css";
import { ChangeEvent, useState } from "react";
import { useAppDispatch } from "../../hooks/redux";
import { checkItem, editCheck, removeItem, saveEditTitle } from "../../store/listsSlice/listsSlice";

interface ListsProps {
  id: string;
  title: string;
  isEdit: boolean;
  isChecked: boolean;
}

const Lists: React.FC<ListsProps> = ({
  id, title, isEdit, isChecked,
}) => {

  const dispatch = useAppDispatch();

  const [editTitle, setEditTitle] = useState(title);

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  }

  return (
      <div className="list_container">
        <div className="list">
          {/* 체크박스 */}
          <input className="check_input" type="checkbox" defaultChecked={isChecked} onChange={()=>dispatch(checkItem(id))}/>
          {/* 수정 부분 */}
          { isEdit ? <input className="edit_input" type="text" value={editTitle} onChange={handleChange}/> :
          <div className={`list_title ${isChecked && "checked"}`}>{title}</div>}
          {/* 버튼 */}
          <div className="btn_container">
          { isEdit ? <button className="edit_button" onClick={()=>dispatch(saveEditTitle({id, editTitle}))}>저장</button> :
          <button className="edit_button" onClick={()=>dispatch(editCheck(id))}>수정</button>}
          <button className="delete_button" onClick={()=>dispatch(removeItem(id))}>x</button>
          </div>
        </div>
      </div>
  );
};

export default Lists;
