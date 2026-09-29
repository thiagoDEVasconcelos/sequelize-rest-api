import database from "../models/pessoa.js";
import Controller from "./Controller.js";
import PessoasServices from "../services/PessoaServices.js";

const pessoasServices = new PessoasServices();

class PessoaController extends Controller {
    constructor() {
        super(pessoasServices);
    }
}

export default PessoaController;