# Teste Prático FullStack - Grupo O POVO

Este projeto faz parte do processo seletivo para Desenvolvedor FullStack.  
A aplicação consiste em uma **Landing Page responsiva** que exibe cursos de forma dinâmica, consumindo uma **API em Laravel**.

---

## 🚀 Stack Utilizada
- **Frontend**: React + Vite + TailwindCSS
- **Backend**: Laravel 12.4.0 (API REST)
- **Banco**: MySQL (pode ser SQLite para testes locais)
- **Gerenciamento de estado**: useState + useEffect
- **Padrão de commits**: [Conventional Commits](https://github.com/iuricode/padroes-de-commits)

---

## 📂 Estrutura do Projeto

```
/frontend   -> Projeto React (Vite)
/backend    -> Projeto Laravel
/docs       -> Documentação extra (diagramas, prints)
/README.md  -> Este arquivo
```

---

## ⚙️ Instalação

### 🔹 Backend (Laravel API)
```bash
cd backend
composer install
cp .env.example .env
php artisan migrate --seed

# Rodando o servidor Laravel (padrão)
php artisan serve

# ⚠️ Observação: Para rodar em rede local com host e porta específicos:
php artisan serve --host=192.168.100.20 --port=8000

```
➡️ API disponível em: http://localhost:8000/api/courses

### 🔹 Frontend (React + Vite)
```bash
cd frontend
npm install
npm run dev
```
➡️ Frontend disponível em: http://localhost:5173

---

## 🧩 Funcionalidades
- Navbar com navegação
- Banner principal
- Listagem dinâmica de cursos (via API Laravel)
- Sessão de destaques
- Rodapé responsivo
- Tratamento de loading e erros
- Responsividade mobile e desktop

---

## 📊 Documentação Extra
- Arquitetura do Sistema
- Fluxo de Dados

Os diagramas estão disponíveis na pasta `/docs`.

---

## 📝 Padrão de Commits

Exemplos usados no projeto:
- feat(api): criar endpoint de cursos
- feat(frontend): consumir API de cursos
- fix(api): corrigir erro de CORS
- docs(readme): adicionar instruções de setup
- style(navbar): ajustar cores conforme Figma

Tipos principais:
- feat → nova funcionalidade
- fix → correção de bug
- docs → alterações na documentação
- style → mudanças visuais ou de formatação
- refactor → refatoração sem alterar funcionalidade
- test → inclusão/alteração de testes
- chore → tarefas de build, dependências, CI/CD

---

## ✅ Critérios atendidos
- Documentação clara
- Código limpo e organizado
- Responsividade
- Boas práticas de hooks
- Gerenciamento de estado
- Usabilidade e acessibilidade
- Conventional Commits

---

## 👨‍💻 Autor
Projeto desenvolvido por José Eduardo Gonçalves Gois  
📧 Email para contato: joseeduardodev@gmail.com

---


