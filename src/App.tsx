import React, { FC, memo, useReducer, useRef, useEffect } from 'react';
import { createSmartappDebugger, createAssistant, AssistantAppState } from '@sberdevices/assistant-client';
import { Tabs, TabItem } from '@sberdevices/plasma-ui/components/Tabs/Tabs';
import { Container, Row, Col } from '@sberdevices/plasma-ui';
import './App.css';
import { Tab1 } from './pages/tab1';
import { Tab2 } from './pages/tab2';
import { reducer } from './store';
import { Tab3 } from './pages/tab3';
import { Tab4 } from './pages/tab4';

const initializeAssistant = (getState: any) => {
    if (process.env.NODE_ENV === 'production' && window.Cypress == null) {
        return createSmartappDebugger({
            token: process.env.REACT_APP_TOKEN ?? 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxYTk3YzdmZGI2NjdhMDdlNGZlNjJmNTRlZDNhZGI3YzFlZTk2NjdiNzVlYmY3NGI2MjRjYTQzNTIxODI1MzJlNTM5YmU5MjcwMDQyNjI5OCIsImF1ZCI6IlZQUyIsImV4cCI6MTYyNzEyMDcyMCwiaWF0IjoxNjI3MDM0MzEwLCJpc3MiOiJLRVlNQVNURVIiLCJ0eXBlIjoiQmVhcmVyIiwianRpIjoiNTgwZDc1ZmUtOGI3Ni00Y2M1LThmN2YtMTUwM2I4NWJhNjU2Iiwic2lkIjoiMDcwNWU5ZWQtOWIwNS00NWUzLThjMzgtOTM2NTc2YTM1MzZlIn0.GBLMpfdpSZUW6VKOQm6PW3LJpYMo6dVDKcoQbfnViEB7CnAnL2ka2R6pTcbzbfbbqFxvHFXkoOCnbLqSY6aFao5lmIT9Vn_e0Ad5BLw2BWudqE6FzL_N1ntx-Vvh7oc_xqaKFdX13fLDI1FwnAnnDf7jYBg2BudurEU-KMl50epVqo2T6A0ZDjdREClwWxyI3CCjvGld0W0O2xz5HuXkeuPm1Y-6-9wMbEjYdTNztFnjX7U-ghV23doL9BL35hFoHBg9fdf4fFIMaAYmMT8dbg1PS71HDB6frah3KSbNNQpVvEly-EydFsuyCU0nNhVoI2NPMOXCd2OD9ee2N1RXn5_rngrBZ4Z94uKBGfExl8F_UXZjRLSFybAFNVuiGEX-SAemftSj5Klwjh3bu3jKlUn4Tq80KYbE7F0jJ1Zna1K5s_67eNUA6YBdwtoRFwKZnpNFeYG7EXBm9TI2l1kfY8Bx6V5lJeiqNqrHnbR5ZHFfVaQBOPVGNMGeJ9nF2NoqG18Ika38v69Ld74dZ-82gsHXImoCkIeFN6jxtbPHAT_--ZqyKjZAx1-YRbei_InItN3LL0IbZ91QIVZY4dyHxQScC51-KutnqOYX1VVCcXN-iCb-JU4oNx1up51_MPDeUgUrqNt1kyX-PXaR-NDYRoYNSUfwgdcBUSfZecaIN-c',
            initPhrase: `Запусти ${process.env.REACT_APP_SMARTAPP}`,
            getState,
        });
    }

    return createAssistant({ getState });
};

export const App: FC = memo(() => {
    const [appState, dispatch] = useReducer(reducer, {
        currentTab: 0
    });

    const assistantStateRef = useRef<AssistantAppState>();
    const assistantRef = useRef<ReturnType<typeof createAssistant>>();

    useEffect(() => {
        assistantRef.current = initializeAssistant(() => assistantStateRef.current);

        assistantRef.current.on('data', ({ navigation, action }: any) => {
            if (navigation) {
                switch (navigation.command) {
                    case 'UP':
                        window.scrollTo(0, window.scrollY - 500);
                        break;
                    case 'DOWN':
                        window.scrollTo(0, window.scrollY + 500);
                        break;
                }
            }

            console.log('action', action);
            if (action) {
                dispatch(action);
            }
        });
    }, []);

    const action = (text: any) => () => {
        console.log(text);
    }

    return (
        <main className="app">
            <Container style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '1em' }}>
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
                        <Row>
                            <Col size={10}>
                                {appState.currentTab === 0 ? <Tab1 {...assistantRef.current} /> : null}
                                {appState.currentTab === 1 ? <Tab2 {...assistantRef.current} /> : null}
                                {appState.currentTab === 2 ? <Tab3 {...assistantRef.current} /> : null}
                                {appState.currentTab === 3 ? <Tab4 {...assistantRef.current} /> : null}
                            </Col>
                        </Row>
                    </Container>
                </>
            </Container>
        </main>
    );
});
