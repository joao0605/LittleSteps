import styles from './form.module.css'
import Image from "next/image"
import sleep from '../../../public/sleep.png'
import RangeSlider from "./rangeSlider";

export default function SleepBox() {

   
    return (
       
        <div className={styles.sleepbox}>
           <div className={styles.iconline}> ~
           <Image
            src={sleep}/>
            <p>Soneca</p>
            <hr></hr> 
            </div>
            <RangeSlider/>
        </div>
    )
}