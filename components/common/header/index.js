import React, { memo, useEffect, useRef, Fragment, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { signIn, signOut, useSession, getProviders } from "next-auth/client";
import { useRouter } from "next/router";

import { Row, Menu, Col, Dropdown } from "antd";
import {
  MessageOutlined,
  SnippetsOutlined,
  UserOutlined,
  LoginOutlined,
  AlignRightOutlined,
  SearchOutlined
} from "@ant-design/icons";
import { HeaderWrapper, MenuWrapper } from "./style";

export default memo(function Header(props) {
  // const { providers } = props;
  const loginRef = useRef();
  const router = useRouter();
  const [isLogin, setIsLogin] = useState();


  const menu = (
    <MenuWrapper
      selectedKeys={router.asPath}
      mode="horizontal"
      triggerSubMenuAction="click"
      overflowedIndicator={<AlignRightOutlined />}
      forceSubMenuRender={true}
      style={{
        display: "flex",
        justifyContent: "flex-end",
        borderBottom: "none",
      }}
    >
      <Menu.Item key="/search" icon={<SearchOutlined />}>
        <Link href="/search">
          <a>
            <span className="menu-text">搜索</span>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/article" icon={<SnippetsOutlined />}>
        <Link href="/article">
          <a>
            <span className="menu-text">文章</span>
          </a>
        </Link>
      </Menu.Item>
      <Menu.Item key="/profile" icon={isLogin? <UserOutlined />: <LoginOutlined />}>
        {isLogin ? (
          <>
            <span className="menu-text">用戶</span>
          </>
        ) : (
          <>
            <span className="menu-text">登錄</span>
          </>
        )}
      </Menu.Item>
    </MenuWrapper>
  );

  return (
    <HeaderWrapper>
      <Row
        type="flex"
        justify="center"
        align="middle"
        style={{ height: "100%", flexWrap: "nowrap" }}
      >
        <Col xs={19} sm={20} md={10} lg={13} xl={12} style={{ zIndex: 1 }}>
          <div className="header-title">
            <span className="header-logo">
              <Link href="/home">
                <img src="/logo.svg" />
              </Link>
            </span>
            <span className="header-text">welcome to my blog</span>
          </div>
        </Col>
        <Col xs={4} sm={3} md={13} lg={10} xl={6} className="right-tools">
          {menu}
        </Col>
        {/* <Col xs={2} sm={1} md={0} lg={0} xl={0}>
          <Dropdown overlay={menu} placement="bottomRight" trigger={["click"]}>
            <AlignRightOutlined className="menu-icon" />
          </Dropdown>
        </Col> */}
      </Row>
    </HeaderWrapper>
  );
});
