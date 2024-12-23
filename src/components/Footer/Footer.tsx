import React from 'react';
import { Shield } from 'lucide-react';
import FooterSection from './FooterSection';
import FooterLink from './FooterLink';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center mb-4">
              <Shield className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">SmartSecure</span>
            </div>
            <p className="text-gray-600">
              Ən müasir texnologiya ilə evləri daha ağıllı, təhlükəsiz və rahat edirik.
            </p>
          </div>

          <FooterSection title="Şirkət">
            <li><FooterLink href="/">Ana Səhifə</FooterLink></li>
            <li><FooterLink href="#about">Haqqımızda</FooterLink></li>
            <li><FooterLink href="#services">Xidmətlər</FooterLink></li>
            <li><FooterLink href="#contact">Əlaqə</FooterLink></li>
          </FooterSection>

          <FooterSection title="Xidmətlər">
            <li><FooterLink href="#services">Ağıllı Kilid</FooterLink></li>
            <li><FooterLink href="#services">Müşahidə Sistemləri</FooterLink></li>
            <li><FooterLink href="#services">Ağıllı Termostatlar</FooterLink></li>
            <li><FooterLink href="#services">Ev Avtomatlaşdırması</FooterLink></li>
          </FooterSection>

          <FooterSection title="Hüquqi">
            <li><FooterLink href="/privacy">Məxfilik Siyasəti</FooterLink></li>
            <li><FooterLink href="/terms">İstifadə Şərtləri</FooterLink></li>
            <li><FooterLink href="/warranty">Zəmanət</FooterLink></li>
          </FooterSection>
        </div>

        <div className="pt-8 border-t border-gray-200">
          <p className="text-center text-gray-600">
            © {year} SmartSecure. Bütün hüquqlar qorunur.
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer