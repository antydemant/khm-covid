import {
    Row,
    Col,
    Layout,
    Card,
    Result,
    Button,
    Space,
} from 'antd';

import {
    MedicineBoxOutlined,
    UserAddOutlined,
    AuditOutlined,
    FolderOpenOutlined,
} from '@ant-design/icons';

import Link from 'next/link';

import 'assets/pages/index.less';

const { Content } = Layout;

export default function Index() {
    return (
        <Row justify="space-around" type="flex">
            <Col span={20} className="carousel-column">
                <Content>
                    <div>
                        <Result
                            icon={<img className="result-images" src="/static/images/touch.png" alt="touch"/>}
                            title={<div className="animated pulse">Хмельницький: COVID-19 - Інформаційний сайт потреб у засобах боротьби з коронавірусом</div>}
                            extra={
                                <>
                                    <Row gutter={[12, 12]}>
                                        <Col span={24}>
                                            <Space size="small">
                                                <Button type="primary" icon={<AuditOutlined />} size="large" shape="round" className="animated pulse delay-1s">
                                                    Потреби області в препаратах і засобах
                                                </Button>
                                                <Button type="primary" icon={<FolderOpenOutlined />} size="large" shape="round" className="animated pulse delay-1s">
                                                    Перелік постачальників
                                                </Button>
                                            </Space>
                                        </Col>
                                    </Row>
                                    <Row gutter={[12, 12]}>
                                        <Col span={24}>
                                            <Space size="small">
                                                <Button type="primary" icon={<UserAddOutlined />} danger size="large" shape="round" className="animated pulse delay-2s">
                                                    Я постачальник
                                                </Button>
                                                <Button type="primary" icon={<UserAddOutlined />} danger size="large" shape="round" className="animated pulse delay-2s">
                                                    Я благодійник
                                                </Button>
                                            </Space>
                                        </Col>
                                    </Row>
                                </>
                            }
                        />
                        <Result
                            icon={<img src="/static/images/health-worker.png" alt="female-health-worker"/>}
                            title="Доєднатись до боротьби"
                            extra={
                                <>
                                    <Button type="primary" icon={<MedicineBoxOutlined />} danger size="large" shape="round" className="animated pulse delay-2s">
                                        Я хочу бути лікарем резерву
                                    </Button>
                                    <Button type="primary" icon={<UserAddOutlined />} danger size="large" shape="round" className="animated pulse delay-2s">
                                        Я хочу бути волонтером
                                    </Button>
                                </>
                            }
                        />
                    </div>
                    <Row gutter={16}>
                        <Col span={6} md={6} sm={12} xs={24}>
                            <Card
                                hoverable
                                cover={
                                    <img alt="image1" style={{ width: '100%' }} src="/static/images/workers.png" />
                                }
                            >
                                <Card.Meta
                                    title="Post 1"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                                />
                            </Card>
                        </Col>
                        <Col span={6} md={6} sm={12} xs={24}>
                            <Card
                                hoverable
                                cover={
                                    <img alt="image2" style={{ width: '100%' }} src="/static/images/workers.png" />}
                            >
                                <Card.Meta
                                    title="Post 2"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                                />
                            </Card>
                        </Col>
                        <Col span={6} md={6} sm={12} xs={24}>
                            <Card
                                hoverable
                                cover={
                                    <img alt="image3" style={{ width: '100%' }} src="/static/images/workers.png" />}
                            >
                                <Card.Meta
                                    title="Post 3"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                                />
                            </Card>
                        </Col>
                        <Col span={6} md={6} sm={12} xs={24}>
                            <Card
                                hoverable
                                cover={
                                    <img alt="image4" style={{ width: '100%' }} src="/static/images/workers.png" />}
                            >
                                <Card.Meta
                                    title="Post 4"
                                    description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. "
                                />
                            </Card>
                        </Col>
                    </Row>
                </Content>
            </Col>
        </Row>
    );
}