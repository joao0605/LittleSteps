import Image from "next/image"
import styles from './buttonInicialPage.module.css'
import record from '../../../public/record.png'

        
export default function ButtonRecord() {

   return (
            <div className={styles.iconrecord}>
                <button><Image src={record} /></button>
            </div>
        
    )
}