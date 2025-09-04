"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Silk from "@/components/Silk";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal"; 
import ScrollFloat from "@/components/ScrollFloat";
import LogoLoop from "@/components/LogoLoop";
import FuzzyText from "@/components/FuzzyText"; // <-- Import FuzzyText
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import React, { useEffect, useRef } from "react";
import { IconHome, IconUser, IconMessage } from "@tabler/icons-react";
import { Footer, FooterContent, FooterColumn, FooterBottom } from "@/components/ui/footer";
import GradientText from '@/components/GradientText';
import SpotlightCard from '@/components/SpotlightCard';
import ShinyText from '@/components/ShinyText';
import ScrollVelocity from '@/components/ScrollVelocity';


const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
];

const navItems = [
  { name: "Home", link: "/", icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  { name: "About", link: "/about", icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" /> },
  { name: "Contact", link: "/contact", icon: <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" /> },
];

// Define the missing footer data
const logo = (
  <div className="w-8 h-8 bg-purple-400 rounded-lg flex items-center justify-center text-white font-bold">
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
    ]
  },
  {
    title: "Company",
    links: [
      { text: "About", href: "/about" },
      { text: "Blog", href: "/blog" },
      { text: "Careers", href: "/careers" },
    ]
  },
  {
    title: "Support",
    links: [
      { text: "Help Center", href: "#help" },
      { text: "Contact", href: "/contact" },
      { text: "Status", href: "#status" },
    ]
  }
];

export default function HomePage() {
  return (
    <div className="relative w-screen min-h-screen">
    {/* Floating Navbar */}
<FloatingNav navItems={navItems} />

      {/* Hero section with Silk */}
      <section className="relative h-screen w-screen overflow-hidden">
        <div className="absolute inset-0">
          <Silk
            speed={5}
            scale={1}
            color="#034e90"
            noiseIntensity={1.5}
            rotation={0}
          />
        </div>

        {/* Hero foreground content */}
        <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
          <h1 className="text-5xl font-bold text-white drop-shadow-lg">
            Welcome to <span className="text-purple-400">bimql</span>
          </h1>
          <p className="mt-4 text-lg text-gray-200">
            Next.js + Tailwind + shadcn/ui + React Three Fiber
          </p>
          <div className="mt-6 flex gap-4">
            <Button size="lg">Get Started</Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* ScrollReveal section — AFTER the hero */}
      <section className="relative z-10 bg-white text-black dark:bg-black dark:text-white px-6 py-40 flex flex-col items-center justify-center transition-colors duration-300">
        <ScrollFloat
    animationDuration={1}
    ease="back.inOut(2)"
    scrollStart="center bottom+=50%"
    scrollEnd="bottom bottom-=40%"
    stagger={0.03}
    >
  {`When does a man die? When he is hit by a bullet? No! When he suffers a disease?
... (repeat as needed)`}
</ScrollFloat>
      </section>
      {/* Logos section */}
      {/* LogoLoop section — after ScrollReveal */}
      {/* Logos section */}
    <section className="relative z-10 bg-white dark:bg-black px-4 py-20 flex flex-col items-center justify-center">
      <h2 className="text-3xl font-bold mb-8 text-black dark:text-white">
        Projects
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
        ariaLabel="Technology partners"
      />
    </section>
{/* shiny gradient Section */}
<div className="flex flex-col items-center text-center bg-white dark:bg-black text-black dark:text-white py-20">
  <GradientText
    colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
    animationSpeed={3}
    showBorder={false}
    className="mb-4"
  >
    <h3 className="testimonials-title text-6xl font-bold">
      Loved by devs worldwide
    </h3>
  </GradientText>
  <ShinyText 
    className="text-lg text-gray-600 dark:text-gray-300 custom-class"
    text="Join our community of developers building amazing projects with bimql."
    disabled={false}
    speed={2}
  />
</div>

{/* Spotlight Cards Section */}
<section className="px-4 py-20 bg-white dark:bg-black text-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      {/* Card 1 */}
      <SpotlightCard spotlightColor="rgba(128, 90, 255, 0.25)">
        <h2 className="text-5xl font-bold text-purple-400 mb-2">100%</h2>
        <h3 className="text-xl font-semibold mb-1">Free & Open Source</h3>
        <p className="text-sm text-gray-300">Loved by devs around the world</p>
      </SpotlightCard>

      {/* Card 2 */}
      <SpotlightCard spotlightColor="rgba(64, 255, 170, 0.25)">
        <h2 className="text-5xl font-bold text-green-400 mb-2">110+</h2>
        <h3 className="text-xl font-semibold mb-1">Creative Components</h3>
        <p className="text-sm text-gray-300">Growing weekly & only getting better</p>
      </SpotlightCard>

      {/* Card 3 */}
      <SpotlightCard spotlightColor="rgba(255, 64, 121, 0.25)">
        <h2 className="text-5xl font-bold text-pink-400 mb-2">4</h2>
        <h3 className="text-xl font-semibold mb-1">Component Variants</h3>
        <p className="text-sm text-gray-300">Pick your favourite technologies</p>
      </SpotlightCard>

    </div>
  </div>
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



      {/* Footer */}
      <div className="w-full bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Footer>
            <FooterContent className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
              <FooterColumn className="col-span-1 sm:col-span-2 lg:col-span-1">
                <div className="flex items-center gap-2">
                  {logo}
                  <h3 className="text-xl font-bold">{name}</h3>
                </div>
              </FooterColumn>

              {columns.map((column, index) => (
                <FooterColumn key={index}>
                  <h3 className="text-md font-semibold mb-4">{column.title}</h3>
                  <div className="space-y-2">
                    {column.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.href}
                        className="block text-muted-foreground text-sm hover:text-foreground transition-colors"
                      >
                        {link.text}
                      </a>
                    ))}
                  </div>
                </FooterColumn>
              ))}
            </FooterContent>

            <FooterBottom className="border-t py-6">
              <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
                <p className="text-sm text-muted-foreground">© 2025 bimql. All rights reserved</p>
                <div className="flex gap-6">
                  <a href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Privacy Policy
                  </a>
                  <a href="/terms" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    Terms of Service
                  </a>
                </div>
              </div>
            </FooterBottom>
          </Footer>
        </div>
      </div>

    </div>
    
  );
  
  
}
