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
import styled from 'styled-components';
import { detectDevice, isSberPortal } from '@sberdevices/plasma-ui/utils/deviceDetection';


import {
    createSmartappDebugger,
    createAssistant,
    AssistantAppState,
} from "@sberdevices/assistant-client";



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

const Pancake = () => {

    const initialize = (getState = () => ({})) => {
        return createAssistant({ getState });
    };
    const assistant = initialize();

    assistant.sendData({ action: { action_id: 'PANCAKE' } });

    return (
        <>
            {/* <Container>{detectDevice() === 'mobile' && <Logo />}</Container> */}
            <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                <Container>
                    <Row>
                        <Col sizeS={4} sizeM={5} sizeL={8} sizeXL={8} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                            <Row>
                                <Half>

                                    <StyledCard outlined scaleOnFocus onClick={() => assistant.sendData({ action: { action_id: 'MOHITO' } })}>
                                        <CardBody>
                                            <CardContent cover>
                                                <TextBox>
                                                    <TextBoxBigTitle>Геркулес</TextBoxBigTitle>
                                                </TextBox>
                                            </CardContent>
                                        </CardBody>
                                    </StyledCard>

                                </Half>
                                <Half>

                                    <StyledCard outlined scaleOnFocus onClick={() => assistant.sendData({ action: { action_id: 'TROPICAL' } })}>
                                        <CardBody>

                                            <CardContent cover>
                                                <TextBox>
                                                    <TextBoxBigTitle>Овсянка</TextBoxBigTitle>
                                                </TextBox>
                                            </CardContent>
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
