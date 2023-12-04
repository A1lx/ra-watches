// форма ввода
import { useState } from "react";

export interface IForm {
  id: number;
  timezone: string;
  time: number;
}

interface IFormProps {
  handleFormSubmit: (formdata: IForm) => void;
}

export const Form = ({handleFormSubmit}: IFormProps) => {
  const [form, setForm] = useState<IForm>({
    id: 0,
    timezone: '',
    time: 0
  });

  function handleChange({target}: React.ChangeEvent<HTMLInputElement>) {
    const {name, value} = target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    form.id = form.id + 1;
    handleFormSubmit(form);
  }

  return (
    <form className="form" autoComplete="off" onSubmit={handleSubmit}>
      <div className="input-box">
        <label htmlFor="timezone">Название </label>
        <input id="timezone" name="timezone" className="form-input" type="text" value={form.timezone} onChange={handleChange}/>
      </div>
      <div className="input-box">
        <label htmlFor="time">Временная зона </label>
        <input id="time" name="time" className="form-input" type="number" value={form.time} onChange={handleChange}/>
      </div>
      <button className="btn-form" type="submit">Добавить</button>
    </form>
  )
}