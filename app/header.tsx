'use client'
import { TextLoop } from '@/components/ui/text-loop'
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-white py-4 dark:bg-zinc-950">
      <div className="mx-auto flex w-full max-w-screen-sm items-center justify-between px-4">
        <div>
          <Link
            href="/"
            className="text-xl font-medium text-black sm:text-2xl dark:text-white"
          >
            Muhammad Faiz Jauzah
          </Link>
          <div className="text-zinc-600 dark:text-zinc-500">
            <TextLoop
              className="text-sm text-zinc-600 dark:text-zinc-500"
              interval={2}
            >
              <span>AI/ML Engineer</span>
              <span>Web Developer</span>
            </TextLoop>
            <span className="sr-only">AI/ML Engineer & Web Developer</span>
          </div>
        </div>
      </div>
    </header>
  )
}
