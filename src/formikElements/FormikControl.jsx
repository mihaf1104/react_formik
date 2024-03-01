import React from 'react';
import Input from './Input';
import TextArea from './TextArea';

const FormikControl = (props) => {
    switch (props.control) {
        case "input":
            return <Input {...props} />
        case "textArea":
            return <TextArea {...props} />
        default:
            break;
    }
}

export default FormikControl;
