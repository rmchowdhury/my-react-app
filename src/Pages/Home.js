import React from 'react';
import EmployeeGrid from '../EmployeeGrid/EmployeeGrid';

const Home = ({ searchTerm, handleSearchChange }) => {
  return (
    <div>
      <input
        type="text"
        placeholder="Search by name or registration"
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-box"
      />
      <EmployeeGrid searchTerm={searchTerm} />
    </div>
  );
};

export default Home;