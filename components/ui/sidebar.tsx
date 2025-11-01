'use client'
import { motion } from 'motion/react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navigationItems = [
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Blog', href: '#blog' },
  { name: 'Connect', href: '#connect' },
]

export function Sidebar() {
  const [activeSection, setActiveSection] = useState<string>('about')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: '-50% 0px -50% 0px', // Triggers when section is in middle of viewport
      },
    )

    // Observe all sections
    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section)
    })

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <nav className="fixed top-1/2 right-6 hidden -translate-y-1/2 transform space-y-2 md:block lg:right-8">
      <div className="flex flex-col items-end space-y-4">
        {navigationItems.map((item) => {
          const isActive = activeSection === item.href.slice(1)
          return (
            <Link
              key={item.name}
              href={item.href}
              className="group relative flex items-center"
              onClick={(e) => {
                e.preventDefault()
                const element = document.querySelector(item.href)
                if (element) {
                  const elementRect = element.getBoundingClientRect()
                  const absoluteElementTop =
                    elementRect.top + window.pageYOffset
                  const middle =
                    absoluteElementTop -
                    window.innerHeight / 2 +
                    elementRect.height / 2
                  window.scrollTo({
                    top: middle,
                    behavior: 'smooth',
                  })
                }
              }}
            >
              <span className="absolute right-0 mr-8 text-sm opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:text-zinc-400">
                {item.name}
              </span>
              <motion.div
                className={`h-[2px] w-6 rounded-full bg-zinc-600 transition-all duration-200 group-hover:w-8 group-hover:bg-zinc-800 dark:bg-zinc-400 dark:group-hover:bg-zinc-200 ${
                  isActive ? 'w-8 bg-zinc-800 dark:bg-zinc-200' : ''
                }`}
              />
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
