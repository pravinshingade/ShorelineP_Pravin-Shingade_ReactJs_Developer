import moment from 'moment'
import React from 'react'
import { Col } from 'reactstrap'

const TRow = ({ 
    index,
    id,
    name,
    email,
    contactNo,
    dob,
    role
 }) => {
    return (
        <div key={id} className='b-bottom-gray table__item bg-white'>
        <div className='d-flex align-items-center flex-nowrap table__row'>
          <Col className="table__col table__row__col">{index+1}</Col>
          <Col className="table__col table__row__col">{name || '-'}</Col>
          <Col className="table__col table__row__col">{email || '-'}</Col>
          <Col className="table__col table__row__col">{contactNo || '-'}</Col>
          <Col className="table__col table__row__col">{moment(new Date(dob)).isValid() ?   moment(new Date(dob)).format("DD/MM/YYYY"):'-'}</Col>
          <Col className="table__col table__row__col">{role || '-'}</Col>
          </div>
      </div>
    )
}

export default TRow
