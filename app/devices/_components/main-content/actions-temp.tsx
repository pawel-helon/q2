"use client";

import { GroupBy } from "./group-by";
import { GroupByTemp } from "./group-by-temp";
import { SearchInputTemp } from "./search-input-temp";

interface ActionsTempProps {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  setStatus: (status: boolean) => void;
}

export const ActionsTemp = ({ searchValue, setSearchValue, setStatus }: ActionsTempProps) => {
  return (
    <div className="flex justify-between border-b-2 border-border pb-1">
      <SearchInputTemp searchValue={searchValue} setSearchValue={setSearchValue}/>
      <GroupByTemp setStatus={setStatus}/>
    </div>
  );
};
