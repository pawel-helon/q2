"use client";

import { Paragraph } from "@/components/typography";

interface ItemProps {
  title: string;
  value: string;
}

export const Item = ({ title, value }: ItemProps) => {
  return (
    <div className="w-full flex justify-between">
      <Paragraph variant="base-thin">{title}</Paragraph>
      <Paragraph variant="base-thick" className="text-right">
        {value}
      </Paragraph>
    </div>
  );
};
