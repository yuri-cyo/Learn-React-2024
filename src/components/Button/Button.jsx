
import PropTypes from "prop-types"
import classes from '@/components/Button/Button.module.scss';

export default function Button({children, isActive, ...props}) {
  
  Button.propTypes = {
    className: PropTypes.string, // Валідація для пропса className
    children: PropTypes.node.isRequired, // Валідація для дочірніх елементів (children)
    onClick: PropTypes.func.isRequired, // Валідація для функції onClick
    isActive: PropTypes.string
  };

  // console.log(classes);
  return (
  <button
  {...props}
    className={`btn btn-secondary ${classes.buttonClc} ${isActive ? classes.activeBtn : ''}`} 
    >
      {children}</button>
  )
}