import Link from 'next/link';

import { Col, Menu, Row } from "antd";
import { AuditOutlined, HomeOutlined, SettingOutlined}  from "@ant-design/icons";
const { SubMenu } = Menu;

import 'assets/components/header-menu.less';

export default function HeaderMenuComponent() {
    return (
        <Row justify="space-around" type="flex">
            <Col span={20} className="head-menu">
                <Menu mode="horizontal">
                    <Menu.Item key="home">
                        <Link href="/index">

                            <a><HomeOutlined />Головна</a>
                        </Link>
                    </Menu.Item>
                    <Menu.Item key="needs">
                        <Link href="/list">
                            <a><AuditOutlined />Потреби області в препаратах і засобах</a>
                        </Link>
                    </Menu.Item>
                    <SubMenu
                        title={
                            <span className="submenu-title-wrapper">
                                <SettingOutlined />
                                    Приєднатись до нас
                                </span>
                        }
                    >
                        <Menu.ItemGroup title="Допомога з потребами лікарень">
                            <Menu.Item key="setting:1">
                                <Link href="/registration-1">
                                    <a>Я постачальник</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="setting:2">
                                <Link href="/registration-2">
                                    <a>Я благодійник</a>
                                </Link>
                            </Menu.Item>
                        </Menu.ItemGroup>
                        <Menu.ItemGroup title="Доєднатись до боротьби">
                            <Menu.Item key="setting:3">
                                <Link href="/registration-3">
                                    <a>Я хочу бути лікарем резерву</a>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="setting:4">
                                <Link href="/registration-4">
                                    <a>Я хочу бути волонтером</a>
                                </Link>
                            </Menu.Item>
                        </Menu.ItemGroup>
                    </SubMenu>
                    <Menu.Item key="alipay">
                        <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                            Загальна інформація
                        </a>
                    </Menu.Item>
                </Menu>
            </Col>
        </Row>
    );
}