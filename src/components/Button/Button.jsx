
import PropTypes from "prop-types"

export default function Button({children, className, onClick, isActive}) {
  Button.propTypes = {
    className: PropTypes.string, // Валідація для пропса className
    children: PropTypes.node.isRequired, // Валідація для дочірніх елементів (children)
    onClick: PropTypes.func.isRequired, // Валідація для функції onClick
    isActive: PropTypes.string
  };
  return (
  <button 
    className={`btn btn-primary ${className ?? ''}${isActive ?? ''}`} 
    onClick={onClick}>
      {children}</button>
  )
}