import React from 'react';
import DrinkCard from '../../components/DrinkCard';
import styles from './Dashboard.module.scss';
import SideBar from '../../components/SideBar';


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
        <div className={styles.dashContainer}>
            <div className={styles.sidebar}>
                    <SideBar
                    getApiData={getApiData}
                    searchResult={searchResult}
                    filterDrinks={filterDrinks}
                    toggleFilter={toggleFilter}
                    filteredResults={filteredResults}
                    martiniFilter={martiniFilter}
                    clearFilter={clearFilter}
                    user={user}
                    signIn={signIn}
                    signOut={signOut}
                    />
            </div>
            <div className={styles.dashboard}>
                {contentJsx}
            </div>
        </div>
                        )
                    }
                    
export default Dashboard;