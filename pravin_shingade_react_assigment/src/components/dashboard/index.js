import React from 'react'
import { Button } from 'reactstrap'
import '../user/style.scss';

function Dashboard() {
    return (
        <div>
            <div className="text-center">
                Sharoline User Assigment
            </div>
            <div className="text-center">
                <Button className="text-center btn btn__button-primary" onClick={() => {
                    window.location.href ='/users'
                }}> 
                    User Table
                </Button>
            </div>
        </div>
    )
}

export default Dashboard
