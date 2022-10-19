import styles from "./articlecard.module.css"
import { BsFillCalendarDateFill } from "react-icons/bs"
import { FaBookOpen } from "react-icons/fa"
import { AiFillTag } from "react-icons/ai"
import { ArticleInfo } from "../../pages/data"



export default function ArticleCard() {
    return (
        <>
          {ArticleInfo.map((article)=>(       
            <div className={styles.articlecard_body}>
                <div className={styles.articlecard_time}>
                    <div className={styles.articlecard_time_box}>
                        <BsFillCalendarDateFill className={styles.articlecard_time_icon} />
                        <div className={styles.time_text}>MARCH 21, <br /> 2022</div>
                    </div>

                    <div className={styles.articlecard_time_box}>
                        <FaBookOpen className={styles.articlecard_time_icon} />
                        <div className={styles.time_text}>5 MIN READ</div>
                    </div>

                </div>

                <img className={styles.articlecard_img} src={article.img} alt="" />

                <div className={styles.articlecard_title}>{article.title}</div>

                <div className={styles.articlecard_details_box}>
                    <div className={styles.articleCardarticle_details}>
                        <img className={styles.article_img} src={article.profile} alt="" />
                        <span className={styles.article_name}>Dan Hollie</span>
                    </div>

                    <div className={styles.articles_tag_box}>
                        <AiFillTag className={styles.articles_tag_icon} />
                        <span className={styles.articles_tag_text}>SELLING</span>
                    </div>

                </div>


            </div>
            ))}
        </>
    )
}