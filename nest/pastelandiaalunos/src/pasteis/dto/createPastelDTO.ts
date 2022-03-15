import IngredienteDTO from './ingredienteDTO';

export default class CreatePastelDTO {
  public nome: string;
  public preco: number;
  public ingredientes: Array<IngredienteDTO>;
}
