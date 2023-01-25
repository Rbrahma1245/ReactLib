import React from "react";
import "./App.css";
import { attachField } from "react-forms";
// import { MUICheckBox } from "react-forms";

import { Formik } from "formik";
import * as yup from 'yup';
// import CheckBox from "./components/Checkbox";
import CheckBox from "./components/Checkbox/index"


// attachField("checkBox-1", <MUICheckBox />);
// attachField("checkBox-2", <CheckBox />)// a

attachField("checkBox-2", <CheckBox />)// a


export interface menuOptions {
	value: string;
	label: string;
	direction: string
}
export interface FieldProps {
	header?: string;
	helpertext?: string;
}


const menuOptions: menuOptions[] = [
	{ value: 'male', label: ' Male', direction: "row" },
	{ value: 'female', label: 'Female', direction: "row" },
	{ value: 'other', label: 'Other', direction: "row" }
];

const menuOptions1: menuOptions[] = [
	{ value: 'yes', label: ' Yes', direction: "row" },
	{ value: 'no', label: 'No', direction: "row" }
];

const fieldProps: FieldProps =
{
	header: 'Enter Age',
	helpertext: "Please select any one"
};


const FormSchema = yup.object({
	gender: yup.array().min(1).required("Gender is required"),
});




function App() {

	return (
		<div>
			<Formik initialValues={{
				gender: '',
			}}
				validationSchema={FormSchema}

				onSubmit={(data) => { console.log(data) }}>
				{(formikProp) => {

					return (
						<form className="form" onSubmit={formikProp.handleSubmit}>
							<CheckBox menuOptions={menuOptions} name={"gender"} fieldProps={fieldProps} formikProps={formikProp} />
							{/* <CheckBox menuOptions={menuOptions1} name={"school"} fieldProps={fieldProps} formikProps={formikProp} /> */}

							<button className="btn-submit" type="submit">Submit</button>

						</form>
					)
				}}
			</Formik>
		</div >
	);
}
export default App;