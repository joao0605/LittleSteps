import Image from 'next/image'
import profile from '../../../public/profile.png'
import report from '../../../public/report.png'
import chat from '../../../public/chat.png'
import classe from '../../../public/classe.png'
import styles from './navBar.module.css'
import { useRouter } from "next/router"

// criar rota para o chat e o classe

export default function NavButtonTeacher() {
    const router = useRouter()

    return (
        <div className={styles.navButtons}>

            <button onClick={() => router.push('/personalDataTeacherTest')} className={styles.profile}>
                <Image
                    src={profile} />
            </button>

            <button onClick={() => router.push('/formTest')} className={styles.report}>
                <Image
                    src={report} />
            </button>

            <button onClick={() => router.push('/')} className={styles.chat}>
                <Image src={chat} />
            </button>

            <button onClick={() => router.push('/')} className={styles.classe}>
                <Image src={classe} />
            </button>

        </div>)
}