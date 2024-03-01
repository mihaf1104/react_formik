import React, { useEffect, useState } from 'react';
import { ErrorMessage, FastField, Form, Formik, FieldArray } from 'formik'
import * as yup from 'yup'
import PersonalField from '../components/PersonalField'
import PersonalError from './PersonalError';
import FavoritsField from './favoritsField'
import FormikControl from '../formikElements/FormikControl';
const initialValues = {
    name: 'qasem',
    email: '',
    password: '',
    bio: '',
    address: {
        city: '',
        postalCode: ''
    },
    phone: ['', ''],
    favorits: ['']

}
const onSubmit = (values, submitProps) => {
    // console.log('submiting');
    // console.log(submitProps)
    setTimeout(() => {
        submitProps.setSubmitting(false);
    }, 5000);
}
// const validate = values => {
//     let error = {}
//     if (!values.name) {
//         error.name = "لطفا این قسمت را پر کنید"
//     }
//     if (!values.email) {
//         error.email = "لطفا این قسمت را پر کنید"
//     } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(values.email)) {
//         error.email = "لطفا فرمت ایمیل را درست وارد کنید"
//     }

//     if (!values.password) {
//         error.password = "لطفا این قسمت را پر کنید"
//     }
//     return error;
// }
const validationSchema = yup.object({
    name: yup.string().required("لطفا این قسمت را پر کنید"),
    email: yup.string().required("لطفا این قسمت را پر کنید").email("لطفا فرمت ایمیل را به درستی وارد کنید"),
    password: yup.string().required("لطفا این قسمت را وارد کنید"),
    address: yup.object({
        city: yup.string().required("لطفا این قسمت را پر کنید"),
        postalCode: yup.string().required("لطفا این قسمت را پر کنید"),
    }),
    favorits: yup.array().of(yup.string().required('لطفا این قسمت را پر کنید'))

})



const validateBio = values => {
    let error;
    if (!values) { error = "اجباری" }
    else if (!/^[\u0600-\u06FF\s0-9a-zA-Z]+$/.test(values)) {
        error = "لطفا قالب نوشتاری را رعایت کنید"
    }

    //console.log(values);
    return error;
}



const Registerform = () => {
    //const [savedData, setSavedData] = useState(null);
    const [myValue, setMyValue] = useState(null)

    const handleSaveData = (formik) => {
        localStorage.setItem('saveData', JSON.stringify(formik.values))
    }
    const handleGetData = (formik) => {
        const local = JSON.parse(localStorage.getItem('saveData'))
        setMyValue(local)

    }
    const isMyValueFill = () => JSON.parse(localStorage.getItem('saveData'))
    // useEffect(() => {
    //     const locals = JSON.parse(localStorage.getItem('saveData')) 
    //     setSavedData(locals) 
    // }, []);

    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     //validate
    //     validationSchema
    // })
    //console.log(formik);
    return (
        <Formik
            initialValues={myValue || initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
            enableReinitialize
        // validateOnMount
        >
            {formik => {
                //console.log(formik)
                return (
                    <div className='auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0'>
                        <div className="row w-100 justify-content-center align-items-center">
                            <div className='auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3'>
                                <Form className='row'>
                                    <h1 className='text-center'>
                                        <i className='fas fa-user-plus text-primary'></i>
                                    </h1>
                                    <FormikControl control="input" type="text" name="name" label="نام" />
                                    <FormikControl control="input" type="email" name="email" label="ایمیل" />
                                    <FormikControl control="input" type="password" name="password" label="کلمه عبور" />
                                    <FormikControl control="textArea" type="textarea" name="bio" label="بیوگرافی" />
                                    <FormikControl control="input" type="text" name="address.city" label="شهر" />
                                     
                                    <div className="mb-3 col-6">
                                        <label htmlFor="postalCode" className="form-label">کدپستی</label>
                                        <FastField type="text" className="form-control" id="postalCode" name='address.postalCode' />
                                        <ErrorMessage name='address.postalCode' />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="postalCode" className="form-label">علایق</label>
                                        <FieldArray type="text" className="form-control" id="favorits" name='favorits' >
                                            {props => <FavoritsField {...props} />}
                                        </FieldArray>

                                    </div>
                                    <div className='text-center w-100'>
                                        <button type="submit" className="btn btn-primary" disabled={!(formik.isValid && formik.dirty) || formik.isSubmitting}>
                                            {formik.isSubmitting ?
                                                (<div class="spinner-border" role="status">
                                                    <span class="sr-only">Loading...</span>
                                                </div>) :
                                                "ثبت نام"
                                            }


                                        </button>
                                        {
                                            (formik.isValid && formik.dirty) ?
                                                (<button type='button' className='btn btn-warning mx-2' onClick={() => handleSaveData(formik)}
                                                    disabled={
                                                        !(formik.dirty && formik.isValid)
                                                    }
                                                >ذخیره سازی اطلاعات</button>) : null
                                        }
                                    </div>

                                    {
                                        (isMyValueFill) ?
                                            (<button type='button' className='btn btn-success mx-1' onClick={handleGetData}
                                            >دریافت آخرین اطلاعات ازاین سیستم</button>) : null
                                    }

                                    <br />
                                    <button className='btn btn-info' type='button' onClick={() => formik.validateField('bio')}>اعتبار سنجی بیوگرافی</button>
                                    <br />
                                    <button className='btn btn-info' type='button' onClick={() => formik.validateForm()}>بیوگرافی فرم</button>
                                    <br />
                                    <button className='btn btn-success' type='button' onClick={() => formik.setFieldTouched('bio')}>تاج بیوگرافی</button>
                                    <br />
                                    <button className='btn btn-success' type='button' onClick={() => formik.setTouched({ name: true, email: true })}>تاج فرم</button>

                                </Form>
                            </div>
                        </div>
                    </div>
                )
            }

            }
        </Formik>
    );
}

export default Registerform;
