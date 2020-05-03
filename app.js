/***************************************************
	
	Versão simplificada do Main script do site

    Criado por:  Franklin Véras Sertão
	Em: 26 de março de 2020

	Para visualizar a versão completa, git checkout 
	
****************************************************/

//------------------- Imports -------------------
var express		= require('express');
var app			= express();
var getSheet	= require('./js/sheets').getSheet
//-----------------------------------------------

//----------------- Contantes -------------------
//Veja um exemplo de planilha em https://docs.google.com/spreadsheets/d/15q0ahJ_TaJJHidKPiLva2etYUtzgpoZNRgHIugDPIDQ/edit?usp=sharing
const planilha_hospitais = '1FoMe6TuFrByOC5Bbvc60uyuX_4E6JYR-wYAx286jBeU' //A URL da sua planilha google deve ser inserida aqui
const aba = 'Hospitais_BD' //Nome da página (aba) da planilha
const intervalo = 'A2:AA' //Intervalo a ser buscado
//-----------------------------------------------

//------------------- Rotas ---------------------
//Esta rota entregará os dados de uma planilha Google, mas pode ser substituiída por uma qualquer outra fonte de dados
app.use('/hospitais', async (req, res) => {
	var result = getSheet(planilha_hospitais, aba, 'A2:AA')
	console.log(result)
	result.then(function(hospitais){
		res.send(hospitais)
	});
})

app.use('/', express.static('public_html'))
//-----------------------------------------------

//Inicia servidor HTTP
app.listen(80)