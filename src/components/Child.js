import React from 'react'

const Child = ({match}) => {
    console.log(match)
    return(
        <div>
            <h3>ID: {match.params.id}</h3>
        </div>
    )
}

export default Child