import React from 'react';

const PersonalError = ({children}) => {
    return (
        <div>
            <small className='text-center d-block text-danger'>{children}</small>
        </div>
    );
}

export default PersonalError;
