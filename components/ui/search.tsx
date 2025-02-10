"use client"

import React, { useState } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from "@/components/ui/input";

const AppleSearch = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="col-span-2 col-start-11 flex items-center justify-end">
      <div className="relative flex items-center w-full max-w-[240px]">
        <div className={`absolute left-2 flex items-center pointer-events-none transition-opacity duration-200 ${isFocused ? 'opacity-0' : 'opacity-100'}`}>
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        
        <Input
          type="search"
          placeholder="Suche"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`
            h-8 w-full
            bg-gray-100 hover:bg-gray-200/70
            border-0
            rounded-full
            text-sm
            transition-all duration-200
            placeholder:text-gray-500
            ${isFocused ? 'pl-4 pr-8 bg-white shadow-sm' : 'pl-8 pr-4'}
            focus:outline-none focus:ring-0 focus:bg-white
          `}
        />

        {(isFocused || searchValue) && (
          <button 
            onClick={() => setSearchValue('')}
            className="absolute right-2 p-1 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="h-3 w-3 text-gray-400" />
          </button>
        )}
      </div>
    </div>
  );
};

export default AppleSearch;