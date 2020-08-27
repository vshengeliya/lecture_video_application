import React from 'react'

function Search(props){

    return(
        <>
        <form>

            <input pleaceholder="serach for instructor" value={props.searchValue} onChange={props.searchHandler}/>
        </form>
        </>
    )
}

export default Search