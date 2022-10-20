import {FaMapMarkerAlt} from "react-icons/fa"
import styles from "./searchdropdown.module.css"
import Image from "next/image"

export default function SearchDropdown(){
    return(
        <>
           
        <div className={styles.searchdropdown}> 
             <div className={styles.searchdropdown_title}>
                 <FaMapMarkerAlt className={styles.searchdropdown_icon}/>
                 <span className={styles.searchdropdown_text}>Use my Current Location</span>
             </div>

             <div className={styles.search_box_menu}>
                <h5 className={styles.search_title}>BY NAME</h5>

                <div className={styles.search_box_namelist_box}>
                    <div className={styles.search_box_namelist}>
                        <Image src="/images/Ellipse104.png" width={28} height={28} />
                        <span className={styles.search_box_name}>Tim Hortons</span>
                    </div>
                </div>
             </div>

        </div>
        </>
    )
}