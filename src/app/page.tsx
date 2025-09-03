"use client";
import { FloatingNav } from "@/components/ui/floating-navbar";
import Silk from "@/components/Silk";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/ScrollReveal"; 
import LogoLoop from "@/components/LogoLoop";
import FuzzyText from "@/components/FuzzyText"; // <-- Import FuzzyText
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss } from "react-icons/si";
import React, { useEffect, useRef } from "react";
import { IconHome, IconUser, IconMessage } from "@tabler/icons-react";
import { Footer, FooterContent, FooterColumn, FooterBottom } from "@/components/ui/footer";

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
      <section className="relative z-10 bg-black text-white px-6 py-40 flex flex-col items-center justify-center">
        <h2 className="text-4xl font-bold mb-8">A Story to Remember</h2>
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur={true}
          baseRotation={5}
          blurStrength={10}
        >
          When does a man die? When he is hit by a bullet? No! When he suffers a disease?
          No! When he ate a soup made out of a poisonous mushroom?
          No! A man dies when he is forgotten!
          When does a man die? When he is hit by a bullet? No! When he suffers a disease?
          No! When he ate a soup made out of a poisonous mushroom?
          No! A man dies when he is forgotten!

          When does a man die? When he is hit by a bullet? No! When he suffers a disease?
          No! When he ate a soup made out of a poisonous mushroom?
          No! A man dies when he is forgotten!

          When does a man die? When he is hit by a bullet? No! When he suffers a disease?
          No! When he ate a soup made out of a poisonous mushroom?
          No! A man dies when he is forgotten!

          When does a man die? When he is hit by a bullet? No! When he suffers a disease?
          No! When he ate a soup made out of a poisonous mushroom?
          No! A man dies when he is forgotten!
        </ScrollReveal>
      </section>
      {/* Logos section */}
      {/* LogoLoop section — after ScrollReveal */}
      <section className="relative z-10 bg-black dark:bg-black px-6 py-20 flex flex-col items-center justify-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-white">
          Technologies We Use
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
          fadeOutColor="#000000"
          ariaLabel="Technology partners"
        />
      </section>
      {/* FuzzyText section */}
      <div className="relative z-10 bg-black text-white flex flex-col items-center justify-center min-h-screen">
        <FuzzyText fontSize="10rem" baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
          404
        </FuzzyText>
        <FuzzyText fontSize="6rem" className="mt-8" baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
          bimql Error
        </FuzzyText>
      </div>

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