import React from 'react';
import Porridge from '../../components/menuComponents/Porridge';
import {sendData}from '../../hooks/useAssistant';

export const Tab1 = (assistant: any) => {
    const click = () => () => {
        sendData({ action: { action_id: 'CLICK' } });
    };

    const click2 = () => () => {
        sendData({ action: { action_id: 'SELECT', parameters: { tab: 1 } } });
    };

    return (
        <main>
            <Porridge />
        </main>
    )
}
