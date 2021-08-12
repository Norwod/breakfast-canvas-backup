import React from 'react';
import { ParagraphText2 } from '@sberdevices/plasma-ui';

const Description = ({ description }) => {
    return (
        <div>
            <ParagraphText2>{description}</ParagraphText2>
        </div>
    );
};

export default Description;