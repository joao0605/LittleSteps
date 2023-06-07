import styles from './StudentInfo.module.css'

export default function AddInfo({addInfo}) {


    return (
        <div>
            <h2 className={styles.title}><strong>Informações Adicionais</strong></h2>
           <p className={styles.stText}>{addInfo}</p>
        </div>
    )
}