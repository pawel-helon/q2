interface ActionsProps {
    children: React.ReactNode;
}

export const Actions = ({ children }: ActionsProps) => {
  return (
    <div className="flex gap-2 justify-end">
        {children}
    </div>
  )
}
