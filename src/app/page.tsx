'use client'

import Button from '../../ui/Button'
import {
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Award,
  Target,
  Eye,
  Heart,
  Building2,
  Calculator,
  PieChart,
  FileText,
  BarChart3,
  DollarSign,
  Quote,
  Star,
} from 'lucide-react'

export default function Home() {
  const scrollToContact = () => {
    const element = document.getElementById('contato')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToServices = () => {
    const element = document.getElementById('servicos')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const mainServices = [
    {
      icon: Building2,
      title: 'BPO Financeiro',
      subtitle: 'Terceirização da Gestão Financeira',
      description:
        'Assumimos integralmente a gestão financeira da sua empresa, garantindo processos organizados e decisões estratégicas baseadas em dados confiáveis.',
      features: [
        'Controle de fluxo de caixa',
        'Gestão de contas a pagar/receber',
        'Relatórios gerenciais',
        'Planejamento orçamentário',
      ],
    },
    {
      icon: TrendingUp,
      title: 'Consultoria Financeira Empresarial',
      subtitle: 'Estratégias para Crescimento Sustentável',
      description:
        'Desenvolvemos estratégias financeiras personalizadas para otimizar resultados e garantir o crescimento sustentável do seu negócio.',
      features: [
        'Análise de rentabilidade',
        'Estruturação de capital',
        'Gestão de custos',
        'Planejamento estratégico',
      ],
    },
    {
      icon: Calculator,
      title: 'Análise de Viabilidade Econômica Financeira',
      subtitle: 'Decisões de Investimento Seguras',
      description:
        'Realizamos estudos detalhados para avaliar a viabilidade de projetos e investimentos, minimizando riscos e maximizando retornos.',
      features: [
        'Estudo de viabilidade',
        'Análise de ROI',
        'Projeções financeiras',
        'Análise de cenários',
      ],
    },
  ]

  const additionalServices = [
    {
      icon: PieChart,
      title: 'Planejamento Financeiro',
      description: 'Estruturação completa do planejamento financeiro empresarial',
    },
    {
      icon: FileText,
      title: 'Gestão de Fluxo de Caixa',
      description: 'Controle rigoroso de entradas e saídas para garantir liquidez',
    },
    {
      icon: BarChart3,
      title: 'Estruturação de Dívidas',
      description: 'Reorganização e negociação de passivos para melhorar o caixa',
    },
    {
      icon: Users,
      title: 'Treinamentos Financeiros',
      description: 'Capacitação da equipe em gestão e controles financeiros',
    },
    {
      icon: DollarSign,
      title: 'Controladoria',
      description: 'Implementação de controles e indicadores de performance',
    },
    {
      icon: Target,
      title: 'Gestão de Custos',
      description: 'Análise e otimização da estrutura de custos empresariais',
    },
  ]

  const testimonials = [
    {
      name: 'Maria Silva',
      company: 'Silva & Associados Ltda',
      role: 'Diretora Financeira',
      content:
        'A GF Consulting transformou completamente nossa gestão financeira. Em 6 meses, conseguimos reduzir custos em 25% e organizar todos os nossos processos. Recomendo fortemente!',
      rating: 5,
    },
    {
      name: 'João Santos',
      company: 'TechStart Solutions',
      role: 'CEO',
      content:
        'Graças ao trabalho da equipe, conseguimos estruturar nosso fluxo de caixa e tomar decisões mais assertivas. O crescimento de 40% no último ano não teria sido possível sem eles.',
      rating: 5,
    },
    {
      name: 'Ana Costa',
      company: 'Costa Distribuidora',
      role: 'Sócia-Proprietária',
      content:
        'O BPO financeiro da GF nos deu tranquilidade total. Agora posso focar no core business sabendo que nossa parte financeira está em excelentes mãos.',
      rating: 5,
    },
  ]

  const clients = [
    'TechStart Solutions',
    'Silva & Associados',
    'Costa Distribuidora',
    'Inovação PME',
    'Crescer Negócios',
    'Estratégia & Resultados',
  ]

  return (
    <div className="w-full mx-auto">
      <section
        id="inicio"
        className="section-padding bg-gradient-to-br from-white via-gray-50 to-gray-100  flex items-center"
      >
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
                  <span className="text-gradient">Decisões financeiras</span>{' '}
                  <span className="text-azul-marinho">
                    seguras para o crescimento da sua empresa
                  </span>
                </h1>

                <p className="text-xl text-cinza-chumbo leading-relaxed max-w-2xl">
                  Com experiência comprovada e formações sólidas, ajudamos donos e gestores a
                  tomarem decisões financeiras inteligentes e sustentáveis.
                </p>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-6 text-sm text-cinza-chumbo">
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-dourado-escuro mr-2" />
                  <span>100% dos clientes com processos organizados</span>
                </div>
                <div className="flex items-center">
                  <TrendingUp size={20} className="text-dourado-escuro mr-2" />
                  <span>Redução média de 30% nos custos</span>
                </div>
                <div className="flex items-center">
                  <Users size={20} className="text-dourado-escuro mr-2" />
                  <span>Especialistas em PME</span>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button onClick={scrollToContact} className="btn-primary group">
                  Agendar reunião gratuita
                  <ArrowRight
                    size={20}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
                <Button onClick={scrollToServices} className="btn-secondary">
                  Ver nossos serviços
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center space-x-6 pt-4">
                <div className="flex items-center">
                  <Award size={24} className="text-dourado-escuro mr-2" />
                  <div>
                    <p className="font-semibold text-sm">Guilherme & Luiza</p>
                    <p className="text-xs text-cinza-chumbo">Consultores Especialistas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/images/hero-consultants.jpg"
                  alt="Guilherme e Luiza, consultores da GF Consulting apresentando soluções financeiras"
                  className="w-full h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-azul-marinho/20 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-xl border border-gray-200">
                <div className="text-center">
                  <p className="text-3xl font-bold text-dourado-escuro">R$ 50M+</p>
                  <p className="text-sm text-cinza-chumbo">Em faturamento gerenciado</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="sobre" className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Bem-vindos à <span className="text-gradient">GF Consulting</span>
            </h2>
            <p className="text-xl text-cinza-chumbo max-w-3xl mx-auto">
              Somos uma consultoria especializada em ajudar pequenas e médias empresas a alcançarem
              estabilidade e crescimento financeiro.
            </p>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            {/* Images Grid */}
            <div className="grid grid-cols-2 gap-4">
              {/* Scenario Photo */}
              <div className="col-span-2">
                <img
                  src="/images/business-materials.jpg"
                  alt="Cenário de execução - material de trabalho da GF Consulting"
                  className="w-full h-64 object-cover rounded-xl shadow-lg"
                />
                <p className="text-sm text-cinza-chumbo mt-2 text-center">
                  Cenário de Execução - Material de Trabalho
                </p>
              </div>

              {/* Portrait */}
              <div className="col-span-1">
                <img
                  src="/images/guilherme-portrait.jpg"
                  alt="Guilherme - Consultor Financeiro"
                  className="w-full h-48 object-cover rounded-xl shadow-lg"
                />
                <p className="text-sm text-cinza-chumbo mt-2 text-center">
                  Guilherme - Consultor Especialista
                </p>
              </div>

              {/* Stats Card */}
              <div className="col-span-1 bg-white p-6 rounded-xl shadow-lg border border-gray-200 flex flex-col justify-center">
                <div className="text-center">
                  <TrendingUp size={32} className="text-dourado-escuro mx-auto mb-3" />
                  <p className="text-2xl font-bold text-azul-marinho">100%</p>
                  <p className="text-sm text-cinza-chumbo">Processos Organizados</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Nossa Experiência a Seu Favor</h3>
                <p className="text-cinza-chumbo leading-relaxed mb-6">
                  Nossa experiência prática no setor, aliada à formação sólida de nossa equipe,
                  garante soluções claras e aplicáveis. Transformamos complexidade financeira em
                  estratégias simples e eficazes.
                </p>
              </div>

              {/* Mission, Vision, Values */}
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Target size={24} className="text-dourado-escuro mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Nossa Missão</h4>
                    <p className="text-cinza-chumbo text-sm">
                      Proporcionar às PMEs decisões financeiras inteligentes através de consultoria
                      acessível e soluções práticas que geram resultados sustentáveis.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Eye size={24} className="text-dourado-escuro mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Nossa Visão</h4>
                    <p className="text-cinza-chumbo text-sm">
                      Ser referência em consultoria financeira para PMEs, promovendo crescimento
                      econômico sustentável e estabilidade empresarial.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Heart size={24} className="text-dourado-escuro mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold mb-2">Nossos Valores</h4>
                    <p className="text-cinza-chumbo text-sm">
                      Transparência, excelência técnica, compromisso com resultados e relacionamento
                      duradouro com nossos clientes.
                    </p>
                  </div>
                </div>
              </div>

              <Button onClick={scrollToContact} className="btn-primary">
                Conheça nossa proposta
              </Button>
            </div>
          </div>

          {/* Metrics Section */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 bg-white rounded-xl shadow-xs border border-gray-200 card-hover">
              <div className="w-16 h-16 bg-dourado-escuro/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp size={32} className="text-dourado-escuro" />
              </div>
              <h3 className="text-3xl font-bold text-azul-marinho mb-2">30%</h3>
              <p className="text-cinza-chumbo">Redução média em custos operacionais</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-xs border border-gray-200 card-hover">
              <div className="w-16 h-16 bg-dourado-escuro/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users size={32} className="text-dourado-escuro" />
              </div>
              <h3 className="text-3xl font-bold text-azul-marinho mb-2">R$ 50M+</h3>
              <p className="text-cinza-chumbo">Em faturamento gerenciado</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl shadow-xs border border-gray-200 card-hover">
              <div className="w-16 h-16 bg-dourado-escuro/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award size={32} className="text-dourado-escuro" />
              </div>
              <h3 className="text-3xl font-bold text-azul-marinho mb-2">100%</h3>
              <p className="text-cinza-chumbo">Clientes com processos organizados</p>
            </div>
          </div>
        </div>
      </section>

      <section id="servicos" className="section-padding bg-white">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nossos <span className="text-gradient">Serviços</span>
            </h2>
            <p className="text-xl text-cinza-chumbo max-w-3xl mx-auto">
              Soluções financeiras completas e personalizadas para impulsionar o crescimento da sua
              empresa com segurança e eficiência.
            </p>
          </div>

          {/* Main Services */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-xl shadow-xs border border-gray-200 card-hover h-full justify-between flex flex-col space-y-6"
              >
                <h1 className="space-y-4">
                  <div className="w-16 h-16 bg-dourado-escuro/10 rounded-xl flex items-center justify-center">
                    <service.icon size={32} className="text-dourado-escuro" />
                  </div>
                  <div>
                    <h2 className="text-xl mb-2">{service.title}</h2>
                    <h3 className="text-dourado-escuro font-medium">{service.subtitle}</h3>
                  </div>
                </h1>
                <p className="text-cinza-chumbo leading-relaxed">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-dourado-escuro rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-cinza-chumbo">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button className="btn-primary w-full group" onClick={scrollToContact}>
                  Quero este serviço
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold mb-4">Outros Serviços Especializados</h3>
            <p className="text-cinza-chumbo">
              Amplo portfólio de soluções financeiras para atender todas as necessidades da sua
              empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="card-hover rounded-xl border border-gray-200 bg-white p-6"
              >
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-dourado-escuro/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <service.icon size={24} className="text-dourado-escuro" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{service.title}</h4>
                    <p className="text-sm text-cinza-chumbo">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="bg-gradient-to-r from-azul-marinho to-dourado-escuro rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Pronto para Transformar sua Gestão Financeira?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Agende uma reunião gratuita e descubra como podemos ajudar sua empresa a crescer com
              saúde financeira e decisões estratégicas inteligentes.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                onClick={scrollToContact}
                className="bg-white text-azul-marinho hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Agendar Reunião Gratuita
              </Button>
              <Button className="text-white border-white border-2 hover:bg-white/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                Ver Todos os Serviços
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="depoimentos" className="section-padding bg-gray-50">
        <div className="container-custom">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              O que nossos <span className="text-gradient">clientes dizem</span>
            </h2>
            <p className="text-xl text-cinza-chumbo max-w-3xl mx-auto">
              Histórias reais de transformação e crescimento empresarial
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-hover border rounded-2xl border-gray-200 bg-white h-full"
              >
                <div className="p-6 h-full flex flex-col">
                  {/* Quote Icon */}
                  <Quote size={32} className="text-dourado-escuro mb-4 opacity-60" />

                  {/* Content */}
                  <p className="text-cinza-chumbo leading-relaxed mb-6 flex-grow">
                    "{testimonial.content}"
                  </p>

                  {/* Rating */}
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} size={16} className="text-dourado-escuro fill-current" />
                    ))}
                  </div>

                  {/* Author */}
                  <div>
                    <p className="font-semibold text-azul-marinho">{testimonial.name}</p>
                    <p className="text-sm text-dourado-escuro">{testimonial.role}</p>
                    <p className="text-sm text-cinza-chumbo">{testimonial.company}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Client Logos Section */}
          <div className="text-center">
            <h3 className="text-xl font-semibold mb-8 text-cinza-chumbo">
              Empresas que confiam em nosso trabalho
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
              {clients.map((client, index) => (
                <div
                  key={index}
                  className="p-4 bg-white rounded-lg border border-gray-200 card-hover text-center"
                >
                  <p className="text-sm font-medium text-cinza-chumbo">{client}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Success Stories Summary */}
          <div className="mt-16 grid md:grid-cols-4 gap-8">
            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <p className="text-3xl font-bold text-dourado-escuro mb-2">50+</p>
              <p className="text-sm text-cinza-chumbo">Empresas Atendidas</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <p className="text-3xl font-bold text-dourado-escuro mb-2">98%</p>
              <p className="text-sm text-cinza-chumbo">Taxa de Satisfação</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <p className="text-3xl font-bold text-dourado-escuro mb-2">R$ 50M+</p>
              <p className="text-sm text-cinza-chumbo">Faturamento Gerenciado</p>
            </div>

            <div className="text-center p-6 bg-white rounded-xl border border-gray-200">
              <p className="text-3xl font-bold text-dourado-escuro mb-2">5</p>
              <p className="text-sm text-cinza-chumbo">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
