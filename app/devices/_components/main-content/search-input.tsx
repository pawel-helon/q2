"use client";

import { ChangeEvent } from "react";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

interface SearchInputProps {
  value: string;
  setValue: (value: string) => void;
}

export const SearchInput = ({ value, setValue }: SearchInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
      <div className="flex items-center">
        <Search className="text-muted-foreground" />
        <Input
          // type="search"
          spellCheck="false"
          placeholder="Search by address"
          onChange={handleChange}
          value={value}
          className="max-w-[264px] h-9 flex items-center border-none bg-background text-white"
        />
      </div>
  );
};