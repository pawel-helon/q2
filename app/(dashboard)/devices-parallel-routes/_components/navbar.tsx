import { Breadcrumbs } from "@/components/navbar/breadcrumbs";

export function Navbar({ children }: { children: React.ReactNode }) {
  return (
    <div className="hidden xs:flex w-full py-6 justify-between items-center">
      <Breadcrumbs />
      <div className="flex justify-end gap-2">
        {children}
      </div>
    </div>
  );
}
