import React from "react";
import {
    Container,
    Row,
    TextBox,
    Col,
    Card,
    CardContent,
    CardBody,
    TextBoxBigTitle
} from '@sberdevices/plasma-ui';
import styled from 'styled-components';
import { detectDevice } from '@sberdevices/plasma-ui/utils/deviceDetection';

import { sendData } from '../../hooks/useAssistant';
import Link from "next/link";
import { Route } from "../../consts/routes";


const heightMap = {
    sberPortal: 247,
    sberBox: 336,
    mobile: 165,
};

const StyledCard = styled(Card)`
    margin-bottom: ${detectDevice() === 'mobile' ? 8 : 32}px;

    height: ${heightMap[detectDevice()]}px;
`;

const Half: React.FC = ({ children }) => (
    <Col sizeS={4} sizeM={3} sizeL={4} sizeXL={6}>
        {children}
    </Col>
);

const Pancake = () => {

    sendData({ action: { action_id: 'PANCAKE' } });

    return (
        <>
            {/* <Container>{detectDevice() === 'mobile' && <Logo />}</Container> */}
            <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <Container>
                    <Row>
                        <Col sizeS={4} sizeM={5} sizeL={8} sizeXL={8} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Row>
                                <Half>
                                    <Link href={Route.OMELETE}>
                                        <StyledCard outlined scaleOnFocus onClick={() => sendData({ action: { action_id: 'MOHITO' } })}>
                                            <CardBody>
                                                <CardContent cover>
                                                    <TextBox>
                                                        <TextBoxBigTitle>Омлет</TextBoxBigTitle>
                                                    </TextBox>
                                                </CardContent>
                                            </CardBody>
                                        </StyledCard>
                                    </Link>
                                </Half>
                                <Half>
                                    <StyledCard outlined scaleOnFocus onClick={() => sendData({ action: { action_id: 'TROPICAL' } })}>
                                        <CardBody>
                                            <Link href={Route.EGGBREAD}>
                                                <CardContent cover>
                                                    <TextBox>
                                                        <TextBoxBigTitle>Яичница в хлебе, с сыром и колбасой</TextBoxBigTitle>
                                                    </TextBox>
                                                </CardContent>
                                            </Link>
                                        </CardBody>
                                    </StyledCard>
                                </Half>
                                <Half>
                                    <StyledCard outlined scaleOnFocus onClick={() => sendData({ action: { action_id: 'TROPICAL' } })}>
                                        <CardBody>
                                            <Link href={Route.LAYEROMELET}>
                                                <CardContent cover>
                                                    <TextBox>
                                                        <TextBoxBigTitle>Слоёный омлет с ветчиной, помидорами и сыром</TextBoxBigTitle>
                                                    </TextBox>
                                                </CardContent>
                                            </Link>
                                        </CardBody>
                                    </StyledCard>
                                </Half>
                                <Half>
                                    <StyledCard outlined scaleOnFocus onClick={() => sendData({ action: { action_id: 'TROPICAL' } })}>
                                        <CardBody>
                                            <Link href={Route.SHAKSHUKA}>
                                                <CardContent cover>
                                                    <TextBox>
                                                        <TextBoxBigTitle>Шакшука</TextBoxBigTitle>
                                                    </TextBox>
                                                </CardContent>
                                            </Link>
                                        </CardBody>
                                    </StyledCard>
                                </Half>
                            </Row>
                        </Col>
                    </Row>

                </Container>
            </div>

        </>
    );
};

export default Pancake;
