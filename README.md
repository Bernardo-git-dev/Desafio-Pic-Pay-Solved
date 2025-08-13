# Desafio Backend PicPay — Solução com Dados Mock

## Visão Geral

Esta solução é uma API RESTful robusta, impulsionada por dados mock, que simula o funcionamento do PicPay Simplificado. Com foco em clareza, elegância e inovação, sua estrutura é enxuta, resiliente e totalmente alinhada ao futuro da engenharia de software.

## Requisitos de Negócio Atendidos

- Dois tipos de usuários: **Comum** e **Lojista**, com cadastro contendo Nome, CPF/CNPJ, E-mail e Senha. Unicidade garantida em CPF/CNPJ e e-mail. :contentReference[oaicite:0]{index=0}
- Usuário **Comum** pode enviar para outros Comuns e Lojistas; **Lojista** apenas recebe. :contentReference[oaicite:1]{index=1}
- Validação de saldo fictício antes da transferência; tudo em memória, com lógica eficaz.
- Simulação de serviço **autorizador externo**, via mock (consulta GET em endpoint simulado). :contentReference[oaicite:2]{index=2}

# Desafio Backend PicPay — NestJS com Dados Mock

### Visão Estratégica & Alta Performance

Solução elegante e empresarial construída com **NestJS + TypeScript**, usando **dados mock**, com arquitetura modular e interface profissional direcionada ao futuro da engenharia backend.

---

## Índice

- [Visão Geral](#visão-geral)
- [Tecnologias & Boas Práticas](#tecnologias--boas-práticas)
- [Organização do Projeto](#organização-do-projeto)
- [Endpoints e Fluxo Principal](#endpoints-e-fluxo-principal)
- [Mock de Dados & Simulações](#mock-de-dados--simulações)
- [Qualidade, Testes e Ferramentas](#qualidade-testes-e-ferramentas)
- [Execução & Quick-Start](#execução--quick-start)
- [Motivações Estratégicas](#motivações-estratégicas)
- [Evoluções Futuristas](#evoluções-futuristas)

---

## Visão Geral

- API RESTful baseada em **NestJS**, com design empresarial e modular.
- Dados e fluxos simulados por **mock em memória** — rápido, sem complexidade de DB real.
- Pronto para adoção futura de banco real, microsserviços ou CQRS — tudo alinhado com inovação e crescimento escalável.

---

## Tecnologias & Boas Práticas

- **NestJS**: estrutura robusta, modular e testável (recomendado oficialmente) :contentReference[oaicite:0]{index=0}
- **Configuração Segura e Hierárquica**: uso de `@nestjs/config`, variáveis tipadas, `Zod` ou soluções similares validando env vars :contentReference[oaicite:1]{index=1}
- **Documentação via Swagger**: endpoints auto-documentados (`/docs`) com `@nestjs/swagger` :contentReference[oaicite:2]{index=2}
- **Estrutura Modular Limpa**: cada módulo com `controller.ts`, `service.ts`, DTOs e mocks separados, seguindo DDD e boas práticas :contentReference[oaicite:3]{index=3}
- **Tratamento Centralizado de Erros**: filtros excepcionais customizados e logs estruturados com `Pino` ou similar :contentReference[oaicite:4]{index=4}
- **Commit Consciente**: padrão Conventional Commits, linting, hooks com `husky` e `commitlint` :contentReference[oaicite:5]{index=5}

---

Estrutura clara, escalável e de fácil manutenção. :contentReference[oaicite:6]{index=6}

---

## Endpoints e Fluxo Principal

### **POST /transfer**

```json
{
  "value": 100.0,
  "payer": 4,
  "payee": 15
}
```
