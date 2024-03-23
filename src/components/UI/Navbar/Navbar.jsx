// import styles from '@/components/UI/Logo/Logo.module.scss'
import styles from '@/components/UI/Navbar/Navbar.module.scss'
import MenuBtn from '@/components/UI/MenuBtn/MenuBtn'
export default function Navbar() {
  return(
    <nav>
      <ul className={styles.menu__list__container}
                >
                    <li className={`${styles.menu__list__item} ${styles.navActive}`}
                      >
                        <MenuBtn 
                        >
                            Home
                        </MenuBtn>
                    </li>
                    <li className={styles.menu__list__item}>
                        <MenuBtn>
                            About Me
                        </MenuBtn>
                    </li>
                    <li className={styles.menu__list__item}>
                        <MenuBtn>
                            Education
                        </MenuBtn>
                    </li>
                    <li className={styles.menu__list__item}>
                        <MenuBtn>
                            Portfolio
                        </MenuBtn>
                    </li>
                    <li className={styles.menu__list__item}>
                        <MenuBtn>
                            Contact Me
                        </MenuBtn>
                    </li>
                </ul>
    </nav>
  )
}
    // <div>
    //   <img src="./assets/images/logo.webp" alt="Logo">

    //    <a className={styles.logo} href="#">
    //     <span>Yuriy Chapyuk</span>
    //   </a>
    // </div>