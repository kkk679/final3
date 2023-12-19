import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import EditTransaction from './EditTransaction';
import DeleteTransaction from './DeleteTransaction';


function IncomeExpensePage() {
  const [transactions, setTransactions] = useState([
    // 기존 입출금 내역
    // ...
  ]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = transactions.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const [type, setType] = useState('수입');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState(new Date());

  const handleAddTransaction = () => {
    const newTransaction = {
      id: Math.floor(Math.random() * 1000),
      date: date.toLocaleDateString(),
      type: type,
      description: description,
      amount: amount
    };

    setTransactions([...transactions, newTransaction]);

    setType('수입');
    setDescription('');
    setAmount('');
    setDate(new Date());
  };

  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(transactions.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  const handleTypeChange = (selectedType) => {
    setType(selectedType);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 폼 제출 시 할 작업 구현
    console.log(`Type: ${type}, Description: ${description}, Amount: ${amount}, Date: ${date}`);
    // 폼 제출 후 상태 초기화
    setDescription('');
    setAmount('');
    setDate(new Date());
  };

  return (
    <div>
      {/* 수입/지출 입력 폼 */}
      <div>
        <h2>수입/지출 내역 입력</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>
                <input
                  type="radio"
                  value="income"
                  checked={type === 'income'}
                  onChange={() => handleTypeChange('수입')}
                  />수입</label>
              <label>
                <input
                  type="radio"
                  value="expense"
                  checked={type === 'expense'}
                  onChange={() => handleTypeChange('지출')}/>지출
              </label>
            </div>
            <div>
              <label>
                소비내역:
                <input
                  type="text"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}/>
              </label>
            </div>
            <div>
              <label>
                금액:
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}/>
              </label>
            </div>
            <div>
              <label>
              날짜:
                <DatePicker selected={date} onChange={(newDate) => setDate(newDate)} />
              </label>
            </div>
            <button onClick={handleAddTransaction}>입력</button>
        </form>
      
    </div>

      {/* 입출금 내역 표시 */}
      <div>
        <h3>입출금 내역</h3>
        {currentItems.map((transaction) => (
          <div key={transaction.id} className="transaction-item">
            <span>{transaction.date}</span>
            <span>{transaction.type}</span>
            <span>{transaction.description}</span>
            <span>{transaction.amount}</span>
            <button>
              <FontAwesomeIcon icon={faEdit} />
              <EditTransaction id={transaction.id} />
            </button>
            <button>
              <FontAwesomeIcon icon={faTrashAlt} />
              <DeleteTransaction id={transaction.id} />
            </button>
          </div>
        ))}
      </div>

      {/* 페이지네이션 */}
      <div>
        {pageNumbers.map((number) => (
          <button key={number} onClick={() => paginate(number)}>
            {number}
          </button>
        ))}
      </div>
    </div>
  );
}

export default IncomeExpensePage;