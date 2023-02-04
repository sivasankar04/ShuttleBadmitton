import { Form } from 'antd';
import InputField, { CommonButton, InputPasswordField } from '../Components/FormFields';
const onFinish = async (values) => {

    console.log('Success:', values);

    // Default options are marked with *
    const response = await fetch('http://localhost:3005/users/register', {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        body: JSON.stringify(values), // body data type must match "Content-Type" header
        headers: {
            'content-type': 'application/json',
            passwordText: values?.password
        }
    });
    return response.json(); // parses JSON response into native JavaScript objects
}

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const RegisterScreen = () => (
    <div >
        <Form
            name="basic"
            labelCol={{
                span: 8,
            }}
            wrapperCol={{
                span: 16,
            }}
            style={{
                maxWidth: 600,
            }}
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
        >

            <InputField
                label="Email"
                name="email"
                rules={[
                    {
                        required: true,
                        message: 'Please input your Email!',
                    },
                ]}
            />

            <InputPasswordField label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]} />

            <CommonButton btnText={"Submit"} type="primary" htmlType="submit" />


        </Form>

    </div>
);
export default RegisterScreen;