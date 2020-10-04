import React, {useState} from 'react';
import searchIcon from '../../../img/search_icon.png'
import PropTypes from 'prop-types';

import styles from './inputSearch.module.scss'

const  SearchInput = ({onChangeFunc}) =>{
    const [filter, setFilter] = useState('')
    return(
        <div className={styles.searchWrapper}>
            <img src={searchIcon} alt='search' className={styles.searchIcon} onClick={()=>onChangeFunc(filter)}/>
            <input type='text'
                   className={styles.inputSearch}
                   onChange={(el)=>setFilter(el.target.value)}
            />
        </div>
    )
}

SearchInput.propTypes = {
    onChangeFunc: PropTypes.func.isRequired,
};

export default SearchInput;