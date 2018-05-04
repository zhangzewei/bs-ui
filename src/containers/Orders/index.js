import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Button } from 'antd';

class Orders extends Component {
  static propTypes = {
  }

  deleteUser = r => console.log(r)

  renderTable = () => {
    const columns = [{
      title: '订单号',
      dataIndex: 'id',
    }, {
      title: '创建日期',
      dataIndex: 'createDate',
    }, {
      title: '订单状态',
      dataIndex: 'status',
    }, {
      title: '订单拥有者',
      dataIndex: 'owners',
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
        title={() => <h2>订单列表</h2>}
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

export default Orders;
