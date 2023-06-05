import styles from './form.module.css'
import RangeSlider from "./rangeSlider"
import Image from "next/image"
import bathroom from '../../../public/bathroom.png'


export default function BathroomBox() {


    return (

        <div className={styles.bathroombox}>
            <div className={styles.iconline}> <Image
                src={bathroom} />
                <p>Casa de Banho</p>
                <hr></hr>
                </div>
            <div className={styles.sliders}>
                <div>
                    <p>Nº 1</p>
                    <RangeSlider />
                </div>
                <div>
                    <p>Nº 2</p>
                    <RangeSlider />
                </div>
            </div>
        </div>
    )
}