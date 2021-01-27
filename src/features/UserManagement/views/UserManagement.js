import React from "react";
import { Typography, Layout, Button, Row, Col } from "antd";
import { connect } from 'react-redux';
import { firebaseLogout } from '../../../store/slices/firebaseAuthSlice'
import { getDatamuse } from '../ducks/thunks';

function UserManagement({ firebaseLogout, getDatamuse }) {
    const { Title, Text } = Typography;
    const { Content } = Layout;

    return (
        <>
            <Layout className="welcome-container">
                <Content align="center">
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            <Title className="header">User Management</Title>
                        </Col>
                    </Row>
                    <Button onClick={() => firebaseLogout()} type="link" style={{ padding: 0, paddingLeft: '5px' }}>
                        <Text strong>Log Out</Text>
                    </Button>
                    <Button onClick={() => getDatamuse()} type="link" style={{ padding: 0, paddingLeft: '5px' }}>
                        <Text strong>Get Datamuse</Text>
                    </Button>
                </Content>
            </Layout>
        </>
    );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {
    firebaseLogout,
    getDatamuse
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManagement);
