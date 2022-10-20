import styles from "./footer.module.css"

export default function Footer() {
    return (
        <>
            <div className={styles.footer_section}>
                <div className={styles.footer_com}>
                    <div className={styles.footer_box}>
                        <div className={styles.footer_boxes}>
                            <img src="../images/logo.png" alt="" />
                            <div className={styles.footer_text}>Lorem ipsum dolor amet, consectetur <br /> adipiscing elit. Eget nisl nunc quam ac sed <br /> turpis volutpat. Cursus sed massa non nisi, <br /> placerat.</div>
                            <img src="../images/SocialLinks.png" alt="" />
                        </div>

                        <div className={styles.footer_boxes}>
                            <h5 className={styles.footer_box_title}>Company</h5>
                            <p className={styles.footer_box_link}>About</p>
                            <p className={styles.footer_box_link}>Blog</p>
                            <p className={styles.footer_box_link}>Contact</p>
                            <p className={styles.footer_box_link}>Careers <span>We’re hiring</span></p>
                        </div>

                        <div className={styles.footer_boxes}>
                            <h5 className={styles.footer_box_title}>Agentbook</h5>
                            <p className={styles.footer_box_link}>Search for agent</p>
                            <p className={styles.footer_box_link}>Search for sale</p>
                            <p className={styles.footer_box_link}>FAQ</p>
                        </div>
                        <div className={styles.footer_boxes}>
                            <h5 className={styles.footer_box_title}>Resources</h5>
                            <p className={styles.footer_box_link}>Articles</p>
                            <p className={styles.footer_box_link}>Guides</p>
                            <p className={styles.footer_box_link}>Estate</p>
                        </div>
                    </div>
                    <div className={styles.footer_Rights_box}>
                        <div className={styles.footer_Rights}>
                            <span> 2022 Agentbook All Rights Reserved</span>
                        </div>

                        <div className={styles.footer_Rights}>
                            <span>Terms & Conditions</span>
                            <span>Privacy Policy</span>
                            <span>Cookie Policy</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}