import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Button } from 'antd';

class Users extends Component {
  static propTypes = {
  }

  deleteUser = r => console.log(r)

  renderTable = () => {
    const columns = [{
      title: '用户名',
      dataIndex: 'userName',
    }, {
      title: '密码',
      dataIndex: 'passWord',
    }, {
      title: '操作',
      render: (_, record) => (
        <Button onClick={() => this.deleteUser(record)}>删除</Button>
      )
    }];
    let data = [];
    return (
      <Table
        columns={columns}
        data={data}
        title={() => <h2>用户列表</h2>}
      />
    )
  }

  render() {
    return (
      <div>
        {this.renderTable()}
      </div>
    );
  }
}

export default Users;
