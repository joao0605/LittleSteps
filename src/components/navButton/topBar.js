import Image from "next/image"
import logo from '../../../public/Logotipo_Little_Steps.png'
import logotext from '../../../public/Little_Steps.png'
import styles from './navBar.module.css'
import { useRouter } from "next/router"


export default function TopBar() {
  
  

  return (
    <div className={styles.navbar}>

      <div className={styles.iconeProfile}>
        <Image
          src={logo} />
      </div>
      <div className={styles.logotext} >
        <Image src={logotext} />
      </div>
    </div>
    )
}

