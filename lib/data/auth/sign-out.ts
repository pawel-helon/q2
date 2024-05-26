"use server"

import { deleteSession } from '@/lib/session'
import { redirect } from 'next/navigation'
 
export async function signout() {
  deleteSession()
  redirect('/')
}