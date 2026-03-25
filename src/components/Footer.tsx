"use client";

import { Linkedin, Instagram, Mail, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 pt-24 pb-12">
      <div className="px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <Image 
                src="/images/newlogo.png" 
                alt="Talentronaut Logo" 
                width={32} 
                height={32} 
                className="w-6 h-6 object-contain"
              />
              <span className="text-xl font-bold tracking-tight text-white font-minion">
                Talentronaut
              </span>
            </div>
            <p className="text-white/40 max-w-sm leading-relaxed mb-8">
              The acceleration program designed for high-conviction founders. 
              We transform ideas into market-ready MVPs in 11 days. No fluff, no theory, just execution.
            </p>
            <div className="flex gap-4">
              <SocialLink 
                href="https://www.linkedin.com/company/talentronaut-technologies-private-limited/posts/?feedView=all" 
                icon={<Linkedin className="w-4 h-4" />} 
              />
              <SocialLink 
                href="https://www.instagram.com/talentronaut/" 
                icon={<Instagram className="w-4 h-4" />} 
              />
              <SocialLink 
                href="mailto:support@talentronaut.in" 
                icon={<Mail className="w-4 h-4" />} 
              />
              <SocialLink 
                href="tel:+918220324802" 
                icon={<Phone className="w-4 h-4" />} 
              />
            </div>
          </div>

          {/* Links Column 1 */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-8">PROGRAM</h4>
            <ul className="space-y-4">
              <FooterLink href="#process">Process</FooterLink>
              <FooterLink href="#who">Who It's For</FooterLink>
              <FooterLink href="#clients">Clients</FooterLink>
              <FooterLink href="#hired">Hired</FooterLink>
              <FooterLink href="#commitment">Commitment</FooterLink>
              <FooterLink href="https://forms.gle/xtfZ7jUtbDcZXCz56">Apply Now</FooterLink>
            </ul>
          </div>

          {/* Links Column 2 */}
          <div>
            <h4 className="text-white font-bold text-xs tracking-widest uppercase mb-8">LEGAL</h4>
            <ul className="space-y-4">
              <FooterLink href="https://www.talentronaut.in/legal/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink href="https://www.talentronaut.in/legal/terms-of-service">Terms of Service</FooterLink>
              <FooterLink href="https://www.talentronaut.in/legal/cookie-policy">Cookie Policy</FooterLink>
              <FooterLink href="#">Contact Us</FooterLink>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-12 border-t border-white/5 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <span className="text-xs text-white/20 tracking-widest font-mono uppercase">
            © 2026 COHORT TALENTRONAUT. ALL RIGHTS RESERVED.
          </span>
          <span className="text-xs text-white/20 tracking-widest font-mono uppercase italic">
            BUILT FOR BUILDERS.
          </span>
        </div>
      </div>
    </footer>
  );
}

function FooterLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <li>
      <Link 
        href={href} 
        className="text-white/40 hover:text-accent transition-colors text-sm font-medium"
      >
        {children}
      </Link>
    </li>
  );
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link 
      href={href} 
      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-accent hover:text-white transition-all hover:-translate-y-1"
    >
      {icon}
    </Link>
  );
}
