import styles from './form.module.css'
import Image from "next/image"
import lunch from '../../../public/lunch.png'
import RangeSlider from "./rangeSlider";

export default function LunchBox() {


    return (

        <div className={styles.lunchbox}>
            <div className={styles.iconline}>
                <Image
                    src={lunch} />
                <p>Almoço</p>
                <hr></hr>
                </div>
            <RangeSlider />
        </div>
    )
}