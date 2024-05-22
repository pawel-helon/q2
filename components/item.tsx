"use client";

import { Paragraph } from "@/components/typography";

export function Item({
  title,
  value,
  children,
}: {
  title: string;
  value?: string;
  children?: React.ReactNode;
}) {
  return (
    <div className="w-full flex justify-between">
      <Paragraph variant="base-thin">{title}</Paragraph>
      <Paragraph variant="base-thick" className="text-right">
        {value}
      </Paragraph>
      {children}
    </div>
  );
}
