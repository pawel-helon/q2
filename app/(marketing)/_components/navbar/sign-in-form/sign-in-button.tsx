'use client'
 
import { useFormStatus } from 'react-dom'
import { Button } from '@/components/ui/button'
 
export function SignInButton() {
  const { pending } = useFormStatus()

  return (
    <Button
        disabled={pending}
        aria-disabled={pending}
        type="submit"
    >
      {pending ? 'Submitting...' : 'Sign in'}
    </Button>
  )
}