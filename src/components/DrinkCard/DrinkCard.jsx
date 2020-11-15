import React, { useState, useContext } from "react";
import styles from './DrinkCard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CrudContext } from "../../context/crudContext";


const DrinkCard = (props) => {
    const crudContext = useContext(CrudContext);
    const [isFavorite, setIsFavorite] = useState(false);
    const {toggleFav ,addToSaved,favourites ,removeFromSaved} = crudContext;

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
            <span className={`${heartIcon}`}>
                <FontAwesomeIcon icon={["fas", "heart"]} onClick={handleClick}
                />
            </span>
            <div className={styles.image}>
                <img className={styles.responsiveImage} src={thumbnail} alt="Drink" />
            </div>

            <h1>{name}</h1>
            <p  className={styles.ingredients}>{ingredients}</p>
            <p>{instructions}</p>

        </div>
    )
}

export default DrinkCard;