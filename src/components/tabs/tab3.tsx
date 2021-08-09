import React from 'react';

import Children from '../../components/menuComponents/Children';
import {sendData}from '../../hooks/useAssistant';

export const Tab3 = (assistant: any) => {
    const click = () => () => {
        sendData({ action: { action_id: 'DOWNLOAD', parameters: { file: 'text.txt' } } });
    };
    
    return (
        <Children />
    )
}
