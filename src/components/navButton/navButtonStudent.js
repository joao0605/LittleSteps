import Image from 'next/image'
import profile from '../../../public/profile.png'
import report from '../../../public/report.png'
import chat from '../../../public/chat.png'
import record from '../../../public/record.png'
import styles from './navBar.module.css'


export default function NavButtonStudent() {

    return (
        <div className={styles.navButtons}>

            <button className={styles.profile}>
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

            <button className={styles.record}>
                <Image src={record} />
            </button>

        </div>)
}