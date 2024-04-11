"use client";

import { SearchInput } from "./search-input";
import { GroupBy } from "./group-by";

interface ActionsProps {
  value: string;
  setValue: (value: string) => void;
}

export const Actions = ({ value, setValue }: ActionsProps) => {
  return (
    <div className="flex justify-between border-b-2 border-border pb-1">
      <SearchInput value={value} setValue={setValue}/>
      <GroupBy />
    </div>
  );
};
