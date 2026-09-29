import database from "../models/pessoa.js";

class PessoaController {
    static async getAll(req, res) {
        try{
            const listaDePessoas = await database.Pessoa.findAll();
            return res.status(200).json(listaDePessoas);
        } catch(err0) {
            //
        }
    }
}

export default PessoaController;