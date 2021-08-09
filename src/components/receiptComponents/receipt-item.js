import React from 'react';
import { Cell } from '@sberdevices/plasma-ui';
import { Image } from '@sberdevices/plasma-core';
import { Body1 } from '@sberdevices/plasma-ui';

const ReceiptItem = ({ image, contentLeft, contentRight }) => {
    return (
        <div style={{borderBottom: "0.5mm ridge rgb(200, 202, 200, .6)"}}>
            
            {/* <Image src={image} style={{ maxWidth: '10rem', float: "left"}} /> */}
            {/* <Cell contentLeft={contentLeft} content="" contentRight={contentRight} /> */}
            {/*<Body1>{contentLeft}</Body1> */}
            <Cell contentLeft={<Image src={image} style={{ maxWidth: '15rem', float: "left",marginRight: "10px"}} />} content={contentLeft} />
        </div>
    );

};

export default ReceiptItem;