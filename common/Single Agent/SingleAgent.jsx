import styles from "./singleagent.module.css"
import { AiFillStar } from "react-icons/ai"
import { AgentProfile } from "../../pages/data"

export default function SingleAgent() {
    return (
        <>
            {AgentProfile.map((agent) => (
                <div key={agent.id} className={styles.single_agent_box}>
                    <div className={styles.single_agent_card}>
                        <img className={styles.single_agent_img} src={agent.img} />
                        <div className={styles.single_agent_card_content}>
                            <div className={styles.single_agent_titlebox}>
                                <span className={styles.single_agent_title_txt}>{agent.name}</span>
                                <span className={styles.single_agent_rating_box}>
                                    <span className={styles.single_agent_stars_box}>
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                        <AiFillStar />
                                    </span>

                                    <span className={styles.rating_text}>5.0</span>
                                </span>
                            </div>
                            <div className={styles.single_agent_desc}>
                                <span>Tim is a real estate agent at Kaleidico Realty, with over 8 years of experience. Lynn prides himself in satisfying his clients with the ...<a className={styles.agent_more_link} href="">More</a></span>
                            </div>
                        </div>
                    </div>

                    <div className={styles.single_agent_btn_box}>
                        <button className={styles.single_card_btn}>Contact Agent</button>
                    </div>



                </div>
            ))}
        </>
    )
}