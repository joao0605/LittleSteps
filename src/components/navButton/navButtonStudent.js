import Image from 'next/image'
import profile from '../../../public/profile.png'
import report from '../../../public/report.png'
import chat from '../../../public/chat.png'
import record from '../../../public/record.png'
import styles from './navBar.module.css'
import { useRouter } from "next/router"

//criar rota para o chat e para record

export default function NavButtonStudent() {

    const router = useRouter()


    return (
        <div className={styles.navButtons}>

            <button onClick={() => router.push('/personalDataStudentTest')} className={styles.profile}>
                <Image
                    src={profile} className={styles.icon} />
            </button>

            <button onClick={() => router.push('/formTest')} className={styles.report}>
                <Image
                    src={report} className={styles.icon} />
            </button>

            <button onClick={() => router.push('/chatTest')} className={styles.chat}>
                <Image src={chat} className={styles.icon} />
            </button>

            <button onClick={() => router.push('/')} className={styles.record}>
                <Image src={record} className={styles.icon} />
            </button>

        </div>)
}