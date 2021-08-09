import React from 'react';

import ReceiptItem from './receipt-item';

const ReceiptList = ({ receipt }) => {

  const elements = receipt.map((item) => {
    return (
      <>
        <ReceiptItem {...item } />
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
