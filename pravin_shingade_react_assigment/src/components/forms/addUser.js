import React, { useState } from 'react'
import { Button, Col, Form, Row } from 'reactstrap'
import './styles.scss';
import '../user/style.scss'
import { useHistory } from 'react-router';
import moment from 'moment';
import { regexString } from '../../constants/utils';
import { useDispatch } from 'react-redux';
import { updateUsersLists } from '../../store/reducers/users/action';
import Guid from 'uuid'

const minimumDate = "01-01-1950";
const maximumDate = new Date().toISOString().split("T")[0]

const AddUserForm = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const [formData, setformData] = useState({
        name:'',
        contactNo: {
            value: '',
            message: '',
            isValid: false
        },
        dob:{
            value: '',
            message: '',
        },
        email: {
            value: '',
            message: '',
            isValid: false
        },
        role: '',
    })

    const testResegx = (regex, value, message) => {
        return value !== "" && !regex.test(value) ? {message: `Please enter valid ${message}.`, isValid: false}:{message: '', isValid: true}
    }

    const onValuChange = (label,value) => {
        let message;
        switch (label) {
            case "email":
                message = testResegx(regexString.emailRegex, value, 'email');
                setformData({
                    ...formData,
                    'email' : {
                        'value': value,
                        'message': message.message,
                        'isValid': message.isValid
                    }
                })
                break;
            case "dob" :
                console.log(moment(value).format('YYYY-MM-DD'))
                message = 
                        value !== "" 
                            && !moment(new Date(value)).isValid() 
                            ? "Please enter valid DOB.":"";
                setformData({
                    ...formData,
                    'dob' : {
                        'value': moment(value).format('YYYY-MM-DD'),
                        'message': message
                    }
                })
                break;
        
            case "contactNo":
                message = testResegx(regexString.phoneNumber, value, 'Phone');
                setformData({
                    ...formData,
                    'contactNo' : {
                        'value': value,
                        'message': message.message,
                        'isValid': message.isValid
                    }
                })
                break;

            default:
                setformData({
                    ...formData,
                    [label]: value
                })
            break;
        }
    }


    const onSubmit = (e) => {
        e.preventDefault()
        let obj =  {
            id: Guid.v4(),
            name: formData.name || '',
            dob: formData.dob.value || '',
            contactNo: formData.contactNo.value || '',
            role: formData.role || '',
            email: formData.email.value || '',
        }
        dispatch(updateUsersLists(obj));
        history.push('/users');
    }

    return (
        <div className="adduser-form">
            <Row>
                <Col>
                    <p className="page-head text-center">Add User</p>
                </Col>
            </Row>
            <Form onSubmit={onSubmit} className="form-padding">
                <Row className="d-flex space-between mt-3">
                    <Col><label>Name : </label></Col>
                    <Col>
                        <input type='text' value={formData.name} maxLength="30" className="custom-form-control custom-form-control__input" onChange={(e) => {
                            onValuChange("name", e.target.value);
                        }}  />
                    </Col>
                </Row>
                <Row className="d-flex space-between mt-3">
                    <Col><label>Email <span className="text-danger">*</span> : </label></Col>
                    <Col>
                        <input type='email' required value={formData.email.value} className="custom-form-control custom-form-control__input" onChange={(e) => {
                            onValuChange("email", e.target.value);
                        }} />
                        <span className="invalid-feedback">{formData.email.message}</span>
                    </Col>
                </Row>
                <Row className="d-flex space-between mt-3">
                    <Col><label>Contact No : </label></Col>
                    <Col>
                        <input type='text' value={formData.contactNo.value} className="custom-form-control custom-form-control__input" onChange={(e) => {
                            onValuChange("contactNo", e.target.value);
                        }} />
                        <span className="invalid-feedback">{formData.contactNo.message}</span>
                    </Col>
                </Row>
                <Row className="d-flex space-between mt-3">    
                    <Col><label>Datet of Birth : </label></Col>
                    <Col>
                        <input 
                            type='date' 
                            value={formData.dob.value} 
                            min={minimumDate} 
                            max={maximumDate} 
                            className="custom-form-control custom-form-control__input" 
                            onChange={(e) => {
                                onValuChange("dob", e.target.value);
                            }}  
                        />
                        <span className="invalid-feedback">{formData.dob.message}</span>
                    </Col>
                </Row>
                <Row className="d-flex space-between mt-3">
                    <Col><label>Role <span className="text-danger">*</span> : </label></Col>
                    <Col>
                        <select required id="role" value={formData.role} className="custom-form-control" onChange={(e) => {
                            onValuChange("role",e.target.value);
                        }}>
                            <option value="" defaultChecked>Select</option>
                            <option value="Owner">Owner</option>
                            <option value="Admin">Admin</option>
                            <option value="Operator">Operator</option>
                            <option value="User">User</option>
                        </select>
                    </Col>
                </Row>
                <Row className="d-flex mt-3 flex-end">
                    <div className="pd-4">
                        <Button className="btn btn__button-secondary" onClick={ () => {
                            history.push('/users')
                        }}>Cancel</Button>
                    </div>
                    <div className="pd-4">
                        <Button type='submit' disabled={!formData.contactNo.isValid || !formData.email.isValid || formData.role === ''} className="btn btn__button-primary" >Submit</Button>
                    </div>
                </Row>
            </Form>
        </div>
    )
}

export default AddUserForm
