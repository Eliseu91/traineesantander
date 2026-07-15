// Google Tag Manager Tracking Implementation
// Implementação de eventos do GTM seguindo especificações do Santander para LPs

(function() {
    'use strict';

    // Verificar se o dataLayer existe, se não, criar
    window.dataLayer = window.dataLayer || [];

    // Função para enviar eventos seguindo padrão do Santander
    function pushGTMEvent(eventName, eventData) {
        if (window.dataLayer) {
            window.dataLayer.push({
                'event': eventName,
                ...eventData
            });
            console.log('GTM Event:', eventName, eventData);
        }
    }

    // Função para obter dados de tracking de elementos
    function getTrackingData(element) {
        return {
            category: 'portal:lp:trainee', // Sempre usar categoria padrão
            action: element.getAttribute('data-acao') || 'clicou',
            label: element.getAttribute('data-rotulo') || element.textContent.trim(),
            page: window.location.pathname || '/',
            texto: element.textContent.trim()
        };
    }

    // Função para identificar botões de inscrição e gerar labels únicos
    function getInscricaoButtonLabel(element) {
        // Verificar se é um botão de inscrição
        const isInscricaoButton = element.textContent.toLowerCase().includes('inscrever') || 
                                 element.textContent.toLowerCase().includes('inscrição') ||
                                 element.classList.contains('inscricao-btn') ||
                                 element.getAttribute('data-tipo') === 'inscricao';
        
        if (!isInscricaoButton) return null;
        
        // Buscar todos os botões de inscrição na página
        const inscricaoButtons = document.querySelectorAll('a[href*="universia.net"], a[href*="vagas.com.br"], .inscricao-btn, [data-tipo="inscricao"]');
        
        // Encontrar o índice do botão atual
        let buttonIndex = 0;
        for (let i = 0; i < inscricaoButtons.length; i++) {
            if (inscricaoButtons[i] === element) {
                buttonIndex = i + 1;
                break;
            }
        }
        
        // Se não encontrou na lista, verificar por texto
        if (buttonIndex === 0) {
            const allButtons = document.querySelectorAll('a, button');
            let inscricaoCount = 0;
            
            for (let i = 0; i < allButtons.length; i++) {
                const btn = allButtons[i];
                const btnText = btn.textContent.toLowerCase();
                
                if (btnText.includes('inscrever') || btnText.includes('inscrição')) {
                    inscricaoCount++;
                    if (btn === element) {
                        buttonIndex = inscricaoCount;
                        break;
                    }
                }
            }
        }
        
        // Se ainda não encontrou, usar posição no DOM
        if (buttonIndex === 0) {
            const allElements = document.querySelectorAll('*');
            let inscricaoCount = 0;
            
            for (let i = 0; i < allElements.length; i++) {
                const el = allElements[i];
                const elText = el.textContent.toLowerCase();
                
                if (elText.includes('inscrever') || elText.includes('inscrição')) {
                    inscricaoCount++;
                    if (el === element) {
                        buttonIndex = inscricaoCount;
                        break;
                    }
                }
            }
        }
        
        return buttonIndex > 0 ? `botao:inscrever-${buttonIndex}` : 'botao:inscrever-1';
    }

    // Função para listar botões de inscrição encontrados na página (debug)
    function listInscricaoButtons() {
        console.log('🔍 Procurando botões de inscrição na página...');
        
        const inscricaoButtons = document.querySelectorAll('a[href*="universia.net"], a[href*="vagas.com.br"], .inscricao-btn, [data-tipo="inscricao"]');
        const allButtons = document.querySelectorAll('a, button');
        
        let inscricaoCount = 0;
        const foundButtons = [];
        
        // Verificar botões específicos
        inscricaoButtons.forEach((btn, index) => {
            inscricaoCount++;
            foundButtons.push({
                index: inscricaoCount,
                element: btn,
                text: btn.textContent.trim(),
                href: btn.href || 'N/A',
                label: `botao:inscrever-${inscricaoCount}`
            });
        });
        
        // Verificar por texto em todos os botões
        allButtons.forEach(btn => {
            const btnText = btn.textContent.toLowerCase();
            if ((btnText.includes('inscrever') || btnText.includes('inscrição')) && !inscricaoButtons.includes(btn)) {
                inscricaoCount++;
                foundButtons.push({
                    index: inscricaoCount,
                    element: btn,
                    text: btn.textContent.trim(),
                    href: btn.href || 'N/A',
                    label: `botao:inscrever-${inscricaoCount}`
                });
            }
        });
        
        console.log(`📊 Encontrados ${foundButtons.length} botões de inscrição:`);
        foundButtons.forEach(btn => {
            console.log(`  ${btn.index}. "${btn.text}" -> ${btn.label} (${btn.href})`);
        });
        
        return foundButtons;
    }

    // Função para formatar valores seguindo especificações do Santander
    function formatSantanderValue(value) {
        if (!value) return '';
        
        // Converter para minúsculas, remover acentos e caracteres especiais
        return value.toLowerCase()
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '') // Remove acentos
            .replace(/[^a-z0-9\s-]/g, '') // Remove caracteres especiais exceto hífen
            .replace(/\s+/g, '-') // Substitui espaços por hífen
            .replace(/-+/g, '-') // Remove hífens duplicados
            .replace(/^-|-$/g, ''); // Remove hífens no início e fim
    }

    // Função para limitar string a 100 caracteres
    function limitString(str, maxLength = 100) {
        if (!str) return '';
        return str.length > maxLength ? str.substring(0, maxLength) : str;
    }

    // Função para tracking de botões seguindo especificações do Santander
    function setupButtonTracking() {
        // Tracking para elementos com classe tm-tracking
        document.addEventListener('click', function(e) {
            const target = e.target.closest('.tm-tracking');
            if (target) {
                const trackingData = getTrackingData(target);
                const label = limitString(formatSantanderValue(trackingData.label));
                
                pushGTMEvent('eventGA', {
                    category: trackingData.category,
                    action: 'clicou',
                    label: 'botao:' + label,
                    nonInteraction: false
                });
            }
        });

        // Tracking específico para botões de inscrição
        document.addEventListener('click', function(e) {
            const target = e.target.closest('a[href*="universia.net"], a[href*="vagas.com.br"]');
            if (target) {
                const buttonLabel = getInscricaoButtonLabel(target);
                
                pushGTMEvent('eventGA', {
                    category: 'portal:lp:trainee',
                    action: 'clicou',
                    label: buttonLabel,
                    nonInteraction: false
                });
                
                console.log('🔘 Botão de inscrição clicado:', buttonLabel);
            }
        });

        // Tracking específico para botão "Quero me inscrever" na Área de Varejo
        document.addEventListener('click', function(e) {
            const target = e.target.closest('a[href*="varejo"], .btn-varejo, [data-area="varejo"]');
            if (target) {
                // Verificar se é especificamente o botão de inscrição na área de varejo
                const buttonText = target.textContent.toLowerCase();
                if (buttonText.includes('inscrever') || buttonText.includes('inscrição') || target.classList.contains('inscricao-btn')) {
                    const buttonLabel = getInscricaoButtonLabel(target);
                    
                    pushGTMEvent('eventGA', {
                        category: 'portal:lp:trainee',
                        action: 'clicou',
                        label: buttonLabel,
                        nonInteraction: false
                    });
                    
                    console.log('🔘 Botão de inscrição varejo clicado:', buttonLabel);
                }
            }
        });

        // Tracking para botões "Quero saber mais"
        document.addEventListener('click', function(e) {
            const target = e.target.closest('.btn-more-info');
            if (target) {
                pushGTMEvent('eventGA', {
                    category: 'portal:lp:trainee',
                    action: 'clicou',
                    label: 'botao:quero-saber-mais',
                    nonInteraction: false
                });
            }
        });

        // Tracking para abas de áreas
        document.addEventListener('click', function(e) {
            const target = e.target.closest('.areas-tab');
            if (target) {
                const areaName = target.getAttribute('data-area') || target.textContent.trim();
                const formattedArea = limitString(formatSantanderValue(areaName));
                
                pushGTMEvent('eventGA', {
                    category: 'portal:lp:trainee',
                    action: 'clicou',
                    label: 'botao:aba:' + formattedArea,
                    nonInteraction: false
                });
            }
        });

        // Tracking para botões de benefícios
        document.addEventListener('click', function(e) {
            const target = e.target.closest('#js-corp-santander, #js-corp-aymore, #js-corp-2, #js-corp-3');
            if (target) {
                let benefitName = '';
                if (target.id === 'js-corp-santander') benefitName = 'santander';
                else if (target.id === 'js-corp-aymore') benefitName = 'aymore';
                else if (target.id === 'js-corp-2') benefitName = 'f1rst';
                else if (target.id === 'js-corp-3') benefitName = 'tools';

                pushGTMEvent('eventGA', {
                    category: 'portal:lp:trainee',
                    action: 'clicou',
                    label: 'botao:beneficio:' + benefitName,
                    nonInteraction: false
                });
            }
        });

        // Tracking para FAQ
        document.addEventListener('click', function(e) {
            const target = e.target.closest('.faq-question');
            if (target) {
                const questionText = target.textContent.trim();
                const formattedQuestion = limitString(formatSantanderValue(questionText));
                
                pushGTMEvent('eventGA', {
                    category: 'portal:lp:trainee',
                    action: 'clicou',
                    label: 'botao:pergunta:' + formattedQuestion,
                    nonInteraction: false
                });
            }
        });

        // Tracking para links de redes sociais
        document.addEventListener('click', function(e) {
            const target = e.target.closest('a[href*="linkedin"], a[href*="instagram"], a[href*="tiktok"], a[href*="youtube"]');
            if (target) {
                let socialNetwork = '';
                if (target.href.includes('linkedin')) socialNetwork = 'linkedin';
                else if (target.href.includes('instagram')) socialNetwork = 'instagram';
                else if (target.href.includes('tiktok')) socialNetwork = 'tiktok';
                else if (target.href.includes('youtube')) socialNetwork = 'youtube';

                pushGTMEvent('eventGA', {
                    category: 'portal:lp:trainee',
                    action: 'clicou',
                    label: 'link:rede-social:' + socialNetwork,
                    nonInteraction: false
                });
            }
        });
    }

    // Função para tracking de vídeos do YouTube seguindo especificações do Santander
    function setupYouTubeTracking() {
        // Função para extrair ID do vídeo do YouTube
        function getYouTubeVideoId(url) {
            const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
            const match = url.match(regExp);
            return (match && match[2].length === 11) ? match[2] : null;
        }

        // Função para configurar tracking de um iframe do YouTube
        function setupYouTubeIframeTracking(iframe) {
            const videoUrl = iframe.src;
            const videoId = getYouTubeVideoId(videoUrl);
            
            if (!videoId) return;

            // Adicionar parâmetros para API do YouTube
            const newUrl = videoUrl + (videoUrl.includes('?') ? '&' : '?') + 'enablejsapi=1&origin=' + window.location.origin;
            iframe.src = newUrl;

            // Aguardar o iframe carregar
            iframe.addEventListener('load', function() {
                // Configurar listener para mensagens do YouTube
                window.addEventListener('message', function(event) {
                    if (event.origin !== 'https://www.youtube.com') return;
                    
                    const data = JSON.parse(event.data);
                    
                    switch (data.event) {
                        case 'onReady':
                            pushGTMEvent('eventGA', {
                                category: 'portal:lp:trainee',
                                action: 'carregou',
                                label: 'video:youtube:' + videoId,
                                nonInteraction: false
                            });
                            break;
                            
                        case 'onStateChange':
                            switch (data.info) {
                                case 0: // Ended
                                    pushGTMEvent('eventGA', {
                                        category: 'portal:lp:trainee',
                                        action: 'finalizou',
                                        label: 'video:youtube:' + videoId,
                                        nonInteraction: false
                                    });
                                    break;
                                    
                                case 1: // Playing
                                    pushGTMEvent('eventGA', {
                                        category: 'portal:lp:trainee',
                                        action: 'iniciou',
                                        label: 'video:youtube:' + videoId,
                                        nonInteraction: false
                                    });
                                    break;
                                    
                                case 2: // Paused
                                    pushGTMEvent('eventGA', {
                                        category: 'portal:lp:trainee',
                                        action: 'pausou',
                                        label: 'video:youtube:' + videoId,
                                        nonInteraction: false
                                    });
                                    break;
                            }
                            break;
                    }
                });
            });
        }

        // Configurar tracking para todos os iframes do YouTube existentes
        function setupExistingYouTubeVideos() {
            const iframes = document.querySelectorAll('iframe[src*="youtube.com/embed"]');
            iframes.forEach(function(iframe) {
                setupYouTubeIframeTracking(iframe);
            });
        }

        // Configurar tracking para vídeos adicionados dinamicamente
        function setupDynamicYouTubeVideos() {
            const observer = new MutationObserver(function(mutations) {
                mutations.forEach(function(mutation) {
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) { // Element node
                            const iframes = node.querySelectorAll ? node.querySelectorAll('iframe[src*="youtube.com/embed"]') : [];
                            iframes.forEach(function(iframe) {
                                setupYouTubeIframeTracking(iframe);
                            });
                            
                            // Se o próprio node é um iframe
                            if (node.tagName === 'IFRAME' && node.src && node.src.includes('youtube.com/embed')) {
                                setupYouTubeIframeTracking(node);
                            }
                        }
                    });
                });
            });

            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
        }

        // Inicializar tracking de vídeos
        setupExistingYouTubeVideos();
        setupDynamicYouTubeVideos();
    }

    // Função para tracking específico de cliques em vídeos do YouTube
    function setupYouTubeClickTracking() {
        // Tracking para cliques em thumbnails ou botões de play do YouTube
        document.addEventListener('click', function(e) {
            const target = e.target;
            
            // Verificar se é um clique em thumbnail ou botão de play do YouTube
            const youtubeThumbnail = target.closest('.youtube-thumbnail, .video-thumbnail, [data-youtube-id], .video-thumb');
            const youtubePlayButton = target.closest('.play-button, .video-play, .youtube-play, .play-btn, .video-play-btn');
            const youtubeContainer = target.closest('.video-container, .youtube-container, .video-wrapper, .hero-video, .section-video');
            const youtubeLink = target.closest('a[href*="youtube.com"], a[href*="youtu.be"]');
            
            if (youtubeThumbnail || youtubePlayButton || youtubeContainer || youtubeLink) {
                let videoId = '';
                
                // Tentar obter o ID do vídeo de diferentes formas
                if (youtubeThumbnail) {
                    videoId = youtubeThumbnail.getAttribute('data-youtube-id') || 
                              youtubeThumbnail.getAttribute('data-video-id') ||
                              youtubeThumbnail.getAttribute('data-video');
                } else if (youtubePlayButton) {
                    videoId = youtubePlayButton.getAttribute('data-youtube-id') || 
                              youtubePlayButton.getAttribute('data-video-id') ||
                              youtubePlayButton.getAttribute('data-video');
                } else if (youtubeContainer) {
                    videoId = youtubeContainer.getAttribute('data-youtube-id') || 
                              youtubeContainer.getAttribute('data-video-id') ||
                              youtubeContainer.getAttribute('data-video');
                } else if (youtubeLink) {
                    // Extrair ID da URL do YouTube
                    const url = youtubeLink.href;
                    const regExp = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
                    const match = url.match(regExp);
                    if (match) videoId = match[1];
                }
                
                // Se não encontrou o ID, tentar extrair da URL ou src
                if (!videoId) {
                    const iframe = target.closest('.video-container, .youtube-container, .video-wrapper, .hero-video, .section-video')?.querySelector('iframe');
                    if (iframe && iframe.src) {
                        const regExp = /(?:youtube\.com\/embed\/|youtu\.be\/)([^&\n?#]+)/;
                        const match = iframe.src.match(regExp);
                        if (match) videoId = match[1];
                    }
                }
                
                // Se ainda não encontrou, usar IDs conhecidos baseado na posição
                if (!videoId) {
                    const container = target.closest('.video-container, .youtube-container, .video-wrapper, .hero-video, .section-video');
                    if (container) {
                        // Verificar se é o vídeo principal ou secundário baseado na posição ou classe
                        if (container.classList.contains('hero-video') || container.closest('#hero') || container.closest('.hero')) {
                            videoId = 'XAIgoY8nX1M'; // Vídeo principal
                        } else if (container.classList.contains('section-video') || container.closest('.section')) {
                            videoId = 's8TkF73vTGA'; // Vídeo secundário
                        } else {
                            // Tentar identificar pelo contexto
                            const parentSection = container.closest('section');
                            if (parentSection && parentSection.id === 'hero') {
                                videoId = 'XAIgoY8nX1M';
                            } else {
                                videoId = 's8TkF73vTGA';
                            }
                        }
                    }
                }
                
                if (videoId) {
                    console.log('🎥 Clique em vídeo detectado:', videoId);
                    pushGTMEvent('eventGA', {
                        category: 'portal:lp:trainee',
                        action: 'clicou',
                        label: 'video:youtube:click:' + videoId,
                        nonInteraction: false
                    });
                }
            }
        });
        
        // Também detectar cliques em elementos com classes específicas de vídeo
        document.addEventListener('click', function(e) {
            const target = e.target;
            
            // Verificar se o elemento clicado tem classes relacionadas a vídeo
            if (target.classList.contains('video') || 
                target.classList.contains('youtube') ||
                target.closest('.video, .youtube')) {
                
                console.log('🎥 Clique em elemento de vídeo detectado');
                
                // Tentar identificar o vídeo
                let videoId = 'XAIgoY8nX1M'; // Default para vídeo principal
                
                // Verificar se está na seção hero
                const heroSection = target.closest('#hero, .hero');
                if (!heroSection) {
                    videoId = 's8TkF73vTGA'; // Vídeo secundário se não estiver no hero
                }
                
                pushGTMEvent('eventGA', {
                    category: 'portal:lp:trainee',
                    action: 'clicou',
                    label: 'video:youtube:click:' + videoId,
                    nonInteraction: false
                });
            }
        });
    }

    // Função para tracking específico de cliques nas abas
    function setupTabClickTracking() {
        // Tracking para cliques em abas de áreas
        document.addEventListener('click', function(e) {
            const target = e.target.closest('.areas-tab, .tab-item, [data-tab], .nav-tab');
            if (target) {
                const areaName = target.getAttribute('data-area') || 
                                target.getAttribute('data-tab') || 
                                target.textContent.trim();
                const formattedArea = limitString(formatSantanderValue(areaName));
                
                pushGTMEvent('eventGA', {
                    category: 'portal:lp:trainee',
                    action: 'clicou',
                    label: 'tab:area:' + formattedArea,
                    nonInteraction: false
                });
            }
        });

        // Tracking para cliques em abas de navegação geral
        document.addEventListener('click', function(e) {
            const target = e.target.closest('.nav-tab, .tab-nav, [role="tab"]');
            if (target) {
                const tabName = target.getAttribute('data-tab') || 
                               target.getAttribute('aria-label') || 
                               target.textContent.trim();
                const formattedTab = limitString(formatSantanderValue(tabName));
                
                pushGTMEvent('eventGA', {
                    category: 'portal:lp:trainee',
                    action: 'clicou',
                    label: 'tab:navegacao:' + formattedTab,
                    nonInteraction: false
                });
            }
        });
    }

    // Função para tracking de abertura de modal de inscrição
    function setupModalTracking() {
        // Tracking para abertura de modal de inscrição
        document.addEventListener('click', function(e) {
            const target = e.target.closest('a[href*="universia.net"], a[href*="vagas.com.br"], .inscricao-btn, .modal-trigger');
            if (target) {
                // Verificar se é um link externo ou modal
                if (target.href && (target.href.includes('universia.net') || target.href.includes('vagas.com.br'))) {
                    const buttonLabel = getInscricaoButtonLabel(target);
                    
                    pushGTMEvent('eventGA', {
                        category: 'portal:lp:trainee',
                        action: 'clicou',
                        label: buttonLabel,
                        nonInteraction: false
                    });
                    
                    console.log('🔘 Modal de inscrição (link externo) clicado:', buttonLabel);
                } else {
                    const buttonLabel = getInscricaoButtonLabel(target) || 'modal:inscricao:abrir';
                    
                    pushGTMEvent('eventGA', {
                        category: 'portal:lp:trainee',
                        action: 'clicou',
                        label: buttonLabel,
                        nonInteraction: false
                    });
                    
                    console.log('🔘 Modal de inscrição clicado:', buttonLabel);
                }
            }
        });

        // Tracking para fechamento de modal
        document.addEventListener('click', function(e) {
            const target = e.target;
            if (target.classList.contains('modal-close') || 
                target.classList.contains('close-modal') || 
                target.closest('.modal-close, .close-modal')) {
                
                pushGTMEvent('eventGA', {
                    category: 'portal:lp:trainee',
                    action: 'clicou',
                    label: 'modal:inscricao:fechar',
                    nonInteraction: false
                });
            }
        });

        // Tracking para envio de formulário no modal
        document.addEventListener('submit', function(e) {
            const form = e.target;
            if (form.closest('.modal, .inscricao-modal')) {
                pushGTMEvent('eventGA', {
                    category: 'portal:lp:trainee',
                    action: 'enviou',
                    label: 'modal:inscricao:formulario',
                    nonInteraction: false
                });
            }
        });

        // Tracking para visualização de modal (quando modal é exibido)
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                mutation.addedNodes.forEach(function(node) {
                    if (node.nodeType === 1 && node.classList && 
                        (node.classList.contains('modal') || node.classList.contains('inscricao-modal'))) {
                        
                        pushGTMEvent('eventGA', {
                            category: 'portal:lp:trainee',
                            action: 'exibiu',
                            label: 'modal:inscricao:visualizado',
                            nonInteraction: false
                        });
                    }
                });
            });
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    // Função para tracking de scroll seguindo especificações do Santander
    function setupEngagementTracking() {
        let scrollEvents = [25, 50, 75, 90];
        let scrollEventsTriggered = [];

        // Tracking de scroll
        window.addEventListener('scroll', function() {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = Math.round((scrollTop / docHeight) * 100);

            scrollEvents.forEach(function(depth) {
                if (scrollPercent >= depth && !scrollEventsTriggered.includes(depth)) {
                    scrollEventsTriggered.push(depth);
                    pushGTMEvent('eventGA', {
                        category: 'portal:lp:trainee',
                        action: 'scroll',
                        label: 'scroll:' + depth + 'porcento',
                        nonInteraction: true
                    });
                }
            });
        });

        // Tracking de tempo na página
        let timeOnPage = 0;
        setInterval(function() {
            timeOnPage += 30;
            if (timeOnPage === 30 || timeOnPage === 60 || timeOnPage === 120 || timeOnPage === 300) {
                pushGTMEvent('eventGA', {
                    category: 'portal:lp:trainee',
                    action: 'tempo',
                    label: 'tempo:' + timeOnPage + 'segundos',
                    nonInteraction: true
                });
            }
        }, 30000); // Verificar a cada 30 segundos
    }

    // Função para tracking de visualização de seções seguindo especificações do Santander
    function setupSectionTracking() {
        // REMOVIDO: Esta função estava causando pageviews incorretos no GA
        // As seções não devem gerar pageviewGA automaticamente
        // PageviewGA deve ser usado apenas para navegação real entre páginas
        
        console.log('ℹ️ Section tracking desabilitado para evitar pageviews incorretos no GA');
    }

    // Função para tracking de formulários seguindo especificações do Santander
    function setupFormTracking() {
        document.addEventListener('submit', function(e) {
            const form = e.target;
            if (form.tagName === 'FORM') {
                pushGTMEvent('eventGA', {
                    category: 'portal:lp:trainee',
                    action: 'enviou',
                    label: 'formulario:' + (form.id || 'form'),
                    nonInteraction: false
                });
            }
        });

        // Tracking de inputs
        document.addEventListener('blur', function(e) {
            const target = e.target;
            if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA' || target.tagName === 'SELECT') {
                const inputName = target.name || target.id || 'input';
                const formattedName = limitString(formatSantanderValue(inputName));
                
                pushGTMEvent('eventGA', {
                    category: 'portal:lp:trainee',
                    action: 'preencheu',
                    label: 'input:' + formattedName,
                    nonInteraction: false
                });
            }
        });
    }

    // Função para enviar pageview inicial seguindo especificações do Santander
    function sendInitialPageview() {
        // Obter a URL atual do objeto window
        const currentPath = window.location.pathname;
        const currentUrl = window.location.href;
        
        console.log('🔍 URL atual:', currentUrl);
        console.log('🔍 Path atual:', currentPath);
        
        // Formatar o path seguindo padrão do Santander
        let formattedPath = '';
        
        if (currentPath === '/' || currentPath === '' || currentPath === '/index.html') {
            // Se for a página inicial, usar 'home'
            formattedPath = 'home';
        } else {
            // Remover barras iniciais e finais e formatar
            formattedPath = currentPath.replace(/^\/+|\/+$/g, ''); // Remove barras no início e fim
            formattedPath = formatSantanderValue(formattedPath); // Formata seguindo padrão Santander
        }
        
        // Limitar a 100 caracteres conforme especificação
        formattedPath = limitString(formattedPath, 100);
        
        // Construir a URL final seguindo padrão do Santander
        const finalPageUrl = '/hotsite/trainee/' + formattedPath;
        
        // Enviar pageviewGA com o padrão correto
        pushGTMEvent('pageviewGA', {
            page: finalPageUrl
        });
        
        console.log('📄 Pageview enviado:', finalPageUrl);
        console.log('📄 URL original:', currentPath);
        console.log('📄 Path formatado:', formattedPath);
    }

    // Função de inicialização
    function init() {
        // Aguardar o DOM estar pronto
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', function() {
                sendInitialPageview();
                setupButtonTracking();
                setupYouTubeTracking();
                setupEngagementTracking();
                setupSectionTracking();
                setupFormTracking();
                setupYouTubeClickTracking(); // Adicionado
                setupTabClickTracking(); // Adicionado
                setupModalTracking(); // Adicionado
                
                // Listar botões de inscrição encontrados (debug)
                setTimeout(listInscricaoButtons, 1000);
            });
        } else {
            // DOM já está pronto
            sendInitialPageview();
            setupButtonTracking();
            setupYouTubeTracking();
            setupEngagementTracking();
            setupSectionTracking();
            setupFormTracking();
            setupYouTubeClickTracking(); // Adicionado
            setupTabClickTracking(); // Adicionado
            setupModalTracking(); // Adicionado
            
            // Listar botões de inscrição encontrados (debug)
            setTimeout(listInscricaoButtons, 1000);
        }
    }

    // Inicializar quando o script for carregado
    init();

    // Expor funções globalmente para uso manual se necessário
    window.GTMTracking = {
        pushEvent: pushGTMEvent,
        getTrackingData: getTrackingData,
        formatSantanderValue: formatSantanderValue,
        limitString: limitString,
        getInscricaoButtonLabel: getInscricaoButtonLabel,
        listInscricaoButtons: listInscricaoButtons
    };

})(); 