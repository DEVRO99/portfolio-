import { lazy, Suspense } from 'react'
import { Hero } from '@/sections/Hero'

const About = lazy(() => import('@/sections/About').then((m) => ({ default: m.About })))
const Skills = lazy(() => import('@/sections/Skills').then((m) => ({ default: m.Skills })))
const Services = lazy(() => import('@/sections/Services').then((m) => ({ default: m.Services })))
const Projects = lazy(() => import('@/sections/Projects').then((m) => ({ default: m.Projects })))
const Experience = lazy(() =>
  import('@/sections/Experience').then((m) => ({ default: m.Experience }))
)
const Testimonials = lazy(() =>
  import('@/sections/Testimonials').then((m) => ({ default: m.Testimonials }))
)
const Contact = lazy(() => import('@/sections/Contact').then((m) => ({ default: m.Contact })))

function SectionFallback() {
  return <div className="py-24" />
}

export function Home() {
  return (
    <>
      <Hero />
      <Suspense fallback={<SectionFallback />}>
        <About />
        <Skills />
        <Services />
        <Projects />
        <Experience />
        <Testimonials />
        <Contact />
      </Suspense>
    </>
  )
}
