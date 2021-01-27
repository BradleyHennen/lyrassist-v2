import React from "react";
import { Form, Input, Button, Space, Col, Row, Divider, Typography } from "antd";
import { connect } from 'react-redux';
import { toggleCreateNew, toggleLoginModal } from './ducks'
import { firebaseRegister } from '../../store/slices/firebaseAuthSlice'
import { useHistory } from "react-router-dom";

function Register({ toggleLoginModal, toggleCreateNew, firebaseRegister }) {
    const { Text } = Typography;
    const history = useHistory();

    const onFinish = (values) => {
        if (values.password === values.confirmPassword) {
            firebaseRegister(values.email, values.password, () => {
                history.push('/user');
                toggleLoginModal(false);
            })
        } else {
            console.log('Error');
        }

    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 19,
        },
    };

    return (
        <>
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                {...layout}
            >
                <Form.Item
                    label="Email"
                    name="email"
                    rules={[
                        {
                            required: true,
                            type: "email",
                            min: 7,
                            message: 'Please input your email',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    label="Confirm Password"
                    name="confirmPassword"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item >
                    <Row>
                        <Col span={4} offset={20}>
                            <Space>
                                <Button type="secondary" onClick={() => toggleLoginModal(false)}>
                                    Cancel
                                </Button>
                                <Button type="primary" htmlType="submit">
                                    Submit
                                </Button>
                            </Space>
                        </Col>

                    </Row>
                </Form.Item>
            </Form>
            <Divider />
            <Row align="center" type="flex">
                <Col>
                    <Text>Already Have An Account?</Text>
                    <Button onClick={() => toggleCreateNew(false)} type="link" style={{ padding: 0, paddingLeft: '5px' }}>
                        <Text strong>Login</Text>
                    </Button>
                </Col>
            </Row>
        </>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    firebaseRegister,
    toggleCreateNew,
    toggleLoginModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Register);
