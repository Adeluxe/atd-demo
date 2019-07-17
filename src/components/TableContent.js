import React, { Component } from 'react';
import { Table, Divider, Tag } from 'antd';
import { connect } from 'react-redux';

const formatDecision = (decision) => {
    let color = null;
    switch (decision) {
        case 'Customize':
            color = 'geekblue';
            break;
        case 'Standard':
            color = 'green';
            break;
        case 'Hold':
            color = 'volcano'
            break;
        default:
            color = 'volcano';
    }
    return (
        <span>
            <Tag color={color} key={decision}>
                {decision}
            </Tag>
        </span>
    )
};

const formatPrice = (price) => {
    if (price.method === 'Unit') {
        return <p>${price.value}</p>;
    }
    let res = ['Price Method: ' + price.method, <br />];
    let thres = 0;
    for (let i = 0; i < price.thresholds.length; i++) {
        let cur = 'Unit ' + thres + ' - Unit ' + price.thresholds[i] + ': $' + price.value[i];
        res.push(cur);
        if (i !== price.thresholds.length - 1) {
            res.push(<br />);
        }
        thres = price.thresholds[i] + 1;
    }
    return <p>{res}</p>;
};

const columns = [
    {
        title: 'Service Id',
        dataIndex: 'tres_svc_id',
        key: 'tres_svc_id',
    },
    {
        title: 'Service Description',
        dataIndex: 'tres_desc',
        key: 'tres_desc',
    },
    {
        title: 'Volume',
        dataIndex: 'volume',
        key: 'volume',
    },
    {
        title: 'Current Price',
        dataIndex: 'cur_price',
        key: 'cur_price',
        render: cur_price => formatPrice(cur_price),
    },
    {
        title: 'Standard Price',
        dataIndex: 'std_price',
        key: 'std_price',
        render: std_price => formatPrice(std_price),
    },
    {
        title: 'New Price',
        dataIndex: 'new_price',
        key: 'new_price',
        render: new_price => formatPrice(new_price),
    },
    {
        title: 'Decision',
        dataIndex: 'decision',
        key: 'decision',
        render: (decision) => formatDecision(decision),
    },
    {
        title: 'Action',
        key: 'action',
        render: (text, record) => (
            <span>
                <a href="javascript:;">Hold</a>
                <Divider type="vertical" />
                <a href="javascript:;">Standardize</a>
                <Divider type="vertical" />
                <a href="javascript:;">Edit</a>
            </span>
        ),
    },
];


class TableContent extends Component {

    render() {
        return (
            <Table columns={columns} dataSource={this.props.content} />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        content: state.content
    }
};

const mapDispatchToProps = (dispatch) => {

};

export default connect(mapStateToProps, mapDispatchToProps)(TableContent);