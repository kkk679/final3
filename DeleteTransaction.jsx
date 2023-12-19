import React from 'react';

function DeleteTransaction({ id, handleDelete }) {
  const confirmDelete = () => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      handleDelete(id);
    }
  };

  return (
    <div>
      <h3>삭제</h3>
      <button onClick={confirmDelete}>삭제</button>
    </div>
  );
}

export default DeleteTransaction;
