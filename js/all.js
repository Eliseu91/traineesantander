"use strict";
AOS.init({
    duration: 800, // Aumentado para uma transição mais suave
    easing: 'ease-out-cubic', // Alterado para um easing mais suave
    delay: 100, // Pequeno delay para melhor percepção
    offset: 120,
    once: true,
    mirror: false,
    anchorPlacement: 'top-bottom',
    disable: 'mobile'
});
var menuList = document.querySelector(".header-nav"),
menuOpen = document.querySelector("#js-open"),
menuClose = document.querySelector("#js-close"),
menuItem = document.querySelectorAll(".item-list");

// Verificar se os elementos do menu existem
if (menuOpen && menuClose && menuList) {
    menuOpen.addEventListener("click", function () {
    menuList.classList.add("show"), menuClose.classList.remove("d-none"),
    menuOpen.classList.add("d-none")
    }), menuClose.addEventListener("click", function () {
    menuList.classList.remove("show"), menuClose.classList.add("d-none"),
    menuOpen.classList.remove("d-none")
    });
}
// Verificar se menuItem existe e tem elementos
if (menuItem && menuItem.length > 0) {
    for (var _loop = function (e) {
    menuItem[e].addEventListener("click", function () {
    menuList.classList
    .remove("show"), menuClose.classList.add("d-none"), menuOpen
    .classList.remove("d-none")
    })
    }, i = 0; i < menuItem.length; i++) _loop(i);
}
var swiper = new Swiper(".first-slide", {
slidesPerView: 1.3,
spaceBetween: 30,
pagination: {
el: ".swiper-pagination",
clickable: !0
},
breakpoints: {
768: {
slidesPerView: 3
}
}
}),
swiperBenefits = new Swiper(".benefits-slide", {
slidesPerView: 2.1,
spaceBetween: 12
}),
swiperTiktok = new Swiper(".tiktok-slide", {
initialSlide: 1,
slidesPerView: 1,
spaceBetween: 0,
centeredSlides: !0,
navigation: {
nextEl: ".swiper-button-next.ttk-btn",
prevEl: ".swiper-button-prev.ttk-btn"
},
breakpoints: {
768: {
slidesPerView: 3
}
}
});
swiperTiktok.on("slideChange", function () {
var e = document.querySelectorAll(".iframe-video");
Array.prototype.forEach.call(e, function (e) {
e.contentWindow.postMessage(
'{"event":"command","func":"pauseVideo","args":""}', "*")
})
});
var swiperStories = new Swiper(".stories-slide", {
slidesPerView: 1.2,
spaceBetween: 30,
breakpoints: {
768: {
slidesPerView: 2.2
},
992: {
slidesPerView: 4
}
},
navigation: {
nextEl: ".svt-next",
prevEl: ".svt-prev"
}
});
swiperStories.on("slideChange", function () {
var e = document.querySelectorAll(".iframe-video");
Array.prototype.forEach.call(e, function (e) {
e.contentWindow.postMessage(
'{"event":"command","func":"pauseVideo","args":""}', "*")
})
}), document.addEventListener("DOMContentLoaded", function () {
document.querySelectorAll(".razoes-item")
.forEach(function (e) {
e.addEventListener("mouseover", function () {
var e = document.querySelectorAll(".razoes-not-ativo"),
t = document.querySelectorAll(".razoes-ativo");
e.forEach(function (e) {
e.classList.remove("razoes-not-ativo")
}), t.forEach(function (e) {
e.classList.remove("razoes-ativo")
}), this.classList.add("razoes-ativo")
})
})
});
var menuBrasil = document.querySelector("#js-brasil"),
imgBrasil = document.querySelector("#js-img-brasil"),
textBrasil = document.querySelector("#js-text-brasil"),
menuMundo = document.querySelector("#js-mundo"),
imgMundo = document.querySelector("#js-img-mundo"),
textMundo = document.querySelector("#js-text-mundo"),
novoLeft = "./images/arrow-left-not.png",
oldLeft = "./images/arrow-left-a.png",
novoRight = "./images/arrow-right-not.png",
oldRight = "./images/arrow-right-a.png";
if (imgBrasil && imgMundo && menuBrasil && menuMundo && textBrasil && textMundo) {
    imgBrasil.addEventListener("click", function () {
    menuBrasil.classList.add("active"), menuMundo.classList.remove("active"),
    textBrasil.classList.remove("d-none"), textMundo.classList.add(
    "d-none"), imgBrasil.src = oldLeft, imgMundo.src = novoRight, AOS
    .refresh()
    }), imgMundo.addEventListener("click", function () {
    menuMundo.classList.add("active"), menuBrasil.classList.remove("active"),
    textMundo.classList.remove("d-none"), textBrasil.classList.add(
    "d-none"), imgMundo.src = oldRight, imgBrasil.src = novoLeft, AOS
    .refresh()
    });
}
var listBlack = document.querySelector("#js-list-black"),
listRed = document.querySelector("#js-list-red"),
itemBlack = document.querySelector(".item-list-black"),
itemRed = document.querySelector(".item-list-red");

// Verificar se os elementos existem antes de adicionar event listeners
if (listBlack && listRed && itemBlack && itemRed) {
    listBlack.addEventListener("click", function () {
    listBlack.classList.toggle("active"), listRed.classList.remove("active"),
    itemBlack.classList.toggle("d-none"), itemRed.classList.add("d-none"),
    conteudos.forEach(function (e) {
    e.style.display = "none"
    })
    }), listRed.addEventListener("click", function () {
    listBlack.classList.remove("active"), listRed.classList.toggle("active"),
    itemBlack.classList.add("d-none"), itemRed.classList.toggle("d-none"),
    conteudos.forEach(function (e) {
    e.style.display = "none"
    })
    });
}
var conteudos = document.querySelectorAll(".conteudo"),
tabs = document.querySelectorAll(".tab");

function abrirAba(e) {
conteudos.forEach(function (e) {
e.style.display = "none"
});
var t = document.getElementById(e),
s = document.getElementById("js-" + e);
t.style.display = "block", tabs.forEach(function (e) {
e.classList.remove("active")
}), s.classList.add("active")
}
// Funcionalidade dos botões de benefícios
setTimeout(function() {
    
    var corpSantander = document.getElementById("js-corp-santander");
    var corpAymore = document.getElementById("js-corp-aymore");
    var corp2 = document.getElementById("js-corp-2");
    var corp3 = document.getElementById("js-corp-3");
    var descSantander = document.getElementById("js-benefits-santander");
    var descAymore = document.getElementById("js-empresa-aymore");
    var desc2 = document.getElementById("js-empresa-2");
    var desc3 = document.getElementById("js-empresa-3");

    // Verificar se todos os elementos existem
    if (!corpSantander || !corpAymore || !corp2 || !corp3 || !descSantander || !descAymore || !desc2 || !desc3) {
        return;
    }

    function switchToSantander() {
        corpSantander.classList.add("active");
        corpAymore.classList.remove("active");
        corp2.classList.remove("active");
        corp3.classList.remove("active");
        
        descSantander.classList.remove("d-none");
        descAymore.classList.add("d-none");
        desc2.classList.add("d-none");
        desc3.classList.add("d-none");
        
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    function switchToAymore() {
        corpSantander.classList.remove("active");
        corpAymore.classList.add("active");
        corp2.classList.remove("active");
        corp3.classList.remove("active");
        
        descSantander.classList.add("d-none");
        descAymore.classList.remove("d-none");
        desc2.classList.add("d-none");
        desc3.classList.add("d-none");
        
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    function switchToF1rst() {
        corpSantander.classList.remove("active");
        corpAymore.classList.remove("active");
        corp2.classList.add("active");
        corp3.classList.remove("active");
        
        descSantander.classList.add("d-none");
        descAymore.classList.add("d-none");
        desc2.classList.remove("d-none");
        desc3.classList.add("d-none");
        
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    function switchToTools() {
        corpSantander.classList.remove("active");
        corpAymore.classList.remove("active");
        corp2.classList.remove("active");
        corp3.classList.add("active");
        
        descSantander.classList.add("d-none");
        descAymore.classList.add("d-none");
        desc2.classList.add("d-none");
        desc3.classList.remove("d-none");
        
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }

    // Remover qualquer listener existente e adicionar novos
    corpSantander.onclick = switchToSantander;
    corpAymore.onclick = switchToAymore;
    corp2.onclick = switchToF1rst;
    corp3.onclick = switchToTools;
}, 1000);

// Função para resetar completamente todas as animações em um conteúdo
function resetAllAnimationsInContent(content) {
    if (!content) return;
    
    // Resetar todos os elementos com animação AOS
    var aosElements = content.querySelectorAll('[data-aos]');
    for (var i = 0; i < aosElements.length; i++) {
        aosElements[i].classList.remove('aos-animate');
        aosElements[i].style.transform = '';
        aosElements[i].style.opacity = '';
        aosElements[i].style.transition = '';
    }
    
    // Resetar seções progressivas para estado inicial
    var secondSections = content.querySelectorAll('.second-qa-section');
    var thirdSections = content.querySelectorAll('.third-qa-section');
    var fourthSections = content.querySelectorAll('.fourth-qa-section');
    
    for (var j = 0; j < secondSections.length; j++) {
        secondSections[j].style.opacity = '0';
        secondSections[j].style.display = 'none';
    }
    for (var k = 0; k < thirdSections.length; k++) {
        thirdSections[k].style.opacity = '0';
        thirdSections[k].style.display = 'none';
    }
    for (var l = 0; l < fourthSections.length; l++) {
        fourthSections[l].style.opacity = '0';
        fourthSections[l].style.display = 'none';
    }
    
    // Resetar todos os botões para estado inicial
    var allButtons = content.querySelectorAll('.areas-button-more, .areas-button-more-second, .areas-button-more-third, .areas-button-more-fourth');
    for (var m = 0; m < allButtons.length; m++) {
        allButtons[m].style.opacity = '0';
        allButtons[m].style.visibility = 'hidden';
    }
    
    // Garantir que apenas a primeira seção esteja visível
    var firstSections = content.querySelectorAll('.first-qa-section');
    for (var n = 0; n < firstSections.length; n++) {
        firstSections[n].style.opacity = '1';
        firstSections[n].style.display = 'flex';
    }
}

// Função auxiliar para limpar todos os containers móveis (chamada pelo HTML)
function clearAllMobileContainers() {
    if (window.innerWidth <= 768) {
        var allMobileContainers = document.querySelectorAll(".areas-mobile-content");
        for (var i = 0; i < allMobileContainers.length; i++) {
            resetAllAnimationsInContent(allMobileContainers[i]);
            allMobileContainers[i].innerHTML = '';
            allMobileContainers[i].classList.remove("active");
        }
    }
}

// ✨ INTERCEPTAR e sobrescrever resetTabAnimations do HTML para incluir limpeza mobile
window.addEventListener('load', function() {
    // Aguardar um pouco para garantir que todas as funções do HTML foram carregadas
    setTimeout(function() {
        // Salvar a função original se existir
        var originalResetTabAnimations = window.resetTabAnimations;
        
        // Sobrescrever com nossa versão que também limpa mobile
        window.resetTabAnimations = function(tabId) {
            console.log('✨ resetTabAnimations chamado para:', tabId);
            
            // ✨ LIMPAR CONTAINERS MÓVEIS PRIMEIRO
            clearAllMobileContainers();
            
            // Chamar a função original se existir
            if (typeof originalResetTabAnimations === 'function') {
                originalResetTabAnimations(tabId);
            }
            
            // ✨ GARANTIR que mobile seja atualizado após reset
            if (window.innerWidth <= 768) {
                setTimeout(function() {
                    handleResizeForAreas();
                }, 100);
            }
        };
        
        console.log('✨ resetTabAnimations foi sobrescrita para incluir suporte mobile');
        
        // ✨ SOBRESCREVER initLoadingAnimations também
        var originalInitLoadingAnimations = window.initLoadingAnimations;
        
        window.initLoadingAnimations = function() {
            console.log('✨ initLoadingAnimations chamado');
            
            // ✨ GARANTIR que mobile tenha conteúdo clonado antes de iniciar animações
            if (window.innerWidth <= 768) {
                handleResizeForAreas();
                // Aguardar um pouco para garantir que a clonagem foi feita
                setTimeout(function() {
                    if (typeof originalInitLoadingAnimations === 'function') {
                        originalInitLoadingAnimations();
                    }
                }, 100);
            } else {
                // Desktop - chamar diretamente
                if (typeof originalInitLoadingAnimations === 'function') {
                    originalInitLoadingAnimations();
                }
            }
        };
        
        console.log('✨ initLoadingAnimations foi sobrescrita para incluir suporte mobile');
        
        // ✨ SOBRESCREVER getActiveAreaContainer para funcionar no mobile
        var originalGetActiveAreaContainer = window.getActiveAreaContainer;
        
        window.getActiveAreaContainer = function() {
            // ✨ No mobile, retornar o .areas-content dentro do container móvel (CONSISTENTE com index.html)
            if (window.innerWidth <= 768) {
                var mobileContainer = document.querySelector('.areas-mobile-content.active');
                if (mobileContainer) {
                    var areasContent = mobileContainer.querySelector('.areas-content');
                    if (areasContent) {
                        console.log('✨ getActiveAreaContainer retornando areas-content do mobile:', areasContent);
                        return areasContent;
                    }
                }
                console.log('⚠️ getActiveAreaContainer: nenhum container mobile ativo encontrado');
            }
            
            // Desktop ou fallback - usar função original
            if (typeof originalGetActiveAreaContainer === 'function') {
                var result = originalGetActiveAreaContainer();
                console.log('✨ getActiveAreaContainer retornando desktop:', result);
                return result;
            } else {
                // Fallback manual
                var result = document.querySelector('.areas-content.active');
                console.log('✨ getActiveAreaContainer retornando fallback:', result);
                return result;
            }
        };
        
        console.log('✨ getActiveAreaContainer foi sobrescrita para incluir suporte mobile');
        
        // ✨ VERIFICAR SE FUNÇÕES DE SCROLL ESTÃO DISPONÍVEIS
        console.log('=== VERIFICAÇÃO DE FUNÇÕES DE SCROLL ===');
        console.log('scrollToNextQuestion:', typeof window.scrollToNextQuestion, typeof scrollToNextQuestion);
        console.log('scrollToThirdQuestion:', typeof window.scrollToThirdQuestion, typeof scrollToThirdQuestion);
        console.log('scrollToFourthQuestion:', typeof window.scrollToFourthQuestion, typeof scrollToFourthQuestion);
        console.log('scrollBackToTop:', typeof window.scrollBackToTop, typeof scrollBackToTop);
        console.log('==========================================');
        
    }, 2000);
});

// ✨ FUNÇÃO ESPECÍFICA PARA MOBILE: Mostrar próxima seção sem scroll
function showMobileNextSection(sectionName) {
    console.log('✨ showMobileNextSection:', sectionName);
    
    var mobileContainer = document.querySelector('.areas-mobile-content.active');
    if (!mobileContainer) {
        console.log('❌ Container mobile não encontrado');
        return;
    }
    
    var areasContent = mobileContainer.querySelector('.areas-content');
    if (!areasContent) {
        console.log('❌ Areas content não encontrado');
        return;
    }
    
    // Mapear nomes para seletores
    var sectionSelectors = {
        'second': '.second-qa-section',
        'third': '.third-qa-section', 
        'fourth': '.fourth-qa-section',
        'fifth': '.fifth-qa-section'
    };
    
    var buttonSelectors = {
        'second': '.areas-button-more-second',
        'third': '.areas-button-more-third',
        'fourth': '.areas-button-more-fourth',
        'fifth': '.areas-button-more-fifth'
    };
    
    var sectionSelector = sectionSelectors[sectionName];
    var nextButtonSelector = buttonSelectors[sectionName];
    
    if (!sectionSelector) {
        console.log('❌ Seção não reconhecida:', sectionName);
        return;
    }
    
    // 1. Esconder botão atual
    var currentButtons = areasContent.querySelectorAll('.areas-button-more, .areas-button-more-second, .areas-button-more-third, .areas-button-more-fourth');
    for (var i = 0; i < currentButtons.length; i++) {
        currentButtons[i].style.opacity = '0';
        currentButtons[i].style.visibility = 'hidden';
    }
    
    // 2. Mostrar a próxima seção
    var targetSection = areasContent.querySelector(sectionSelector);
    if (targetSection) {
        console.log('✨ Mostrando seção:', sectionSelector);
        targetSection.style.display = 'flex';
        targetSection.style.opacity = '1';
        targetSection.style.visibility = 'visible';
        targetSection.style.height = 'auto';
        
        // Garantir que o container móvel tenha altura suficiente
        mobileContainer.style.minHeight = '100vh';
        
        // 3. Animar seção (simular animação das perguntas)
        setTimeout(function() {
            var questionElement = targetSection.querySelector('[id*="question"]');
            var responseElement = targetSection.querySelector('[id*="response"]');
            
            if (questionElement && responseElement) {
                // Animar pergunta primeiro
                questionElement.style.opacity = '1';
                questionElement.style.visibility = 'visible';
                
                // Depois animar resposta
                setTimeout(function() {
                    responseElement.style.opacity = '1';
                    responseElement.style.visibility = 'visible';
                    
                    // Usar a função scrollToNextSection do HTML após as animações
                    var buttonId = '';
                    if (sectionName === 'second') buttonId = 'btn-more-cfo';
                    else if (sectionName === 'third') buttonId = 'btn-more-cfo-second';
                    else if (sectionName === 'fourth') buttonId = 'btn-more-cfo-third';
                    else if (sectionName === 'fifth') buttonId = 'btn-more-cfo-fourth';
                    
                    setTimeout(function() {
                        if (typeof window.scrollToNextSection === 'function') {
                            window.scrollToNextSection(sectionSelector, buttonId);
                        }
                        
                        // 4. Mostrar próximo botão se não for a última seção
                        if (nextButtonSelector && sectionName !== 'fifth') {
                            setTimeout(function() {
                                var nextButton = areasContent.querySelector(nextButtonSelector);
                                if (nextButton) {
                                    console.log('✨ Mostrando próximo botão:', nextButtonSelector);
                                    nextButton.style.display = 'flex';
                                    nextButton.style.opacity = '1';
                                    nextButton.style.visibility = 'visible';
                                    nextButton.style.height = 'auto';
                                }
                            }, 500);
                        } else if (sectionName === 'fifth') {
                            // Se é a última seção, mostrar botão de inscrição
                            setTimeout(function() {
                                var signUpSection = areasContent.querySelector('.custom-singin');
                                if (signUpSection) {
                                    console.log('✨ Mostrando seção de inscrição');
                                    signUpSection.style.opacity = '1';
                                    signUpSection.style.visibility = 'visible';
                                }
                            }, 1000);
                        }
                    }, 300); // Aguardar um pouco após a animação da resposta antes de fazer o scroll
                    
                }, 800);
            }
        }, 200);
        
    } else {
        console.log('❌ Seção não encontrada:', sectionSelector);
    }
}

// ✨ FUNÇÃO PARA MOSTRAR PRIMEIRO BOTÃO NO MOBILE
function showFirstButtonMobile(mobileContainer) {
    console.log('✨ showFirstButtonMobile');
    
    if (!mobileContainer) {
        console.log('❌ Container mobile não fornecido');
        return;
    }
    
    var areasContent = mobileContainer.querySelector('.areas-content');
    if (!areasContent) {
        console.log('❌ Areas content não encontrado');
        return;
    }
    
    var firstButton = areasContent.querySelector('.areas-button-more');
    if (firstButton) {
        console.log('✨ Mostrando primeiro botão no mobile');
        firstButton.style.opacity = '1';
        firstButton.style.visibility = 'visible';
        firstButton.style.transition = 'opacity 0.3s ease';
    } else {
        console.log('❌ Primeiro botão não encontrado');
    }
}

// Função para reativar event listeners dos botões clonados
function reactivateButtonListeners(container) {
    console.log('✨ REACTIVATING BUTTON LISTENERS - MOBILE');
    console.log('Container:', container);
    console.log('Window width:', window.innerWidth);
    
    // Abordagem 1: Tentar executar onclick diretamente nos botões existentes
    var allButtons = container.querySelectorAll('button');
    console.log('Encontrados ' + allButtons.length + ' botões no container');
    
    for (var i = 0; i < allButtons.length; i++) {
        var button = allButtons[i];
        var onclickValue = button.getAttribute('onclick');
        
        if (onclickValue) {
            console.log('Botão com onclick encontrado:', onclickValue);
            
            // Abordagem simples: forçar onclick a funcionar
            (function(btn, onclick) {
                btn.addEventListener('click', function(e) {
                    console.log('Clique detectado! Executando:', onclick);
                    
                    // Método 1: Tentar executar eval
                    try {
                        eval(onclick);
                        return;
                    } catch (e1) {
                        console.log('Eval falhou, tentando método 2:', e1);
                    }
                    
                    // Método 2: Tentar executar função window
                    try {
                        var funcName = onclick.replace('()', '').trim();
                        if (typeof window[funcName] === 'function') {
                            window[funcName]();
                            return;
                        }
                    } catch (e2) {
                        console.log('Window function falhou, tentando método 3:', e2);
                    }
                    
                    // Método 3: Chamar funções conhecidas diretamente
                    if (onclick.includes('scrollToNextQuestion')) {
                        console.log('✨ Chamando scrollToNextQuestion via mobile');
                        if (typeof scrollToNextQuestion === 'function') {
                            scrollToNextQuestion();
                        } else if (typeof window.scrollToNextQuestion === 'function') {
                            window.scrollToNextQuestion();
                        }
                    } else if (onclick.includes('scrollToThirdQuestion')) {
                        console.log('✨ Chamando scrollToThirdQuestion via mobile');
                        if (typeof scrollToThirdQuestion === 'function') {
                            scrollToThirdQuestion();
                        } else if (typeof window.scrollToThirdQuestion === 'function') {
                            window.scrollToThirdQuestion();
                        }
                    } else if (onclick.includes('scrollToFourthQuestion')) {
                        console.log('✨ Chamando scrollToFourthQuestion via mobile');
                        if (typeof scrollToFourthQuestion === 'function') {
                            scrollToFourthQuestion();
                        } else if (typeof window.scrollToFourthQuestion === 'function') {
                            window.scrollToFourthQuestion();
                        }
                    } else if (onclick.includes('scrollToFifthQuestion')) {
                        console.log('✨ Chamando scrollToFifthQuestion via mobile');
                        if (typeof scrollToFifthQuestion === 'function') {
                            scrollToFifthQuestion();
                        } else if (typeof window.scrollToFifthQuestion === 'function') {
                            window.scrollToFifthQuestion();
                        }
                    } else if (onclick.includes('scrollBackToTop')) {
                        console.log('✨ Chamando scrollBackToTop via mobile');
                        if (typeof scrollBackToTop === 'function') {
                            scrollBackToTop();
                        } else if (typeof window.scrollBackToTop === 'function') {
                            window.scrollBackToTop();
                        }
                    } else {
                        console.error('❌ Nenhum método funcionou para:', onclick);
                    }
                });
            })(button, onclickValue);
        }
    }
    
    // ✨ MÉTODO DIRETO: Adicionar listeners diretos nos botões específicos
    var moreButtons = container.querySelectorAll('.btn-more-info');
    console.log('✨ Encontrados ' + moreButtons.length + ' botões .btn-more-info específicos');
    
    for (var j = 0; j < moreButtons.length; j++) {
        var button = moreButtons[j];
        var buttonId = button.id;
        
        console.log('✨ Configurando botão:', buttonId);
        
        // Remover listener anterior se existir
        button.removeEventListener('click', button.mobileClickHandler);
        
        // Criar handler específico baseado no ID do botão
        (function(btn, id) {
            btn.mobileClickHandler = function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // ✨ PREVENIR MÚLTIPLAS EXECUÇÕES
                if (btn.isExecuting) {
                    console.log('⚠️ Botão já está executando, ignorando clique:', id);
                    return;
                }
                btn.isExecuting = true;
                
                console.log('✨ Botão clicado no mobile:', id);
                
                // Mapear IDs para funções corretas
                if (id.includes('btn-more-') && !id.includes('-second') && !id.includes('-third') && !id.includes('-fourth')) {
                    // Primeiro botão - "Gestão Financeira" ou "Quero saber mais"
                    console.log('✨ Executando scrollToNextQuestion para primeiro botão');
                    
                    // ✨ NO MOBILE: lógica específica para mostrar próxima seção sem scroll
                    if (window.innerWidth <= 768) {
                        console.log('✨ Mobile: mostrando segunda seção diretamente');
                        showMobileNextSection('second');
                    } else {
                        // Desktop: usar função normal
                        if (typeof window.scrollToNextQuestion === 'function') {
                            window.scrollToNextQuestion();
                        } else if (typeof scrollToNextQuestion === 'function') {
                            scrollToNextQuestion();
                        }
                    }
                } else if (id.includes('-second')) {
                    // Segundo botão
                    console.log('✨ Executando scrollToThirdQuestion para segundo botão');
                    if (window.innerWidth <= 768) {
                        console.log('✨ Mobile: mostrando terceira seção diretamente');
                        showMobileNextSection('third');
                    } else {
                        if (typeof window.scrollToThirdQuestion === 'function') {
                            window.scrollToThirdQuestion();
                        } else if (typeof scrollToThirdQuestion === 'function') {
                            scrollToThirdQuestion();
                        }
                    }
                } else if (id.includes('-third')) {
                    // Terceiro botão
                    console.log('✨ Executando scrollToFourthQuestion para terceiro botão');
                    if (window.innerWidth <= 768) {
                        console.log('✨ Mobile: mostrando quarta seção diretamente');
                        showMobileNextSection('fourth');
                    } else {
                        if (typeof window.scrollToFourthQuestion === 'function') {
                            window.scrollToFourthQuestion();
                        } else if (typeof scrollToFourthQuestion === 'function') {
                            scrollToFourthQuestion();
                        }
                    }
                } else if (id.includes('-fourth')) {
                    // Quarto botão
                    console.log('✨ Executando scrollToFifthQuestion para quarto botão');
                    if (window.innerWidth <= 768) {
                        console.log('✨ Mobile: mostrando quinta seção diretamente');
                        showMobileNextSection('fifth');
                    } else {
                        if (typeof window.scrollToFifthQuestion === 'function') {
                            window.scrollToFifthQuestion();
                        } else if (typeof scrollToFifthQuestion === 'function') {
                            scrollToFifthQuestion();
                        }
                    }
                }
                
                // ✨ LIBERAR A FLAG APÓS UM PEQUENO DELAY
                setTimeout(function() {
                    btn.isExecuting = false;
                }, 1000);
            };
            
            // Adicionar o novo listener
            btn.addEventListener('click', btn.mobileClickHandler);
            
        })(button, buttonId);
    }
    
    // ✨ MÉTODO ALTERNATIVO: Tentar detectar botões por texto também
    for (var k = 0; k < moreButtons.length; k++) {
        var moreBtn = moreButtons[k];
        if (!moreBtn.getAttribute('data-listener-added')) {
            moreBtn.setAttribute('data-listener-added', 'true');
            
            moreBtn.addEventListener('click', function(e) {
                console.log('Clique direto em btn-more-info detectado!');
                var onclick = this.getAttribute('onclick');
                if (onclick) {
                    try {
                        eval(onclick);
                    } catch (error) {
                        console.error('Erro ao executar onclick direto:', error);
                    }
                }
            });
        }
    }
}

// Função para lidar com mudanças de tamanho da tela
function handleResizeForAreas() {
    var activeTab = document.querySelector(".areas-tab.active");
    var allMobileContainers = document.querySelectorAll(".areas-mobile-content");
    
    if (window.innerWidth <= 768) {
        // Modo mobile - mover conteúdo ativo para container móvel específico
        if (activeTab) {
            var targetArea = activeTab.getAttribute("data-area");
            var targetContent = document.getElementById(targetArea + "-content");
            var mobileContainer = document.getElementById("mobile-" + targetArea);
            
            if (targetContent && targetContent.classList.contains("active") && mobileContainer) {
                // ✨ LIMPAR TODOS OS CONTAINERS MÓVEIS PRIMEIRO
                for (var i = 0; i < allMobileContainers.length; i++) {
                    resetAllAnimationsInContent(allMobileContainers[i]);
                    allMobileContainers[i].innerHTML = '';
                    allMobileContainers[i].classList.remove("active");
                }
                
                // ✨ RESETAR COMPLETAMENTE ANTES DE CLONAR
                resetAllAnimationsInContent(targetContent);
                
                var contentClone = targetContent.cloneNode(true);
                
                // ✨ RESETAR TAMBÉM O CONTEÚDO CLONADO
                resetAllAnimationsInContent(contentClone);
                
                // Adicionar conteúdo ao container específico
                mobileContainer.appendChild(contentClone);
                mobileContainer.classList.add("active");
                mobileContainer.setAttribute("tabindex", "0");
                
                // Reativar event listeners dos botões clonados
                reactivateButtonListeners(mobileContainer);
                
                // ✨ MOSTRAR PRIMEIRO BOTÃO NO MOBILE APÓS UM DELAY
                setTimeout(function() {
                    showFirstButtonMobile(mobileContainer);
                }, 2000);
            }
        }
    } else {
        // Modo desktop - limpar todos os containers móveis
        for (var j = 0; j < allMobileContainers.length; j++) {
            // ✨ RESETAR ANIMAÇÕES ANTES DE LIMPAR
            resetAllAnimationsInContent(allMobileContainers[j]);
            allMobileContainers[j].innerHTML = '';
            allMobileContainers[j].classList.remove("active");
        }
    }
}

// Funcionalidade para as abas da seção "Conheça Nossas Áreas"
function initializeAreasTabs() {
    var areasTabs = document.querySelectorAll(".areas-tab");
    var areasContents = document.querySelectorAll(".areas-content");
    
    // ✨ RESETAR TODOS OS CONTEÚDOS ANTES DE CONFIGURAR EVENTOS
    for (var x = 0; x < areasContents.length; x++) {
        resetAllAnimationsInContent(areasContents[x]);
    }
    
    // ✨ LIMPAR TODOS OS CONTAINERS MÓVEIS NO INÍCIO
    var allMobileContainers = document.querySelectorAll(".areas-mobile-content");
    for (var y = 0; y < allMobileContainers.length; y++) {
        resetAllAnimationsInContent(allMobileContainers[y]);
        allMobileContainers[y].innerHTML = '';
        allMobileContainers[y].classList.remove("active");
    }
    
    for (var i = 0; i < areasTabs.length; i++) {
        areasTabs[i].addEventListener("click", function(e) {
            e.preventDefault();
            var targetArea = this.getAttribute("data-area");
            
            // Remove active class from all tabs
            for (var j = 0; j < areasTabs.length; j++) {
                areasTabs[j].classList.remove("active");
            }
            
            // Add active class to clicked tab
            this.classList.add("active");
            
            // Hide all content areas e limpa estilos inline forçados
            for (var k = 0; k < areasContents.length; k++) {
                areasContents[k].classList.remove("active");
                areasContents[k].style.display = '';
                areasContents[k].style.visibility = '';
            }
            
            // Show target content area
            var targetContent = document.getElementById(targetArea + "-content");
            if (targetContent) {
                targetContent.classList.add("active");
                
                // Mover conteúdo para mobile se necessário
                if (window.innerWidth <= 768) {
                    var mobileContainer = document.getElementById("mobile-" + targetArea);
                    if (mobileContainer) {
                        // ✨ RESETAR COMPLETAMENTE ANTES DE CLONAR
                        resetAllAnimationsInContent(targetContent);
                        
                        var contentClone = targetContent.cloneNode(true);
                        
                        // ✨ RESETAR TAMBÉM O CONTEÚDO CLONADO
                        resetAllAnimationsInContent(contentClone);
                        
                        mobileContainer.innerHTML = '';
                        mobileContainer.appendChild(contentClone);
                        mobileContainer.classList.add("active");
                        mobileContainer.setAttribute("tabindex", "0");
                        
                        // Reativar event listeners dos botões clonados após um pequeno delay
                        setTimeout(function() {
                            reactivateButtonListeners(mobileContainer);
                            // ✨ MOSTRAR PRIMEIRO BOTÃO NO MOBILE APÓS UM DELAY
                            setTimeout(function() {
                                showFirstButtonMobile(mobileContainer);
                            }, 2000);
                        }, 50);
                    }
                }
                
                // Reset ALL AOS animations first
                var allAosElements = document.querySelectorAll('[data-aos]');
                for (var n = 0; n < allAosElements.length; n++) {
                    allAosElements[n].classList.remove('aos-animate');
                }
                
                // Force refresh AOS to detect new elements
                if (typeof AOS !== 'undefined') {
                    AOS.refresh();
                }
            }
        });
    }
}

// Função para garantir que o AOS detecte todos os elementos
function ensureAOSDetection() {
    // Refresh AOS para detectar todos os elementos
    if (typeof AOS !== 'undefined') {
        AOS.refresh();
        
        // Aguardar um pouco e fazer um segundo refresh para garantir
        setTimeout(function() {
            AOS.refresh();
        }, 100);
    }
}

// Inicialização unificada
let hasInitialized = false;

function initializeOnce() {
    if (hasInitialized) return;
    hasInitialized = true;
    
    // Configurar AOS
    if (typeof AOS !== 'undefined') {
        AOS.init();
    }
    
    // Garantir que o sistema de clonagem para mobile funcione
    if (window.innerWidth <= 768) {
        handleResizeForAreas();
    }
    
    // Inicializar layout responsivo das áreas
    handleResizeForAreas();
    window.addEventListener('resize', handleResizeForAreas);
    
    // Inicializar tab ativa
    setTimeout(function() {
        if (window.innerWidth <= 768) {
            var initialActiveTab = document.querySelector(".areas-tab.active");
            if (initialActiveTab) {
                if (initialActiveTab.click) {
                    initialActiveTab.click();
                } else {
                    var clickEvent = new Event('click', { bubbles: true });
                    initialActiveTab.dispatchEvent(clickEvent);
                }
                
                setTimeout(function() {
                    var activeMobileContainer = document.querySelector('.areas-mobile-content.active');
                    if (activeMobileContainer) {
                        reactivateButtonListeners(activeMobileContainer);
                    }
                }, 200);
            }
        }
        
        // Refresh AOS após tudo estar pronto
        if (typeof AOS !== 'undefined') {
            AOS.refresh();
        }
    }, 500);
}

// Event Listeners
document.addEventListener('DOMContentLoaded', initializeOnce);
window.addEventListener('load', function() {
    // Garantir que a inicialização aconteça mesmo se o DOMContentLoaded já tiver passado
    setTimeout(initializeOnce, 100);
});

// Funcionalidade da Modal de Inscrição
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('modal-inscricao');
    const modalClose = document.getElementById('modal-close');
    
    // Função para abrir a modal
    function openModal() {
        // Calcular largura da barra de rolagem antes de ocultar
        const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
        
        // Adicionar padding para compensar a barra de rolagem
        document.body.style.paddingRight = scrollbarWidth + 'px';
        document.body.style.overflow = 'hidden';
        
        modal.classList.add('active');
    }
    
    // Função para fechar a modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }
    
    // Adicionar event listeners para todos os botões "Inscreva-se"
    const inscricaoButtons = document.querySelectorAll('a[href*="universia.net"]');
    inscricaoButtons.forEach(button => {
        // Verificar se o botão contém "Inscreva-se" ou "inscrever" no texto
        const buttonText = button.textContent.toLowerCase();
        if (buttonText.includes('inscreva') || buttonText.includes('inscrever')) {
            button.addEventListener('click', function(e) {
                e.preventDefault();
                openModal();
            });
        }
    });
    
    // Fechar modal ao clicar no X
    if (modalClose) {
        modalClose.addEventListener('click', closeModal);
    }
    
    // Fechar modal ao clicar no overlay
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }
    
    // Fechar modal com tecla ESC
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

// Animação dos países no mapa do Santander pelo Mundo
function initCountryAnimation() {
    const countries = [
        // Países da América (esquerda)
        { selector: '[data-country="eua"]', side: 'america' },
        { selector: '[data-country="mexico"]', side: 'america' },
        { selector: '[data-country="peru"]', side: 'america' },
        { selector: '[data-country="colombia"]', side: 'america' },
        { selector: '[data-country="chile"]', side: 'america' },
        { selector: '[data-country="argentina"]', side: 'america' },
        { selector: '[data-country="uruguai"]', side: 'america' },
        
        // Países da Europa (direita)
        { selector: '[data-country="portugal"]', side: 'europa' },
        { selector: '[data-country="reino-unido"]', side: 'europa' },
        { selector: '[data-country="alemanha"]', side: 'europa' },
    ];
    
    // Países fixos (sempre visíveis)
    const fixedCountries = [
        { selector: '[data-country="brasil"]', side: 'america' },
        { selector: '[data-country="espanha"]', side: 'europa' }
    ];
    
    // Array para controlar países atualmente visíveis
    let currentVisibleCountries = [];
    
    // Configurar todos os países inicialmente
    [...countries, ...fixedCountries].forEach(country => {
        const element = document.querySelector(country.selector);
        if (element) {
            element.style.display = 'block';
            element.style.opacity = '0';
            element.style.visibility = 'hidden';
            element.style.transition = 'opacity 0.6s ease-in-out, transform 0.6s ease-in-out';
        }
    });
    
    // Sempre mostrar Brasil e Espanha (países fixos)
    fixedCountries.forEach(country => {
        const element = document.querySelector(country.selector);
        if (element) {
            element.style.opacity = '1';
            element.style.visibility = 'visible';
            element.style.transform = 'scale(1)';
            element.classList.add('always-visible');
        }
    });
    
    // Função para esconder país com transição suave
    function hideCountry(element) {
        if (element && !element.classList.contains('always-visible')) {
            element.style.opacity = '0';
            element.style.transform = 'scale(0.8)';
            element.style.visibility = 'hidden';
        }
    }
    
    // Função para mostrar país com transição suave
    function showCountry(element) {
        if (element) {
            element.style.opacity = '1';
            element.style.transform = 'scale(1)';
            element.style.visibility = 'visible';
        }
    }
    
    // Função para selecionar 4 países aleatórios
    function selectRandomCountries() {
        // Esconder todos os países não fixos
        countries.forEach(country => {
            const element = document.querySelector(country.selector);
            hideCountry(element);
        });
        
        // Selecionar 4 países aleatórios
        const shuffled = [...countries].sort(() => 0.5 - Math.random());
        const selectedCountries = shuffled.slice(0, 4);
        
        // Mostrar os países selecionados com delay escalonado
        selectedCountries.forEach((country, index) => {
            setTimeout(() => {
                const element = document.querySelector(country.selector);
                showCountry(element);
            }, index * 150); // Delay escalonado de 150ms entre cada país
        });
        
        // Atualizar array de países visíveis
        currentVisibleCountries = selectedCountries;
    }
    
    // Mostrar primeira seleção de países
    selectRandomCountries();
    
    // Alternar países aleatórios a cada 4 segundos
    setInterval(() => {
        selectRandomCountries();
    }, 4000);
}

// Inicializar a animação quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initCountryAnimation();
});

// Funcionalidade das tabs da nova seção "Conheça nossas áreas"
function initAreasTabsNew() {
    const tabs = document.querySelectorAll('.area-tab');
    const contents = document.querySelectorAll('.area-content');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs and contents
            tabs.forEach(t => t.classList.remove('active'));
            contents.forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab
            tab.classList.add('active');
            
            // Show corresponding content
            const targetArea = tab.getAttribute('data-area');
            const targetContent = document.getElementById(`${targetArea}-content`);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
}

// Inicializar as tabs quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    initAreasTabsNew();
});

// Final do arquivo


