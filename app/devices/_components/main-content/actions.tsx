"use client";

import { GroupBy } from "./group-by";
import { SearchInput } from "./search-input";

interface ActionsProps {
  searchValue: string;
  setSearchValue: (searchValue: string) => void;
  setStatus: (status: boolean) => void;
}

export const Actions = ({ searchValue, setSearchValue, setStatus }: ActionsProps) => {
  return (
    <div className="flex justify-between border-b-2 border-border pb-1">
      <SearchInput searchValue={searchValue} setSearchValue={setSearchValue}/>
      <GroupBy setStatus={setStatus}/>
    </div>
  );
};
