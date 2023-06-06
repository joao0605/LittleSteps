import Image from "next/image"
import styles from './buttonInicialPage.module.css'
import report from '../../../public/report.png'
import { useRouter } from "next/router"



export default function ButtonDailyReport() {
const router = useRouter()

        return (
            <div className={styles.iconDailyReport}>
                <button onClick={() => router.push('/formTest')}><Image src={report} /></button>
            </div>
        )
    }
 