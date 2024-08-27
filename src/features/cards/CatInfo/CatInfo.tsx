import styles from "./CatInfo.module.css"
export const CatInfo = ({ info, visible, setVisible } : {info:any, visible:any, setVisible:any}) => {
    const close = () => {
        setVisible(false)
    }
    return (
        info &&
        <div className={styles.wrapper} style={{ left: visible ? "10px" : "-100000px"}}>
            <div className={styles.cat_full_info}>
                <button onClick={close}>
                    Back
                </button>
                <div className={styles.cat_full_info_name}>
                    {info.name}
                </div>
                <div>
                    <span className={styles.category_names}>Average weight:</span> {info.weight.metric} kg
                </div>
                <div>
                    <span className={styles.category_names}>Breed description:</span> {info.description}
                </div>
                {
                    info.alt_names &&
                    <div>
                        <span className={styles.category_names}>Alternative names:</span> {info.alt_names}
                    </div>
                }
                <div>
                    <span className={styles.category_names}>Temperament:</span> {info.temperament}
                </div>
                <div className={styles.charecteristcs}>
                    <span><span className={styles.charecteristcs_type}>Adaptability:</span> {"⭐".repeat(info.adaptability)}</span>
                    <span><span className={styles.charecteristcs_type}>Affection level:</span> {"⭐".repeat(info.affection_level)}</span>
                    <span><span className={styles.charecteristcs_type}>Child friendly:</span> {"⭐".repeat(info.child_friendly)}</span>
                    <span><span className={styles.charecteristcs_type}>Dog friendly:</span> {"⭐".repeat(info.dog_friendly)}</span>
                    <span><span className={styles.charecteristcs_type}>Energy level:</span> {"⭐".repeat(info.energy_level)}</span>
                    <span><span className={styles.charecteristcs_type}>Grooming:</span> {"⭐".repeat(info.grooming)}</span>
                    <span><span className={styles.charecteristcs_type}>Health issues:</span> {"⭐".repeat(info.health_issues)}</span>
                    <span><span className={styles.charecteristcs_type}>Intelligence:</span> {"⭐".repeat(info.intelligence)}</span>
                    <span><span className={styles.charecteristcs_type}>Shedding level:</span> {"⭐".repeat(info.shedding_level)}</span>
                    <span><span className={styles.charecteristcs_type}>Social needs:</span> {"⭐".repeat(info.social_needs)}</span>
                    <span><span className={styles.charecteristcs_type}>Stranger friendly:</span> {"⭐".repeat(info.stranger_friendly)}</span>
                </div>
            </div>
            

            <div className={ styles.glass }>

            </div>
                        
        </div>
    )
}