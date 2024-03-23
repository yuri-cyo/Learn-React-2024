// import styles from '@/components/UI/Logo/Logo.module.scss'
import styles from '@/components/UI/Social/Social.module.scss'
export default function Social() {
  return(
    <ul className={styles.social}>
      <li>
        <a href="">
          <span>GH</span>
        </a>
      </li>
      <li>
        <a href="">
          <span>Ln</span>
        </a>
      </li>
      <li>
        <a href="">
          <span>Tg</span>
        </a>
      </li>
    </ul>
  )
}