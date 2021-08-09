import React from 'react';
import { Container, Header } from '@sberdevices/plasma-ui';
import { body1 } from '@sberdevices/plasma-tokens';
import { detectDevice, isSberPortal } from '@sberdevices/plasma-ui/utils/deviceDetection';
import styled from 'styled-components';
import { useRouter } from 'next/router';

import Logo from './Logo';
import { Route } from '../consts/routes';

const StyledHeader = styled.div`
    top: 0;
    left: 0;
    width: 100%;
    z-index: -1;
    ${body1};
    
`;

const MyHeader: React.FC<{ label: string; onBack?: () => void }> = ({ label, onBack, ...props }) => {
    const router = useRouter();
    const back = detectDevice() === 'mobile' || ((isSberPortal() && !onBack) as any);

    const handleClick = () => {        
        router.push(Route.INDEX);
        console.log("Click!");
      }

    return (
        <StyledHeader {...props}>
            <Container>
                <Header style={body1} back={true} onBackClick={handleClick} title={label}>
                    {/* {detectDevice() !== 'mobile' && <Logo />} */}
                </Header>
            </Container>
        </StyledHeader>
    );
};

export default MyHeader;
