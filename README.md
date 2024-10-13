# GptChatBotReact

## Descrição

https://gptchatbotreact.felvieira.com.br

GptChatBotReact é uma aplicação web moderna desenvolvida em React que implementa um chatbot baseado em GPT. O projeto utiliza tecnologias e bibliotecas atuais para criar uma interface de usuário interativa e responsiva.
Ela simula um auto atendimento para o cliente de uma empresa ficticia chamada FinTechX.

## Tecnologias Principais

- React
- Vite
- Tailwind CSS
- React Router
- OpenAI API

## Estrutura do Projeto

O projeto segue uma estrutura típica de uma aplicação React:

- `src/components`: Contém componentes reutilizáveis como `Header`, `InfoCard`, etc.
- `utils/chatTraining`: Contém infos para treinamento do bot utilizado no `ChatPage`
- `src/pages`: Inclui componentes de página, como `ChatPage`, `SplashPage`, `OnboardingPage`, `ProfilePage`, e `PreferencesPage`.
- `src/services`: Contém serviços para lidar com chamadas à API, como `chatService.js`.
- `src/utils`: Inclui utilitários, constantes e configurações, como `icons.js`, `constants.js`, `utils.js`, e `chatTraining.js`.
- `src/assets`: Armazena recursos estáticos como imagens e ícones.
- `src/styles`: Contém estilos globais (`globals.css`).

## Características

1. **Interface de Chat**: Implementa uma interface de chat interativa usando o modelo GPT-3.5-turbo da OpenAI.
2. **Estilização Avançada**: Utiliza Tailwind CSS para estilização, com temas personalizados.
3. **Roteamento**: Utiliza React Router para navegação entre páginas.
4. **Integração com API**: Usa o serviço `chatService` para se comunicar com a API da OpenAI.
5. **Funcionalidades do Chat**: Suporta envio de mensagens, regeneração de respostas, cópia e edição de mensagens.

## Configuração e Execução

Para executar o projeto localmente:

1. Clone o repositório
2. Instale as dependências com `npm install`
3. Configure a variável de ambiente `VITE_OPENAI_API_KEY` com sua chave da API da OpenAI
4. Execute o servidor de desenvolvimento com `npm run dev`

## Scripts Disponíveis

- `npm run dev`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila o projeto para produção
- `npm run lint`: Executa o linter para verificar o código
- `npm run preview`: Visualiza a versão de produção localmente

## Componentes Principais

### ChatPage

O componente `ChatPage` contém a lógica principal da interface de chat, incluindo o gerenciamento de estado das mensagens, envio de mensagens para a API, e renderização da interface do usuário.

### chatService

O serviço `chatService` encapsula a lógica de comunicação com a API da OpenAI, processando as mensagens e retornando as respostas do modelo GPT.

## Notas de Desenvolvimento

- O projeto utiliza variáveis de ambiente para armazenar chaves sensíveis, como a chave da API da OpenAI.
- A estilização é feita principalmente através do Tailwind CSS, com classes utilitárias aplicadas diretamente nos componentes.

## Conclusão

GptChatBotReact é um projeto moderno e bem estruturado para um chatbot baseado em GPT. Ele utiliza as melhores práticas e tecnologias atuais no desenvolvimento React, oferecendo uma base sólida para futuras expansões e melhorias.
