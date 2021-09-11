import React from 'react'
import HeadItem from './HeadItem'

const THead = ({ tableHead = [], className = 0 }) => {
    return (
        <div className={`${className} flex-nowrap`}>{tableHead.map((item) => <HeadItem key={item.id} {...item} />)}</div>
    )
}

export default THead
