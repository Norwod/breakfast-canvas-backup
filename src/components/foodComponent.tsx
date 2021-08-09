import React, { useReducer } from 'react';
import { Cell, Col, Container, Header, Row, TabItem, Tabs } from '@sberdevices/plasma-ui';
// import IngredientList from '../components/ingredientСomponents/ingredient-list';
// import ReceiptList from '../components/receiptComponents/receipt-list'
import { Headline3 } from '@sberdevices/plasma-ui';
import Layout from '../components/Layout';
import { route } from 'next/dist/next-server/server/router';
import { useAssistant } from './../hooks/useAssistant';
import { reducer } from './../components/store';
import IngredientList from './ingredientСomponents/ingredient-list';
import ReceiptList from './receiptComponents/receipt-list';
import MyHeader from './MyHeader';
import { Route } from '../consts/routes';

const FoodComponent = (props: any) => {

    const Ingredient = () => {

        return (
            <div>
                <IngredientList ingredients={props.ingredients} />
            </div>
        );
    }

    const Receipt = () => {

        return (
            <div>
                <div style={{marginLeft: "auto", marginRight: 'auto'}}>
                    <Headline3>Приготовление: </Headline3>
                </div>
                <ReceiptList receipt={props.receipt} />
            </div>
        );
    }

    const [appState, dispatch] = useReducer(reducer, {
        currentTab: 0
    });

    const action = (text: any) => () => {
        console.log(text);
    }

    const route = () => {
        switch (appState.currentTab) {
            case 0:
                return <Ingredient />;
            case 1:
                return <Receipt />;
        }
    }

    return (
        <Layout>
            <MyHeader label={props.header}/> 
            <Header back={true} onBackClick={() => console.log("Click!")} />
            <Container>
            <Header back={true} onBackClick={() => console.log("Click!")} />
             <MyHeader label={props.header}/> 
                <Col sizeS={4} sizeM={5} sizeL={6} sizeXL={8} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    <div style={{ marginTop: '1%', marginBottom: '1%' }}>
                        <Tabs
                            size='s'
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
                                Ингредиенты
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
                                Рецепт
                            </TabItem>
                        </Tabs>
                    </div>
                </Col>

                <Col sizeS={4} sizeM={5} sizeL={6} sizeXL={8} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    {route()}
                </Col>
            </Container>
        </Layout>

    );
};


export default FoodComponent;