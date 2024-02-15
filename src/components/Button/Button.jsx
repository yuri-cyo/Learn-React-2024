import '@/components/Button/Button.scss'
import PropTypes from "prop-types"

Button.propTypes = {
  className: PropTypes.string, // Валідація для пропса className
  children: PropTypes.node.isRequired, // Валідація для дочірніх елементів (children)
};
export default function Button({children, className}) {
    return <button className={`btn btn-primary ${className}`}>{children}</button>
}