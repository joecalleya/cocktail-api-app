import React, { useState, useContext } from "react";
import styles from './DrinkCard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CrudContext } from "../../context/crudContext";


const DrinkCard = (props) => {
    const crudContext = useContext(CrudContext);
    const { toggleFav, addToSaved, favourites, removeFromSaved } = crudContext;

    const {
        name
        , instructions
        , ingredients
        , thumbnail
        , isFav
    } = props.searchResults;

    const [favState, setFavState] = useState(isFav);


    // this fnution will handle the fav click, if its already a fav then remove, otherwise add.

    const handleClick = (e) => {
        e.stopPropagation();
        toggleFav(props.searchResults);
        setFavState(!isFav);
    };

    const heartIcon = isFav ? styles.fontAwesomeFavorite : styles.fontAwesome;

    return (
        <div className={styles.resultCard}>
            <img className={styles.image} src={thumbnail} alt="Drink" />
            <div className={styles.name_ingredients}>
                <h1 className={styles.name}>{name}</h1>
                <p className={styles.ingredients}>{ingredients}</p>
            </div>
            <span className={`${heartIcon}`}>
                <FontAwesomeIcon icon={["fas", "heart"]} onClick={handleClick} />
            </span>
            <p className={styles.instructions}>{instructions}</p>

        </div>
    )
}

export default DrinkCard;