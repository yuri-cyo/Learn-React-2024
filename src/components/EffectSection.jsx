import Button from "@/components/Button/Button.jsx"
import Modal from "@/components/Modal/Modal"
export default function EffectSection() {

  function openModal() {

  }
  return (
    <section>
      <h3>Effects</h3>
      <Button
        onClick={openModal}
      >Modal</Button>
      <Modal>
        qweqweqweqw
      </Modal>
    </section>
  )
}