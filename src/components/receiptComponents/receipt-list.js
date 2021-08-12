import React from 'react';

import ReceiptItem from './receipt-item';

const ReceiptList = ({ receipt }) => {

  const elements = receipt.map((item, index) => {
    return (
      <>  
        
        <ReceiptItem {...item} />
      </>
    );
  });

  return (
    <>
      { elements }
    </>
  );
};

export default ReceiptList;
