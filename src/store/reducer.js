import * as actionTypes from './actions';

const initialState = {
    content: [
        {
            key: '1',
            tres_svc_id: '123',
            tres_desc: 'aaa',
            volume: 8,
            cur_fee: 32.00,
            std_fee: 64.00,
            tmc_fee: 48.00,
            cur_price: {
                method: 'Unit',
                value: 4.00
            },
            std_price: {
                method: 'Unit',
                value: 8.00
            },
            new_price: {
                method: 'Unit',
                value: 6.00
            },
            decision: 'Customize'
        },
        {
            key: '2',
            tres_svc_id: '444',
            tres_desc: 'bbb',
            volume: 15,
            cur_fee: 45.00,
            std_fee: 30.00,
            tmc_fee: 30.00,
            cur_price: {
                method: 'Tier',
                thresholds: [10, 20, 50, 999999],
                value: [0.00, 3.00, 2.00, 1.00]
            },
            std_price: {
                method: 'Tier',
                thresholds: [10, 20, 50, 999999],
                value: [1.00, 2.00, 3.00, 4.00]
            },
            new_price: {
                method: 'Tier',
                thresholds: [10, 20, 50, 999999],
                value: [1.00, 2.00, 3.00, 4.00]
            },
            decision: 'Standard'
        },
        {
            key: '3',
            tres_svc_id: '44',
            tres_desc: 'ccc',
            volume: 20,
            cur_fee: 30.00,
            std_fee: 20.00,
            tmc_fee: 30.00,
            cur_price: {
                method: 'Partition',
                thresholds: [10, 20, 50, 999999],
                value: [0.00, 3.00, 2.00, 1.00]
            },
            std_price: {
                method: 'Partition',
                thresholds: [10, 20, 50, 999999],
                value: [1.00, 2.00, 3.00, 4.00]
            },
            new_price: {
                method: 'Partition',
                thresholds: [10, 20, 50, 999999],
                value: [0.00, 3.00, 2.00, 1.00]
            },
            decision: 'Hold'
        }
    ]
};


const reducer = (state = initialState, action) => {
    return state;
};


export default reducer;