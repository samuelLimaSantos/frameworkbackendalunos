const cupons = new Map();
cupons.set('vale10', {
    porcentagem: 10
})

const SEGUNDA_FEIRA = 1
const SEXTA_FEIRA = 5
const CEM_PORCENTO = 100

function ehDiaDeSemana(dataReferencia) {
    return (dataReferencia.getDay() >= SEGUNDA_FEIRA && dataReferencia.getDay() <= SEXTA_FEIRA);
}

function buscarPorcentagem(codigoCupom) {
    const cupom = cupons.get(codigoCupom);
    return cupom ? cupom.porcentagem : 0;
}

function calcularDesconto(codigoCupom, valor, dataReferencia) {
    if (!ehDiaDeSemana(dataReferencia)) return 0
    const porcentagem = buscarPorcentagem(codigoCupom)
    return (valor / CEM_PORCENTO) * porcentagem;
}

module.exports = {
    calcularDesconto
}