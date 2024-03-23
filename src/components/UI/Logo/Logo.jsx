// import styles from '@/components/UI/Logo/Logo.module.scss'
import logo from '@img/logo.webp'
import styles from '@/components/UI/Logo/Logo.module.scss'
export default function Logo() {
  return(
    <a className={styles.logo}>
      <img src={logo} alt="logo"/>
        <span>Yuriy</span>
    </a>
  )
}
    // <div>
    //   <img src="./assets/images/logo.webp" alt="Logo">

    //    <a className={styles.logo} href="#">
    //     <span>Yuriy Chapyuk</span>
    //   </a>
    // </div>