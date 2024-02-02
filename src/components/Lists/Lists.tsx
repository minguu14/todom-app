import { ChangeEvent, useState } from "react";
import { ListData } from "../../model/listData";
import "./Lists.css";
import storage from "../../utils/storage";

interface ListsProps {
  id: string;
  title: string;
  isEdit: boolean;
  isChecked: boolean;
  listsData: ListData;
  setListsData: React.Dispatch<React.SetStateAction<ListData>>;
}

const Lists: React.FC<ListsProps> = ({
  id, title, isEdit, isChecked, listsData, setListsData
}) => {

  const [editTitle, setEditTitle] = useState(title);

  const onChecked = (id: string) => {
      const checkedItem = listsData.map((list) => {
        if(list.id === id) {
          list.isChecked = !list.isChecked;
        }
        return list;
      })
        setListsData(checkedItem);
        storage.set("listsData", checkedItem);
  }

  const onEditChecked = (id: string) => {
    const editCheckedItem = listsData.map((list) => {
      if(list.id === id) {
        list.isEdit = !list.isEdit;
      }
      return list
    })
    setListsData(editCheckedItem);
    storage.set("listsData", editCheckedItem);
  }

  const removeItem = (id: string) => {
    const list_data = listsData.filter(list => list.id !== id);
    setListsData(list_data);
    storage.set("listsData", list_data);
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>) => {
    setEditTitle(e.target.value);
  }

  const saveEditTitle = (id: string) => {
    const saveEditTitle = listsData.map((list) => {
      if (list.id === id) {
        list.title = editTitle;
        list.isEdit = !list.isEdit;
      }
      return list;
    })
    setListsData(saveEditTitle);
    storage.set("listsData", saveEditTitle);
  }

  return (
      <div className="list_container">
        <div className="list">
          {/* 체크박스 */}
          <input className="check_input" type="checkbox" defaultChecked={isChecked} onChange={() => onChecked(id)}/>
          {/* 수정 부분 */}
          { isEdit ? <input className="edit_input" type="text" value={editTitle} onChange={handleChange}/> :
          <div className={`list_title ${isChecked && "checked"}`}>{title}</div>}
          {/* 버튼 */}
          <div className="btn_container">
          { isEdit ? <button className="edit_button" onClick={()=>saveEditTitle(id)}>저장</button> :
          <button className="edit_button" onClick={()=>onEditChecked(id)}>수정</button>}
          <button className="delete_button" onClick={() => removeItem(id)}>x</button>
          </div>
        </div>
      </div>
  );
};

export default Lists;
