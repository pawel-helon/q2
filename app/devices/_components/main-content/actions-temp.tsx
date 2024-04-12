"use client";

import { SearchInput } from "./search-input";
import { GroupBy } from "./group-by";
import { GroupByTemp } from "./group-by-temp";

interface ActionsTempProps {
  value: string;
  setValue: (value: string) => void;
  setStatus: (status: boolean) => void;
}

export const ActionsTemp = ({ value, setValue, setStatus }: ActionsTempProps) => {
  return (
    <div className="flex justify-between border-b-2 border-border pb-1">
      <SearchInput value={value} setValue={setValue}/>
      <GroupByTemp setStatus={setStatus}/>
    </div>
  );
};
