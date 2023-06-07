import styles from './StudentInfo.module.css'

export default function StudentInfo({name, birthday}) {

    return (
        <div>
            <h2 className={styles.title}><strong>Informações Aluno</strong></h2>
            <p className={styles.stText}>Nome: {name}</p>
            <p className={styles.text}>Data de nascimento: {birthday}</p>
        </div>
    )
}