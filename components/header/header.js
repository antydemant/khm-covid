import { Col, Layout, Row } from 'antd';
import { PhoneOutlined } from "@ant-design/icons";

const { Header } = Layout;

import 'assets/components/header.less';

export default function HeaderComponent() {
    return (
        <Header>
            <Row justify="space-around" type="flex">
                <Col span={20}>
                    <Row justify="space-around" type="flex">
                        <Col span={12} md={12} xs={24}>
                            <img className="head-logo" src="/static/images/favicon.png"/>
                            <div>Хмельницький: COVID-19</div>
                        </Col>
                        <Col span={12} md={12} xs={0}>
                            <span className="ml-30 float-right"><PhoneOutlined /> +38 (050) 107 30 83</span>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Header>
    );
}