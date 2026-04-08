import nateloLogo from "@/assets/natelo-logo.png";

const footerLinks = {
  services: [
    { label: "Handy-Abos", href: "#handy-abos" },
    { label: "Internet & TV", href: "#internet-tv" },
    { label: "Gerät Verkaufen", href: "#geraet-verkaufen" },
    { label: "Reparieren", href: "#geraete-reparieren" },
    { label: "Refurbished", href: "#refurbished" },
    { label: "Zubehör", href: "#zubehoer" },
    { label: "Gadgets", href: "#gadgets" },
  ],
  company: [
    { label: "Über uns", href: "#ueber-uns" },
    { label: "Standorte", href: "#standorte" },
    { label: "Kontakt", href: "#kontakt" },
    { label: "Geschäftskunden", href: "#geschaeftskunden" },
    { label: "Blog", href: "#blog" },
  ],
  legal: [
    { label: "AGB", href: "#" },
    { label: "Datenschutz", href: "#" },
    { label: "Impressum", href: "#" },
  ],
};

const FooterSection = () => (
  <footer className="bg-[#f5f5f7] pb-6 pt-2">
    <div className="max-w-[980px] mx-auto px-5 sm:px-6">
      
      {/* Directory Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-4 mb-10 pt-8 border-t border-[#d2d2d7]">
        
        {/* Brand / Intro */}
        <div className="col-span-2 md:col-span-1">
          <img src={nateloLogo} alt="natelo" className="h-5 brightness-0 opacity-80 mb-3" />
          <p className="text-[12px] text-[#6e6e73] leading-relaxed">
            Dein Partner für Mobile, Internet & Reparatur.
          </p>
        </div>

        {/* Services */}
        <div>
          <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-3">
            Services
          </h4>
          <ul className="space-y-2">
            {footerLinks.services.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-[#424245] hover:text-[#1d1d1f] hover:underline text-[12px] transition-colors cursor-pointer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-3">
            Unternehmen
          </h4>
          <ul className="space-y-2">
            {footerLinks.company.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-[#424245] hover:text-[#1d1d1f] hover:underline text-[12px] transition-colors cursor-pointer">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact info */}
        <div>
          <h4 className="text-[12px] font-semibold text-[#1d1d1f] mb-3">
            Kontakt
          </h4>
          <ul className="space-y-2 text-[12px] text-[#424245]">
            <li>Hotline: 041 535 44 44</li>
            <li>Email: <a href="mailto:info@natelo.ch" className="hover:text-[#1d1d1f] hover:underline">info@natelo.ch</a></li>
            <li>Standorte in der ganzen CH</li>
          </ul>
        </div>
      </div>

      {/* Bottom Area */}
      <div className="pt-4 border-t border-[#d2d2d7] flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <p className="text-[#86868b] text-[12px]">
          Copyright © {new Date().getFullYear()} natelo. Alle Rechte vorbehalten.
        </p>
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {footerLinks.legal.map((link, index) => (
            <span key={link.label} className="flex items-center gap-4">
              <a href={link.href} className="text-[#424245] hover:text-[#1d1d1f] hover:underline text-[12px] transition-colors cursor-pointer">
                {link.label}
              </a>
              {index < footerLinks.legal.length - 1 && (
                <span className="w-px h-3 bg-[#d2d2d7]"></span>
              )}
            </span>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;
