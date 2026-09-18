import { Injectable } from '@angular/core';

export interface ContactLink {
  label: string;
  value: string;
  href?: string;
}

export interface LanguageItem {
  name: string;
  level: string;
  /** Rough proficiency used only to size the visual level bar (0-100). */
  proficiency: number;
}

export interface ExperienceItem {
  title: string;
  function: string;
  date: string;
  description: string[];
}

export interface EducationItem {
  title: string;
  institution: string;
  date: string;
  description: string[];
}

export interface SkillItem {
  label: string;
  description: string;
}

export interface ResearchItem {
  title: string;
  source: string;
  paragraphs: string[];
}

/**
 * Single source of truth for the resume's content. Both the interactive
 * on-screen components (AsideComponent, ContentComponent) and the
 * print/PDF-only layout (PrintResumeComponent) read from here, so the
 * content never has to be kept in sync by hand across two templates.
 */
@Injectable({ providedIn: 'root' })
export class ResumeDataService {
  readonly name = 'Erik Proença';
  readonly photo = '/assets/img/erik1.jpeg';
  readonly location = 'São Paulo, SP';
  readonly phone = '+55 11 986165932';
  readonly whatsappHref = 'https://api.whatsapp.com/send?phone=5511986165932';
  readonly email = 'erik.proenca2011@gmail.com';
  readonly linkedinHandle = '@erikproenca';
  readonly linkedinHref = 'https://linkedin.com/in/erikproenca';

  private readonly birthdayDate = 15;
  private readonly birthdayMonth = 9;
  private readonly birthdayYear = 1984;

  get age(): number {
    const today = new Date();
    const month = today.getMonth() + 1;
    const date = today.getDate();
    let age = today.getFullYear() - this.birthdayYear;
    if (month < this.birthdayMonth || (month === this.birthdayMonth && date < this.birthdayDate)) {
      age--;
    }
    return age;
  }

  readonly summary =
    'Educador especializado em Matemática e Tecnologia Educacional, dedicado a ' +
    'desenvolver currículos inovadores que integram pensamento matemático, ' +
    'computação e metodologias ativas. Acredito em criar experiências de ' +
    'aprendizagem transformadoras que preparam estudantes para os desafios do ' +
    'século XXI, promovendo literacia digital, raciocínio lógico e competências ' +
    'socioemocionais.';

  readonly languages: LanguageItem[] = [
    { name: 'Português', level: 'Nativo', proficiency: 100 },
    { name: 'Inglês', level: 'Avançado', proficiency: 85 },
    { name: 'Francês', level: 'Intermediário', proficiency: 60 },
  ];

  readonly experience: ExperienceItem[] = [
    {
      title: 'Maple Bear Santana',
      function: 'Professor de Matemática',
      date: '01/2025 - Atual',
      description: [
        'Ensino de matemática para alunos do ensino fundamental e médio, utilizando metodologias ativas para tornar as aulas mais dinâmicas e interativas.',
        'Desenvolvimento de planos de aula e projetos práticos para facilitar o aprendizado e aplicação dos conceitos de Matemática.',
        'Utilização de métodos de ensino baseados em projetos para promover o desenvolvimento de habilidades de resolução de problemas.',
        'Implementação de atividades interativas e colaborativas para engajar os alunos e estimular o pensamento crítico e a criatividade.',
        'Avaliação contínua do progresso dos alunos, fornecendo feedback construtivo e ajustando as abordagens pedagógicas conforme necessário.',
        'Organização de eventos e workshops para incentivar a participação dos alunos em competições de programação e feiras de ciências.',
        'Colaboração com outros professores e membros da equipe para criar um ambiente de aprendizado integrado e de suporte.',
      ],
    },
    {
      title: 'Colégio 14 de Julho',
      function: 'Professor de Física e Matemática Financeira',
      date: '01/2024 - 07/2026',
      description: [
        'Leciono física para alunos do Ensino Médio, utilizando materiais lúdicos e aulas interativas para promover um aprendizado engajador e significativo.',
        'Planejo e conduzo atividades que visam o desenvolvimento integral dos estudantes, incentivando a curiosidade e o pensamento crítico.',
        'Ministro aulas de Itinerário Formativo de Matemática para o Ensino Médio, com foco em Matemática Financeira e Geometria.',
        'Nas aulas de Matemática Financeira, abordo conceitos essenciais e realizo simulações de investimentos financeiros para ensinar os alunos sobre o funcionamento do mercado de investimentos.',
        'Desenvolvo planos de aula que combinam teoria e prática, facilitando a compreensão dos conceitos matemáticos e sua aplicação no cotidiano.',
        'Utilizo tecnologias e ferramentas educacionais modernas para enriquecer o processo de ensino-aprendizagem e tornar as aulas mais dinâmicas.',
        'Avalio o progresso dos alunos de forma contínua, fornecendo feedback construtivo e estratégias personalizadas para melhoria.',
        'Participo ativamente de reuniões pedagógicas e colaborações com a equipe escolar para garantir a qualidade e a coesão do currículo.',
      ],
    },
    {
      title: 'Maple Bear Jardins',
      function: 'Professor de Programação',
      date: '01/2023 - 12/2024',
      description: [
        'Ensino de programação para alunos de diferentes faixas etárias, com foco em lógica, algoritmos e linguagem Python.',
        'Desenvolvimento de planos de aula e projetos práticos para facilitar o aprendizado e aplicação dos conceitos de programação.',
        'Utilização de métodos de ensino baseados em projetos para promover o desenvolvimento de habilidades de resolução de problemas.',
        'Implementação de atividades interativas e colaborativas para engajar os alunos e estimular o pensamento crítico e a criatividade.',
        'Avaliação contínua do progresso dos alunos, fornecendo feedback construtivo e ajustando as abordagens pedagógicas conforme necessário.',
        'Organização de eventos e workshops para incentivar a participação dos alunos em competições de programação e feiras de ciências.',
        'Colaboração com outros professores e membros da equipe para criar um ambiente de aprendizado integrado e de suporte.',
      ],
    },
  ];

  readonly education: EducationItem[] = [
    {
      title: 'Licenciatura em Matemática com Habilitação em Física',
      institution: 'Faculdade de Taboão da Serra',
      date: '2007 - 2009',
      description: [
        'Formação acadêmica sólida em matemática pura e aplicada, com ênfase em geometria, álgebra, cálculo e estatística.',
        'Participação em projetos de pesquisa e extensão, desenvolvendo habilidades de investigação e aplicação prática dos conceitos matemáticos.',
        'Realização de estágio supervisionado em escolas públicas e privadas, adquirindo experiência prática em sala de aula e desenvolvendo habilidades pedagógicas.',
        'Participação em eventos acadêmicos e seminários, ampliando o conhecimento e a rede de contatos na área da matemática.',
      ],
    },
  ];

  readonly skills: SkillItem[] = [
    {
      label: 'Domínio de Conteúdo Matemático:',
      description: 'Profundo conhecimento em diversas áreas da matemática, incluindo álgebra, geometria, trigonometria, cálculo e matemática financeira.',
    },
    {
      label: 'Planejamento de Aulas:',
      description: 'Capacidade de desenvolver planos de aula estruturados e eficazes que atendam aos objetivos curriculares e às necessidades dos alunos.',
    },
    {
      label: 'Metodologias de Ensino:',
      description: 'Competência em utilizar diferentes metodologias de ensino, como aprendizagem baseada em projetos, ensino lúdico, e abordagens interativas para engajar os alunos.',
    },
    {
      label: 'Comunicação:',
      description: 'Excelentes habilidades de comunicação verbal e escrita, essenciais para explicar conceitos matemáticos complexos de maneira clara e acessível.',
    },
    {
      label: 'Gestão de Sala de Aula:',
      description: 'Capacidade de manter um ambiente de aprendizagem positivo e produtivo, gerenciando o comportamento dos alunos e promovendo a disciplina.',
    },
    {
      label: 'Resolução de Problemas:',
      description: 'Habilidade em ensinar e incentivar os alunos a desenvolverem habilidades de resolução de problemas através de desafios e atividades práticas.',
    },
    {
      label: 'Desenvolvimento Profissional:',
      description: 'Compromisso com o aprendizado contínuo e o desenvolvimento profissional, mantendo-se atualizado com as melhores práticas pedagógicas e novas tendências na educação matemática.',
    },
  ];

  readonly research: ResearchItem = {
    title: 'Pesquisa em Mentalidades Matemáticas',
    source: 'Instituto Federal · Time de Pesquisa',
    paragraphs: [
      'Faço parte de um time de pesquisa do Instituto Federal dedicado às Mentalidades Matemáticas (Mathematical Mindsets), abordagem desenvolvida por Jo Boaler, professora de educação matemática em Stanford e cofundadora do centro de pesquisas Youcubed.',
      'A abordagem parte da ideia de que qualquer pessoa é capaz de aprender matemática em altos níveis, unindo descobertas da neurociência a uma mentalidade de crescimento: a crença de que a habilidade matemática se desenvolve com esforço, boas estratégias e apoio — não é um talento fixo com que se nasce. Na prática, isso significa priorizar representações visuais e criativas, conexões entre ideias e tarefas abertas, em vez de memorização isolada de fórmulas. É essa filosofia que orienta o desenho das atividades e dos jogos desta plataforma.',
    ],
  };
}
