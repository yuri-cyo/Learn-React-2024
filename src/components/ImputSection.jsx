import Button from "@/components/Button/Button.jsx"
import { useState } from "react"
export default function ImputSection() {
  const [name, setName] = useState('')
  const [hasError, setHasError] = useState(false)
  const [myInput, setMyInput] = useState('Текст')
  function inputChange(e) {
    console.log(e.target.value);
    setName(e.target.value)
    setHasError(e.target.value.trim().length === 0)
  }

  return(
    <section className="">
      <div>
        <label className="pe-2" htmlFor="name">Поле вводу</label>
        <input 
          className="" 
          type="text" 
          id="name" 
          value={name} onChange={inputChange}
          style={{
            border: hasError ? '1px solid red' : null
          }}
          />
      </div>
      <select id="reasons" className="" onChange={event => setMyInput(event.target.value)}>
        <option value="1">Опція 1</option>
        <option value="2">Опція 2</option>
        <option value="3">Опція 3</option>
      </select>
      <div className="mt-3">
        <Button disabled={hasError} isActive={!hasError} className="btn-success">Вибрати</Button>
      </div>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>{myInput}</p>
      </div>
    </section>
  )
}