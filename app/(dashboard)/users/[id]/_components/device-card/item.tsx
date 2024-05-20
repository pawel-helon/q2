"use client";

import { Paragraph } from "@/components/typography";

export function Item({ title, value }: { title: string; value: string }) {
  return (
    <div className="w-full flex justify-between">
      <Paragraph variant="base-thin">{title}</Paragraph>
      <Paragraph variant="base-thick" className="text-right">
        {value}
      </Paragraph>
    </div>
  );
}
