import React from 'react';
import { useParams } from 'react-router-dom';

const EditExpensePage = () => {
  return <div>Editing the expense with id {useParams().id} </div>;
};

export default EditExpensePage;
