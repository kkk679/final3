import React, { useState } from 'react';

function EditTransaction({ id, handleUpdate }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    handleUpdate(id, description, amount);
    setDescription('');
    setAmount('');
  };

  return (
    <div>
      <h3>수정</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="수정할 내역"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <input
          type="number"
          placeholder="수정할 금액"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">저장</button>
      </form>
    </div>
  );
}

export default EditTransaction;
