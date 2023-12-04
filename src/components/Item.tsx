// отдельные часы в списке
import { useState, useEffect } from "react";
import moment from "moment";
import { IForm } from "./Form";

interface IItemProps {
  item: IForm;
  handleDelete: (formdata: IForm) => void;
}

export const Item = ({item, handleDelete}: IItemProps) => {
  const currentTimeInGMT = moment.utc();

  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(currentTimeInGMT.clone().add(item.time, 'hours').format('HH:mm:ss'));
      console.log('интервалы работают');
    }, 1000);
  
    return () => {
      clearInterval(intervalId);
    }
  }, [currentTime, currentTimeInGMT]);
  

  return (
    <div>
      <span className="watch-list-item">{item.timezone}: {currentTime}</span>
      <button onClick={() => handleDelete(item)}>X</button>
    </div>
  )
}
