import styles from './form.module.css'

export default function CommentBox(props) {

    const handleValue = e => {
               
        props.onChange(e.target.value)
       };
   
    return (
       
        <div className={styles.comment} >
<<<<<<< HEAD
            <p className={styles.commentTitle}>Observações</p>
=======

            <p className={styles.commentTitle}>Observações</p>

>>>>>>> 20099205bf57d7f50f10d934f9b5b0cb97f5cb6e
            <input value={props.value} className={styles.commentbox} onChange={handleValue} type="text"></input>
        </div>
    )
}
/*max length 48*/