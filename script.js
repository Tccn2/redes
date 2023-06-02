
var requisicaoHttp; //httpRequest
requisicaoHttp = new XMLHttpRequest(); //inicio da requisição do site
requisicaoHttp.open('Get', 'https://www2.ifal.edu.br/', true); // Metódo de requisição, URL da página, se for TRUE vai executar o AJAX
requisicaoHttp.send(null);
//Essa parte precisa vir antes da função

requisicaoHttp.onreadystatechange = verificar //nome da função

function verificar() {
    if (requisicaoHttp.readyState === 4) {
        if (requisicaoHttp.status === 200) {
            document.write(requisicaoHttp.responseText)
            // perfect!
        }
        // everything is good, the response is received (Tudo está bem, a resposta será recebida)
    } else {
        document.write("Houve um erro")
        // still not ready (Ainda não está pronto)
    }

}