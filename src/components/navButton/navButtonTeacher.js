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
                    src={profile}className={styles.icon} />
            </button>

            <button onClick={() => router.push('/formTest')} className={styles.report}>
                <Image
                    src={report}className={styles.icon} />
            </button>

            <button onClick={() => router.push('/chatTest')} className={styles.chat}>
                <Image src={chat}className={styles.icon} />
            </button>

            <button onClick={() => router.push('/listStudents')} className={styles.classe}>
                <Image src={classe}className={styles.icon} />
            </button>

        </div>)
}