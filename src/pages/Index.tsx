import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import PoweredByOdoo from "@/components/PoweredByOdoo";
import ProblemSolution from "@/components/ProblemSolution";
import WhatWeDo from "@/components/WhatWeDo";
import Solutions from "@/components/Solutions";
import WhyChooseUs from "@/components/WhyChooseUs";
import HowWeWork from "@/components/HowWeWork";
import CaseStudy from "@/components/CaseStudy";
import FAQSection from "@/components/FAQSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => (
  <>
    <Helmet>
      <title>NovaFlow — Soluzioni ERP e Digitali per PMI Italiane</title>
      <meta name="description" content="NovaFlow è partner Odoo certificato. Digitalizza la tua azienda con soluzioni ERP su misura, automazione dei processi e supporto dedicato per PMI italiane." />
      <meta property="og:title" content="NovaFlow — Soluzioni ERP e Digitali per PMI Italiane" />
      <meta property="og:description" content="Partner Odoo certificato. Soluzioni ERP, digital solutions e infrastruttura cloud per la tua azienda." />
      <meta property="og:type" content="website" />
    </Helmet>
    <Navbar />
    <main>
      <HeroSection />
      <PoweredByOdoo />
      <ProblemSolution />
      <WhatWeDo />
      <Solutions />
      <WhyChooseUs />
      <HowWeWork />
      <CaseStudy />
      <FAQSection />
      <ContactForm />
    </main>
    <Footer />
  </>
);

export default Index;
