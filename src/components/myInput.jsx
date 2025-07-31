import {ErrorMessage, Field} from "formik";

export default function MyInput ({children , label , type , ...props}) {
    return (
        <div>
            <label  htmlFor={props.id || props.name}>{label}</label>
            <Field  type={type} {...props} />
            <ErrorMessage component="div"
                          className="text-red-500 text-sm mt-1"
                          name={props.name}></ErrorMessage>
        </div>
    )
}