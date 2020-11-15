import React from "react";
import DrinkCard from '../../components/DrinkCard';
import styles from './Dashboard.module.scss';


const Dashboard = (props) => {

    let result = [];
    let filterResultsInOneRow = [];

    const {
        searchResults
        , filterResults
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
        <div className={styles.dashboard}>
            {contentJsx}
        </div>
    )
}

export default Dashboard;