// главный компонент
import { useState } from "react";
import { Form, IForm } from "./Form";
import { WatchList } from "./WatchList";

export const Watches = () => {
  const [watchList, setWatchList] = useState<IForm[]>([]);

  function handleFormSubmit(formData: IForm) {
    setWatchList([...watchList, formData]);
  }

  function handleDelete(e: IForm) {
    const filterList = watchList.filter(item => item.id !== e.id);
    setWatchList(filterList);
  }

  return (
    <div>
      <Form handleFormSubmit={handleFormSubmit}/>
      <WatchList listsArr={watchList} handleDelete={handleDelete}/>
    </div>
  )
}