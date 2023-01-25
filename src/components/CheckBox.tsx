import React from 'react';
import { FormikProps } from 'formik';
import { get, isEmpty } from 'lodash';
import { FieldProps, menuOptions } from '../App';
import "./index.css"






interface CheckboxProps {
    menuOptions: menuOptions[];
    name: string
    formikProps: FormikProps<{ gender: string[] }>
    fieldProps: FieldProps
}

const CheckBox: React.FC<CheckboxProps> = (props) => {

    const { menuOptions, name, formikProps, fieldProps } = props;
    const { header, helpertext } = fieldProps

    const fieldValue: string[] = get(formikProps, `values.${name}`) || [];


    console.log(formikProps)

    const fieldError = get(formikProps, `errors.gender`) || [];

    console.log(fieldError, "error", typeof fieldError);
    console.log(helpertext, "help", !!helpertext)
    // const errorFlag = typeof fieldError === "string";

    return (
        <div className="menu-options" >
            {
                (header) &&
                <label className="header">{header}</label>
            }
            <br />

            {
                (!isEmpty(menuOptions)) ? (
                    menuOptions.map((elem) => (
                        < label key={elem.value} >
                            <input style={elem.direction === "column" ? { display: "flex" } : null}
                                type="checkbox"
                                name={name}
                                value={elem.value}
                                checked={fieldValue?.includes(elem.value)}
                                onBlur={formikProps.handleBlur}
                                onChange={formikProps.handleChange}
                            />
                            {elem.label}
                        </label>
                    ))
                ) : null
            }

            {/* {
                (errorFlag || helpertext) &&
                (<label>{errorFlag ? fieldError : helpertext}</label>)
            } */}


            {
                (fieldError || helpertext) &&
                (<div >{fieldError || helpertext}</div>)
            }


        </div >
    );
};
export default CheckBox;