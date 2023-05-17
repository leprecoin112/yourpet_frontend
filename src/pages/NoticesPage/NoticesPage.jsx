import React from 'react';

import { useState } from 'react';
import InputSearch from '../../shared/components/InputSearch/';

const NoticesPage = () => {
  const [query, setQuery] = useState(null);

  const handleQuery = e => {
    e.preventDefault();
    const searchedValue =
      e.currentTarget.parentElement.elements['search'].value;

    setQuery(searchedValue);
    if (searchedValue) {
      document.getElementById('btnSearch').style.marginRight = '47px';
    }
  };

  function inputReset(e) {
    if (query !== '') {
      document.getElementById('searchForm').reset();

      setQuery('');
      document.getElementById('btnSearch').style.marginRight = '20px';
    }
  }

  return (
    <div>
      <div>NoticesPage</div>
      <InputSearch
        onSubmit={e => handleQuery(e)}
        onClick={e => inputReset(e)}
        query={query}
      />
    </div>
  );
};

export default NoticesPage;
