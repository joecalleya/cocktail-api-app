import React from 'react';
import DrinkCard from '../../components/DrinkCard';
import styles from './Dashboard.module.scss';


const Dashboard = (props) => {

    const {addToSaved
        ,clearFilter, searchResult 
        , getApiData, filterDrinks 
        ,toggleFilter, filteredResults
        ,martiniFilter
        ,signIn
        ,signOut
        ,user
        , } = props;

    const contentJsx = searchResult.length ? 
    searchResult.map((item,index) =>
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