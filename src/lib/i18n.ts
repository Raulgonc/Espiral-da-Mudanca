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
    items: {
      title: string
      description: string
      details: {
        description: string
        deliverables: string[]
        forWho: string
        outcome: string
      }
    }[]
  }
  methodology: {
    title: string
    subtitle: string
    steps: {
      label: string
      title: string
      description: string
      details: {
        description: string
        activities: string[]
        frameworks: string[]
        outcome: string
      }
    }[]
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
        description: 'Estruturamos e conduzimos iniciativas de mudança de ponta a ponta, garantindo adesão e sustentabilidade dos resultados.',
        details: {
          description: 'Estruturamos e conduzimos iniciativas de mudança de ponta a ponta. Desde o diagnóstico até a sustentação, garantimos que cada etapa seja executada com metodologia robusta e foco em resultados mensuráveis.',
          deliverables: ['Plano de gestão de mudança', 'Plano de comunicação por público', 'Treinamentos customizados', 'Relatórios de adoção', 'Plano de sustentação'],
          forWho: 'Organizações em processo de transformação tecnológica, cultural ou estrutural de grande escala.',
          outcome: 'Adoção acima de 90% e mudança consolidada no prazo',
        },
      },
      {
        title: 'Transformação Digital',
        description: 'Apoiamos organizações na jornada de digitalização, integrando tecnologia, processos e cultura de forma harmônica.',
        details: {
          description: 'Apoiamos organizações na jornada de digitalização integrando o fator humano às iniciativas tecnológicas. Não basta implementar a tecnologia — é preciso que as pessoas a adotem e gerem valor com ela.',
          deliverables: ['Mapeamento de impacto digital', 'Estratégia de adoção', 'Capacitação digital por perfil', 'Gestão de resistências', 'Dashboard de KPIs de adoção'],
          forWho: 'Empresas implementando ERPs, CRMs, plataformas cloud ou automação de processos.',
          outcome: 'ROI da tecnologia atingido com alta adoção e baixa resistência',
        },
      },
      {
        title: 'Adoção de Tecnologia',
        description: 'Maximizamos o retorno de investimentos em tecnologia acelerando a adoção por usuários em todos os níveis.',
        details: {
          description: 'Maximizamos o retorno sobre investimento em tecnologia acelerando a curva de adoção de usuários em todos os níveis hierárquicos. Combinamos treinamento, comunicação e suporte para garantir que a ferramenta seja usada de fato.',
          deliverables: ['Análise de lacunas de adoção', 'Trilhas de treinamento por perfil', 'Materiais de apoio e guias', 'Suporte go-live dedicado', 'Métricas de uso e adoção'],
          forWho: 'Equipes que acabaram de receber uma nova ferramenta e precisam alcançar adoção plena rapidamente.',
          outcome: 'Adoção plena da ferramenta em até 90 dias',
        },
      },
      {
        title: 'Comunicação Estratégica',
        description: 'Desenvolvemos planos de comunicação que engajam stakeholders e constroem narrativas de mudança eficazes.',
        details: {
          description: 'Desenvolvemos planos de comunicação que engajam stakeholders e constroem narrativas de mudança que fazem sentido para cada público. A comunicação certa, para a pessoa certa, no momento certo.',
          deliverables: ['Mapa de stakeholders', 'Plano de comunicação segmentado', 'Mensagens-chave por audiência', 'Calendário editorial da mudança', 'Templates e materiais prontos'],
          forWho: 'Líderes e equipes de RH e comunicação que precisam engajar colaboradores em processos de mudança.',
          outcome: 'Stakeholders informados, engajados e alinhados à mudança',
        },
      },
      {
        title: 'Treinamento & Capacitação',
        description: 'Desenhamos e entregamos programas de capacitação sob medida para acelerar a curva de aprendizado.',
        details: {
          description: 'Desenhamos e entregamos programas de capacitação sob medida para acelerar a curva de aprendizado. Combinamos metodologias ativas com conteúdo relevante para cada perfil de usuário.',
          deliverables: ['Diagnóstico de necessidades de aprendizado', 'Design instrucional customizado', 'Materiais didáticos e e-learning', 'Treinamentos presenciais e online', 'Avaliação de aprendizado e impacto'],
          forWho: 'Organizações que precisam capacitar equipes para novas ferramentas, processos ou comportamentos.',
          outcome: 'Equipes capacitadas e confiantes para operar no novo modelo',
        },
      },
      {
        title: 'Diagnóstico de Prontidão',
        description: 'Avaliamos o nível de prontidão da organização para a mudança, identificando riscos e oportunidades antecipadamente.',
        details: {
          description: 'Avaliamos o nível de prontidão da organização para a mudança antes de iniciá-la. Identificamos riscos, resistências e oportunidades para que o plano de mudança seja desenhado com base em dados reais.',
          deliverables: ['Surveys de prontidão para colaboradores', 'Entrevistas com lideranças-chave', 'Análise de cultura organizacional', 'Mapa de riscos e resistências', 'Relatório executivo com recomendações'],
          forWho: 'Organizações que estão planejando uma grande transformação e querem minimizar riscos antes de começar.',
          outcome: 'Relatório de prontidão com recomendações estratégicas priorizadas',
        },
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
        details: {
          description: 'Mapeamos o estado atual da organização com profundidade — cultura, estrutura, stakeholders e resistências potenciais. Usamos entrevistas, surveys e análise de dados para construir uma fotografia completa do ponto de partida.',
          activities: ['Mapeamento de stakeholders', 'Avaliação de cultura organizacional', 'Análise de impacto da mudança', 'Identificação de riscos e resistências', 'Baseline de métricas de adoção'],
          frameworks: ['ADKAR Assessment', 'Change Impact Analysis', 'Stakeholder Map'],
          outcome: 'Relatório de diagnóstico com nível de prontidão e mapa de riscos',
        },
      },
      {
        label: 'Estratégia',
        title: 'Estratégia',
        description: 'Desenhamos o caminho com planos de ação claros, métricas e marcos definidos.',
        details: {
          description: 'Com base no diagnóstico, desenhamos o plano de gestão de mudança personalizado — roadmap, plano de comunicação, estratégia de engajamento e métricas de sucesso alinhadas aos objetivos do negócio.',
          activities: ['Definição de visão da mudança', 'Plano de comunicação por público', 'Estratégia de treinamento e capacitação', 'Definição de KPIs de adoção', 'Roadmap de implementação'],
          frameworks: ['Kotter 8-Step', 'McKinsey 7-S', 'Change Management Plan'],
          outcome: 'Plano de gestão de mudança aprovado com marcos e métricas definidos',
        },
      },
      {
        label: 'Engajamento',
        title: 'Engajamento',
        description: 'Ativamos pessoas e lideranças como agentes de mudança dentro da organização.',
        details: {
          description: 'Ativamos líderes como patrocinadores visíveis e construímos uma rede de agentes de mudança dentro da organização. Criamos narrativas e experiências que conectam pessoas ao propósito da transformação.',
          activities: ['Capacitação de lideranças seniores', 'Formação de rede de champions', 'Workshops de co-criação com equipes', 'Comunicação de lançamento da mudança', 'Gestão proativa de resistências'],
          frameworks: ['Sponsor Roadmap', 'Coalition Building', 'CLARC Model'],
          outcome: 'Rede de champions ativa e lideranças engajadas como patrocinadores visíveis',
        },
      },
      {
        label: 'Execução',
        title: 'Execução',
        description: 'Implementamos com rigor, monitorando adoção e ajustando em tempo real.',
        details: {
          description: 'Implementamos o plano com rigor, monitorando indicadores de adoção em tempo real e ajustando táticas rapidamente quando necessário. Suporte ativo a usuários e gestão de resistências no dia a dia.',
          activities: ['Treinamentos e capacitações presenciais e online', 'Suporte no momento da adoção (go-live)', 'Monitoramento de KPIs em tempo real', 'Gestão de resistências e incidentes', 'Relatórios de progresso para liderança'],
          frameworks: ['Go-Live Support Model', 'Reinforcement Plan', 'Pulse Surveys'],
          outcome: 'Adoção acima da meta no prazo definido com suporte contínuo',
        },
      },
      {
        label: 'Sustentação',
        title: 'Sustentação',
        description: 'Consolidamos e medimos resultados para garantir que a mudança permaneça.',
        details: {
          description: 'Garantimos que a mudança se consolide e não regresse ao estado anterior. Medimos resultados, celebramos vitórias, identificamos lacunas e institucionalizamos novos comportamentos e processos na cultura da organização.',
          activities: ['Medição de resultados e ROI final', 'Identificação de gaps residuais', 'Plano de sustentação e reforço', 'Transferência de conhecimento para equipes internas', 'Relatório final de impacto e lições aprendidas'],
          frameworks: ['ADKAR Reinforcement', 'Lessons Learned', 'ROI Measurement'],
          outcome: 'Mudança institucionalizada com resultados medidos e documentados',
        },
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
        description: 'We structure and lead change initiatives end-to-end, ensuring adoption and sustainability of results.',
        details: {
          description: 'We structure and lead change initiatives end-to-end. From assessment to sustainment, we ensure every step is executed with robust methodology and a focus on measurable results.',
          deliverables: ['Change management plan', 'Audience-specific communication plan', 'Custom training programs', 'Adoption progress reports', 'Sustainment plan'],
          forWho: 'Organizations undergoing large-scale technological, cultural, or structural transformation.',
          outcome: 'Adoption above 90% and change consolidated on schedule',
        },
      },
      {
        title: 'Digital Transformation',
        description: 'We support organizations on their digitization journey, integrating technology, processes, and culture harmoniously.',
        details: {
          description: 'We support organizations on their digitization journey by integrating the human factor into technology initiatives. Implementing the technology is not enough — people need to adopt it and generate value with it.',
          deliverables: ['Digital impact mapping', 'Adoption strategy', 'Role-based digital enablement', 'Resistance management', 'Adoption KPI dashboard'],
          forWho: 'Companies implementing ERPs, CRMs, cloud platforms, or process automation.',
          outcome: 'Technology ROI achieved with high adoption and low resistance',
        },
      },
      {
        title: 'Technology Adoption',
        description: 'We maximize the return on technology investments by accelerating user adoption at all levels.',
        details: {
          description: 'We maximize return on technology investment by accelerating the adoption curve of users at all organizational levels. We combine training, communication, and support to ensure the tool is actually used.',
          deliverables: ['Adoption gap analysis', 'Role-based training tracks', 'Support materials and guides', 'Dedicated go-live support', 'Usage and adoption metrics'],
          forWho: 'Teams that have just received a new tool or platform and need to reach full adoption quickly.',
          outcome: 'Full tool adoption within 90 days',
        },
      },
      {
        title: 'Strategic Communication',
        description: 'We develop communication plans that engage stakeholders and build effective change narratives.',
        details: {
          description: 'We develop communication plans that engage stakeholders and build change narratives that make sense for each audience. The right message, for the right person, at the right time.',
          deliverables: ['Stakeholder map', 'Segmented communication plan', 'Audience-specific key messages', 'Change editorial calendar', 'Ready-to-use templates and materials'],
          forWho: 'Leaders and HR/communication teams who need to engage employees in change processes.',
          outcome: 'Stakeholders informed, engaged, and aligned to the change',
        },
      },
      {
        title: 'Training & Enablement',
        description: 'We design and deliver tailored enablement programs to accelerate the learning curve.',
        details: {
          description: 'We design and deliver tailored enablement programs to accelerate the learning curve. We combine active methodologies with relevant content for each user profile.',
          deliverables: ['Learning needs assessment', 'Custom instructional design', 'Training materials and e-learning', 'In-person and online trainings', 'Learning and impact evaluation'],
          forWho: 'Organizations that need to upskill teams for new tools, processes, or behaviors.',
          outcome: 'Teams skilled and confident to operate in the new model',
        },
      },
      {
        title: 'Change Readiness Assessment',
        description: 'We assess the organization\'s readiness for change, identifying risks and opportunities in advance.',
        details: {
          description: 'We assess the organization\'s readiness for change before it begins. We identify risks, resistance, and opportunities so the change plan is designed based on real data.',
          deliverables: ['Employee readiness surveys', 'Leadership interviews', 'Organizational culture analysis', 'Risk and resistance map', 'Executive report with recommendations'],
          forWho: 'Organizations planning a major transformation who want to minimize risks before starting.',
          outcome: 'Readiness report with prioritized strategic recommendations',
        },
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
        details: {
          description: 'We map the current state of the organization in depth — culture, structure, stakeholders, and potential resistance. We use interviews, surveys, and data analysis to build a complete picture of the starting point.',
          activities: ['Stakeholder mapping', 'Organizational culture assessment', 'Change impact analysis', 'Risk and resistance identification', 'Adoption metrics baseline'],
          frameworks: ['ADKAR Assessment', 'Change Impact Analysis', 'Stakeholder Map'],
          outcome: 'Diagnostic report with readiness level and risk map',
        },
      },
      {
        label: 'Strategize',
        title: 'Strategize',
        description: 'We map the path with clear action plans, metrics, and defined milestones.',
        details: {
          description: 'Based on the assessment, we design a customized change management plan — roadmap, communication plan, engagement strategy, and success metrics aligned with business objectives.',
          activities: ['Change vision definition', 'Audience-specific communication plan', 'Training and enablement strategy', 'KPI and adoption metrics definition', 'Implementation roadmap'],
          frameworks: ['Kotter 8-Step', 'McKinsey 7-S', 'Change Management Plan'],
          outcome: 'Approved change management plan with defined milestones and metrics',
        },
      },
      {
        label: 'Engage',
        title: 'Engage',
        description: 'We activate people and leaders as change agents within the organization.',
        details: {
          description: 'We activate leaders as visible sponsors and build a network of change agents within the organization. We create narratives and experiences that connect people to the purpose of the transformation.',
          activities: ['Senior leadership enablement', 'Change champion network formation', 'Co-creation workshops with teams', 'Change launch communication', 'Proactive resistance management'],
          frameworks: ['Sponsor Roadmap', 'Coalition Building', 'CLARC Model'],
          outcome: 'Active champion network and leaders engaged as visible sponsors',
        },
      },
      {
        label: 'Execute',
        title: 'Execute',
        description: 'We implement with rigor, monitoring adoption and adjusting in real time.',
        details: {
          description: 'We implement the plan with rigor, monitoring adoption indicators in real time and quickly adjusting tactics when needed. Active user support and day-to-day resistance management.',
          activities: ['In-person and online trainings', 'Go-live adoption support', 'Real-time KPI monitoring', 'Resistance and incident management', 'Leadership progress reports'],
          frameworks: ['Go-Live Support Model', 'Reinforcement Plan', 'Pulse Surveys'],
          outcome: 'Adoption above target within the defined timeline with ongoing support',
        },
      },
      {
        label: 'Sustain',
        title: 'Sustain',
        description: 'We consolidate and measure results to ensure the change endures.',
        details: {
          description: 'We ensure the change consolidates and does not revert to the previous state. We measure results, celebrate wins, identify gaps, and institutionalize new behaviors and processes into the organization\'s culture.',
          activities: ['Results and ROI measurement', 'Residual gap identification', 'Sustainment and reinforcement plan', 'Knowledge transfer to internal teams', 'Final impact report and lessons learned'],
          frameworks: ['ADKAR Reinforcement', 'Lessons Learned', 'ROI Measurement'],
          outcome: 'Institutionalized change with measured and documented results',
        },
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
