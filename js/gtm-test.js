// Script de teste para verificar o funcionamento do GTM Tracking seguindo especificações do Santander para LPs
// Este script deve ser removido em produção

(function() {
    'use strict';

    console.log('🧪 GTM Tracking Test - Iniciando testes seguindo especificações do Santander para LPs...');

    // Função para testar se o dataLayer existe
    function testDataLayer() {
        console.log('📊 Testando dataLayer...');
        
        if (window.dataLayer) {
            console.log('✅ dataLayer encontrado:', window.dataLayer);
            return true;
        } else {
            console.error('❌ dataLayer não encontrado');
            return false;
        }
    }

    // Função para testar se o GTMTracking está disponível
    function testGTMTracking() {
        console.log('🔧 Testando GTMTracking...');
        
        if (window.GTMTracking && window.GTMTracking.pushEvent) {
            console.log('✅ GTMTracking disponível');
            return true;
        } else {
            console.error('❌ GTMTracking não disponível');
            return false;
        }
    }

    // Função para testar eventos de botões seguindo padrão eventGA
    function testButtonEvents() {
        console.log('🔘 Testando eventos de botões (eventGA)...');
        
        const buttons = document.querySelectorAll('.tm-tracking');
        console.log('📋 Botões com tm-tracking encontrados:', buttons.length);
        
        buttons.forEach((button, index) => {
            console.log(`   ${index + 1}. ${button.textContent.trim()} (${button.getAttribute('data-categoria')})`);
        });
        
        return buttons.length > 0;
    }

    // Função para testar vídeos do YouTube
    function testYouTubeVideos() {
        console.log('🎥 Testando vídeos do YouTube...');
        
        const iframes = document.querySelectorAll('iframe[src*="youtube.com/embed"]');
        console.log('📹 Iframes do YouTube encontrados:', iframes.length);
        
        iframes.forEach((iframe, index) => {
            const src = iframe.src;
            const videoId = src.match(/embed\/([^?]+)/);
            console.log(`   ${index + 1}. ${videoId ? videoId[1] : 'ID não encontrado'} - ${src}`);
        });
        
        return iframes.length > 0;
    }

    // Função para testar seções
    function testSections() {
        console.log('📑 Testando seções (pageviewGA)...');
        
        const sections = ['sobre', 'programa', 'pre-requisitos', 'processo', 'beneficios', 'faq'];
        const foundSections = [];
        
        sections.forEach(sectionId => {
            const element = document.getElementById(sectionId);
            if (element) {
                foundSections.push(sectionId);
                console.log(`   ✅ ${sectionId} encontrado`);
            } else {
                console.log(`   ❌ ${sectionId} não encontrado`);
            }
        });
        
        return foundSections.length > 0;
    }

    // Função para testar benefícios
    function testBenefits() {
        console.log('🎁 Testando botões de benefícios...');
        
        const benefits = [
            { id: 'js-corp-santander', name: 'santander' },
            { id: 'js-corp-aymore', name: 'aymore' },
            { id: 'js-corp-2', name: 'f1rst' },
            { id: 'js-corp-3', name: 'tools' }
        ];
        
        const foundBenefits = [];
        
        benefits.forEach(benefit => {
            const element = document.getElementById(benefit.id);
            if (element) {
                foundBenefits.push(benefit.name);
                console.log(`   ✅ ${benefit.name} (${benefit.id}) encontrado`);
            } else {
                console.log(`   ❌ ${benefit.name} (${benefit.id}) não encontrado`);
            }
        });
        
        return foundBenefits.length > 0;
    }

    // Função para testar redes sociais
    function testSocialMedia() {
        console.log('📱 Testando links de redes sociais...');
        
        const socialLinks = document.querySelectorAll('a[href*="linkedin"], a[href*="instagram"], a[href*="tiktok"], a[href*="youtube"]');
        console.log('🔗 Links de redes sociais encontrados:', socialLinks.length);
        
        socialLinks.forEach((link, index) => {
            let network = '';
            if (link.href.includes('linkedin')) network = 'linkedin';
            else if (link.href.includes('instagram')) network = 'instagram';
            else if (link.href.includes('tiktok')) network = 'tiktok';
            else if (link.href.includes('youtube')) network = 'youtube';
            
            console.log(`   ${index + 1}. ${network} - ${link.href}`);
        });
        
        return socialLinks.length > 0;
    }

    // Função para testar FAQ
    function testFAQ() {
        console.log('❓ Testando FAQ...');
        
        const questions = document.querySelectorAll('.faq-question');
        console.log('❓ Perguntas FAQ encontradas:', questions.length);
        
        questions.forEach((question, index) => {
            const text = question.textContent.trim().substring(0, 50) + '...';
            console.log(`   ${index + 1}. ${text}`);
        });
        
        return questions.length > 0;
    }

    // Função para testar abas de áreas
    function testAreaTabs() {
        console.log('📂 Testando abas de áreas...');
        
        const tabs = document.querySelectorAll('.areas-tab');
        console.log('📂 Abas de áreas encontradas:', tabs.length);
        
        tabs.forEach((tab, index) => {
            const area = tab.getAttribute('data-area') || 'N/A';
            const text = tab.textContent.trim();
            console.log(`   ${index + 1}. ${text} (${area})`);
        });
        
        return tabs.length > 0;
    }

    // Função para limpar eventos de teste do dataLayer
    function clearTestEvents() {
        if (window.dataLayer) {
            // Remover eventos de teste (índices 3-7 conforme solicitado)
            // Manter apenas os eventos essenciais do GTM
            const essentialEvents = window.dataLayer.slice(0, 3); // Manter apenas os 3 primeiros eventos
            window.dataLayer.length = 0; // Limpar o array
            essentialEvents.forEach(event => window.dataLayer.push(event)); // Readicionar apenas os essenciais
            
            console.log('🧹 Eventos de teste removidos do dataLayer');
            console.log('📊 DataLayer atual:', window.dataLayer);
        }
    }

    // Função para verificar se os eventos seguem o padrão do Santander para LPs
    function testSantanderLPPatterns() {
        console.log('🔍 Testando padrões do Santander para LPs...');
        
        let patternsCorrect = true;
        
        // Verificar se os eventos usam eventGA e pageviewGA
        if (window.GTMConfig) {
            const events = window.GTMConfig.events;
            
            if (events.eventGA === 'eventGA') {
                console.log('✅ Evento eventGA configurado corretamente');
            } else {
                console.error('❌ Evento eventGA não configurado corretamente');
                patternsCorrect = false;
            }
            
            if (events.pageviewGA === 'pageviewGA') {
                console.log('✅ Evento pageviewGA configurado corretamente');
            } else {
                console.error('❌ Evento pageviewGA não configurado corretamente');
                patternsCorrect = false;
            }
        } else {
            console.error('❌ GTMConfig não encontrado');
            patternsCorrect = false;
        }
        
        // Verificar se as categorias seguem o padrão portal:lp:trainee
        if (window.GTMConfig && window.GTMConfig.categories) {
            const categories = window.GTMConfig.categories;
            
            if (categories.main === 'portal:lp:trainee') {
                console.log('✅ Categoria principal configurada corretamente (portal:lp:trainee)');
            } else {
                console.error('❌ Categoria principal não configurada corretamente');
                patternsCorrect = false;
            }
        }
        
        // Verificar se o padrão de pageview está correto
        if (window.GTMConfig && window.GTMConfig.santander) {
            const pageviewPattern = window.GTMConfig.santander.pageviewPattern;
            
            if (pageviewPattern === '/hotsite/trainee/') {
                console.log('✅ Padrão de pageview configurado corretamente (/hotsite/trainee/)');
            } else {
                console.error('❌ Padrão de pageview não configurado corretamente');
                patternsCorrect = false;
            }
        }
        
        return patternsCorrect;
    }

    // Função para testar formatação de valores
    function testValueFormatting() {
        console.log('🔤 Testando formatação de valores...');
        
        if (window.GTMTracking && window.GTMTracking.formatSantanderValue) {
            const testCases = [
                { input: 'Ação & Reação', expected: 'acao-reacao' },
                { input: 'São Paulo', expected: 'sao-paulo' },
                { input: 'Programa de Trainee 2026!', expected: 'programa-de-trainee-2026' },
                { input: 'Wealth Management', expected: 'wealth-management' }
            ];
            
            let allCorrect = true;
            
            testCases.forEach((testCase, index) => {
                const result = window.GTMTracking.formatSantanderValue(testCase.input);
                const isCorrect = result === testCase.expected;
                
                if (isCorrect) {
                    console.log(`   ✅ Teste ${index + 1}: "${testCase.input}" → "${result}"`);
                } else {
                    console.log(`   ❌ Teste ${index + 1}: "${testCase.input}" → "${result}" (esperado: "${testCase.expected}")`);
                    allCorrect = false;
                }
            });
            
            return allCorrect;
        } else {
            console.error('❌ Função formatSantanderValue não encontrada');
            return false;
        }
    }

    // Função para testar limite de caracteres
    function testCharacterLimit() {
        console.log('📏 Testando limite de caracteres...');
        
        if (window.GTMTracking && window.GTMTracking.limitString) {
            const longString = 'a'.repeat(150);
            const result = window.GTMTracking.limitString(longString);
            
            if (result.length <= 100) {
                console.log(`   ✅ String limitada corretamente: ${result.length} caracteres`);
                return true;
            } else {
                console.log(`   ❌ String não limitada corretamente: ${result.length} caracteres`);
                return false;
            }
        } else {
            console.error('❌ Função limitString não encontrada');
            return false;
        }
    }

    // Função para verificar performance
    function testPerformance() {
        console.log('⚡ Testando performance...');
        
        const startTime = performance.now();
        
        // Simular várias operações
        for (let i = 0; i < 1000; i++) {
            document.querySelectorAll('.tm-tracking');
        }
        
        const endTime = performance.now();
        const duration = endTime - startTime;
        
        console.log(`⏱️ Tempo de execução: ${duration.toFixed(2)}ms`);
        
        if (duration < 100) {
            console.log('✅ Performance OK');
            return true;
        } else {
            console.warn('⚠️ Performance pode estar lenta');
            return false;
        }
    }

    // Função para executar testes apenas quando solicitado
    function runGTMTests() {
        console.log('🧪 Iniciando testes do GTM...');
        
        // Verificar se o GTM está funcionando
        testDataLayer();
        testGTMTracking();
        
        // Verificar padrões do Santander
        testSantanderLPPatterns();
        
        // Testar formatação de valores
        testValueFormatting();
        
        // Testar limite de caracteres
        testCharacterLimit();
        
        console.log('✅ Testes concluídos!');
    }

    // Expor funções globalmente
    window.runGTMTests = runGTMTests;
    window.clearTestEvents = clearTestEvents;
    window.testDataLayer = testDataLayer;
    window.testGTMTracking = testGTMTracking;
    window.testSantanderLPPatterns = testSantanderLPPatterns;
    window.testValueFormatting = testValueFormatting;
    window.testCharacterLimit = testCharacterLimit;

    // Log inicial
    console.log('🔧 GTM Test Script carregado. Use window.runGTMTests() para executar testes.');
    console.log('🧹 Use window.clearTestEvents() para limpar eventos de teste do dataLayer.');

})(); 