import React from 'react';
import { Cell } from '@sberdevices/plasma-ui';

const IngredientItem = ({ contentLeft, contentRight  }) => {
    return <Cell style={{borderBottom: "0.5mm ridge rgb(200, 202, 200, .6)"}} contentLeft={contentLeft} content="" contentRight={contentRight}/>
};

export default IngredientItem;