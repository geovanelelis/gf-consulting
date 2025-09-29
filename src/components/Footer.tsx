'use client'

import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Linkedin,
  Instagram,
  Facebook,
  ArrowUp,
  Building2,
  TrendingUp,
  Calculator,
  Users,
  FileText,
  Target,
} from 'lucide-react'
import Button from './ui/Button'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const services = [
    { name: 'BPO Financeiro', icon: Building2, href: '#servicos' },
    { name: 'Consultoria Financeira', icon: TrendingUp, href: '#servicos' },
    { name: 'Análise de Viabilidade', icon: Calculator, href: '#servicos' },
    { name: 'Planejamento Financeiro', icon: FileText, href: '#servicos' },
    { name: 'Treinamentos', icon: Users, href: '#servicos' },
    { name: 'Gestão de Custos', icon: Target, href: '#servicos' },
  ]

  const quickLinks = [
    { name: 'Início', href: '/' },
    { name: 'Sobre Nós', href: '/sobre' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Depoimentos', href: '#depoimentos' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contato', href: '/contato' },
  ]

  return (
    <footer className="bg-azul-marinho text-white">
      {/* Main Footer Content */}
      <div className="container-custom">
        <div className="section-padding border-b border-white/20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center gap-3">
                <img
                  src="/images/logo/gf-icon.png"
                  alt="GF Consulting Logo"
                  className="w-12 h-12 object-contain"
                />
                <img
                  src="/images/logo/gf-texto.png"
                  alt="GF Consulting"
                  className="w-32 h-auto object-contain brightness-0 invert"
                />
              </div>

              <p className="text-white/80 leading-relaxed">
                Consultoria financeira especializada em PME. Transformamos complexidade em
                estratégias simples e eficazes para o crescimento sustentável do seu negócio.
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-dourado-escuro/20 rounded-lg flex items-center justify-center">
                    <Phone size={18} className="text-dourado-claro" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Telefone</p>
                    <p className="font-semibold">(31) 9 9999-9999</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-dourado-escuro/20 rounded-lg flex items-center justify-center">
                    <Mail size={18} className="text-dourado-claro" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">E-mail</p>
                    <p className="font-semibold">contato@gfconsulting.com.br</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-dourado-escuro/20 rounded-lg flex items-center justify-center">
                    <MapPin size={18} className="text-dourado-claro" />
                  </div>
                  <div>
                    <p className="text-sm text-white/60">Localização</p>
                    <p className="font-semibold">Belo Horizonte, MG</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-dourado-claro">Nossos Serviços</h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      className="flex items-center space-x-3 text-white/80 hover:text-dourado-claro transition-colors group"
                    >
                      <service.icon
                        size={16}
                        className="text-dourado-escuro group-hover:text-dourado-claro transition-colors"
                      />
                      <span className="text-sm">{service.name}</span>
                    </a>
                  </li>
                ))}
              </ul>

              {/* Trust Badge */}
              <div className="pt-6 border-t border-white/20 w-[70%]">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-dourado-escuro/20 rounded-lg flex items-center justify-center">
                    <TrendingUp size={24} className="text-dourado-claro" />
                  </div>
                  <div>
                    <p className="text-dourado-claro font-semibold">R$ 50M+</p>
                    <p className="text-xs text-white/60">Faturamento Gerenciado</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-dourado-claro">Links Rápidos</h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-white/80 hover:text-dourado-claro transition-colors text-sm block"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA Section */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-dourado-claro">Pronto para Crescer?</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                Agende uma reunião gratuita e descubra como podemos transformar a gestão financeira
                da sua empresa.
              </p>

              <Button
                onClick={scrollToContact}
                className="w-full border-2 border-dourado-escuro text-dourado-claro hover:bg-dourado-escuro/10 py-3 px-6 rounded-xl transition-all duration-300"
              >
                Agendar Reunião Gratuita
              </Button>

              {/* Social Media */}
              <div className="pt-4">
                <h4 className="font-semibold mb-4 text-dourado-claro">Siga-nos</h4>
                <div className="flex space-x-4">
                  <a
                    href="https://linkedin.com/company/gf-consulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-dourado-escuro/30 transition-colors group"
                  >
                    <Linkedin
                      size={20}
                      className="text-white group-hover:text-dourado-claro transition-colors"
                    />
                  </a>
                  <a
                    href="https://instagram.com/gfconsulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-dourado-escuro/30 transition-colors group"
                  >
                    <Instagram
                      size={20}
                      className="text-white group-hover:text-dourado-claro transition-colors"
                    />
                  </a>
                  <a
                    href="https://facebook.com/gfconsulting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-dourado-escuro/30 transition-colors group"
                  >
                    <Facebook
                      size={20}
                      className="text-white group-hover:text-dourado-claro transition-colors"
                    />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-white/60">
              <p>&copy; 2025 GF Consulting. Todos os direitos reservados.</p>
              <div className="flex space-x-4">
                <a href="/privacidade" className="hover:text-dourado-claro transition-colors">
                  Política de Privacidade
                </a>
              </div>
            </div>

            {/* Back to Top Button */}
            <button
              onClick={scrollToTop}
              className="w-12 h-12 bg-dourado-escuro/20 rounded-lg flex items-center justify-center hover:bg-dourado-escuro/30 transition-colors group"
              aria-label="Voltar ao topo"
            >
              <ArrowUp
                size={20}
                className="text-dourado-claro group-hover:scale-110 transition-transform"
              />
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
