import { useCallback, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion, useInView } from 'framer-motion'
import { gsap, ScrollTrigger } from '@/lib/motion'

const CONTRACT_ADDRESS = 'PASTE_CONTRACT_ADDRESS_HERE'

const ease = [0.22, 1, 0.36, 1] as const

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.14, delayChildren: 0.08 } },
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
}

const slideRight = {
  hidden: { opacity: 0, x: 70, scale: 0.92 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease } },
}

const slideLeft = {
  hidden: { opacity: 0, x: -70, scale: 0.92 },
  show: { opacity: 1, x: 0, scale: 1, transition: { duration: 0.9, ease } },
}

const popIn = {
  hidden: { opacity: 0, scale: 0.8, y: 20 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease } },
}

/* ─────────────────── HERO ─────────────────── */

function HeroSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.section
      ref={ref}
      className="panel hero-section"
      id="hero"
      variants={stagger}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <motion.div className="hero-section__text" variants={stagger}>
        <motion.h2 className="display-heading" variants={fadeUp}>
          The world <em>forgot</em>
          <br />
          to say it.
        </motion.h2>

        <motion.p className="display-heading display-heading--sub" variants={fadeUp}>
          So we said it <span className="glow-word">ourselves.</span>
        </motion.p>

        <motion.p className="section-body" variants={fadeUp}>
          We are <strong>PROUD</strong>. A movement for the ones who kept going
          when nobody was watching.
        </motion.p>

        <motion.button
          className="glass-cta"
          type="button"
          variants={popIn}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
        >
          Join the movement
          <span className="glass-cta__arrow" aria-hidden="true">&#8594;</span>
        </motion.button>
      </motion.div>

      <motion.div className="hero-section__art" variants={slideRight}>
        <img
          className="character character--hero"
          src="/pepebody1.png"
          alt="Proud character"
        />
      </motion.div>
    </motion.section>
  )
}

/* ─────────────────── ABOUT ─────────────────── */

const storyLines = [
  'No connections. No safety net. No blueprint.',
  'Just a decision every morning to keep showing up.',
  'We are the late nights nobody saw. The risks nobody clapped for. The comebacks nobody expected.',
  '$PROUD was born from a simple truth\u2014the world is quick to remind you what\u2019s wrong, but slow to tell you what you\u2019ve overcome.',
  'This isn\u2019t just a token. It\u2019s a mirror\u2014and when you look into it, we hope you see someone who deserves to hear the word proud.',
]

function AboutSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.12 })

  return (
    <motion.section
      ref={ref}
      className="panel about-section"
      id="about"
      variants={stagger}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <motion.div className="about-section__art" variants={slideLeft}>
        <img
          className="character character--about"
          src="/pepebody2.png"
          alt="Proud character"
        />
      </motion.div>

      <motion.div className="about-section__text" variants={stagger}>
        <motion.p className="kicker" variants={fadeUp}>The Story</motion.p>

        <motion.h2 className="display-heading display-heading--sm" variants={fadeUp}>
          Nobody handed us <em>anything.</em>
        </motion.h2>

        <div className="story-lines">
          {storyLines.map((line, i) => (
            <motion.p
              key={i}
              className={`story-line ${i >= 3 ? 'story-line--bold' : ''}`}
              variants={fadeUp}
            >
              {line}
            </motion.p>
          ))}
        </div>
      </motion.div>
    </motion.section>
  )
}

/* ─────────────────── TOKENOMICS ─────────────────── */

const tokenStats = [
  { label: 'Total Supply', value: '1B', detail: '$PROUD' },
  { label: 'LP Burned', value: '100%', detail: 'Permanently' },
  { label: 'Tax', value: '0%', detail: 'Zero fees' },
  { label: 'Mint', value: 'Revoked', detail: 'Forever' },
]

function TokenomicsSection() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <motion.section
      ref={ref}
      className="panel tokenomics-section"
      id="tokenomics"
      variants={stagger}
      initial="hidden"
      animate={inView ? 'show' : 'hidden'}
    >
      <motion.div className="tokenomics-section__head" variants={stagger}>
        <motion.p className="kicker" variants={fadeUp}>Tokenomics</motion.p>
        <motion.h2 className="display-heading display-heading--sm" variants={fadeUp}>
          Simple. Clean. <em>Nothing to hide.</em>
        </motion.h2>
        <motion.p className="section-body" variants={fadeUp}>
          Launched on <strong>Pump.fun</strong>&mdash;the way it should be.
        </motion.p>
      </motion.div>

      <motion.div
        className="glass-grid"
        variants={{ ...stagger, show: { transition: { staggerChildren: 0.08, delayChildren: 0.25 } } }}
      >
        {tokenStats.map((stat) => (
          <motion.article
            key={stat.label}
            className="glass-card"
            variants={popIn}
            whileHover={{ y: -6, scale: 1.03 }}
          >
            <span className="glass-card__label">{stat.label}</span>
            <strong className="glass-card__value">{stat.value}</strong>
            <span className="glass-card__detail">{stat.detail}</span>
          </motion.article>
        ))}
      </motion.div>

      <motion.p className="tokenomics-footer" variants={fadeUp}>
        No presale. No insider bags. No dev wallets.
        <br />
        <strong>Just a fair launch for a community that earned it.</strong>
      </motion.p>
    </motion.section>
  )
}

/* ─────────────────── FOOTER ─────────────────── */

function SiteFooter() {
  return (
    <footer className="land-footer">
      <div className="land-footer__terrain" aria-hidden="true">
        <svg className="land-footer__hills" viewBox="0 0 1440 180" preserveAspectRatio="none">
          <path d="M0,180 L0,90 Q180,20 360,70 Q540,130 720,55 Q900,0 1080,50 Q1260,110 1440,60 L1440,180 Z" fill="var(--land-mid)" />
          <path d="M0,180 L0,110 Q200,50 400,95 Q600,150 800,80 Q1000,30 1200,75 Q1350,120 1440,90 L1440,180 Z" fill="var(--land-dark)" />
          <path d="M0,180 L0,140 Q240,100 480,130 Q720,160 960,120 Q1200,90 1440,125 L1440,180 Z" fill="var(--land-deep)" />
        </svg>
      </div>

      <div className="land-footer__content">
        <div className="land-footer__brand">
          <img className="land-footer__logo" src="/logoproud.jpeg" alt="Proud logo" />
          <p className="land-footer__tagline">Built with pride. Held with pride.</p>
        </div>

        <nav className="land-footer__links">
          <a href="https://x.com/" target="_blank" rel="noreferrer">Twitter / X</a>
          <a href="https://pump.fun/" target="_blank" rel="noreferrer">Pump.fun</a>
          <a href="https://dexscreener.com/" target="_blank" rel="noreferrer">DexScreener</a>
        </nav>

        <p className="land-footer__copy">
          &copy; {new Date().getFullYear()} $PROUD &mdash; All rights reserved. Not financial advice.
        </p>
      </div>
    </footer>
  )
}

/* ─────────────────── LOADER ─────────────────── */

function Loader({ onEnter }: { onEnter: () => void }) {
  return (
    <motion.div
      className="loader"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="loader__content">
        <img className="loader__logo" src="/logoproud.jpeg" alt="Proud logo" />
        <p className="loader__disclaimer">
          A cinematic sound will start, close your eyes and consume it.
        </p>
        <motion.button
          className="loader__button"
          type="button"
          onClick={onEnter}
          whileHover={{ scale: 1.06, y: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          I am PROUD.
        </motion.button>
      </div>
    </motion.div>
  )
}

/* ─────────────────── APP ─────────────────── */

function App() {
  const sceneRef = useRef<HTMLElement | null>(null)
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const [entered, setEntered] = useState(false)
  const [copied, setCopied] = useState(false)

  const handleEnter = useCallback(() => {
    setEntered(true)
    if (!audioRef.current) {
      const audio = new Audio('/proudmusic.MP3')
      audio.loop = true
      audio.volume = 0.6
      audioRef.current = audio
    }
    audioRef.current.play().catch(() => {})
  }, [])

  useEffect(() => {
    const scene = sceneRef.current
    if (!scene) return

    const ctx = gsap.context(() => {
      const skyEls = gsap.utils.toArray<HTMLElement>('[data-cloud]')
      skyEls.forEach((el) => {
        const speed = Number(el.dataset.speed ?? 1)
        const isBird = el.classList.contains('bird-track')
        const xDir = el.dataset.xdir === 'left' ? -1 : 1
        gsap.to(el, {
          yPercent: (isBird ? -50 : -25) * speed,
          xPercent: (isBird ? 30 : 10) * speed * xDir,
          ease: 'none',
          scrollTrigger: { trigger: scene, start: 'top top', end: 'bottom top', scrub: true },
        })
      })

      gsap.to('.sun', {
        yPercent: -12, xPercent: 6, ease: 'none',
        scrollTrigger: { trigger: scene, start: 'top top', end: 'bottom top', scrub: true },
      })

      const panels = gsap.utils.toArray<HTMLElement>('.panel')
      panels.forEach((panel) => {
        ScrollTrigger.create({
          trigger: panel,
          start: 'center center',
          end: '+=60%',
          pin: true,
          pinSpacing: true,
        })
      })
    })

    return () => { ctx.revert() }
  }, [entered])

  const handleCopyCa = async () => {
    try {
      await navigator.clipboard.writeText(CONTRACT_ADDRESS)
      setCopied(true)
      window.setTimeout(() => setCopied(false), 1500)
    } catch { /* no-op */ }
  }

  return (
    <>
      <div className="sky-layer sky-layer--back">
        <img className="cloud cloud-1" data-cloud data-speed="0.8" src="/cloud.png" alt="" aria-hidden="true" />
        <img className="cloud cloud-2" data-cloud data-speed="1.3" src="/cloud.png" alt="" aria-hidden="true" />
        <img className="cloud cloud-3" data-cloud data-speed="1.7" src="/cloud.png" alt="" aria-hidden="true" />
        <img className="cloud cloud-4" data-cloud data-speed="1.1" src="/cloud.png" alt="" aria-hidden="true" />
      </div>

      <div className="sky-layer sky-layer--front">
        <img className="sun" src="/sun.png" alt="" aria-hidden="true" />
        <div className="bird-track bird-track-1" data-cloud data-speed="2.0">
          <img className="bird bird-1" src="/bird1.png" alt="" aria-hidden="true" />
        </div>
        <div className="bird-track bird-track-2" data-cloud data-speed="1.6" data-xdir="left">
          <img className="bird bird-2" src="/bird2.png" alt="" aria-hidden="true" />
        </div>
        <div className="bird-track bird-track-3" data-cloud data-speed="2.4">
          <img className="bird bird-3" src="/bird1.png" alt="" aria-hidden="true" />
        </div>
      </div>

      <AnimatePresence>
        {!entered && <Loader onEnter={handleEnter} />}
      </AnimatePresence>

      <main ref={sceneRef} className="app-shell" aria-label="Sky environment">
        <AnimatePresence>
          {entered && (
            <motion.div
              className="app-shell__inner"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            >
              <header className="comic-header">
                <div className="comic-header__logo-wrap">
                  <img className="comic-header__logo" src="/logoproud.jpeg" alt="Proud logo" />
                </div>
                <div className="comic-header__text">
                  <p className="comic-header__eyebrow">$PROUD</p>
                  <h1 className="comic-header__title">We are PROUD of..</h1>
                </div>
                <div className="comic-header__actions">
                  <a className="comic-header__button comic-header__button--x" href="https://x.com/" target="_blank" rel="noreferrer" aria-label="Visit X profile">
                    <svg className="comic-header__x-icon" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M18.244 2h3.308l-7.227 8.26L22.8 22h-6.637l-5.196-6.79L4.997 22H1.688l7.73-8.835L1.2 2h6.806l4.697 6.204L18.244 2Zm-1.16 18h1.833L7.01 3.895H5.043L17.084 20Z" fill="currentColor" />
                    </svg>
                  </a>
                  <button type="button" className="comic-header__button comic-header__button--ca" onClick={handleCopyCa}>
                    {copied ? 'COPIED!' : 'COPY CA'}
                  </button>
                </div>
              </header>

              <section className="sky-transition-spacer" aria-hidden="true" role="presentation">
                <div className="scroll-indicator">
                  <span className="scroll-indicator__text">Scroll down</span>
                  <span className="scroll-indicator__arrow">
                    <svg width="18" height="24" viewBox="0 0 18 24" fill="none" aria-hidden="true">
                      <path d="M9 0v20m0 0l-7-7m7 7l7-7" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </section>

              <div className="sections-wrap">
                <HeroSection />
                <AboutSection />
                <TokenomicsSection />
              </div>

              <SiteFooter />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </>
  )
}

export default App
