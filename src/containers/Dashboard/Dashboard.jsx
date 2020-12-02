import React, { useContext, useState } from "react";
import DrinkCard from '../../components/DrinkCard';
import styles from './Dashboard.module.scss';
import Search from '../../components/Search';
import LeftBar from '../../components/LeftBar';
import RightBar from '../../components/RightBar';
import { CrudContext } from "../../context/crudContext";


const Dashboard = (props) => {

    const crudContext = useContext(CrudContext);
    const { favourites } = crudContext;

    const [isFavorite, setIsFavorite] = useState(false);

    const toggleFavoritesView = () => {
        setIsFavorite(!isFavorite)
    }

    const toggleFavoritesOff = () => {
        setIsFavorite(false)
    }

    let result = [];
    let filterResultsInOneRow = [];

    const {
        searchResults
        , filterResults
        , getApiData
        , setFilterParameters
        , filterParameters
        , } = props;

    //SHOW FILTERED RESULTS, IF THE ARE ANY PUT THEM INTO A RESULTS ARRAY
    if (filterResults.length > 0) {
        filterResults.map((item, index) => {
            filterResultsInOneRow.push(...filterResults[Object.keys(filterResults)[index]])
            return filterResultsInOneRow
        }
        )
        result = filterResultsInOneRow

    }
    // if favorites selected show them
    else if (isFavorite) {
        result = favourites
    }
    //if no filter then show normal search or 
    else { result = searchResults }

    const contentJsx = result.length ?
        result.map((item, index) =>
            <DrinkCard
                searchResults={item}
                key={index}
            />
        )
        : ('Please un-toggle -favorites and search for Cocktails')

    return (
        <div className={styles.innerDashboard}>
            <div className={styles.LeftBar}>
                <LeftBar
                    toggleFavoritesView={toggleFavoritesView}
                    isFavorite={isFavorite}

                />
            </div>
            <div className={styles.searchResults}>
                <h1>Search for Cocktail's</h1>
                <div className={styles.Search}>
                    <Search getApiData={getApiData}
                        toggleFavoritesOff={toggleFavoritesOff}
                    />
                </div>
                <div className={styles.DrinkCard}>
                    {contentJsx}
                </div>

            </div>

            <div className={styles.RightBar}>
                <RightBar
                    getApiData={getApiData}
                    searchResults={searchResults}
                    filterParameters={filterParameters}
                    setFilterParameters={setFilterParameters}
                />
            </div>
        </div>
    )
}

export default Dashboard;