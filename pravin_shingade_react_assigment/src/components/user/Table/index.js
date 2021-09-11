import React from 'react'
import { Col, Row } from 'reactstrap';
import TBody from './TBody';
import THead from './THead';

const UserTable = ({ tableHead = [], tableRows = [] }) => {
    return (
        <Row className='table'>
            <Col xs={12} className='px-0'>
                <THead className='table__head' tableHead={tableHead} customerTableHead={tableHead} />
            </Col>
            <Col xs={12} className='px-0'>
                <TBody tableRows={tableRows} /> 
            </Col>
        </Row>
    )
}

export default UserTable;
