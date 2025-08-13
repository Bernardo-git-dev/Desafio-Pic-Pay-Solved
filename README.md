# Desafio Backend PicPay — Solução com Dados Mock

## Visão Geral

Esta solução é uma API RESTful robusta, impulsionada por dados mock, que simula o funcionamento do PicPay Simplificado. Com foco em clareza, elegância e inovação, sua estrutura é enxuta, resiliente e totalmente alinhada ao futuro da engenharia de software.

## Requisitos de Negócio Atendidos

- Dois tipos de usuários: **Comum** e **Lojista**, com cadastro contendo Nome, CPF/CNPJ, E-mail e Senha. Unicidade garantida em CPF/CNPJ e e-mail. :contentReference[oaicite:0]{index=0}
- Usuário **Comum** pode enviar para outros Comuns e Lojistas; **Lojista** apenas recebe. :contentReference[oaicite:1]{index=1}
- Validação de saldo fictício antes da transferência; tudo em memória, com lógica eficaz.
- Simulação de serviço **autorizador externo**, via mock (consulta GET em endpoint simulado). :contentReference[oaicite:2]{index=2}
- Notificação fictícia ao recebedor por mock (POST em serviço instável simulado); com retries e tratamento de falhas. :contentReference[oaicite:3]{index=3}
- API RESTful, sem banco de dados real, apenas mocks, mantendo design limpo e eficiente. :contentReference[oaicite:4]{index=4}

## Arquitetura e Estratégia Mock

- **Dados mock**: Usuários e saldos armazenados em estruturas estáticas (arrays, mapas ou objetos em memória), eliminando dependência de DB real.
- **Mock de autorização**: Simulado via HTTP GET para endpoint fictício, com retries e timeout para robustez.
- **Mock de notificação**: Simulado via HTTP POST, com lógica de retry e timeout para resiliência visível.
- Código organizado com clareza empresarial, mantendo futuro-ready extensibilidade.

## Endpoints Principais

### POST `/transfer`

```json
{
  "value": 100.0,
  "payer": 4,
  "payee": 15
}
```
