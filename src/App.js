import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import 'antd/dist/antd.css';
import { Route, Link, Switch } from 'react-router-dom';
import './normalize.css';
import LoginMenu from './containers/LoginMenu';
import DashBoard from './containers/DashBoard';
import Users from './containers/Users';
import Orders from './containers/Orders';
import Goods from './containers/Goods';
import NotMatch from './containers/NotMatch';
import Login from './containers/Login';

import './index.css';
import './app.css';

const { Header, Sider, Content } = Layout;

class App extends Component {
  state = {
    collapsed: false,
  };

  renderSideMenu = () => {
    const { location } = this.props;
    const selectedMenu = location.pathname.split('/')[1] || 'dashboard';
    return (
      <Menu
        theme="dark"
        mode="inline"
        defaultSelectedKeys={[selectedMenu]}
      >
        <Menu.Item key="dashboard">
          <Link to="/app">
            <Icon type="user" />
            <span>仪表盘</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="goods">
          <Link to="/app/goods">
            <Icon type="video-camera" />
            <span>货物管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="orders">
          <Link to="/app/orders">
            <Icon type="upload" />
            <span>订单管理</span>
          </Link>
        </Menu.Item>
        <Menu.Item key="users">
          <Link to="/app/users">
            <Icon type="user" />
            <span>用户管理</span>
          </Link>
        </Menu.Item>
      </Menu>
    );
  }

  render() {
    return (
      <Layout style={{
        width: '100%',
        height: '100%'
      }}>
        <Sider
          trigger={null}
          collapsible
          collapsed={this.state.collapsed}
        >
          <div className="logo">xxx管理系统</div>
          {this.renderSideMenu()}
        </Sider>
        <Layout>
          <Header
            style={{
              background: '#fff',
              padding: 0,
              display: 'flex',
              flexDirection: 'row-reverse'
            }}
          >
            <LoginMenu
              menus={[
                {text: '用户管理', link: '/app/userManage'},
                {text: '登出', link: '/login'}
              ]}
              userAvatar="https://avatars.githubusercontent.com/u/12976145?v=3"
              logined
            />
          </Header>
          <Content style={{ margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280 }}>
            <Switch>
              <Route path='/app' exact component={DashBoard} />
              <Route path='/app/users' exact component={Users} />
              <Route path='/app/orders' exact component={Orders} />
              <Route path='/app/goods' exact component={Goods} />
              <Route component={NotMatch} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

export default App;
