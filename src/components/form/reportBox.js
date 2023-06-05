import styles from './form.module.css'

export default function ReportBox({name, date}) {

   
    return (
        // falta adicionar data e nome do aluno
        <div className={styles.reportbox}>
            <h2>Relatorio {date} - {name}</h2>
        </div>
    )
}