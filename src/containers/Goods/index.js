import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Table, Button } from 'antd';

class Goods extends Component {
  static propTypes = {
  }

  deleteUser = r => console.log(r)

  renderTable = () => {
    const columns = [{
      title: '名称',
      dataIndex: 'name',
    }, {
      title: '标签',
      dataIndex: 'tag',
    }, {
      title: '图片',
      dataIndex: 'imgs',
    }, {
      title: '定价',
      dataIndex: 'price',
    }, {
      title: '描述',
      dataIndex: 'desc',
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
        title={() => <h2>货物列表</h2>}
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

export default Goods;
