"use client";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { ChangeEvent, useState } from "react";
import { Label } from "../ui/label";
import { Search } from "lucide-react";
import { Input } from "../ui/input";

export function SelectWithSearch({
  list,
  children,
}: {
  list: any[];
  children?: React.ReactNode;
}) {
  const [searchValue, setSearchValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  let array: string[] = [];
  for (let i = 0; i < list.length; i++) {
    if (list[i].name!.toLowerCase().includes(searchValue.toLowerCase())) {
      array.push(list[i].name);
    }
  }

  return (
    <div className="flex flex-col gap-2">
      <div className="flex justify-between items-end">
        <Label htmlFor="owner">Owner</Label>
        <p className="text-[0.8rem] leading-none text-muted-foreground">
          {children}
        </p>
      </div>
      <Select name="owner">
        <SelectTrigger>
          <SelectValue placeholder="Select owner" />
        </SelectTrigger>
        <SelectContent>
          <div className="flex items-center border-b border-border mb-2">
            <Search className="ml-1 text-muted-foreground size-4" />
            <Input
              spellCheck="false"
              placeholder="Search by name"
              onChange={handleChange}
              value={searchValue}
              className="bg-transparent border-none focus-visible:bg-transparent"
            />
          </div>
          <SelectGroup>
            {array.length > 0 ? (
              <>
                {list.map((item) => {
                  if (
                    item.name!.toLowerCase().includes(searchValue.toLowerCase())
                  ) {
                    return (
                      <SelectItem key={item.id} value={item.email}>
                        {item.name}
                      </SelectItem>
                    );
                  }
                })}
              </>
            ) : (
              <div className="flex flex-col justify-center items-center h-[80px]">
                <p className="text-center text-xs text-foreground">
                  No results match search query.
                </p>
              </div>
            )}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  );
}
