import styles from "./navbardropdown.module.css"
import {IoMdPerson} from "react-icons/io"
import {RiLockPasswordFill} from "react-icons/ri"
import {BiLogOut} from "react-icons/bi"

export default function NavbarDropDown(){
    return(
        <>
        <div className={styles.dropdown_box}>
            <div className={styles.linkbox}>
                <IoMdPerson className={styles.link_icon}/>
                <span className={styles.link_text}>My Profile</span>
            </div>
            <div className={styles.linkbox}>
                <RiLockPasswordFill className={styles.link_icon}/>
                <span className={styles.link_text}>Change Password</span>
            </div>
            <div className={styles.login_linkbox}>
                <BiLogOut className={styles.link_icon}/>
                <span className={styles.link_text}>Logout</span>
            </div>
        </div>
        </>
    )
}