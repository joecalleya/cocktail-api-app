import React from 'react';
import styles from './DrinkCard.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const DrinkCard = (props) => {

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

    const { addToSaved } = props

    const handleClick = (e) => {
        e.stopPropagation();
        addToSaved(props.searchResult)
    };

    return (
        <div className={styles.resultCard}>
            <span className={styles.fontAwesome}>
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