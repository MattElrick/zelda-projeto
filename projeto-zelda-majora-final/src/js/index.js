//jss achar o botao
const botoesCarrossel = document.querySelectorAll('.botao');
const imagem = document.querySelectorAll('.imagem');
const logo = document.querySelectorAll('.logo');
const descricao =document.querySelectorAll('.descricao');


//indentificar o botao no clique
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        //desmarcar o botao anterior
        desativarBotaoSelecionado();

        //marcar botao clicado como se estivesse selecionado
        botao.classList.add('selecionado');
        

        //mudar a imagem  Ativa de fundo
        esconderImagemAtiva();

        //fazer aparecer imagem selecionada correspondente ao botao clicado
        imagem[indice].classList.add('ativa');

        const logoAtivo = document.querySelector (".ativo");
        logoAtivo.classList.remove('ativo');

        logo[indice].classList.add('ativo');
        
          
        const descricaoJogo = document.querySelector(".jogo");
        descricaoJogo.classList.remove('jogo');

            descricao[indice].classList.add('jogo');

    }
    )
})

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector(".ativa");
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
