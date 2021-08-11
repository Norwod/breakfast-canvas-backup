import React from 'react';
import { Cell } from '@sberdevices/plasma-ui';
import { Image } from '@sberdevices/plasma-core';
import { Body1 } from '@sberdevices/plasma-ui';

const ReceiptItem = ({ contentLeft, contentRight }) => {
    return (
        <div style={{borderBottom: "0.5mm ridge rgb(200, 202, 200, .6)"}}>
            <Cell content={contentLeft} />
        </div>
    );

};

export default ReceiptItem;