import React from "react";
import { Form, Input, Button, Space, Col, Row, Divider, Typography } from "antd";
import { connect } from 'react-redux';
import { toggleCreateNew, toggleLoginModal } from './ducks'
import { firebaseLogin } from '../../store/slices/firebaseAuthSlice'
import { useHistory } from "react-router-dom";

function Login({ toggleCreateNew, toggleLoginModal, firebaseLogin }) {
    const { Text } = Typography;
    const history = useHistory();

    const onFinish = (values) => {
        firebaseLogin(values.emailAddress, values.password, () => {
            console.log('history', history);

            history.push('/user');
            toggleLoginModal(false);
        })
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const layout = {
        labelCol: {
            span: 5,
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
                    name="emailAddress"
                    rules={[
                        {
                            type: "email",
                            required: true,
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

                <Form.Item >
                    <Row>
                        <Col span={4} offset={20}>
                            <Space>
                                <Button type="secondary" onClick={() => toggleLoginModal(false)}>
                                    Cancel
                                </Button>
                                <Button type="primary" htmlType="submit">
                                    Login
                                </Button>
                            </Space>
                        </Col>

                    </Row>
                </Form.Item>
            </Form>
            <Divider />
            <Row align="center" type="flex">
                <Col>
                    <Text>Need An Account?</Text>
                    <Button onClick={() => toggleCreateNew(true)} type="link" style={{ padding: 0, paddingLeft: '5px' }}>
                        <Text strong>Create One</Text>
                    </Button>
                </Col>
            </Row>
        </>
    );
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    toggleCreateNew,
    toggleLoginModal,
    firebaseLogin
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
