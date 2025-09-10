"use client";

import { useState, useEffect } from "react";

interface SearchInputProps {
  value: string;
  onChange: (val: string) => void;
  placeholder?: string;
  delay?: number; // debounce delay in ms
}

export default function SearchInput({
  value,
  onChange,
  placeholder = "Search...",
  delay = 500,
}: SearchInputProps) {
  const [searchTerm, setSearchTerm] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      onChange(searchTerm);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [searchTerm, onChange, delay]);

  return (
    <input
      type="text"
      className="w-full md:w-64 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
      placeholder={placeholder}
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}
