import React from 'react';

import IngredientItem from './ingredient-item';

const IngredientList = ({ ingredients }) => {

  const elements = ingredients.map((item) => {
    return (
      <>
        <IngredientItem {...item } />
      </>
    );
  });

  return (
    <>
      { elements }
    </>
  );
};

export default IngredientList;
