import {useRef, useEffect} from 'react'
import PropTypes from 'react'
import { createPortal } from "react-dom"
import '@/components/Modal/Modal.scss'

export default function Modal({children, open}) {

  const dialog = useRef()

  useEffect(()=> {
    if (open) {
    dialog.current.showModal()
  } else {
    dialog.current.close()
  }
  }, [open])

  Modal.propTypes = {
    children: PropTypes.node,
    open:  PropTypes.node// Валідація для 
  };

  

  return createPortal(
      <dialog ref={dialog}>{children}</dialog>,
      document.getElementById('modal')
    )
}