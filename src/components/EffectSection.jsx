import Button from "@/components/Button/Button.jsx"
import Modal from "@/components/Modal/Modal"
import { useEffect, useState } from "react"
export default function EffectSection() {

  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)
  const [users, setUsers] = useState([])

  
  useEffect(()=> {
    async function fetchUsers() {
      setLoading(true)
      const response = await fetch('https://jsonplaceholder.typicode.com/users')
      const users = await response.json()
      setUsers(users)
      setLoading(false)
    }
    fetchUsers()
  }, [])

  return (
    <section>
      <h3>Effects</h3>
      <Button
        onClick={() => setModal(true)}
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
      {loading && <p>Loading...</p>}
      {!loading && <ul>
        {users.map(user => <li className="card p-2 mb-2" key={user.id}>{user.name}</li>)}
      </ul>}
    </section>
  )
}