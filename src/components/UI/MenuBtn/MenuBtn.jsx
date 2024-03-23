import moduleStyles from '@/components/UI/MenuBtn/MenuBtn.module.scss'
import PropTypes from 'prop-types';
// import styles from '@/components/UI/MenuBtn/MenuBtn.scss'

export default function MenuBtn({children, style}) {
  MenuBtn.propTypes = {
    style: PropTypes.object
  }
  return (
    <a style={style} className={moduleStyles.menu__btn}>{children}</a>
  )
}