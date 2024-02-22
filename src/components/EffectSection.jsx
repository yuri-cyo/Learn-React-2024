import Button from "@/components/Button/Button.jsx"
import Modal from "@/components/Modal/Modal"
import { useState } from "react"
export default function EffectSection() {

  const [modal, setModal] = useState(false)

  function openModal() {
    setModal(true);
  }
  return (
    <section>
      <h3>Effects</h3>
      <Button
        onClick={openModal}
      >Open Modal</Button>
      <Modal open={modal}>
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center, '}}>
          <strong>Lorem ipsum</strong>
          <Button
            onClick={()=> setModal(false)}
          >Close
          </Button>
      </div>
        <hr />
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi deleniti quibusdam nemo quisquam eius, ad beatae, incidunt et deserunt ipsam ipsum tempore! Ipsam qui error eos debitis temporibus illum sint!</p>
      </Modal>
    </section>
  )
}