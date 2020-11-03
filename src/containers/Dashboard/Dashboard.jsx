import React from "react";
import DrinkCard from '../../components/DrinkCard';
import styles from './Dashboard.module.scss';


const Dashboard = (props) => {

    let result = [];
    let filterResultsInOneRow = [];

    const {
        addToSaved
        , searchResult
        , filterResults
        , } = props;


    if (filterResults.length > 0) {
        filterResults.map((item, index) => {
            filterResultsInOneRow.push(...filterResults[Object.keys(filterResults)[index]])
            return filterResultsInOneRow
        }
        )
        result = filterResultsInOneRow

    }
    else { result = searchResult }

    console.log('filter Results', filterResults, 'Search Results', 'Filter Results in 1 row', filterResultsInOneRow)


    const contentJsx = result.length ?
        result.map((item, index) =>
            <DrinkCard
                searchResult={item}
                key={index}
                addToSaved={addToSaved}
            />
        )
        : ('Please Search for cocktal')

    // console.log(searchResult)

    return (
        <div className={styles.dashboard}>
            {contentJsx}
        </div>
    )
}

export default Dashboard;