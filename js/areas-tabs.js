// Gerenciamento das tabs das áreas
document.addEventListener('DOMContentLoaded', function() {
    const areaTabs = document.querySelectorAll('.area-tab');
    const areaContents = document.querySelectorAll('.area-content');

    // Função para trocar de área
    function switchArea(areaId) {
        // Remover classe active de todas as tabs e conteúdos
        areaTabs.forEach(tab => tab.classList.remove('active'));
        areaContents.forEach(content => content.classList.remove('active'));

        // Adicionar classe active na tab selecionada
        const selectedTab = document.querySelector(`[data-area="${areaId}"]`);
        if (selectedTab) {
            selectedTab.classList.add('active');
        }

        // Mostrar conteúdo da área selecionada
        const selectedContent = document.getElementById(`${areaId}-content`);
        if (selectedContent) {
            selectedContent.classList.add('active');
        }
    }

    // Adicionar event listeners nas tabs
    areaTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const areaId = this.getAttribute('data-area');
            switchArea(areaId);
        });
    });

    // Inicializar com a primeira área ativa
    if (areaTabs.length > 0) {
        const firstAreaId = areaTabs[0].getAttribute('data-area');
        switchArea(firstAreaId);
    }
}); 