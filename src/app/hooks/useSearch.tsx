import { useState } from 'react';

const useSearch = (arrayToFilter: any[]) => {
  const [filteredArray, setFilteredArray] = useState(arrayToFilter);
  const [searchQuery, setSearchQuery] = useState('');

  const onSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.toLowerCase();
    const filteredItems = arrayToFilter.filter((item) => item.toLowerCase().includes(query));
    setFilteredArray(filteredItems);
    setSearchQuery(query);
  };

  return { filteredArray, searchQuery, onSearch };
};

export default useSearch;
