# Arquitetura do Projeto

## Visão Geral
O projeto consiste em uma Landing Page feita em React + Vite que consome uma API desenvolvida em Laravel.

## Fluxo
1. O usuário acessa a Landing Page.
2. O frontend faz uma requisição `GET /api/courses`.
3. O backend (Laravel) retorna os cursos cadastrados no banco em JSON.
4. O React exibe os cursos dinamicamente.

## Stack
- **Frontend**: React + Vite + TailwindCSS
- **Backend**: Laravel 11 (API REST)
- **Banco**: SQLite/MySQL (migrations + seeders)

## Diagrama de Arquitetura

```
[React + Vite] --GET /api/courses--> [Laravel API] --consulta--> [Banco de Dados]
[React + Vite] <-- JSON ----------- [Laravel API] <--dados----- [Banco de Dados]
```

