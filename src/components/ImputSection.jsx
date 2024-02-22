import Button from "@/components/Button/Button.jsx"
import { useState, useRef } from "react"
export default function ImputSection() {
  const inp = useRef()
  // const [name, setName] = useState('')
  // const [hasError, setHasError] = useState(false)
  // const [myInput, setMyInput] = useState('Текст')
  const [show, setShow] = useState(false)

  // function inputChange(e) {
  //   console.log(e.target.value);
  //   setName(e.target.value)
  //   setHasError(e.target.value.trim().length === 0)
  // }

  function handlKeyDown(e) {
    // e.key === 'Enter' && setShow(true)
    if(e.key === 'Enter') {
      setShow(true)
    }
    // setShow(prev => console.log(prev, inp.current.value))
  }

  return(
    <section className="">
      <div>
        <label className="pe-2" htmlFor="name">Поле вводу</label>
        <input 
          ref={inp}
          className="" 
          type="text" 
          id="name" 
          // value={name} onChange={inputChange}
          onKeyDown={handlKeyDown}
          style={{
            // border: hasError ? '1px solid red' : null
          }}
          />
      </div>
      <select id="reasons" className="" 
        // onChange={event => setMyInput(event.target.value)}
      >
        <option value="1">Опція 1</option>
        <option value="2">Опція 2</option>
        <option value="3">Опція 3</option>
      </select>
      <div className="mt-3">
        <Button 
        // disabled={hasError} isActive={!hasError} 
        className="btn-success">Вибрати</Button>
      </div>
      <div>
        {/* <p>{name}</p> */}
      </div>
      <div>
        <p>{show ? inp.current?.value : ''}</p>
      </div>
    </section>
  )
}