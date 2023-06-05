import styles from './form.module.css'
import Image from "next/image"
import apple from '../../../public/apple.png'
import RangeSlider from "./rangeSlider";

export default function BreakfastBox() {


    return (

        <div className={styles.breakfastbox}>
            <div className={styles.iconline}><Image
                src={apple} />
                <p>Pequeno Almoço</p>
                <hr></hr>
            </div>
            <RangeSlider />

        </div>
    )
}