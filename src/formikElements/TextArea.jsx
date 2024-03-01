import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import PersonalError from '../components/PersonalError';

const TextArea = (props) => {
    const {name,type,label}=props;
    console.log(props)
    return (
        <div className="mb-3">
        <label htmlFor={name} className="form-label">{label}</label>
        <FastField type={type} className="form-control" id={name} name={name} as="textarea" validate={props.validateBio} />
        <ErrorMessage name={name} component={PersonalError} />
    </div>
    );
}

export default TextArea;
