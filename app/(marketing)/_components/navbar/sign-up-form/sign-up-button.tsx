'use client'
 
import { useFormStatus } from 'react-dom'

import { Button } from '@/components/ui/button'
 
export function SignUpButton() {
  const { pending } = useFormStatus()

  return (
    <Button
        disabled={pending}
        aria-disabled={pending}
        type="submit"
    >
      {pending ? 'Submitting...' : 'Sign up'}
    </Button>
  )
}