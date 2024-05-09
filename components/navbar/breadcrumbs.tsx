"use client";

import { usePathname } from "next/navigation";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

export const Breadcrumbs = () => {
  const pathname = usePathname();

  const segments = () => {
    return pathname
      .split("/")
      .filter(Boolean)
      .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1));
  };

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink href="/">Home</BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {segments()
          .slice(0, segments().length - 1)
          .map((segment, index) => (
              <div key={index} className="flex items-center gap-2.5">
                <BreadcrumbItem>
                  <BreadcrumbLink
                    href={`/${segments()
                      .slice(0, index + 1)
                      .join("/")
                      .toLowerCase()
                    }`}
                  >
                    {segment}
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator/>
              </div>
          ))}
        <BreadcrumbItem>
          <BreadcrumbPage>{segments()[segments().length - 1]}</BreadcrumbPage>
        </BreadcrumbItem>
      </BreadcrumbList>
    </Breadcrumb>
  );
};
