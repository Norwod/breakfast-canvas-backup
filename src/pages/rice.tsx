import React, { useReducer } from 'react';
import { Cell, Col, Container, Row, TabItem, Tabs } from '@sberdevices/plasma-ui';
import IngredientList from '../components/ingredientСomponents/ingredient-list';
import ReceiptList from '../components/receiptComponents/receipt-list'
import { Headline3 } from '@sberdevices/plasma-ui';
import Layout from '../components/Layout';
import { route } from 'next/dist/next-server/server/router';
import { useAssistant } from './../hooks/useAssistant';
import { reducer } from './../components/store';
import MyHeader from '../components/MyHeader';

const Ingredient = () => {
    const ingredients = [
        { contentLeft: "Рис круглозерный", contentRight: "200 г (1 стакан ёмкостью 250 мл)" },
        { contentLeft: "Вода", contentRight: "500 мл (2 стакана)" },
        { contentLeft: "Молоко", contentRight: "750 мл (3 стакана)" },
        { contentLeft: "Соль", contentRight: "0,5 ч. ложки" },
        { contentLeft: "Сахар", contentRight: "1,5 ст. ложки (по вкусу)" },
        { contentLeft: "Масло сливочное", contentRight: "по вкусу" }
    ];

    return (
        <div>
            <IngredientList ingredients={ingredients} />
        </div>
    );
}

const Receipt = () => {

    const receipt = [
        { image: "https://img1.russianfood.com/dycontent/images_upl/485/sm_484357.jpg", contentLeft: "Для приготовления каши лучше всего использовать круглый белый рис, он лучше разваривается, из него получается самая мягкая и нежная каша.Рис несколько раз нужно промыть, чтобы вода после промывания стала прозрачной." },
        { image: "https://img1.russianfood.com/dycontent/images_upl/485/sm_484358.jpg", contentLeft: "В кастрюлю насыпаем промытый рис, заливаем водой и ставим на плиту вариться. Вода закипела - варим рисовую кашу на среднем огне минут 10, практически до полного выкипания воды." },
        { image: "https://img1.russianfood.com/dycontent/images_upl/485/big_484359.jpg", contentLeft: "Затем наливаем молоко, добавляем соль, сахар (добавляйте сахар по вкусу, мне нравится, когда каша в меру сладкая). Перемешиваем. Варим молочную рисовую кашу на медленном огне, иногда помешивая, минут 10, до загустения, но не до полного выкипания молока. Только следите, чтобы молоко не убежало.Выключаем огонь, накрываем кастрюлю крышкой и даём каше настояться 10-15 минут." },
        { image: "https://img1.russianfood.com/dycontent/images_upl/485/big_484360.jpg", contentLeft: "В готовую рисовую кашу на молоке можно добавить кусочек сливочного масла, каша будет еще вкуснее! Приятного аппетита!" }
    ];

    return (
        <div>
            <Headline3>Приготовление: </Headline3>
            <ReceiptList receipt={receipt} />
        </div>
    );
}


const Rice = () => {

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
            <Container>
                <MyHeader label="Hbc" />
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

                <Col sizeS={4} sizeM={5} sizeL={6} sizeXL={8} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                    {route()}
                </Col>
            </Container>
        </Layout>

    );
};


export default Rice;
