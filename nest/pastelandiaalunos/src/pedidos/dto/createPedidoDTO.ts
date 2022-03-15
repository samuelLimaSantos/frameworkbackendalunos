type Itens = {
    id: number;
    quantidade: number
}

export default class CreatePedidoDto {
    idCliente: number;
    itens: Itens[];
}