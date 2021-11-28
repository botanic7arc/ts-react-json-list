import React from 'react';
import Data from './ingredients.json'
import { makeListDivFromJson } from './makeListDivFromJson'

export const App = () => {
  return (
    <div>
      <h1>{Data.title}</h1>
      <div>{makeListDivFromJson(Data)}</div>
    </div>
  );
}