# 1. Três vantagens da modularização em projetos de software

## 1.1 Reutilização de Código  
A modularização permite que um código seja reutilizado em diferentes partes do projeto ou até mesmo em outros projetos. Isso evita a repetição de código, reduz erros e facilita a manutenção.  
**Exemplo:** Criar um módulo `calculadora.js` com funções matemáticas básicas (soma, subtração etc.) para ser usado em vários sistemas.

## 1.2 Facilidade de Manutenção  
Com o código dividido em módulos menores, é mais fácil corrigir erros e fazer melhorias sem afetar o restante do projeto.  
**Exemplo:** Se um sistema bancário tem um módulo para calcular juros, qualquer atualização pode ser feita apenas nesse módulo sem impactar outras funcionalidades.

## 1.3 Organização e Escalabilidade  
Projetos grandes se tornam mais organizados e fáceis de escalar quando divididos em módulos menores e independentes.  
**Exemplo:** Um site pode ter um módulo para autenticação de usuários, outro para exibir produtos e outro para processar pagamentos, tornando o sistema mais organizado.

---

# 2. CommonJS e Módulos JavaScript nos últimos 5 anos

CommonJS foi amplamente usado no Node.js para importar e exportar módulos antes da introdução dos módulos ES6 (`import/export`). Com o tempo, os módulos ES6 se tornaram o padrão, sendo adotados por navegadores modernos e pelo próprio Node.js.

## Resumo da evolução:
-  **Antes de 2020**: CommonJS era o mais usado no Node.js.
-  **De 2020 até agora**: Módulos ES6 (`import/export`) se tornaram mais comuns devido à melhor compatibilidade com navegadores.
-  **Atualmente**: O suporte a ES Modules (ESM) é padrão no Node.js, mas CommonJS ainda é usado em projetos legados.
