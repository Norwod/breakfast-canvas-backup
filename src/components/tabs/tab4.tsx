import React from 'react';
import Pancake from '../../components/menuComponents/Pancake';
import {sendData}from '../../hooks/useAssistant';

export const Tab4 = (assistant: any) => {
    const click = () => () => {
        sendData({ action: { action_id: 'DOWNLOAD', parameters: { file: 'text.txt' } } });
    };
    return (
        <main>
            {/* <Button text="Удалить" view="primary" contentRight={<IconDownload />} size="s" onClick={click()} /> */}
            <Pancake />
            {/* <Porridge /> */}
        </main>
    )

}
