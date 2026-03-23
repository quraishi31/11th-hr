import { HeroCarousel } from '@/components/hero-carousel'
import { Footer } from '@/components/footer'
import WeArePico from '@/components/we-are-pico'
import { ContactCTA } from '@/components/contact-cta'
import WorksSlider from '@/components/works-slider'
import AwardsMarquee from '@/components/Awards'
import { WhyChooseUs } from '@/components/WhyChooseUs'

export default function Page() {
  return (
    <>
      <main className="min-h-screen bg-transparent">
        <HeroCarousel />
        <WeArePico />
        <WorksSlider />
        <WhyChooseUs />
        <ContactCTA />
        <AwardsMarquee />
      </main>
      <Footer />
    </>
  )
}
