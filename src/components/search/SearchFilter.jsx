import React, { useState } from 'react';

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
    onSearch(event.target.value);
  };

  return (
    <div className='mb-4'>
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={handleSearch}
        className='border rounded p-2 w-full'
      />
    </div>
  );
};

export default SearchFilter;
