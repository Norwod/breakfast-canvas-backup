import React from 'react';

import Egg from '../../components/menuComponents/Egg';
import {sendData}from '../../hooks/useAssistant';

export const Tab2 = (assistant: any) => {
    const click = () => () => {
        sendData({ action: { action_id: 'DOWNLOAD', parameters: { file: 'text.txt' } } });
    };
    return (
        <main>
            {/* <Button text="Скачать" view="primary" contentRight={<IconDownload />} size="s" onClick={click()} /> */}
            <Egg />
        </main>
    )
}
