import React from "react";
import DrinkCard from '../../components/DrinkCard';
import styles from './Dashboard.module.scss';
import Search from '../../components/Search';
import LeftBar from '../../components/LeftBar';
import RightBar from '../../components/RightBar';


const Dashboard = (props) => {

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
    //if no filter then show normal search
    else { result = searchResults }

    const contentJsx = result.length ?
        result.map((item, index) =>
            <DrinkCard
                searchResults={item}
                key={index}
            />
        )
        : ('Please Search for cocktal')

    return (
        <div className={styles.innerDashboard}>
            <div className={styles.LeftBar}>
                <LeftBar />
            </div>
            <div className={styles.searchResults}>
                <h1>Search for Cocktail's</h1>
                <div className={styles.Search}>
                    <Search getApiData={getApiData} />
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