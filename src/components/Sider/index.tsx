import React from 'react'
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Sider } = Layout;

const items = [
  {
    label: (
      <Link to='/categories'>Categories</Link>
    ),
    key: 'categories'
  },
  {
    label: (
      <Link to='/users'>Users</Link>
    ),
    key: 'users'
  }
]
export const SiderMenu: React.FC = () => {
  return (
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
      }}
      onCollapse={(collapsed, type) => {
      }}
    >
      <div className="demo-logo-vertical" />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
    </Sider>
  )
}