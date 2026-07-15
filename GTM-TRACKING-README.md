# Google Tag Manager - Implementação de Tracking (Especificações Santander para LPs)

## Visão Geral

Este documento descreve a implementação completa de eventos do Google Tag Manager (GTM) no site do Programa de Trainee Santander 2026, **seguindo rigorosamente as especificações do Santander para Landing Pages (LPs)**.

## Arquivos Implementados

- `js/gtm-tracking.js` - Script principal de tracking
- `js/gtm-config.js` - Configurações centralizadas
- `index.html` - Inclui o script de tracking

## Eventos Implementados (Conforme Especificações Santander para LPs)

### 1. Eventos de Interação (eventGA)

Todos os eventos de interação seguem o padrão `eventGA` conforme especificado:

```javascript
// Padrão: eventGA
window.dataLayer.push({
    'event': 'eventGA',
    'category': 'portal:lp:trainee',
    'action': 'clicou|carregou|iniciou|pausou|finalizou|scroll|tempo|enviou|preencheu',
    'label': '[tipo]:[valor]',
    'nonInteraction': false|true
});
```

#### Botões com classe `tm-tracking`
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "clicou",
    label: "botao:[valor do data-rotulo]",
    nonInteraction: false
}
```

#### Botões de Inscrição
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "clicou",
    label: "botao:inscrever-1", // Numerado automaticamente
    nonInteraction: false
}
```

#### Botões de Inscrição (Múltiplos)
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "clicou",
    label: "botao:inscrever-2", // Segundo botão
    nonInteraction: false
}

// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "clicou",
    label: "botao:inscrever-3", // Terceiro botão
    nonInteraction: false
}
```

#### Botão "Quero me inscrever" na Área de Varejo
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "clicou",
    label: "botao:inscrever-1", // Usa o mesmo sistema de numeração
    nonInteraction: false
}
```

#### Abertura de Modal de Inscrição
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "clicou",
    label: "modal:inscricao:abrir",
    nonInteraction: false
}
```

#### Fechamento de Modal de Inscrição
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "clicou",
    label: "modal:inscricao:fechar",
    nonInteraction: false
}
```

#### Visualização de Modal de Inscrição
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "exibiu",
    label: "modal:inscricao:visualizado",
    nonInteraction: false
}
```

#### Envio de Formulário no Modal
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "enviou",
    label: "modal:inscricao:formulario",
    nonInteraction: false
}
```

#### Botões "Quero saber mais"
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "clicou",
    label: "botao:quero-saber-mais",
    nonInteraction: false
}
```

#### Abas de Áreas
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "clicou",
    label: "botao:aba:[nome-da-area]",
    nonInteraction: false
}
```

#### Clique em Aba de Área
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "clicou",
    label: "tab:area:[nome-da-area]",
    nonInteraction: false
}
```

#### Clique em Aba de Navegação
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "clicou",
    label: "tab:navegacao:[nome-da-aba]",
    nonInteraction: false
}
```

#### Botões de Benefícios
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "clicou",
    label: "botao:beneficio:[santander|aymore|f1rst|tools]",
    nonInteraction: false
}
```

#### FAQ
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "clicou",
    label: "botao:pergunta:[texto-da-pergunta]",
    nonInteraction: false
}
```

#### Redes Sociais
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "clicou",
    label: "link:rede-social:[linkedin|instagram|tiktok|youtube]",
    nonInteraction: false
}
```

### 2. Eventos de Vídeo (eventGA)

#### Vídeo Carregado
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "carregou",
    label: "video:youtube:[video-id]",
    nonInteraction: false
}
```

#### Vídeo Iniciado
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "iniciou",
    label: "video:youtube:[video-id]",
    nonInteraction: false
}
```

#### Vídeo Pausado
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "pausou",
    label: "video:youtube:[video-id]",
    nonInteraction: false
}
```

#### Vídeo Finalizado
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "finalizou",
    label: "video:youtube:[video-id]",
    nonInteraction: false
}
```

#### Clique em Vídeo do YouTube
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "clicou",
    label: "video:youtube:click:[video-id]",
    nonInteraction: false
}
```

### 3. Eventos de Engajamento (eventGA)

#### Scroll Depth
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "scroll",
    label: "scroll:[25|50|75|90]porcento",
    nonInteraction: true
}
```

#### Tempo na Página
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "tempo",
    label: "tempo:[30|60|120|300]segundos",
    nonInteraction: true
}
```

### 4. Eventos de Visualização de Página (pageviewGA)

#### Visualização de Seção
```javascript
// Evento: pageviewGA
{
    page: "/hotsite/trainee/[nome-da-secao]"
}
```

### 5. Eventos de Formulário (eventGA)

#### Envio de Formulário
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "enviou",
    label: "formulario:[form-id]",
    nonInteraction: false
}
```

#### Preenchimento de Input
```javascript
// Evento: eventGA
{
    category: "portal:lp:trainee",
    action: "preencheu",
    label: "input:[nome-do-input]",
    nonInteraction: false
}
```

## Padrões de Nomenclatura (Conforme Santander para LPs)

### Categorias
- **Formato**: `portal:lp:trainee`
- **Exemplo**: `portal:lp:trainee`

### Ações
- **Valores em minúsculas**: `clicou`, `carregou`, `iniciou`, `pausou`, `finalizou`, `scroll`, `tempo`, `enviou`, `preencheu`

### Labels
- **Formato**: `[tipo]:[valor]`
- **Exemplos**:
  - `botao:inscrever-se`
  - `botao:aba:wealth-management`
  - `botao:beneficio:santander`
  - `botao:pergunta:o-que-e-o-programa`
  - `link:rede-social:linkedin`
  - `video:youtube:XAIgoY8nX1M`
  - `scroll:25porcento`
  - `tempo:30segundos`
  - `formulario:form-lead`
  - `input:cpf`

### Páginas
- **Formato**: `/hotsite/trainee/[path]`
- **Exemplos**: `/hotsite/trainee/`, `/hotsite/trainee/sobre`, `/hotsite/trainee/programa`

### NonInteraction
- **Scroll e Tempo**: `nonInteraction: true`
- **Interações do usuário**: `nonInteraction: false`

## Como Usar

### 1. Adicionar Tracking a Novos Elementos

Para adicionar tracking a um novo botão ou link, use a classe `tm-tracking` e os atributos de dados:

```html
<a href="#" class="tm-tracking" 
   data-categoria="portal:lp:trainee" 
   data-rotulo="meu-botao" 
   data-acao="clicou">
    Meu Botão
</a>
```

### 2. Adicionar Tracking Manual

Para enviar eventos manualmente seguindo o padrão do Santander para LPs:

```javascript
// Evento de interação
window.GTMTracking.pushEvent('eventGA', {
    category: 'portal:lp:trainee',
    action: 'clicou',
    label: 'botao:meu-botao',
    nonInteraction: false
});

// Evento de visualização de página
window.GTMTracking.pushEvent('pageviewGA', {
    page: '/hotsite/trainee/minha-pagina'
});
```

### 3. Configurar no Google Tag Manager

No GTM, configure triggers para capturar os eventos:

1. **Tipo de Trigger**: Custom Event
2. **Nome do Evento**: `eventGA`, `pageviewGA`
3. **Variáveis**: Use as variáveis enviadas no evento

### 4. Configurar Tags no GTM

Exemplo de configuração para Google Analytics 4:

```javascript
// Configuração da tag
{
    "event_name": "{{Event}}",
    "event_category": "{{Event Category}}",
    "event_label": "{{Event Label}}",
    "event_action": "{{Event Action}}",
    "non_interaction": "{{Non Interaction}}"
}
```

## Vídeos do YouTube Suportados

O sistema automaticamente detecta e configura tracking para:

1. **Vídeo Principal**: `XAIgoY8nX1M` (seção hero)
2. **Vídeo Secundário**: `s8TkF73vTGA` (seção "Onde a mudança começa")

## Seções Monitoradas

- Sobre a empresa (`#sobre`)
- O Programa (`#programa`)
- Pré Requisitos (`#pre-requisitos`)
- Processo Seletivo (`#processo`)
- Benefícios (`#beneficios`)
- FAQ (`#faq`)

## Benefícios Monitorados

- Santander (`#js-corp-santander`)
- Aymore (`#js-corp-aymore`)
- F1rst (`#js-corp-2`)
- Tools (`#js-corp-3`)

## Redes Sociais Monitoradas

- LinkedIn
- Instagram
- TikTok
- YouTube

## Debug e Teste

### Console Logs

Todos os eventos são logados no console do navegador para debug:

```javascript
console.log('GTM Event:', eventName, eventData);
```

### Verificar dataLayer

Para verificar se os eventos estão sendo enviados:

```javascript
// No console do navegador
console.log(window.dataLayer);
```

### Executar Testes

```javascript
// Executar testes automatizados
window.runGTMTests();
```

## Conformidade com Especificações Santander para LPs

### ✅ Padrões Seguidos

1. **Eventos de Interação**: Usam `eventGA` com `category`, `action`, `label`, `nonInteraction`
2. **Eventos de Visualização**: Usam `pageviewGA` com `page`
3. **Nomenclatura**: Valores em minúsculas, sem acentos, separados por hífens
4. **Categorias**: Seguem padrão `portal:lp:trainee`
5. **Labels**: Seguem padrão `[tipo]:[valor]`
6. **Limite de Caracteres**: Labels limitados a 100 caracteres
7. **Sem Dados Pessoais**: Não coleta informações pessoais
8. **URL Padrão**: `/hotsite/trainee/[path]`
9. **NonInteraction**: Configurado corretamente para scroll e tempo

### 📋 Checklist de Conformidade

- [x] Eventos usam `eventGA` e `pageviewGA`
- [x] Categorias seguem padrão `portal:lp:trainee`
- [x] Valores em minúsculas sem acentos
- [x] Labels seguem padrão `[tipo]:[valor]`
- [x] Limite de 100 caracteres nos labels
- [x] Sem coleta de dados pessoais
- [x] GTM configurado corretamente
- [x] dataLayer implementado
- [x] Testes automatizados funcionando
- [x] URL padrão `/hotsite/trainee/`
- [x] NonInteraction configurado
- [x] Formatação de valores implementada

## Considerações Técnicas

### Performance

- O script é carregado de forma assíncrona
- Event listeners são otimizados para evitar múltiplas instâncias
- Tracking de scroll usa throttling para melhor performance

### Compatibilidade

- Suporta navegadores modernos (ES6+)
- Fallback para navegadores mais antigos
- Funciona com e sem JavaScript habilitado

### Privacidade

- Respeita configurações de privacidade do usuário
- Não coleta dados pessoais
- Compatível com LGPD

## Troubleshooting

### Eventos não aparecem no GTM

1. Verificar se o GTM está carregado corretamente
2. Verificar console para erros JavaScript
3. Verificar se o dataLayer está sendo criado
4. Verificar se os eventos estão sendo enviados

### Vídeos do YouTube não são trackeados

1. Verificar se os iframes têm a URL correta
2. Verificar se a API do YouTube está habilitada
3. Verificar se não há bloqueadores de script

### Botões não são trackeados

1. Verificar se a classe `tm-tracking` está presente
2. Verificar se os atributos de dados estão corretos
3. Verificar se não há conflitos com outros scripts

## Suporte

Para dúvidas ou problemas com a implementação, consulte:

1. Console do navegador para logs de debug
2. Documentação do Google Tag Manager
3. Especificações do Santander para LPs
4. Equipe de desenvolvimento

---

**Versão**: 3.0  
**Data**: Dezembro 2024  
**Autor**: Implementação GTM Santander Trainee 2026  
**Status**: ✅ Conforme especificações do Santander para LPs 