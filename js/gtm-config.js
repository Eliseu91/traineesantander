// Configurações do Google Tag Manager seguindo especificações do Santander para LPs
// Arquivo de configuração centralizada para facilitar manutenção

window.GTMConfig = {
    // ID do GTM (já configurado no HTML)
    containerId: 'GTM-THV465P',
    
    // Configurações de eventos seguindo padrão do Santander para LPs
    events: {
        // Eventos de visualização de página
        pageviewGA: 'pageviewGA',
        
        // Eventos de interação
        eventGA: 'eventGA',
        
        // Eventos auxiliares
        auxGA: 'auxGA',
        
        // Eventos de ecommerce (se necessário)
        purchase: 'purchase',
        viewItem: 'view_item',
        selectItem: 'select_item',
        viewPromotion: 'view_promotion',
        selectPromotion: 'select_promotion'
    },
    
    // Configurações de categorias seguindo padrão do Santander para LPs
    categories: {
        // Categoria principal para o projeto (formato: portal:lp:produto)
        main: 'portal:lp:trainee'
    },
    
    // Configurações de ações seguindo padrão do Santander
    actions: {
        clicou: 'clicou',
        carregou: 'carregou',
        iniciou: 'iniciou',
        pausou: 'pausou',
        finalizou: 'finalizou',
        scroll: 'scroll',
        tempo: 'tempo',
        enviou: 'enviou',
        preencheu: 'preencheu'
    },
    
    // Configurações de scroll
    scroll: {
        depths: [25, 50, 75, 90],
        throttle: 100 // ms
    },
    
    // Configurações de tempo na página
    timeOnPage: {
        intervals: [30, 60, 120, 300], // segundos
        checkInterval: 30000 // ms
    },
    
    // IDs dos vídeos do YouTube
    youtubeVideos: {
        main: 'XAIgoY8nX1M',
        secondary: 's8TkF73vTGA'
    },
    
    // IDs das seções
    sections: [
        { id: 'sobre', name: 'sobre' },
        { id: 'programa', name: 'programa' },
        { id: 'pre-requisitos', name: 'pre-requisitos' },
        { id: 'processo', name: 'processo' },
        { id: 'beneficios', name: 'beneficios' },
        { id: 'faq', name: 'faq' }
    ],
    
    // IDs dos benefícios
    benefits: [
        { id: 'js-corp-santander', name: 'santander' },
        { id: 'js-corp-aymore', name: 'aymore' },
        { id: 'js-corp-2', name: 'f1rst' },
        { id: 'js-corp-3', name: 'tools' }
    ],
    
    // URLs de redes sociais
    socialMedia: {
        linkedin: 'linkedin.com',
        instagram: 'instagram.com',
        tiktok: 'tiktok.com',
        youtube: 'youtube.com'
    },
    
    // URLs de inscrição
    inscricaoUrls: [
        'universia.net',
        'vagas.com.br'
    ],
    
    // Configurações de debug
    debug: {
        enabled: false, // Habilitar logs detalhados
        logEvents: true, // Logar eventos no console
        simulateEvents: false // Simular eventos para teste
    },
    
    // Configurações de performance
    performance: {
        throttleScroll: true,
        debounceResize: true,
        lazyLoad: true
    },
    
    // Configurações de privacidade
    privacy: {
        respectDoNotTrack: true,
        anonymizeIP: true,
        cookieConsent: true
    },
    
    // Configurações específicas do Santander para LPs
    santander: {
        // Valores em string devem ser enviados em letras minúsculas
        lowercaseValues: true,
        
        // Valores de parâmetros não devem ultrapassar 100 caracteres
        maxLabelLength: 100,
        
        // Não coletar informações pessoais do usuário
        noPersonalData: true,
        
        // Padrão de nomenclatura para labels conforme especificações LPs
        labelPatterns: {
            botao: 'botao:',
            link: 'link:',
            imagem: 'imagem:',
            banner: 'banner:',
            card: 'card:',
            input: 'input:',
            video: 'video:youtube:',
            scroll: 'scroll:',
            tempo: 'tempo:',
            formulario: 'formulario:',
            aba: 'aba:',
            beneficio: 'beneficio:',
            pergunta: 'pergunta:',
            redeSocial: 'rede-social:'
        },
        
        // Padrão de URL para pageview conforme especificações LPs
        pageviewPattern: '/hotsite/trainee/',
        
        // Configurações de nonInteraction
        nonInteraction: {
            scroll: true,
            tempo: true,
            default: false
        }
    }
};

// Função para verificar se o debug está habilitado
window.GTMConfig.isDebugEnabled = function() {
    return this.debug.enabled || window.location.search.includes('debug=gtm');
};

// Função para verificar se deve logar eventos
window.GTMConfig.shouldLogEvents = function() {
    return this.debug.logEvents || this.isDebugEnabled();
};

// Função para obter configuração
window.GTMConfig.get = function(key, defaultValue) {
    const keys = key.split('.');
    let value = this;
    
    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            return defaultValue;
        }
    }
    
    return value;
};

// Função para definir configuração
window.GTMConfig.set = function(key, value) {
    const keys = key.split('.');
    const lastKey = keys.pop();
    let obj = this;
    
    for (const k of keys) {
        if (!(k in obj) || typeof obj[k] !== 'object') {
            obj[k] = {};
        }
        obj = obj[k];
    }
    
    obj[lastKey] = value;
};

// Função para formatar label seguindo padrão do Santander para LPs
window.GTMConfig.formatLabel = function(type, value, differentiation = '') {
    const patterns = this.santander.labelPatterns;
    const prefix = patterns[type] || '';
    
    // Converter para minúsculas e substituir espaços por hífens
    let formattedValue = value.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais exceto hífen
        .replace(/\s+/g, '-') // Substitui espaços por hífen
        .replace(/-+/g, '-') // Remove hífens duplicados
        .replace(/^-|-$/g, ''); // Remove hífens no início e fim
    
    // Limitar a 100 caracteres
    if (formattedValue.length > this.santander.maxLabelLength) {
        formattedValue = formattedValue.substring(0, this.santander.maxLabelLength);
    }
    
    // Adicionar diferenciação se fornecida
    if (differentiation) {
        const formattedDiff = differentiation.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/[^a-z0-9\s-]/g, '')
            .replace(/\s+/g, '-')
            .replace(/-+/g, '-')
            .replace(/^-|-$/g, '');
        
        return prefix + formattedValue + ':' + formattedDiff;
    }
    
    return prefix + formattedValue;
};

// Função para formatar pageview conforme especificações LPs
window.GTMConfig.formatPageview = function(path) {
    const basePattern = this.santander.pageviewPattern;
    const formattedPath = path.toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .replace(/[^a-z0-9\s-]/g, '')
        .replace(/\s+/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    
    return basePattern + formattedPath;
};

// Função para verificar se deve usar nonInteraction
window.GTMConfig.shouldUseNonInteraction = function(action) {
    const nonInteractionConfig = this.santander.nonInteraction;
    return nonInteractionConfig[action] !== undefined ? nonInteractionConfig[action] : nonInteractionConfig.default;
};

// Log de inicialização se debug estiver habilitado
if (window.GTMConfig.isDebugEnabled()) {
    console.log('🔧 GTM Config carregado (LPs):', window.GTMConfig);
} 