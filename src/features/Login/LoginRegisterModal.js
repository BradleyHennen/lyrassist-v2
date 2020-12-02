import React, { useEffect } from "react";
import { Modal, Form, Input, Button, Space, Col, Row, Divider, Typography } from "antd";
import { connect } from 'react-redux';
import { updateNewRegisterDetails } from './ducks'

function LoginRegisterModal({ modalVisible, toggleModal, registerForm, loginForm }) {
    const { Text } = Typography;

    useEffect(() => {
        console.log('isOpenInput', modalVisible);

    }, [modalVisible])

    const onFinish = (values) => {
        console.log('Success:', values);
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
        <Modal
            title="Sign In"
            visible={modalVisible}
            onCancel={toggleModal}
            footer={null}
        >
            <Form
                name="basic"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                {...layout}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username',
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
                                <Button type="secondary" onClick={toggleModal}>
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
                    <Text>Need An Account?</Text>
                    <Button type="link" style={{ padding: 0, paddingLeft: '5px' }}>
                        <Text strong>Create One</Text>
                    </Button>
                </Col>
            </Row>

        </Modal>

    );
};

const mapStateToProps = (state, ownProps) => ({
    registerForm: state.loginReducer.newSubscriberDetails,
    loginForm: state.loginReducer.loginDetails
});

const mapDispatchToProps = {
    updateNewRegisterDetails
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginRegisterModal);
