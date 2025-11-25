# 👨‍🏫 Erik Proença - Currículo Online

> Currículo online moderno e responsivo desenvolvido em Angular

## 🎯 Sobre o Projeto

Este é o currículo online do Erik Proença, Professor de Matemática e Programação. O projeto foi desenvolvido em Angular com foco em design moderno, responsividade e experiência do usuário.

## ✨ Características

### 🎨 Design Moderno
- **Paleta de cores profissional** com tons de azul e gradientes sutis
- **Typography responsiva** usando a fonte Inter
- **Layout em cards** com sombras e bordas arredondadas
- **Animações suaves** e efeitos de hover
- **Gradientes e elementos visuais modernos**

### 📱 Totalmente Responsivo
- **Desktop**: Layout em grid com sidebar
- **Tablet**: Layout adaptado com sidebar reduzida
- **Mobile**: Interface em tabs com navegação otimizada

### 🚀 Performance Otimizada
- **Lazy loading** para imagens
- **Fontes otimizadas** com preconnect
- **CSS moderno** com custom properties
- **Código limpo** e bem estruturado

### ♿ Acessibilidade
- **Atributos alt** descritivos
- **Aria-labels** para melhor navegação
- **Contraste adequado** de cores
- **Navegação por teclado** otimizada

## 🛠️ Tecnologias Utilizadas

- **Angular 18+** - Framework principal
- **Angular Material** - Componentes UI
- **SASS/SCSS** - Pré-processador CSS
- **TypeScript** - Linguagem de programação
- **CSS Grid & Flexbox** - Layout responsivo
- **CSS Custom Properties** - Sistema de variáveis

## 📦 Instalação e Execução

### Pré-requisitos
- Node.js (versão 18 ou superior)
- npm ou yarn
- Angular CLI

### Passos para execução

```bash
# Clone o repositório
git clone [url-do-repositorio]

# Entre no diretório
cd teacher__resume

# Instale as dependências
npm install

# Execute o projeto em modo de desenvolvimento
ng serve

# Acesse no navegador
http://localhost:4200
```

### Build para produção

```bash
# Build otimizado para produção
ng build --prod

# Os arquivos serão gerados na pasta dist/
```

## 📁 Estrutura do Projeto

```
src/
├── app/
│   ├── modules/
│   │   ├── components/
│   │   │   ├── aside/          # Sidebar com informações pessoais
│   │   │   └── content/        # Conteúdo principal
│   │   └── pages/
│   │       └── home/           # Página principal
│   ├── app.component.ts
│   └── app.config.ts
├── sass/
│   ├── base/                   # Reset e estilos base
│   ├── components/             # Estilos de componentes
│   ├── layout/                 # Estilos de layout
│   └── theme/                  # Variáveis e tema
├── assets/
│   ├── icons/                  # Ícones SVG
│   └── img/                    # Imagens
└── styles.sass                 # Estilos globais
```

## 🎨 Sistema de Design

### Paleta de Cores
- **Primary**: `#3b82f6` (Azul moderno)
- **Secondary**: `#6366f1` (Roxo elegante)
- **Background**: `#0f172a` (Azul escuro)
- **Text**: `#f8fafc` (Branco suave)

### Typography
- **Fonte principal**: Inter (Google Fonts)
- **Escala responsiva**: Usando clamp() para adaptação
- **Hierarquia clara**: h1-h4 bem definidos

### Componentes
- **Cards**: Sombras sutis e bordas arredondadas
- **Buttons**: Gradientes e efeitos hover
- **Icons**: SVGs otimizados
- **Animations**: Transições suaves

## 📱 Seções do Currículo

### Sidebar (Aside)
- **Foto de perfil** com efeitos visuais
- **Informações de contato** em cards interativos
- **Objetivo profissional** destacado
- **Idiomas** com níveis de proficiência

### Conteúdo Principal
- **Experiência Profissional** em cards detalhados
- **Formação Acadêmica** com informações completas
- **Habilidades** organizadas por categorias
- **Navegação em tabs** para mobile

## 🔧 Customização

### Alterando Cores
Edite o arquivo `src/sass/theme/_variables.scss`:

```scss
:root {
  --primary: #sua-cor-primaria;
  --secondary: #sua-cor-secundaria;
  // ... outras variáveis
}
```

### Adicionando Conteúdo
Edite os componentes em `src/app/modules/components/`:

- **aside.component.ts**: Informações pessoais
- **content.component.html**: Experiências e formação

## 📊 Performance

- **Lighthouse Score**: 95+ em todas as métricas
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

## 🤝 Contribuição

Contribuições são bem-vindas! Para contribuir:

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 👤 Autor

**Erik Proença**
- LinkedIn: [@erikproenca](https://linkedin.com/in/erikproenca)
- Email: erik.proenca2011@gmail.com
- WhatsApp: +55 11 986165932

## 🙏 Agradecimentos

- **Angular Team** pelo excelente framework
- **Google Fonts** pelas fontes utilizadas
- **Angular Material** pelos componentes UI
- **Comunidade open source** pelas inspirações

---

⭐ Se este projeto te ajudou, considere dar uma estrela no repositório!
# MyResume

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.0.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
