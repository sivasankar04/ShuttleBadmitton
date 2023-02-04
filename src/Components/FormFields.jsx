import { Input, Form, Button } from 'antd'
import React from 'react'

export default function InputField({ label, name, rules ,...rest}) {
    return (
        <div>
            <Form.Item
                label={label}
                name={name}
                rules={rules}
            >
                <Input  {...rest}/>
            </Form.Item>

        </div>
    )
}
export  function InputPasswordField({ label, name, rules ,...rest}) {
    return (
        <div>
            <Form.Item
                label={label}
                name={name}
                rules={rules}
            >
               <Input.Password  {...rest}/>
            </Form.Item>

        </div>
    )
}
export  function CommonButton({ type, btnText, htmlType,...rest }) {
    return (
        <div>
            <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
            >
                <Button type={type} htmlType={htmlType} {...rest}>
                    {btnText}
                </Button>
            </Form.Item>

        </div>
    )
}
