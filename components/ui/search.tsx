"use client"

import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from "@/components/ui/input";

type Size = 'S' | 'M' | 'L';

const AppleSearch = ({ size = 'M' }: { size?: Size }) => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  // Size-specific classes
  const sizeConfig = {
    'S': {
      wrapper: 'max-w-[180px]',
      input: 'h-6 text-xs',
      searchIcon: 'h-3 w-3',
      closeIcon: 'h-2 w-2',
      closeButton: 'p-0.5'
    },
    'M': {
      wrapper: 'max-w-[240px]',
      input: 'h-8 text-sm',
      searchIcon: 'h-4 w-4',
      closeIcon: 'h-3 w-3',
      closeButton: 'p-1'
    },
    'L': {
      wrapper: 'max-w-[640px]',
      input: 'h-10 text-base',
      searchIcon: 'h-5 w-5',
      closeIcon: 'h-4 w-4',
      closeButton: 'p-1.5'
    }
  };

  const classes = sizeConfig[size];

  return (
    <div className="col-span-2 col-start-11 flex items-center">
      <div className={`relative flex items-center w-full ${classes.wrapper}`}>
        <div className={`absolute left-2 flex items-center pointer-events-none transition-opacity duration-200 ${isFocused ? 'opacity-0' : 'opacity-100'}`}>
          <Search className={`${classes.searchIcon} text-gray-400`} />
        </div>
        
        <Input
          type="search"
          placeholder="Search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            ${classes.input} w-full
            bg-gray-100 hover:bg-gray-200/70
            border-0
            rounded-full
            transition-all duration-200
            placeholder:text-gray-500
            ${isFocused ? 'pl-4 pr-8 bg-white shadow-sm' : 'pl-8 pr-4'}
            focus:outline-none focus:ring-0 focus:bg-white
          `}
        />

        {(isFocused || searchValue) && (
          <button 
            onClick={() => setSearchValue('')}
            className={`absolute right-2 ${classes.closeButton} hover:bg-gray-100 rounded-full transition-colors`}
          >
            <X className={`${classes.closeIcon} text-gray-400`} />
          </button>
        )}
      </div>
    </div>
  );
};

export default AppleSearch;