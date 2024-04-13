"use client";

import { ChangeEvent } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface SearchInputTempProps {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
}

export const SearchInputTemp = ({ searchValue, setSearchValue }: SearchInputTempProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return (
      <div className="flex items-center">
        <Search className="text-muted-foreground" />
        <Input
          spellCheck="false"
          placeholder="Search by name"
          onChange={handleChange}
          value={searchValue}
          className="max-w-[264px] h-9 flex items-center border-none bg-background text-white"
        />
      </div>
  );
};