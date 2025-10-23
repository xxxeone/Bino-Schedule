import binoLogo from "@/assets/bino-logo.png";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-primary-dark to-primary py-16 text-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3 mb-6">
              <img src={binoLogo} alt="Bino EduTour" className="h-16 w-auto" />
            </div>
            <p className="text-white/90 leading-relaxed">
              专注于企业高端商务研修与教育旅行，致力于为企业家和管理层提供深度学习与文化体验的平台。
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h4 className="text-xl font-bold mb-4">联系我们</h4>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="text-sm text-white/90">
                  <p className="font-semibold mb-1">BINO EDUTOUR SDN. BHD. (1577354-K)</p>
                  <p>Suite No. 9-7, Wisma UOA 2, 21 Jalan Pinang,</p>
                  <p>50450 Wilayah Persekutuan Kuala Lumpur, Malaysia.</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <a href="tel:+60167100678" className="text-sm text-white/90 hover:text-white transition-colors">
                  +60 16 710 0678
                </a>
              </div>

              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <a href="mailto:bino.edutour@outlook.com" className="text-sm text-white/90 hover:text-white transition-colors">
                  bino.edutour@outlook.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-sm text-white/70">
            © 2025 Bino EduTour. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;