import React from 'react';
import { Button } from '@sberdevices/plasma-ui/components/Button/Button';
import { IconDownload } from '@sberdevices/plasma-icons';
import Children from '../components/menuComponents/Children';

export const Tab3 = (assistant: any) => {
    const click = () => () => {
        assistant.sendData({ action: { action_id: 'DOWNLOAD', parameters: { file: 'text.txt' } } });
    };
    return (
        <Children />
    )
}
