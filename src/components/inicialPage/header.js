
import styles from './buttonInicialPage.module.css'

export default function Header({ name }) {

    return (
        <div>
            <div className={styles.slider}>
                <h1>{name}</h1>
                
                </div>
                <hr></hr>
                                
        </div>

    )
}