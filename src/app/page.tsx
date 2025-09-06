"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import DarkVeil from "@/components/DarkVeil";
import { Button } from "@/components/ui/button";
import ScrollFloat from "@/components/ScrollFloat";
import { IconHome, IconUser, IconMessage } from "@tabler/icons-react";
import React, { useEffect, useRef } from "react";
import LogoLoop from "@/components/LogoLoop";
import GradientText from "@/components/GradientText";
import SpotlightCard from "@/components/SpotlightCard";
import ShinyText from "@/components/ShinyText";
import { TextReveal } from "@/components/magicui/text-reveal";
// import ScrollVelocity from "@/components/ScrollVelocity";
import ReviewSpotlightMarquee from "@/components/ReviewSpotlightMarquee";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import FuzzyText from "@/components/FuzzyText";
import { Safari } from "@/components/magicui/safari";
import Iphone15Pro from "@/components/magicui/iphone-15-pro";

import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
} from "react-icons/si";

import {
  Footer,
  FooterContent,
  FooterColumn,
  FooterBottom,
} from "@/components/ui/footer";


const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  {
    node: <SiTypescript />,
    title: "TypeScript",
    href: "https://www.typescriptlang.org",
  },
  {
    node: <SiTailwindcss />,
    title: "Tailwind CSS",
    href: "https://tailwindcss.com",
  },
];

const navItems = [
  {
    name: "Home",
    link: "/",
    icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Resume",
    link: "https://bimql.link/resume/",
    icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Merch",
    link: "/contact",
    icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
];

// Define the missing footer data
const logo = (
  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-purple-400 font-bold text-white">
    B
  </div>
);

const name = "bimql";

const columns = [
  {
    title: "Product",
    links: [
      { text: "Features", href: "#features" },
      { text: "Pricing", href: "#pricing" },
      { text: "Documentation", href: "#docs" },
    ],
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "/about" },
      { text: "Blog", href: "/blog" },
      { text: "Careers", href: "/careers" },
    ],
  },
  {
    title: "Support",
    links: [
      { text: "Help Center", href: "#help" },
      { text: "Contact", href: "/contact" },
      { text: "Status", href: "#status" },
    ],
  },
];

export default function HomePage() {
  return (
    <div className="relative min-h-screen w-screen">
      {/* Floating Navbar */}
      <FloatingNav navItems={navItems} />

      {/* Hero section */}
      <section className="relative h-screen w-screen overflow-hidden">
        <div className="absolute inset-0">
          <DarkVeil
            speed={1}
            hueShift={0}
            noiseIntensity={0}
            scanlineIntensity={0}
            scanlineFrequency={0}
            warpAmount={0}
          />
        </div>

        {/* Hero foreground content */}
        <div className="relative z-20 flex h-full flex-col items-center justify-center px-4 text-center">

          {/* Animated Gradient Button above the heading */}
          <div className="mb-6 flex items-center justify-center">
            <a
              href="https://bimql.link/resume/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
            >
              <span
                className="absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#8660fa]/50 via-[#a855f7]/50 to-[#8400ff]/50 bg-[length:300%_100%] p-[1px]"
                style={{
                  WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "destination-out",
                  mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  maskComposite: "subtract",
                  WebkitClipPath: "padding-box",
                }}
              />
              🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
              <AnimatedGradientText className="text-2xl font-medium">
                Resume →
              </AnimatedGradientText>
            </a>
          </div>


          {/* Heading */}
          <h1 className="text-7xl font-bold text-white drop-shadow-lg">
            Hi, I'm{" "}
            <span className="text-purple-400 dark:text-white">bimql</span>
          </h1>
          <p className="mt-2 text-2xl text-gray-200">Developer who design....</p>


          {/* Buttons */}
          {/* <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
            <Button size="lg" className="px-8 py-4 text-lg">Virtual Tour</Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">Resume</Button>
          </div> */}
        </div>
      </section>

      <section className="relative z-10 flex flex-col items-center justify-center bg-white px-4 py-16 dark:bg-black">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
  {/* Left column: two stacked cards (less width) */}
  <div className="md:col-span-3 flex flex-col gap-8">
    {/* Card 1 */}
    <SpotlightCard spotlightColor="rgba(128, 90, 255, 0.25)">
      <h2 className="mb-3 text-6xl font-bold text-purple-400 dark:text-white">Developer</h2>
      <h3 className="mb-2 text-2xl font-medium">I do code Sometimes.</h3>
      <p className="text-lg text-gray-300">most of the time taken by debugging.</p>
    </SpotlightCard>

    {/* Card 2 */}
    <SpotlightCard spotlightColor="rgba(64, 255, 170, 0.25)">
      <h2 className="mb-3 text-6xl font-bold text-purple-400 dark:text-white">Designer</h2>
      <h3 className="mb-2 text-2xl font-medium">UI/UX Enthusiast</h3>
      <p className="text-lg text-gray-300">Crafting seamless digital experiences</p>
    </SpotlightCard>
  </div>

  {/* Right column: single card (more width) */}
  <div className="md:col-span-2 h-full">
    <SpotlightCard spotlightColor="rgba(255, 64, 121, 0.25)" className="h-full">
      <h2 className="mb-3 text-6xl font-bold text-purple-400 dark:text-white">Core Skills</h2>
      <h3 className="mb-2 text-2xl font-medium">Multimedia Creator</h3>
      <p className="text-lg text-gray-300">Photography, Videography, and 3D Modeling</p>
    </SpotlightCard>
  </div>
</div>

  </div>
</section>

      <section>
        <TextReveal className="relative z-10 flex flex-col items-center justify-center bg-white dark:bg-black px-6 py-10 text-black dark:text-white transition-colors duration-300 text-center">
          I code when I’m bored, I design when I’m not coding, and personal development… well, that update is still in pending.
        </TextReveal>
      </section>

      {/* Logos section */}
      {/* LogoLoop section — after ScrollReveal */}
      {/* Logos section */}
      <section className="relative z-10 flex flex-col items-center justify-center bg-white px-4 py-10 dark:bg-black">
        <h2 className="mb-8 text-5xl font-bold text-black dark:text-white">
          {/* Testimonials title + Shiny text */}
          <div className="flex flex-col items-center bg-white py-1 text-center text-black dark:bg-black dark:text-white">
            <GradientText
              colors={["#8660fa", "#a855f7", "#8400ff", "#a855f7", "#a855f7"]}
              animationSpeed={5}
              showBorder={false}
              className="mb-2"
            >
              <h3 className="testimonials-title text-6xl font-bold">
                I like building things
              </h3>
            </GradientText>
            <ShinyText
              className="custom-class text-2xl font-light text-gray-600 dark:text-gray-300"
              text="look what I've built so far"
              disabled={false}
              speed={2}
            />
          </div>

        </h2>
        <LogoLoop
          logos={techLogos}
          speed={120}
          direction="left"
          logoHeight={48}
          gap={40}
          pauseOnHover
          scaleOnHover
          fadeOut
          // fadeOutColor removed → auto light/dark mode
          ariaLabel="Works"
        />
      </section>



      {/* FuzzyText section
    <div className="relative z-10 bg-white text-black dark:bg-black dark:text-white flex flex-col items-center justify-center min-h-screen transition-colors duration-300">
      <FuzzyText
        fontSize="10rem"
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
        className="text-black dark:text-white" // <- theme-aware color
      >
        404
      </FuzzyText>
      <FuzzyText
        fontSize="6rem"
        className="mt-8 text-black dark:text-white" // <- theme-aware color
        baseIntensity={0.2}
        hoverIntensity={0.5}
        enableHover={true}
      >
        bimql Error
      </FuzzyText>
    </div> */}
{/* Safari Demo Section */}
<section className="relative z-10 flex flex-col md:flex-row items-center bg-white px-4 py-16 dark:bg-black">
  {/* Left Side Text */}
<div className="mb-8 md:mb-0 md:w-1/2 md:pr-8 text-center md:text-left relative z-20 px-12">
  <h2 className="mb-4 text-5xl font-bold text-black dark:text-white">
    Game I have built while {"{condition}"} 
    <span className="text-purple-400 dark:text-white"> learning</span>
  </h2>

  {/* Downloads Section */}
<div className="flex flex-col sm:flex-row items-center gap-4 text-2xl text-gray-700 dark:text-gray-300">
  <span>10k+ Downloads</span>
  <span className="hidden sm:inline">|</span>

  <a
    href="#"
    className="group relative flex items-center justify-center rounded-full px-6 py-2 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]"
  >
    <span
      className="absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#8660fa]/50 via-[#a855f7]/50 to-[#8400ff]/50 bg-[length:300%_100%] p-[1px]"
      style={{
        WebkitMask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        WebkitMaskComposite: "destination-out",
        mask:
          "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
        maskComposite: "subtract",
        WebkitClipPath: "padding-box",
      }}
    />
    Download App
  </a>
</div>

</div>

{/* Desktop Safari + iPhone */}
<div className="hidden md:flex md:w-1/2 justify-start relative z-10 overflow-hidden">
  {/* Safari */}
  <div className="rounded-xl border-4 border-white dark:border-white h-96 md:h-[600px]">
    <Safari
      url="com.bimql.ludo"
      className="rounded-xl h-full overflow-hidden -translate-x-32"
      imageSrc="/image.png"
    />
  </div>
  {/* iPhone overlay */}
  <Iphone15Pro
    className="absolute shadow-2xl -top-12 left-10 z-20 w-48 md:w-64"
    src="/image.png"
  />
</div>

{/* Mobile iPhone only */}
<div className="md:hidden flex justify-center relative z-10">
  <Iphone15Pro
    className="w-48"
    src="/image.png"
  />
</div>



</section>


      {/* ✅ Spotlight Marquee with reviews */}
      <ReviewSpotlightMarquee />

      {/* Footer */}
      <div className="bg-white dark:bg-black  w-full">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Footer>
            <FooterContent className="grid grid-cols-4 gap-8 py-12 sm:grid-cols-1 lg:grid-cols-4">
              <FooterColumn className="col-span-1 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2">
                  {logo}
                  <h3 className="text-2xl font-medium">{name}</h3>
                </div>
              </FooterColumn>

              {columns.map((column, index) => (
                <FooterColumn key={index}>
                  <h3 className="mb-4 text-lg font-semibold">{column.title}</h3>
                  <div className="space-y-2">
                    {column.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className="text-muted-foreground hover:text-foreground block text-base transition-colors"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </FooterColumn>
              ))}
            </FooterContent>

            <FooterBottom className=" bg-white dark:bg-black border-t py-6">
              <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
                <p className="text-muted-foreground text-base">
                  © 2025 bimql. All rights reserved
                </p>
                <div className="flex gap-6">
                  <a
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground text-base transition-colors"
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground text-base transition-colors"
                  >
                    Terms of Service
                  </a>
                </div>
              </div>
            </FooterBottom>
          </Footer>
        </div>
      </div>
    </div >
  );
}
