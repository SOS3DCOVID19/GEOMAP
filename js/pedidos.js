var getSheets = require('./sheets.js').get

var planilha_hospitais = '1FoMe6TuFrByOC5Bbvc60uyuX_4E6JYR-wYAx286jBeU'
var I = 'A:AG'

var planilha = "Entregas_BD"

module.exports = async (req, res)=>{
	
	var response = getSheets(planilha_hospitais,planilha,I);
	response.then(function(result) {
		return response
	})

	var results = await Promise.all(chain)

	results = results.reduce((acc, val) => acc.concat(val), []);

	res.send(results);
}