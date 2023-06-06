import Image from 'next/image'
import profile from '../../../public/profile.png'
import report from '../../../public/report.png'
import chat from '../../../public/chat.png'
import classe from '../../../public/classe.png'
import styles from './navBar.module.css'
import { useRouter } from "next/router"

export default function NavButtonTeacher() {
    const router = useRouter()

    return (
        <div className={styles.navButtons}>

            <button onClick={() => router.push('/personalDataTeacherTest')} className={styles.profile}>
                <Image
                    src={profile} />
            </button>

            <button className={styles.report}>
                <Image
                    src={report} />
            </button>

            <button className={styles.chat}>
                <Image src={chat} />
            </button>

            <button className={styles.classe}>
                <Image src={classe} />
            </button>

        </div>)
}