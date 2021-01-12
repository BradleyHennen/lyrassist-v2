import React from "react";
import { Typography, Layout, Button, Row, Col } from "antd";
import { ReactComponent as ReactLogo } from '../assets/lyrassistLogo.svg'
import LoginRegisterModal from '../features/Login/views/LoginRegisterModal';
import { connect } from 'react-redux';
import { toggleLoginModal } from '../features/Login/ducks'

function Welcome({ toggleLoginModal }) {
    const { Title, Text } = Typography;
    const { Content } = Layout;

    return (
        <>
            <Layout className="welcome-container">
                <Content align="center">
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            <Title className="header">Welcome To LyrAssist</Title>
                        </Col>
                    </Row>
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            <ReactLogo className="logo" />
                        </Col>
                    </Row>
                    <Row gutter={[24, 24]} align="center">
                        <Col span={16} >
                            <Text strong style={{ color: 'white' }}>
                                LyrAssist is an application designed to help you along your lyric
                                writing journey. With the help of the assistant you will be able to find
                                a plethora of words and phrases that will help you break through that
                                writers block that has been holding you back. You will effortlessly
                                create, edit, and manage Lyric Cards as you write. If something feels
                                out of place just drag and drop the cards to and fro until it fits the
                                order you like best. So again, welcome to LyrAssist! Click the 'Start
                                Writing' button to begin your journey to writing the lyrics you have
                                always wanted.
                        </Text>
                        </Col>
                    </Row>
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            <Button type="primary" onClick={toggleLoginModal}>Start Writing</Button>
                        </Col>
                    </Row>

                </Content>
            </Layout>
            <LoginRegisterModal />
        </>
    );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    toggleLoginModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
