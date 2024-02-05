import "./Lists.css";
import { useAppSelector } from "../../hooks/redux";
import List from "../List/List";



const Lists = () => {
  const todoLists = useAppSelector((state) => state.list.listsData);

  return (
    <>
    {todoLists.map((list) => (
      <List
        key={list.id}
        id={list.id}
        title={list.title}
        isChecked={list.isChecked}
        isEdit={list.isEdit}
      />
    ))}
    </>
  );
};

export default Lists;
