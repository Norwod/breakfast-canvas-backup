import React from 'react';
import { Button } from '@sberdevices/plasma-ui/components/Button/Button';
import { IconDownload } from '@sberdevices/plasma-icons';
import Pancake from '../components/menuComponents/Pancake';
import Porridge from '../components/menuComponents/Porridge';

export const Tab4 = (assistant: any) => {
    const click = () => () => {
        assistant.sendData({ action: { action_id: 'DOWNLOAD', parameters: { file: 'text.txt' } } });
    };
    return (
        <main>
            <Button text="Удалить" view="primary" contentRight={<IconDownload />} size="s" onClick={click()} />
            <Pancake />
            <Porridge />
        </main>
    )

}
