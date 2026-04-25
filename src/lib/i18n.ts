export type Translations = {
  nav: {
    about: string
    services: string
    methodology: string
    cases: string
    insights: string
    contact: string
    cta: string
  }
  hero: {
    headline: string
    subheadline: string
    cta_primary: string
    cta_secondary: string
    metrics: { value: string; label: string }[]
  }
  about: {
    title: string
    description: string
    pillars: { title: string; description: string }[]
  }
  services: {
    title: string
    subtitle: string
    cta: string
    items: { title: string; description: string }[]
  }
  methodology: {
    title: string
    subtitle: string
    steps: { label: string; title: string; description: string }[]
    references: string
  }
  cases: {
    title: string
    cta: string
    items: { tag: string; title: string; result: string; description: string; cta: string }[]
  }
  insights: {
    title: string
    cta: string
    items: { category: string; title: string; date: string; readTime: string }[]
  }
  contact: {
    title: string
    subtitle: string
    form: {
      name: string
      company: string
      email: string
      challenge: string
      submit: string
    }
    booking: string
    booking_cta: string
    info: { email: string; phone: string; location: string }
  }
  footer: {
    tagline: string
    columns: {
      company: { title: string; links: string[] }
      services: { title: string; links: string[] }
      resources: { title: string; links: string[] }
      contact: { title: string; links: string[] }
    }
    copyright: string
  }
}

export const pt: Translations = {
  nav: {
    about: 'Sobre',
    services: 'Serviços',
    methodology: 'Metodologia',
    cases: 'Cases',
    insights: 'Insights',
    contact: 'Contato',
    cta: 'Fale Conosco',
  },
  hero: {
    headline: 'Transformamos resistência em movimento.',
    subheadline: 'Gestão de mudanças orientada por dados, pessoas e propósito.',
    cta_primary: 'Conheça nossa abordagem',
    cta_secondary: 'Ver cases',
    metrics: [
      { value: '200+', label: 'projetos' },
      { value: '15', label: 'países' },
      { value: '94%', label: 'taxa de adoção' },
      { value: '12 anos', label: 'de experiência' },
    ],
  },
  about: {
    title: 'Quem somos',
    description:
      'Somos especialistas em guiar organizações através de transformações complexas — tecnológicas, culturais e estruturais.',
    pillars: [
      {
        title: 'Pessoas Primeiro',
        description:
          'Toda transformação começa e termina nas pessoas. Colocamos o fator humano no centro de cada iniciativa.',
      },
      {
        title: 'Dados & Evidências',
        description:
          'Decisões baseadas em dados reais. Medimos prontidão, engajamento e adoção em cada etapa do processo.',
      },
      {
        title: 'Impacto Sustentável',
        description:
          'Não entregamos apenas projetos — entregamos mudanças que duram. Consolidamos resultados para o longo prazo.',
      },
    ],
  },
  services: {
    title: 'Nossos Serviços',
    subtitle: 'Soluções completas para cada etapa da sua transformação organizacional.',
    cta: 'Saiba mais →',
    items: [
      {
        title: 'Gestão de Mudança Organizacional',
        description:
          'Estruturamos e conduzimos iniciativas de mudança de ponta a ponta, garantindo adesão e sustentabilidade dos resultados.',
      },
      {
        title: 'Transformação Digital',
        description:
          'Apoiamos organizações na jornada de digitalização, integrando tecnologia, processos e cultura de forma harmônica.',
      },
      {
        title: 'Adoção de Tecnologia',
        description:
          'Maximizamos o retorno de investimentos em tecnologia acelerando a adoção por usuários em todos os níveis.',
      },
      {
        title: 'Comunicação Estratégica',
        description:
          'Desenvolvemos planos de comunicação que engajam stakeholders e constroem narrativas de mudança eficazes.',
      },
      {
        title: 'Treinamento & Capacitação',
        description:
          'Desenhamos e entregamos programas de capacitação sob medida para acelerar a curva de aprendizado.',
      },
      {
        title: 'Diagnóstico de Prontidão',
        description:
          'Avaliamos o nível de prontidão da organização para a mudança, identificando riscos e oportunidades antecipadamente.',
      },
    ],
  },
  methodology: {
    title: 'Nossa Abordagem Espiral',
    subtitle:
      'Um método iterativo e adaptativo que guia organizações do diagnóstico à sustentação da mudança.',
    steps: [
      {
        label: 'Diagnóstico',
        title: 'Diagnóstico',
        description: 'Entendemos o ponto de partida — cultura, prontidão e impacto da mudança.',
      },
      {
        label: 'Estratégia',
        title: 'Estratégia',
        description: 'Desenhamos o caminho com planos de ação claros, métricas e marcos definidos.',
      },
      {
        label: 'Engajamento',
        title: 'Engajamento',
        description: 'Ativamos pessoas e lideranças como agentes de mudança dentro da organização.',
      },
      {
        label: 'Execução',
        title: 'Execução',
        description: 'Implementamos com rigor, monitorando adoção e ajustando em tempo real.',
      },
      {
        label: 'Sustentação',
        title: 'Sustentação',
        description: 'Consolidamos e medimos resultados para garantir que a mudança permaneça.',
      },
    ],
    references: 'Inspirado em: Prosci ADKAR · Kotter 8 Passos · McKinsey 7-S',
  },
  cases: {
    title: 'Cases de Sucesso',
    cta: 'Ver todos os cases →',
    items: [
      {
        tag: 'Transformação Digital',
        title: 'Migração ERP em Indústria de Manufatura',
        result: '98% de adoção em 6 meses',
        description:
          'Conduzimos a transição de sistema legado para ERP global em uma indústria de manufatura com 3.000 colaboradores, garantindo operação contínua e alta adoção.',
        cta: 'Ver case →',
      },
      {
        tag: 'Mudança Cultural',
        title: 'Reestruturação Cultural Pós-Fusão',
        result: 'Engajamento +40%',
        description:
          'Após fusão entre duas empresas de culturas distintas, estruturamos um programa de integração cultural que elevou o engajamento dos colaboradores em 40%.',
        cta: 'Ver case →',
      },
      {
        tag: 'Adoção de Tecnologia',
        title: 'Adoção de Plataforma SaaS Global',
        result: 'ROI atingido em 4 meses',
        description:
          'Aceleramos a adoção de uma plataforma SaaS em 12 países simultaneamente, alcançando retorno sobre o investimento em apenas 4 meses.',
        cta: 'Ver case →',
      },
    ],
  },
  insights: {
    title: 'Insights',
    cta: 'Ver todos os insights →',
    items: [
      {
        category: 'Gestão de Mudança',
        title: 'Por que 70% das transformações falham — e como evitar esse destino',
        date: '10 Jan 2025',
        readTime: '5 min de leitura',
      },
      {
        category: 'Liderança',
        title: 'O papel do líder como patrocinador ativo da mudança organizacional',
        date: '22 Jan 2025',
        readTime: '4 min de leitura',
      },
      {
        category: 'Transformação Digital',
        title: 'Adoção de IA nas empresas: o fator humano que ninguém está discutindo',
        date: '05 Fev 2025',
        readTime: '6 min de leitura',
      },
    ],
  },
  contact: {
    title: 'Vamos conversar?',
    subtitle:
      'Conte-nos sobre o seu desafio. Nossa equipe retorna em até 24 horas.',
    form: {
      name: 'Nome',
      company: 'Empresa',
      email: 'E-mail',
      challenge: 'Qual é o seu desafio?',
      submit: 'Enviar mensagem',
    },
    booking: 'Ou agende uma conversa de 30 min gratuita',
    booking_cta: 'Agendar agora',
    info: {
      email: 'contato@espiraldamudanca.com.br',
      phone: '+55 (11) 99999-9999',
      location: 'São Paulo, Brasil',
    },
  },
  footer: {
    tagline: 'Pessoas. Processos. Inovação.',
    columns: {
      company: {
        title: 'Empresa',
        links: ['Sobre nós', 'Nossa equipe', 'Carreiras', 'Imprensa'],
      },
      services: {
        title: 'Serviços',
        links: [
          'Gestão de Mudança',
          'Transformação Digital',
          'Adoção de Tecnologia',
          'Treinamento',
        ],
      },
      resources: {
        title: 'Recursos',
        links: ['Insights', 'Cases', 'Metodologia', 'Newsletter'],
      },
      contact: {
        title: 'Contato',
        links: [
          'contato@espiraldamudanca.com.br',
          '+55 (11) 99999-9999',
          'São Paulo, Brasil',
        ],
      },
    },
    copyright: '© 2025 Espiral da Mudança. Todos os direitos reservados.',
  },
}

export const en: Translations = {
  nav: {
    about: 'About',
    services: 'Services',
    methodology: 'Methodology',
    cases: 'Cases',
    insights: 'Insights',
    contact: 'Contact',
    cta: 'Get in Touch',
  },
  hero: {
    headline: 'We turn resistance into momentum.',
    subheadline: 'Change management driven by data, people, and purpose.',
    cta_primary: 'Explore our approach',
    cta_secondary: 'See cases',
    metrics: [
      { value: '200+', label: 'projects' },
      { value: '15', label: 'countries' },
      { value: '94%', label: 'adoption rate' },
      { value: '12 years', label: 'of experience' },
    ],
  },
  about: {
    title: 'Who we are',
    description:
      'We specialize in guiding organizations through complex transformations — technological, cultural, and structural.',
    pillars: [
      {
        title: 'People First',
        description:
          'Every transformation starts and ends with people. We place the human factor at the center of every initiative.',
      },
      {
        title: 'Data & Evidence',
        description:
          'Decisions grounded in real data. We measure readiness, engagement, and adoption at every stage of the process.',
      },
      {
        title: 'Lasting Impact',
        description:
          'We don\'t just deliver projects — we deliver changes that stick. We consolidate results for the long term.',
      },
    ],
  },
  services: {
    title: 'Our Services',
    subtitle: 'End-to-end solutions for every stage of your organizational transformation.',
    cta: 'Learn more →',
    items: [
      {
        title: 'Organizational Change Management',
        description:
          'We structure and lead change initiatives end-to-end, ensuring adoption and sustainability of results.',
      },
      {
        title: 'Digital Transformation',
        description:
          'We support organizations on their digitization journey, integrating technology, processes, and culture harmoniously.',
      },
      {
        title: 'Technology Adoption',
        description:
          'We maximize the return on technology investments by accelerating user adoption at all levels.',
      },
      {
        title: 'Strategic Communication',
        description:
          'We develop communication plans that engage stakeholders and build effective change narratives.',
      },
      {
        title: 'Training & Enablement',
        description:
          'We design and deliver tailored enablement programs to accelerate the learning curve.',
      },
      {
        title: 'Change Readiness Assessment',
        description:
          'We assess the organization\'s readiness for change, identifying risks and opportunities in advance.',
      },
    ],
  },
  methodology: {
    title: 'The Espiral Approach',
    subtitle:
      'An iterative and adaptive method that guides organizations from assessment to sustaining change.',
    steps: [
      {
        label: 'Assess',
        title: 'Assess',
        description: 'We understand the starting point — culture, readiness, and change impact.',
      },
      {
        label: 'Strategize',
        title: 'Strategize',
        description: 'We map the path with clear action plans, metrics, and defined milestones.',
      },
      {
        label: 'Engage',
        title: 'Engage',
        description: 'We activate people and leaders as change agents within the organization.',
      },
      {
        label: 'Execute',
        title: 'Execute',
        description: 'We implement with rigor, monitoring adoption and adjusting in real time.',
      },
      {
        label: 'Sustain',
        title: 'Sustain',
        description: 'We consolidate and measure results to ensure the change endures.',
      },
    ],
    references: 'Inspired by: Prosci ADKAR · Kotter 8-Step · McKinsey 7-S',
  },
  cases: {
    title: 'Success Stories',
    cta: 'View all cases →',
    items: [
      {
        tag: 'Digital Transformation',
        title: 'ERP Migration in Manufacturing',
        result: '98% adoption in 6 months',
        description:
          'We led the transition from a legacy system to a global ERP in a manufacturing company with 3,000 employees, ensuring continuous operations and high adoption.',
        cta: 'View case →',
      },
      {
        tag: 'Cultural Change',
        title: 'Post-Merger Cultural Restructuring',
        result: 'Employee engagement +40%',
        description:
          'After a merger between two companies with distinct cultures, we structured a cultural integration program that raised employee engagement by 40%.',
        cta: 'View case →',
      },
      {
        tag: 'Technology Adoption',
        title: 'Global SaaS Platform Adoption',
        result: 'ROI achieved in 4 months',
        description:
          'We accelerated the adoption of a SaaS platform across 12 countries simultaneously, achieving return on investment in just 4 months.',
        cta: 'View case →',
      },
    ],
  },
  insights: {
    title: 'Insights',
    cta: 'View all insights →',
    items: [
      {
        category: 'Change Management',
        title: 'Why 70% of transformations fail — and how to avoid that fate',
        date: 'Jan 10, 2025',
        readTime: '5 min read',
      },
      {
        category: 'Leadership',
        title: 'The leader\'s role as an active sponsor of organizational change',
        date: 'Jan 22, 2025',
        readTime: '4 min read',
      },
      {
        category: 'Digital Transformation',
        title: 'AI adoption in companies: the human factor nobody is talking about',
        date: 'Feb 5, 2025',
        readTime: '6 min read',
      },
    ],
  },
  contact: {
    title: 'Let\'s talk?',
    subtitle: 'Tell us about your challenge. Our team responds within 24 hours.',
    form: {
      name: 'Name',
      company: 'Company',
      email: 'Email',
      challenge: 'What is your challenge?',
      submit: 'Send message',
    },
    booking: 'Or book a free 30-min discovery call',
    booking_cta: 'Book now',
    info: {
      email: 'contact@espiraldamudanca.com.br',
      phone: '+55 (11) 99999-9999',
      location: 'São Paulo, Brazil',
    },
  },
  footer: {
    tagline: 'People. Processes. Innovation.',
    columns: {
      company: {
        title: 'Company',
        links: ['About us', 'Our team', 'Careers', 'Press'],
      },
      services: {
        title: 'Services',
        links: [
          'Change Management',
          'Digital Transformation',
          'Technology Adoption',
          'Training',
        ],
      },
      resources: {
        title: 'Resources',
        links: ['Insights', 'Cases', 'Methodology', 'Newsletter'],
      },
      contact: {
        title: 'Contact',
        links: [
          'contact@espiraldamudanca.com.br',
          '+55 (11) 99999-9999',
          'São Paulo, Brazil',
        ],
      },
    },
    copyright: '© 2025 Espiral da Mudança. All rights reserved.',
  },
}
