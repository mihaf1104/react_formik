import { ErrorMessage, FastField } from 'formik';
import React from 'react';
import PersonalError from './PersonalError';

const FavoritsField = (props) => {
    const { form, push, remove } = props;
    const { favorits } = form.values;
    //console.log(form)
    return (
        <>
            <i className='fas fa-plus text-success mx-3 pointer' onClick={() => push('')}></i>
            {
                favorits.map((f, i) => (
                    <div key={i} className='position-relative'>
                        <FastField type="text" className="form-control" id="favorits" name={`favorits[${i}]`} />

                        {favorits.length > 1 ?
                            (
                                <i className='fas fa-minus-circle text-danger mx-1 pointer delete_icon'
                                    onClick={() => remove(i)}></i>

                                    
                            )
                            : null
                        }
                        <ErrorMessage name={`favorits[${i}]`} />
                           
                           {/* {error=>  <small className='text-center d-block text-danger'>{error}</small>}
                            </ErrorMessage> */}
                    </div>
                ))
            }
        </>
    );
}

export default FavoritsField;
