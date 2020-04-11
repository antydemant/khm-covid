import Link from "next/link";
import {
    Row,
    Col,
} from 'antd';

import {
    FacebookOutlined,
    InstagramOutlined,
    GoogleOutlined,
} from '@ant-design/icons';

export default function FooterComponent() {
    return (
        <Row justify="space-around" type="flex" style={{ background: '#f9f9f9' }}>
            <Col md={8} xs={20} style={{height: '40px', display: 'flex'}}>
                <div style={{ margin: 'auto 0px' }}>
                    &copy; 2020 Powered by Next.js & Antd; Created by Ihor Ostapchuk
                </div>
            </Col>
            <Col md={8} xs={20}>
                <div style={{ margin: 'auto', height: '40px', display: 'flex', justifyContent: 'flex-end' }}>
                    <FacebookOutlined style={{ margin: 'auto 10px', fontSize: 20 }} />
                    <InstagramOutlined style={{ margin: 'auto 10px', fontSize: 20 }} />
                    <GoogleOutlined style={{ margin: 'auto 10px', fontSize: 20 }} />
                </div>
            </Col>
        </Row>
    );
}