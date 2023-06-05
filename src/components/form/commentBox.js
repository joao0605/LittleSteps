import styles from './form.module.css'

export default function CommentBox() {

   
    return (
       
        <div className={styles.comment} >
            <p>Observações</p>
            <input className={styles.commentbox} type="text"></input>
        </div>
    )
}