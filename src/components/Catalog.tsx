import React, {
    FC,
    memo,
    useReducer,
    useState,
    useRef,
    useEffect,
} from "react";
import {
    Container,
    Row,
    TextBox,
    Col,
    Card,
    CardContent,
    CardBody,
    TextBoxBigTitle,
    Headline2,
    Body1,
    Body3,
} from '@sberdevices/plasma-ui';
import Link from 'next/link';
import styled from 'styled-components';
import { detectDevice, isSberPortal } from '@sberdevices/plasma-ui/utils/deviceDetection';
import { Tabs, TabItem } from '@sberdevices/plasma-ui/components/Tabs/Tabs';

import { Tab1 } from './tabs/tab1';
import { Tab2 } from './tabs/tab2';
import { Tab3 } from './tabs/tab3';
import { Tab4 } from './tabs/tab4';
import { useAssistant } from './../hooks/useAssistant';
import { reducer } from './store';


import { Route } from '../consts/routes';


const heightMap = {
    sberPortal: 247,
    sberBox: 336,
    mobile: 165,
};

const StyledCard = styled(Card)`
    margin-bottom: ${detectDevice() === 'mobile' ? 8 : 32}px;

    height: ${heightMap[detectDevice()]}px;
`;

const StyledBody1 = styled(Body1)`
    color: rgba(255, 255, 255, 0.56);
    margin-top: 8px;
    margin-bottom: 2px;
    width: ${isSberPortal() ? '100px' : '100%'};
    display: ${isSberPortal() ? 'inline-block' : 'block'};
`;

const StyledBody3 = styled(Body3)`
    width: ${isSberPortal() ? 'calc(100% - 100px)' : '100%'};
    display: ${isSberPortal() ? 'inline-block' : 'block'};
`;

const MarginTop = styled.div`
    margin-top: 20px;
`;

const paddingLeft = {
    sberPortal: 12,
    sberBox: 52,
    mobile: 0,
};

const RightCol = styled(Col)`
    padding-left: ${paddingLeft[detectDevice()]}px;
`;

const Half: React.FC = ({ children }) => (
    <Col sizeS={4} sizeM={3} sizeL={4} sizeXL={6}>
        {children}
    </Col>
);
const Catalog = () => {   

    const [appState, dispatch] = useReducer(reducer, {
        currentTab: 0
    });

    useEffect(() => {
        useAssistant(dispatch);
    }, []);

    const action = (text: any) => () => {
        console.log(text);
    }

    const route = () => {
        switch (appState.currentTab) {
            case 0:
                return <Tab1 dispatch={dispatch} />;
            case 1:
                return <Tab2 />;
            case 2:
                return <Tab3/>;
            case 3:
                return <Tab4 />;
        }
    }

    return (
        <>
           <main className="app">
            <Container style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '1em'}}>
                <>
                    <Tabs
                        size='l'
                        view='secondary'
                        stretch={true}
                        pilled={false}
                        scaleOnPress={true}
                        outlined={false}
                        disabled={false}
                    >
                        <TabItem
                            key={`item0`}
                            isActive={appState.currentTab === 0}
                            tabIndex={0}
                            contentLeft={true}
                            onClick={() => dispatch({ type: 'SELECT', tab: 0 })}
                            onFocus={action(`onFocus item #${0}`)}
                            onBlur={action(`onBlur item #${0}`)}
                        >
                            Каши
                        </TabItem>
                        <TabItem
                            key={`item1`}
                            isActive={appState.currentTab === 1}
                            tabIndex={1}
                            contentLeft={true}
                            onClick={() => dispatch({ type: 'SELECT', tab: 1 })}
                            onFocus={action(`onFocus item #${1}`)}
                            onBlur={action(`onBlur item #${1}`)}
                        >
                            Яичница
                        </TabItem>
                        <TabItem
                            key={`item2`}
                            isActive={appState.currentTab === 2}
                            tabIndex={2}
                            contentLeft={true}
                            onClick={() => dispatch({ type: 'SELECT', tab: 2 })}
                            onFocus={action(`onFocus item #${2}`)}
                            onBlur={action(`onBlur item #${2}`)}
                        >
                            Детский
                        </TabItem>
                        <TabItem
                            key={`item3`}
                            isActive={appState.currentTab === 3}
                            tabIndex={3}
                            contentLeft={true}
                            onClick={() => dispatch({ type: 'SELECT', tab: 3 })}
                            onFocus={action(`onFocus item #${3}`)}
                            onBlur={action(`onBlur item #${3}`)}
                        >
                            Блины
                        </TabItem>
                    </Tabs>
                    <Container>
                        <Row style={{marginTop: '1em'}}>
                            <Col size={10} style = {{marginLeft: 'auto', marginRight: 'auto'}}>
                                {route()}
                            </Col>
                        </Row>
                    </Container>
                </>
            </Container>
        </main>
            
        </>
    );
};

export default Catalog;
