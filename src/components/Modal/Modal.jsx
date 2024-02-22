import PropTypes from 'react'

export default function Modal({children}) {

  Modal.propTypes = {
    children: PropTypes.node // Валідація для 
  };
  return <dialog open>{children}</dialog>
}