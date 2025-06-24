import React, { useState, useContext, useEffect } from 'react';
import { ThemeContext } from '../App';
import {useDebounce} from '../hooks/useProductSearch'

const ProductSearch = ({ searchTerm, setSearchTerm }) => {
  //const [searchTerm, setSearchTerm] = useState('');
  const { isDarkTheme } = useContext(ThemeContext);

  const [inpVal, setInpVal] = useState(searchTerm);
  const debouncedValue = useDebounce(inpVal, 100);

  useEffect(() => {
    setSearchTerm(debouncedValue);
  }, [debouncedValue, setSearchTerm]);

  
  return (
    <div className="mb-4">
      <input
        type="text"
        value={inpVal}
        onChange={(e) => setInpVal(e.target.value)}
        placeholder="Rechercher un produit..."
        className={`form-control ${isDarkTheme ? 'bg-dark text-light' : ''}`}
      />
    </div>
  );
};

export default ProductSearch;