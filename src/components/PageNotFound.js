import React from "react";
import { Typography, Layout, Row, Col } from "antd";

function PageNotFound() {
    const { Title } = Typography;
    const { Content } = Layout;

    return (
        <>
            <Layout className="welcome-container">
                <Content align="center">
                    <Row gutter={[24, 24]}>
                        <Col span={24}>
                            <Title className="header">404</Title>
                            <Title className="header">Page Not Found</Title>
                        </Col>
                    </Row>
                </Content>
            </Layout>
        </>
    );
}

export default PageNotFound
