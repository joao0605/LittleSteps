import Image from "next/image"
import styles from './buttonInicialPage.module.css'
import record from '../../../public/record.png'
import { useRouter } from "next/router"

//criar historico de formularios
        
export default function ButtonRecord() {
    const router = useRouter()

   return (
            <div className={styles.iconrecord}>
                <button onClick={() => router.push('/')}><Image src={record} /></button>
            </div>
        
    )
}