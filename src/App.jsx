import Header from "./components/Header"
import List from "./components/List"
import arrList from "./store/store.js"
import Button from "./components/Button/Button"
import '@/components/Button/Button.scss'
import { useState } from "react"


export default function App() {
  const [contentType, setContentType] = useState('Нажми на кнопку!')
  // const [contentStyle, setContentStyle] = useState('')

  function click(e) {
    setContentType(e.target.innerHTML)
  }
  return(
    <div>
      <Header />
      <main>
        <section>
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam ea esse totam magni, optio perspiciatis tempore voluptatem pariatur repellendus dolor labore temporibus dolore enim, incidunt aperiam nihil expedita sunt est.</h3>
          <ul>
            <List title={arrList[0].title} description={arrList[0].description} />
            <List {...arrList[1]} />
            <List {...arrList[2]} />
          </ul>
        </section>
        <section className="">
          <h3>Івенти</h3>
          <div className="mb-2">
            <span>{contentType}</span>
          </div>
          <Button 
            isActive={contentType === 'Кнопка' ? 'activeBtn' : ''} 
            onClick={click} 
            className="button-clc me-2 "
              >Кнопка</Button>
          <Button 
            isActive={contentType === 'Кнопулічка' ? 'activeBtn' : ''} 
            onClick={click}
              >Кнопулічка</Button>
        </section>
      </main>
    </div>
  )
}
