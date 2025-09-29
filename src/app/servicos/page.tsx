'use client'

import Button from '../../components/ui/Button'
import {
  ArrowRight,
  Building2,
  TrendingUp,
  Calculator,
  PieChart,
  FileText,
  BarChart3,
  Users,
  DollarSign,
  Target,
  CheckCircle,
  Clock,
  Shield,
  Zap,
  Phone,
  Mail,
  Calendar,
} from 'lucide-react'

export default function ServicesPage() {
  const scrollToContact = () => {
    const element = document.getElementById('contato')
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
        'Controle completo de fluxo de caixa',
        'Gestão de contas a pagar e receber',
        'Relatórios gerenciais personalizados',
        'Planejamento orçamentário estratégico',
        'Conciliação bancária automatizada',
        'Controle de inadimplência',
      ],
      benefits: [
        'Redução de até 40% nos custos administrativos',
        'Processos 100% organizados e auditáveis',
        'Visibilidade total da situação financeira',
        'Mais tempo para focar no core business',
      ],
      investment: 'A partir de R$ 2.500/mês',
      ctaText: 'Terceirizar minha gestão financeira',
    },
    {
      icon: TrendingUp,
      title: 'Consultoria Financeira Empresarial',
      subtitle: 'Estratégias para Crescimento Sustentável',
      description:
        'Desenvolvemos estratégias financeiras personalizadas para otimizar resultados e garantir o crescimento sustentável do seu negócio.',
      features: [
        'Análise profunda de rentabilidade',
        'Estruturação de capital de giro',
        'Otimização da gestão de custos',
        'Planejamento estratégico financeiro',
        'Indicadores de performance (KPIs)',
        'Cenários de crescimento',
      ],
      benefits: [
        'Aumento médio de 25% na margem de lucro',
        'Decisões baseadas em dados concretos',
        'Redução de riscos financeiros',
        'Crescimento sustentável e planejado',
      ],
      investment: 'A partir de R$ 1.800/mês',
      ctaText: 'Desenvolver estratégias financeiras',
    },
    {
      icon: Calculator,
      title: 'Análise de Viabilidade Econômica Financeira',
      subtitle: 'Decisões de Investimento Seguras',
      description:
        'Realizamos estudos detalhados para avaliar a viabilidade de projetos e investimentos, minimizando riscos e maximizando retornos.',
      features: [
        'Estudo completo de viabilidade',
        'Análise detalhada de ROI/TIR',
        'Projeções financeiras realistas',
        'Análise de múltiplos cenários',
        'Avaliação de riscos e mitigação',
        'Relatório executivo completo',
      ],
      benefits: [
        'Segurança nas decisões de investimento',
        'Redução de 60% nos riscos de projeto',
        'Otimização do retorno sobre investimento',
        'Base sólida para captação de recursos',
      ],
      investment: 'A partir de R$ 3.500 (projeto)',
      ctaText: 'Analisar viabilidade do meu projeto',
    },
  ]

  const complementaryServices = [
    {
      icon: PieChart,
      title: 'Planejamento Financeiro',
      description:
        'Mantenha suas finanças organizadas e previsíveis com um planejamento estruturado que garante estabilidade e crescimento sustentável.',
      features: [
        'Orçamento anual e mensal',
        'Projeções de receitas',
        'Planejamento de investimentos',
      ],
      ctaText: 'Quero planejar minhas finanças',
    },
    {
      icon: FileText,
      title: 'Gestão de Fluxo de Caixa',
      description:
        'Mantenha o controle do seu caixa com clareza e segurança, garantindo previsibilidade para suas decisões empresariais estratégicas.',
      features: [
        'Controle diário de entradas/saídas',
        'Projeções semanais e mensais',
        'Alertas de liquidez',
      ],
      ctaText: 'Quero melhorar meu fluxo de caixa',
    },
    {
      icon: BarChart3,
      title: 'Estruturação de Dívidas',
      description:
        'Reorganize e negocie seus passivos de forma estratégica, melhorando seu caixa e criando condições favoráveis de pagamento.',
      features: [
        'Renegociação com credores',
        'Consolidação de dívidas',
        'Planos de pagamento viáveis',
      ],
      ctaText: 'Reestruturar minhas dívidas',
    },
    {
      icon: Users,
      title: 'Treinamentos Financeiros',
      description:
        'Capacite sua equipe com conhecimentos sólidos em gestão e controles financeiros, criando autonomia e eficiência operacional.',
      features: ['Treinamento da equipe', 'Workshops práticos', 'Material didático exclusivo'],
      ctaText: 'Treinar minha equipe',
    },
    {
      icon: DollarSign,
      title: 'Controladoria',
      description:
        'Implemente controles rigorosos e indicadores de performance que proporcionam visibilidade total sobre a saúde financeira da empresa.',
      features: ['KPIs financeiros', 'Dashboards gerenciais', 'Controles internos'],
      ctaText: 'Implementar controladoria',
    },
    {
      icon: Target,
      title: 'Gestão de Custos',
      description:
        'Analise e otimize sua estrutura de custos identificando oportunidades de redução sem comprometer a qualidade dos seus produtos.',
      features: [
        'Análise de custos variáveis/fixos',
        'Identificação de desperdícios',
        'Otimização operacional',
      ],
      ctaText: 'Reduzir meus custos',
    },
  ]

  const processSteps = [
    {
      number: '01',
      title: 'Diagnóstico Inicial',
      description:
        'Análise completa da situação atual da empresa e identificação de oportunidades de melhoria.',
    },
    {
      number: '02',
      title: 'Proposta Personalizada',
      description:
        'Desenvolvimento de solução sob medida baseada nas necessidades específicas do seu negócio.',
    },
    {
      number: '03',
      title: 'Implementação',
      description:
        'Execução das estratégias com acompanhamento próximo e ajustes conforme necessário.',
    },
    {
      number: '04',
      title: 'Acompanhamento',
      description:
        'Monitoramento contínuo dos resultados e otimização dos processos implementados.',
    },
  ]

  const whyChooseUs = [
    {
      icon: CheckCircle,
      title: 'Resultados Comprovados',
      description: 'Mais de R$ 50 milhões em faturamento gerenciado com resultados mensuráveis',
    },
    {
      icon: Clock,
      title: 'Agilidade na Entrega',
      description: 'Implementação rápida com resultados visíveis já nos primeiros 30 dias',
    },
    {
      icon: Shield,
      title: 'Segurança e Confiabilidade',
      description: '100% dos clientes com processos organizados e auditáveis',
    },
    {
      icon: Zap,
      title: 'Tecnologia Avançada',
      description: 'Ferramentas modernas de gestão e relatórios automatizados',
    },
  ]

  return (
    <div className="w-full mx-auto">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-white via-gray-50 to-gray-100 relative z-20 items-center">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-gradient">Soluções Financeiras</span>{' '}
              <span className="text-azul-marinho">Completas para Sua Empresa</span>
            </h1>
            <p className="text-xl text-cinza-chumbo leading-relaxed mb-8">
              Transforme a gestão financeira da sua empresa com nossos serviços especializados.
              Desde BPO financeiro até consultoria estratégica, temos a solução ideal para seu
              negócio crescer.
            </p>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center gap-8 text-sm text-cinza-chumbo mb-8">
              <div className="flex items-center">
                <CheckCircle size={20} className="text-dourado-escuro mr-2" />
                <span>Mais de 50 empresas atendidas</span>
              </div>
              <div className="flex items-center">
                <TrendingUp size={20} className="text-dourado-escuro mr-2" />
                <span>98% de taxa de satisfação</span>
              </div>
              <div className="flex items-center">
                <Shield size={20} className="text-dourado-escuro mr-2" />
                <span>Resultados garantidos</span>
              </div>
            </div>

            <Button onClick={scrollToContact} className="btn-primary group">
              Agendar consulta gratuita
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Nossos <span className="text-gradient">Serviços Principais</span>
            </h2>
            <p className="text-xl text-cinza-chumbo max-w-3xl mx-auto">
              Soluções completas para transformar a gestão financeira da sua empresa
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {mainServices.map((service, index) => (
              <div
                key={index}
                className="group card-hover bg-white rounded-2xl border border-gray-200 overflow-hidden h-full flex flex-col"
              >
                {/* Header Card */}
                <div className="bg-gradient-to-br from-azul-marinho to-dourado-escuro p-8 text-white relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                      <service.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                    <p className="text-dourado-claro font-medium opacity-90">{service.subtitle}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-cinza-chumbo leading-relaxed mb-6">{service.description}</p>

                  {/* Key Features - Simplified */}
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3 text-azul-marinho">Principais benefícios:</h4>
                    <div className="space-y-2">
                      {service.benefits.slice(0, 3).map((benefit, idx) => (
                        <div key={idx} className="flex items-start">
                          <CheckCircle
                            size={16}
                            className="text-dourado-escuro mr-3 mt-0.5 flex-shrink-0"
                          />
                          <span className="text-sm text-cinza-chumbo">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Investment */}
                  <div className="bg-gray-50 p-4 rounded-xl mb-6">
                    <div className="text-center">
                      <p className="text-sm text-cinza-chumbo mb-1">Investimento</p>
                      <p className="text-xl font-bold text-azul-marinho">{service.investment}</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button onClick={scrollToContact} className="btn-primary w-full group mt-auto">
                    {service.ctaText}
                    <ArrowRight
                      size={16}
                      className="ml-2 group-hover:translate-x-1 transition-transform"
                    />
                  </Button>
                </div>

                {/* Hover Stats */}
                <div className="bg-azul-marinho text-white p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 absolute inset-0 flex items-center justify-center rounded-2xl bg-opacity-95">
                  <div className="text-center">
                    <h4 className="text-lg font-bold mb-4">Resultados Comprovados</h4>
                    <div className="grid grid-cols-3 gap-6">
                      <div>
                        <p className="text-2xl font-bold text-dourado-claro">98%</p>
                        <p className="text-xs opacity-80">Sucesso</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-dourado-claro">30</p>
                        <p className="text-xs opacity-80">Dias</p>
                      </div>
                      <div>
                        <p className="text-2xl font-bold text-dourado-claro">300%</p>
                        <p className="text-xs opacity-80">ROI</p>
                      </div>
                    </div>
                    <Button
                      onClick={scrollToContact}
                      className="bg-dourado-escuro hover:bg-dourado-escuro/90 text-white mt-6 w-full"
                    >
                      Quero saber mais
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Section */}
          <div className="text-center mt-16">
            <div className="bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
              <h3 className="text-xl font-semibold mb-6 text-azul-marinho">
                Mais de 50 empresas já transformaram suas finanças conosco
              </h3>
              <div className="flex flex-wrap justify-center gap-8 text-sm">
                <div className="flex items-center">
                  <TrendingUp size={20} className="text-dourado-escuro mr-2" />
                  <span className="text-cinza-chumbo">R$ 50M+ gerenciados</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle size={20} className="text-dourado-escuro mr-2" />
                  <span className="text-cinza-chumbo">100% processos organizados</span>
                </div>
                <div className="flex items-center">
                  <Shield size={20} className="text-dourado-escuro mr-2" />
                  <span className="text-cinza-chumbo">Resultados em 30 dias</span>
                </div>
              </div>
              <Button onClick={scrollToContact} className="btn-primary mt-6">
                Fazer parte deste grupo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Complementary Services */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Serviços <span className="text-gradient">Complementares</span>
            </h2>
            <p className="text-xl text-cinza-chumbo max-w-3xl mx-auto">
              Soluções específicas para necessidades pontuais da sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {complementaryServices.map((service, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-200 card-hover h-full flex flex-col"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-dourado-escuro/10 rounded-lg flex items-center justify-center">
                    <service.icon size={24} className="text-dourado-escuro" />
                  </div>
                  <h3 className="text-lg font-semibold text-azul-marinho">{service.title}</h3>
                </div>

                <p className="text-cinza-chumbo mb-6 flex-grow">{service.description}</p>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <div className="w-2 h-2 bg-dourado-escuro rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-cinza-chumbo">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Button onClick={scrollToContact} className="btn-primary w-full group mt-auto">
                  {service.ctaText}
                  <ArrowRight
                    size={16}
                    className="ml-2 group-hover:translate-x-1 transition-transform"
                  />
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Como <span className="text-gradient">Trabalhamos</span>
            </h2>
            <p className="text-xl text-cinza-chumbo max-w-3xl mx-auto">
              Metodologia testada e aprovada para garantir o sucesso da sua transformação financeira
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center relative">
                
                {index < processSteps.length && (
                  <div className="hidden lg:block absolute top-8 left-0 w-full h-px bg-gray-300 z-0"></div>
                )}

                <div className="relative z-10">
                  <div className="w-16 h-16 bg-dourado-escuro rounded-full flex items-center justify-center mx-auto mb-4 text-white text-xl font-bold">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold mb-3 text-azul-marinho">{step.title}</h3>
                  <p className="text-cinza-chumbo text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button onClick={scrollToContact} className="btn-primary group">
              Começar minha transformação
              <ArrowRight
                size={20}
                className="ml-2 group-hover:translate-x-1 transition-transform"
              />
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-azul-marinho text-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Por que escolher a <span className="text-dourado-claro">GF Consulting?</span>
            </h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Diferenciais que fazem a diferença nos resultados da sua empresa
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-dourado-escuro/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <item.icon size={32} className="text-dourado-claro" />
                </div>
                <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
                <p className="text-sm opacity-80">{item.description}</p>
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-white/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Pronto para Transformar Suas Finanças?</h3>
            <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
              Agende uma conversa gratuita e descubra como nossos serviços podem revolucionar a
              gestão financeira da sua empresa.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-dourado-escuro hover:bg-dourado-escuro/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                <Phone size={20} className="mr-2" />
                (31) 99999-9999
              </Button>
              <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 border px-8 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center">
                <Mail size={20} className="mr-2" />
                contato@gfconsulting.com.br
              </Button>
              <Button
                onClick={scrollToContact}
                className="bg-white text-azul-marinho hover:bg-gray-100 px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Calendar size={20} className="mr-2" />
                Agendar Reunião
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
