var getSheets = require('./sheets.js').get

var planilha_hospitais = '1FoMe6TuFrByOC5Bbvc60uyuX_4E6JYR-wYAx286jBeU'

module.exports = async (req, res)=>{
	var respostas =  getSheets(planilha_hospitais,"Makers_BD","A2:W")

	respostas.then(function(result) {
		res.send(respostas)
	})
}