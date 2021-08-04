import React from 'react';
import { Button } from '@sberdevices/plasma-ui/components/Button/Button';
import { Container, Row, Col } from '@sberdevices/plasma-ui';
import Porridge from '../components/menuComponents/Porridge';

export const Tab1 = (assistant: any) => {
    const click = () => () => {
        assistant.sendData({ action: { action_id: 'CLICK' } });
    };

    const click2 = () => () => {
        assistant.sendData({ action: { action_id: 'SELECT', parameters: { tab: 1 } } });
    };

    return (
        <main>
            <Porridge />
        </main>
    )
}
