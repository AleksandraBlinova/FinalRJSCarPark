import React, {useState} from 'react'
import './TableSearch.css'

export const TableSearch = (props) => {
    const {
        search,
        handleChangeSearch
    } = props;
    const valueChangeHandler = event => {
        handleChangeSearch(event.target.value)
    }

    return (
        <div className="input-group mb-3 mt-3" >
             <div className="input-group-prepend">
                 <button 
                    className="btn btn-outline-secondary"
                    onClick={() => props.onSearch(search)} >Поиск</button>
            </div>
            <input 
                type="text" 
                className="form-control"
                onChange={valueChangeHandler} 
                value={search}
            />
        </div>
    )
}

