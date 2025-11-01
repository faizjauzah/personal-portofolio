'use client'
import { TextLoop } from '@/components/ui/text-loop'
import Link from 'next/link'

export function Header() {
  return (
    <header className="mb-8 flex items-center justify-between">
      <div>
        <Link href="/" className="font-medium text-black dark:text-white text-xl sm:text-2xl">
          Muhammad Faiz Jauzah
        </Link>
        <div className="text-zinc-600 dark:text-zinc-500">
          <TextLoop className="text-sm text-zinc-600 dark:text-zinc-500" interval={2}>
            <span>AI/ML Engineer</span>
            <span>Web Developer</span>
          </TextLoop>
          <span className="sr-only">AI/ML Engineer & Web Developer</span>
        </div>
      </div>
    </header>
  )
}
