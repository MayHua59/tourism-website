import React from 'react';
import styles from './Pagination.module.css'

const Pagination = ({ currentPage, totalPages, totalItems, perPage, onPageChange, onPerPageChange }) => { 
    const pageNumbers = [];
    for (let i = 1; i <= totalPages; i++){
        pageNumbers.push(i);
    }
    const handlePerPageSelect = (event) => {
        const newPerPage = parseInt(event.target.value, 10);
    onPerPageChange(newPerPage);
    }
  return (
     <div className={styles.paginationContainer}>
      <div className={styles.paginationInfo}>
        {/* <span>
          Showing {(currentPage - 1) * perPage + 1} to {Math.min(currentPage * perPage, totalItems)} of {totalItems} items
        </span> */}
      </div>

      <div className={styles.paginationControls}>
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className={styles.paginationButton}
        >
          &laquo; Previous
        </button>

        {pageNumbers.map(number => (
          <button
            key={number}
            onClick={() => onPageChange(number)}
            className={`${styles.paginationButton} ${currentPage === number ? styles.active : ''}`}
          >
            {number}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className={styles.paginationButton}
        >
          Next &raquo;
        </button>
      </div>
      <div className={styles.perPageSelector}>
        <label htmlFor="perPage">Items per page:</label>
        <select id="perPage" value={perPage} onChange={handlePerPageSelect}>
          <option value="2">2</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="20">20</option>
        </select>
      </div>
    </div>
  )
}

export default Pagination