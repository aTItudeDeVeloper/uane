# Fluxo de Dados (Sequence)

## Descrição
Este diagrama mostra o fluxo de dados do usuário até o banco de dados e de volta, detalhando cada etapa da requisição.

## Passos
1. Usuário acessa a Landing Page
2. Frontend faz GET /api/courses
3. Backend (Laravel) consulta o banco
4. Banco retorna os cursos
5. Backend devolve JSON
6. Frontend renderiza a lista para o usuário

## Diagrama (texto)

```
Usuário -> Frontend (React): acessa página
Frontend -> Backend (Laravel): GET /api/courses
Backend -> Banco de Dados: consulta cursos
Banco de Dados -> Backend: retorna dados
Backend -> Frontend: JSON com cursos
Frontend -> Usuário: renderiza lista
```
