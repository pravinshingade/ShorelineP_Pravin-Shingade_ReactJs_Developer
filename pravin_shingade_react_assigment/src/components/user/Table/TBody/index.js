import React from 'react'
import TRow from './TRow'

const TBody = ({ tableRows = [] }) => {
    return <div className='table__body'>
            {
                tableRows.length > 0 ? 
                    tableRows.map((item,index) => <TRow key={item.id} index={index} {...item} />)
                    :
                    ""
            }
        </div>

}

export default TBody
