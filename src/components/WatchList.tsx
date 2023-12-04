// список часов
import { IForm } from "./Form";
import { Item } from "./Item";

interface IWatchListProps {
  listsArr: IForm[];
  handleDelete: (formdata: IForm) => void;
}

export const WatchList = ({listsArr, handleDelete}: IWatchListProps) => {
  return (
    <div className="watch-list-box">
      {listsArr.map((item, index) => (
        <Item key={index} item={item} handleDelete={handleDelete}/>
      ))}
    </div>
  )
}