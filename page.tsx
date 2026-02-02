'use client';

import { useState } from 'react';
import Header from '@/components/header';
import Hero from '@/components/hero';
import PersonasGrid from '@/components/personas-grid';
import SimulatorSection from '@/components/simulator-section';
import FeaturesSection from '@/components/features-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <PersonasGrid />
      <SimulatorSection />
      <FeaturesSection />
      <Footer />
    </main>
  );
}
