'use client'

import React, { useState } from 'react'
import {
  Phone,
  Mail,
  MessageCircle,
  MapPin,
  Send,
  User,
  Building,
  MessageSquare,
  CheckCircle,
} from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLButtonElement>) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => setIsSubmitted(false), 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'WhatsApp',
      value: '(31) 9 8765-4321',
      action: 'https://wa.me/5531987654321',
      description: 'Resposta rápida',
    },
    {
      icon: MapPin,
      title: 'Endereço',
      value: 'Belo Horizonte - MG',
      action: '#',
      description: 'Atendimento presencial',
    },
    {
      icon: Mail,
      title: 'E-mail',
      value: 'contato@gfconsulting.com.br',
      action: 'mailto:contato@gfconsulting.com.br',
      description: 'Resposta em 24h',
    },
  ]

  return (
    <section id="contato" className="py-10 bg-white">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Entre em <span className="text-gradient">Contato</span>
          </h2>
          <p className="text-xl text-cinza-chumbo max-w-3xl mx-auto">
            Fale com nossos consultores e descubra como podemos ajudar sua empresa a crescer com
            saúde financeira.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-50 rounded-2xl p-8">
              <h3 className="text-2xl font-semibold mb-6 text-azul-marinho">
                Solicite uma Consultoria Gratuita
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <CheckCircle size={64} className="text-green-500 mx-auto mb-4" />
                  <h4 className="text-xl font-semibold text-green-600 mb-2">
                    Mensagem enviada com sucesso!
                  </h4>
                  <p className="text-cinza-chumbo">Entraremos em contato em até 24 horas.</p>
                </div>
              ) : (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-azul-marinho mb-2">
                        Nome completo *
                      </label>
                      <div className="relative">
                        <User
                          size={20}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cinza-chumbo"
                        />
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-dourado-escuro focus:border-transparent transition-all"
                          placeholder="Seu nome"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-azul-marinho mb-2">
                        E-mail *
                      </label>
                      <div className="relative">
                        <Mail
                          size={20}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cinza-chumbo"
                        />
                        <input
                          type="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-dourado-escuro focus:border-transparent transition-all"
                          placeholder="seu@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-azul-marinho mb-2">
                        Telefone *
                      </label>
                      <div className="relative">
                        <Phone
                          size={20}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cinza-chumbo"
                        />
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-dourado-escuro focus:border-transparent transition-all"
                          placeholder="(00) 0 0000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-azul-marinho mb-2">
                        Empresa
                      </label>
                      <div className="relative">
                        <Building
                          size={20}
                          className="absolute left-3 top-1/2 transform -translate-y-1/2 text-cinza-chumbo"
                        />
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-dourado-escuro focus:border-transparent transition-all"
                          placeholder="Nome da sua empresa"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium mb-2">
                      Serviço de interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full p-3 border border-gray-200 rounded-md bg-background"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="bpo">BPO Financeiro</option>
                      <option value="consultoria">Consultoria Financeira</option>
                      <option value="viabilidade">Análise de Viabilidade</option>
                      <option value="planejamento">Planejamento Financeiro</option>
                      <option value="fluxo">Gestão de Fluxo de Caixa</option>
                      <option value="outros">Outros</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-azul-marinho mb-2">
                      Como podemos ajudar? *
                    </label>
                    <div className="relative">
                      <MessageSquare
                        size={20}
                        className="absolute left-3 top-3 text-cinza-chumbo"
                      />
                      <textarea
                        name="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-dourado-escuro focus:border-transparent transition-all resize-none"
                        placeholder="Conte-nos sobre suas necessidades ou desafios financeiros..."
                      />
                    </div>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-azul-marinho text-white py-4 px-6 rounded-xl font-semibold hover:bg-azul-marinho/90 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group"
                  >
                    Enviar mensagem
                    <Send
                      size={20}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </button>

                  <p className="text-xs text-cinza-chumbo text-center">
                    Ao enviar este formulário, você concorda com nossa política de privacidade.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div className="order-1 lg:order-2 space-y-8">
            {/* Contact Cards */}
            <div className="grid gap-4">
              <div className="grid sm:grid-cols-2 gap-4">
              {contactInfo.slice(0, 2).map((info, index) => (
                <a
                key={index}
                href={info.action}
                className="block p-6 bg-white rounded-xl border border-gray-200 card-hover"
                >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dourado-escuro/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <info.icon size={24} className="text-dourado-escuro" />
                  </div>
                  <div className="flex-grow">
                  <h4 className="font-semibold text-azul-marinho mb-1">{info.title}</h4>
                  <p className="text-azul-marinho font-medium mb-1">{info.value}</p>
                  <p className="text-sm text-cinza-chumbo">{info.description}</p>
                  </div>
                </div>
                </a>
              ))}
              </div>
              <div>
              <a
                href={contactInfo[2].action}
                className="block p-6 bg-white rounded-xl border border-gray-200 card-hover"
              >
                <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-dourado-escuro/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  {React.createElement(contactInfo[2].icon, { size: 24, className: "text-dourado-escuro" })}
                </div>
                <div className="flex-grow">
                  <h4 className="font-semibold text-azul-marinho mb-1">{contactInfo[2].title}</h4>
                  <p className="text-azul-marinho font-medium mb-1">{contactInfo[2].value}</p>
                  <p className="text-sm text-cinza-chumbo">{contactInfo[2].description}</p>
                </div>
                </div>
              </a>
              </div>
            </div>

            <div className="border border-gray-200 rounded-xl bg-gradient-to-br from-dourado-escuro/5 to-dourado-claro/5">
              <div className="p-6">
                <h3 className="font-semibold mb-4">Por que escolher a GF Consulting?</h3>
                <ul className="space-y-3">
                  <li className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-dourado-escuro mr-3" />
                    <span>Consulta inicial gratuita</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-dourado-escuro mr-3" />
                    <span>Especialistas em PME</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-dourado-escuro mr-3" />
                    <span>Resultados comprovados</span>
                  </li>
                  <li className="flex items-center text-sm">
                    <CheckCircle size={16} className="text-dourado-escuro mr-3" />
                    <span>Suporte contínuo</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Contact CTA */}
            <div className="bg-gradient-to-r from-azul-marinho to-dourado-escuro rounded-xl p-6 text-white text-center">
              <h4 className="text-xl font-semibold mb-2">Precisa falar conosco agora?</h4>
              <p className="mb-4 opacity-90">Entre em contato diretamente via WhatsApp</p>
              <a
                href="https://wa.me/5531987654321"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white text-azul-marinho px-6 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-colors"
              >
                <MessageCircle size={20} className="mr-2" />
                Agendar conversa agora
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default ContactSection
