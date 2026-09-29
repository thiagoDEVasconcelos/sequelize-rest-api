import { Router } from "express";
import PessoaController from "../controllers/PessoaController.js";

const router = Router();

const pessoaController = new PessoaController();

router.get('/pessoas', (req, res) => pessoaController.pegaTodos(req, res));

export default router;