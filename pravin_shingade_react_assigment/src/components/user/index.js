import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Button } from 'reactstrap';
import UserTable from './Table';
import './style.scss';
import { usersTableHead } from '../../common';
import { getUsersLists } from '../../store/reducers/users/action';
import { useHistory } from 'react-router';
import SpinnerComponent from '../common/spinner/spinner';

const UserComponent = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state => {return state.users.userList});
    const [usersList, setusersList] = useState([]);
    const history = useHistory();
    useEffect(() => {
        if (!userState.isFirst) {
            dispatch(getUsersLists())   
        }
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (userState.list && userState.list.length > 0) {
            setusersList([...userState.list])
        }
    }, [userState.list])

    return (
        <div className="page-container">
            <Row className="d-flex space-between page-head">
                <Col>
                    <p className="">Users &nbsp; Page</p>                    
                </Col>
                <Col className="column-padding">
                    <Button className="btn btn__button-primary" onClick={() => {
                        history.push('/add-user')
                    }}> 
                        Add User
                    </Button>
                </Col>
            </Row>
            <Row>
                <Col>
                {
                    !userState.isLoaded && !userState.isError ? <SpinnerComponent /> :
                    userState.isLoaded && !userState.isError ? <UserTable tableHead={usersTableHead} tableRows={usersList} />
                        : userState.errorMessage
                }
                </Col>
            </Row>
        </div>
    )
}

export default UserComponent
