import React from 'react';
import { ErrorMessage, Field, Form, Formik, useFormik } from 'formik'
import * as yup from 'yup'

const initialValues = {
    name: 'qasem',
    email: '',
    password: '',
}
const onSubmit = values => {
    console.log(values);
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
    password: yup.string().required("لطفا این قسمت را وارد کنید")

})
const Registerform = () => {
    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     //validate
    //     validationSchema
    // })
    //console.log(formik);
    return (
        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
            <div className='auth_container container-fluid d-flex justify-content-center align-items-center w-100 h-100-vh p-0'>
                <div className="row w-100 justify-content-center align-items-center">
                    <div className='auth_box col-11 col-md-8 col-lg-6 col-xl-4 py-4 px-3'>
                        <Form>
                            <h1 className='text-center'>
                                <i className='fas fa-user-plus text-primary'></i>
                            </h1>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">نام</label>
                                <Field type="text" className="form-control" id="name" name='name' />
                                <ErrorMessage name='name' />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">ایمیل</label>
                                <Field type="email" className="form-control" id="email" name='email' />
                                <ErrorMessage name='email'/>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="password" className="form-label">رمز عبور</label>
                                <Field type="password" className="form-control" id="password" name='password'/>
                                <ErrorMessage name='password'/>
                            </div>
                            <div className='text-center w-100'>
                                <button type="submit" className="btn btn-primary">ثبت نام</button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </Formik>
    );
}

export default Registerform;
