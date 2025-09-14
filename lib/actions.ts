'use server'

import { prisma } from '@/lib/prisma'// your postgres client (drizzle / prisma / pg)

export async function createMessage(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  if (!name || !email || !message) {
    throw new Error('All fields are required')
  }

  // Example: using Prisma
  await prisma.message.create({
    data: {
      name,
      email,
      message,
    },
  })

  // Or if using raw SQL with `pg`
  // await db.query(`INSERT INTO messages (name, email, message) VALUES ($1, $2, $3)`, [name, email, message])
}
