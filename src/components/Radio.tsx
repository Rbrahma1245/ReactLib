import React from 'react'
import { FormikProps } from 'formik';
import { Option } from './CheckBox';
import { get } from 'lodash';



interface Props {
    options: Option[];
    name: string
    formikProps: FormikProps<{ gender: string[] }>
    fieldProps: {}
}

const Radio: React.FC<Props> = ({ options, name, formikProps }) => {

    console.log(options)

    const fieldValue: string[] = get(formikProps, `values.${name}`) || [];
    console.log(name, fieldValue)






    return (
        <div >
            RADIO BUTTON
            <br />
            {options.map((elem) => (
                <label key={elem.value}>
                    <input
                        type="radio"
                        name={name}
                        value={elem.value}
                        checked={fieldValue?.includes(elem.value)}
                        onChange={formikProps.handleChange}
                    />
                    {elem.label}
                </label>
            ))}
            <br />
            <button type="submit">Submit</button>
        </div>
    )
}

export default Radio
