import { useState } from "react"
import { useGetCatsQuery } from "./catsApiSlice"
import { CatInfo } from "./CatInfo/CatInfo"
import styles from "./Cats.module.css"

export const Cats = () => {

    interface Breed {
        weight: {imperical: string, metric: string}
        name: string
        vetstreet_url: string
        temperament: string
        origin: string
        description: string
        life_span: string
        indoor: number
        lap: number
        alt_names: string
        adaptability: number,
        affection_level: number,
        child_friendly: number,
        dog_friendly: number,
        energy_level: number,
        grooming: number,
        health_issues: number,
        intelligence: number,
        shedding_level: number,
        social_needs: number,
        stranger_friendly: number,
    }
    
    const numberOfCards = 20
    let { data, isError, isLoading} = useGetCatsQuery(numberOfCards)
    const [ excludedIds, setExcludedIds ] = useState(Array<string>)
    const [ likedIds, setLikedIds ] = useState(Array<string>)
    const [ onlyLiked, setOnlyLiked] = useState(Boolean)
    const [ visible, setVisible ] = useState(false)
    const [ info, setInfo ] = useState<Breed>()

    const exclude = (id:string) => {
        setExcludedIds([...excludedIds, id])
    }

    const like = (id:string) => {
        if (likedIds.includes(id)) {
            const filtered = likedIds.filter((item) => item !== id)
            setLikedIds(filtered)
        } else {
            setLikedIds([...likedIds, id])
        }
        
    }

    const toggleOnlyLiked = () => {
        setOnlyLiked(onlyLiked ? false : true)
    }

    const updateInfo = (info:Breed, e:any) => {
        console.log(e.target.nodeName)
        if (e.target.nodeName !== "BUTTON" && e.target.nodeName !== "svg" && e.target.nodeName !== "path") {
            setInfo(info)
            setVisible(true)
        }

    }

    return (
        <>
            <header className={ styles.header } >
                <span className={ styles.header_text }>
                    CATS
                </span>
                <button className={ styles.only_liked } onClick={toggleOnlyLiked}>
                    LIKED
                </button>
            </header>
            {
                isError
                ?
                <div className={ styles.info }>
                    <h1>There was an error!!!</h1>
                </div>
                :
                isLoading
                ?
                <div className={ styles.info }>
                    <h1>Loading...</h1>
                </div>
                :
                onlyLiked && likedIds.length === 0
                            ?
                            <div>
                                <div className={ styles.info }>
                                    <h1>You haven't liked any cats😥</h1>
                                </div>
                            </div>
                :
                <div className={ styles.wrapper }>
                    {

                        data!.filter((item) => onlyLiked ? likedIds.includes(item.id) : true).map((cat: any) => (
                            !excludedIds.includes(cat.id) &&
                            <div className={ styles.card } key={cat.id} onClick={(e) => updateInfo(cat.breeds[0], e)}>
                                <div className={ styles.cat_picture_div }>
                                    <img className={ styles.cat_picture } src={cat.url} />
                                </div>

                                <div className={ styles.cat_info_wrapper }>
                                    <div className={ styles.cat_text }>
                                        <span className={ styles.cat_breed_name }>{cat.breeds[0].name}</span>
                                        <span className={ styles.cat_description }>{cat.breeds[0].description}</span>
                                    </div>
                                    <div className={styles.buttons_wrapper}>
                                        <button className={ styles.trash_button } onClick={() => exclude(cat.id)}>
                                        <svg className={ styles.trash } version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                                                viewBox="0 0 41.336 41.336">
                                            <g>
                                                <path d="M36.335,5.668h-8.167V1.5c0-0.828-0.672-1.5-1.5-1.5h-12c-0.828,0-1.5,0.672-1.5,1.5v4.168H5.001c-1.104,0-2,0.896-2,2
                                                    s0.896,2,2,2h2.001v29.168c0,1.381,1.119,2.5,2.5,2.5h22.332c1.381,0,2.5-1.119,2.5-2.5V9.668h2.001c1.104,0,2-0.896,2-2
                                                    S37.438,5.668,36.335,5.668z M14.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5
                                                    s1.5,0.672,1.5,1.5V35.67z M22.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21c0-0.828,0.672-1.5,1.5-1.5
                                                    s1.5,0.672,1.5,1.5V35.67z M25.168,5.668h-9V3h9V5.668z M30.168,35.67c0,0.828-0.672,1.5-1.5,1.5s-1.5-0.672-1.5-1.5v-21
                                                    c0-0.828,0.672-1.5,1.5-1.5s1.5,0.672,1.5,1.5V35.67z"/>
                                            </g>
                                        </svg>
                                        </button>
                                        <button className={ styles.like_button } onClick={() => {
                                                like(cat.id)
                                            }}>
                                            <svg className={ likedIds.includes(cat.id) ? styles.liked : styles.like} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" 
                                                    viewBox="0 0 471.701 471.701">
                                                <g>
                                                    <path d="M433.601,67.001c-24.7-24.7-57.4-38.2-92.3-38.2s-67.7,13.6-92.4,38.3l-12.9,12.9l-13.1-13.1
                                                        c-24.7-24.7-57.6-38.4-92.5-38.4c-34.8,0-67.6,13.6-92.2,38.2c-24.7,24.7-38.3,57.5-38.2,92.4c0,34.9,13.7,67.6,38.4,92.3
                                                        l187.8,187.8c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-3.9l188.2-187.5c24.7-24.7,38.3-57.5,38.3-92.4
                                                        C471.801,124.501,458.301,91.701,433.601,67.001z M414.401,232.701l-178.7,178l-178.3-178.3c-19.6-19.6-30.4-45.6-30.4-73.3
                                                        s10.7-53.7,30.3-73.2c19.5-19.5,45.5-30.3,73.1-30.3c27.7,0,53.8,10.8,73.4,30.4l22.6,22.6c5.3,5.3,13.8,5.3,19.1,0l22.4-22.4
                                                        c19.6-19.6,45.7-30.4,73.3-30.4c27.6,0,53.6,10.8,73.2,30.3c19.6,19.6,30.3,45.6,30.3,73.3
                                                        C444.801,187.101,434.001,213.101,414.401,232.701z"/>
                                                </g>
                                            </svg>
                                        </button>
                                    </div>
                                    
                                </div>
                            </div>

                        ))
                    }
                </div>
            }
                

            <CatInfo info={info} visible={visible} setVisible={setVisible}/>
        </>
    )
}