import React from 'react'
// import { FormikProps } from 'formik';
import { get } from "lodash";


const TextField: React.FC = (props: any) => {
    const { formikProps, fieldProps } = props;
    const { header, helpertext } = fieldProps

    const fieldError = get(formikProps, `errors.name`) || '';
    const fieldValue = get(formikProps, `values.name`) || '';

    const errorFlag = !!fieldError

    console.log(formikProps)

    return (
        <div>
            {
                (header) &&
                <label className="header">{header}</label>
            }
            <br />
            <input
                type="text"
                name="name"
                value={fieldValue}
                onBlur={formikProps.handleBlur}
                onChange={formikProps.handleChange}
            />

            {
                (errorFlag || helpertext) &&
                (
                    <label className="label-error">{errorFlag ? <span className="fieldError">{fieldError}</span> :
                        <span className="helpertext">{helpertext} </span>}</label>
                )
            }



        </div>
    )
}

export default TextField
