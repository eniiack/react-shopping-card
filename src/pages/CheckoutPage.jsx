import {ErrorMessage, Field, Form, Formik} from "formik";
import * as yup from "yup";
import MyInput from "../components/myInput.jsx";

export default function CheckoutPage() {


    const registerFormSchema = yup.object().shape({
        name: yup.string().required("فیلد نام الزامی است"),
        username: yup.string().required("فیلد نام کاربری الزامی است"),
        email: yup.string().required().email("فیلد ایمیل الزامی است"),
        password: yup.string().required("فیلد پسورد الزامی است").min(8),
    })

    const submitHandler = (values) => {
        console.log(values , "submit")
        localStorage.setItem("auth", JSON.stringify(values))
    }
    return (
        <main className="checkout-form">
            <Formik initialValues={{
                name: '',
                username: '',
                email: '',
                password: '',
            }}
                    validationSchema={registerFormSchema}
                    onSubmit={submitHandler}

            >
                <Form>

                    <MyInput
                        label="your name"
                        name="name"
                        type="text"
                        placeholder="نام خود را وارد کنید"

                    />
                    <MyInput
                        label="your Username"
                        name="username"
                        type="text"
                        placeholder="نام کاربری خود را وارد کنید"
                    />
                    <MyInput
                        label="your Email"
                        name="email"
                        type="email"
                        placeholder="ایمیل خود را وارد کنید"
                    />
                    <MyInput
                        label="your Password"
                        name="password"
                        type="text"
                        placeholder="پسورد خود را وارد کنید"
                    />


                    <button
                        type="submit"
                        className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
                    >
                        ارسال
                    </button>
                </Form>
            </Formik>
        </main>

    )
}