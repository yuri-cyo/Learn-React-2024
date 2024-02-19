// import { useState } from "react"
import Button from "@/components/Button/Button"
import { useState } from "react"

export default function SectionButtons() {
  const [contentType, setContentType] = useState('Нажми на кнопку!')
  // const [contentStyle, setContentStyle] = useState('')

  function click(e) {
    setContentType(e.target.innerHTML)
  }
  return(
    // <p>qqwe</p>
    <section className="">
      <h3>Івенти</h3>
      <div className="mb-2">
        <span>{contentType}</span>
      </div>
      <Button 
        isActive={contentType === 'Кнопка' ? 'activeBtn' : ''} 
        onClick={click} 
        className="btn-success me-2 "
          >Кнопка</Button>
      <Button 
        isActive={contentType === 'Кнопулічка' ? 'activeBtn' : ''} 
        onClick={click}
        className="btn-warning me-2 "
          >Кнопулічка</Button>
    </section>
  )
}