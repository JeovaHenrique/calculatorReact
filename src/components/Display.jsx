/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import './Display.css'

export default props => {
    const {value} = props
    return (
        <div className='display'>{value}
        </div>
    )

}