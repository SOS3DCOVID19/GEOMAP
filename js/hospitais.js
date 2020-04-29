var getSheets = require('./sheets.js').get

var planilha_hospitais = '1FoMe6TuFrByOC5Bbvc60uyuX_4E6JYR-wYAx286jBeU'

module.exports = async (req, res)=>{
	
	var respostas = getSheets(planilha_hospitais,"Hospitais_BD","A2:Z")
	respostas.then(function(result) {
		var tmp = {}
		console.log(result)
		 result.forEach(hospital=>{
			 if(!hospital[2]) return
			 
			 var coords= hospital[hospital.length-1].split(',').map(parseFloat)
			 tmp[hospital[3]]={
				tipo: hospital[8],
				qtd: (parseInt(hospital[21])+parseInt(hospital[22])+parseInt(hospital[23])+parseInt(hospital[24])),
				coords: {
					lat: coords[0],
					lng: coords[1]
				}
			}
		})
		res.send(tmp)
	})

}