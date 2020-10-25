import React from 'react';
import Search from "../Search";
import Styles from './Sidebar.module.scss'
import Filter from "../Filter";


const SideBar = (props) => {

    const {clearFilter, filteredResults,searchResult , getApiData, filterDrinks,toggleFilter,martiniFilter} = props;

return (
    <>
        <div className={Styles.SideBar}>
            <Search
            getApiData={getApiData}
            searchResult={searchResult}
            />
            <Filter 
            filterDrinks={filterDrinks}
            searchResult={searchResult}
            toggleFilter={toggleFilter}
            filteredResults={filteredResults}
            martiniFilter={martiniFilter}
            clearFilter={clearFilter}

            />
        </div>
    </>
)
}

export default SideBar;