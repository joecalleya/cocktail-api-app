import React, { useState, useContext } from "react";
import styles from './DrinkCard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CrudContext } from "../../context/crudContext";


const DrinkCard = (props) => {
    const crudContext = useContext(CrudContext);
    const [isFavorite, setIsFavorite] = useState(false);
    const { addToSaved,favourites ,removeFromSaved} = crudContext;

    const { 
        idDrink,
        strDrink,
        // , strDrinkAlternate, strDrinkES, strDrinkDE, strDrinkFR,
        strDrinkThumb,
        //   strTags, strVideo, strCategory, strIBA, strAlcoholic, strGlass
        strInstructions,
        // strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5, strIngredient6, strIngredient7, strIngredient8, 
        // strIngredient9, strIngredient10, strIngredient11, strIngredient12, strIngredient13, strIngredient14, strIngredient15, strMeasure1, strMeasure2, 
        // strMeasure3, strMeasure4, strMeasure5, strMeasure6, strMeasure7, strMeasure8, strMeasure9, strMeasure10, 
        // strMeasure11, strMeasure12, strMeasure13, strMeasure14, strMeasure15, strCreativeCommonsConfirmed, dateModified 
    } = props.searchResult;


    const handleClick = (e) => {
        e.stopPropagation();
        console.log(favourites.includes(props.searchResult));
        if (favourites.includes(props.searchResult))
        {
        removeFromSaved(props.searchResult)
        }
        else
        {
        addToSaved(props.searchResult)
        setIsFavorite(!isFavorite)
        }
    };

    const heartIcon = isFavorite ? styles.fontAwesome_fav : styles.fontAwesome;

    return (
        <div className={styles.resultCard}>
            <span className={`${heartIcon}`}>
                <FontAwesomeIcon icon={["fas", "heart"]} onClick={handleClick}
                />
            </span>
            <div className={styles.image}>
                <img className={styles.responsiveImage} src={strDrinkThumb} alt="Drink" />
            </div>

            <h1>{strDrink}</h1>

            <p>{strInstructions}</p>

        </div>
    )
}

export default DrinkCard;