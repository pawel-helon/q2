"use client";

import { ChangeEvent, useEffect, useState } from "react";
import { useDebounceValue } from "usehooks-ts";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";
import { searchDevices } from "@/app/api/search-devices/route";

interface SearchInputProps {
  value: string;
  setValue: (value: string) => void;
}

export const SearchInput = ({ value, setValue }: SearchInputProps) => {
  const debouncedValue = useDebounceValue(value, 5000);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = () => {
    searchDevices(value);
    console.log(value, "value");
  };

  return (
    <form onSubmit={onSubmit}>
      <div className="flex items-center">
        <Search className="text-muted-foreground" />
        <Input
          type="search"
          placeholder="Search by address"
          onChange={handleChange}
          value={value}
          className="max-w-[264px] h-9 flex items-center border-none bg-background text-white"
        />
      </div>
    </form>
  );
};
