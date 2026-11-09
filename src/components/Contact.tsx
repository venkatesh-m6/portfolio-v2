'use client';

import { Mail, Terminal, ArrowUpRight, FileText } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '@/components/Icons';

const contactLinks = [
  {
    id: 'email-link',
    icon: Mail,
    label: 'Email',
    href: 'mailto:manipativenkatesh1@gmail.com',
    display: 'manipativenkatesh1@gmail.com',
  },
  {
    id: 'linkedin-link',
    icon: LinkedinIcon,
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/manipati-venkatesh-468318373/',
    display: 'linkedin.com/in/manipati-venkatesh',
  },
  {
    id: 'github-link',
    icon: GithubIcon,
    label: 'GitHub',
    href: 'https://github.com/venkatesh-614',
    display: 'github.com/venkatesh-614',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 px-6 border-t border-white/6">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="mb-10 text-center max-w-xl mx-auto">
          <div className="text-xs font-mono text-emerald-400 mb-2">05 / contact</div>
          <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-zinc-100">
            Get in Touch
          </h2>
          <p className="mt-2 text-sm text-zinc-400">
            Currently open to software engineering roles, full-stack internships, and technical collaborations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-4xl mx-auto items-stretch">
          
          {/* Terminal Info Box */}
          <div className="rounded-xl border border-white/8 bg-[#111319] overflow-hidden flex flex-col justify-between">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6 bg-white/[0.02]">
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-600" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <div className="w-2.5 h-2.5 rounded-full bg-zinc-700" />
              <Terminal size={13} className="ml-2 text-zinc-500" />
              <span className="text-xs font-mono text-zinc-400">status.sh</span>
            </div>

            <div className="p-5 font-mono text-xs text-zinc-300 space-y-2.5 leading-relaxed">
              <div className="text-zinc-500">$ finger venkatesh</div>
              <div className="text-zinc-200">Name: Venkatesh Manipati</div>
              <div className="text-zinc-400">Role: Full-Stack Engineer / CSE Final Year</div>
              <div className="text-zinc-400">Location: Andhra Pradesh, India</div>
              <div className="text-emerald-400 pt-1">Status: Open for Full-Time Opportunities</div>
              <div className="text-zinc-500 pt-2">$ mail -s &quot;Opportunity&quot; manipativenkatesh1@gmail.com</div>
              <div className="text-zinc-400">Response SLA: Within 24 hours</div>
            </div>

            <div className="px-5 py-3 border-t border-white/6 text-[11px] font-mono text-zinc-500 flex items-center justify-between">
              <span>fingerprint: 0x9580a562</span>
              <span className="text-emerald-400">● ready</span>
            </div>
          </div>

          {/* Links Column */}
          <div className="flex flex-col justify-between gap-3">
            {contactLinks.map(({ id, icon: Icon, label, href, display }) => (
              <a
                key={id}
                id={id}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="flex items-center justify-between p-4 rounded-xl border border-white/8 bg-[#111319] hover:border-white/16 transition-colors group"
              >
                <div className="flex items-center gap-3.5">
                  <div className="w-9 h-9 rounded-lg bg-white/4 border border-white/8 flex items-center justify-center text-zinc-300 group-hover:text-white transition-colors">
                    <Icon size={16} />
                  </div>
                  <div>
                    <div className="text-sm font-medium text-zinc-200">
                      {label}
                    </div>
                    <div className="text-xs font-mono text-zinc-500">
                      {display}
                    </div>
                  </div>
                </div>
                <ArrowUpRight
                  size={16}
                  className="text-zinc-500 group-hover:text-white transition-colors"
                />
              </a>
            ))}

            {/* Resume Action */}
            <a
              id="resume-download"
              href="/venkatesh_resume.pdf"
              download="Venkatesh_Manipati_Resume.pdf"
              className="flex items-center justify-center gap-2 p-3.5 rounded-xl bg-emerald-500 text-zinc-950 font-medium text-xs sm:text-sm hover:bg-emerald-400 transition-colors mt-1"
            >
              <FileText size={16} />
              <span>Download Complete Resume (PDF)</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
