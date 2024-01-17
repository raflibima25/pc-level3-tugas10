import express from "express";
import { 
    getProduks,
    getProdukById,
    createProduk,
    updateProduk,
    deleteProduk
} from "../controllers/ProdukController.js";

const router = express.Router();

router.get('/produks', getProduks);
router.get('/produks/:id', getProdukById);
router.post('/produks', createProduk);
router.patch('/produks/:id', updateProduk);
router.delete('/produks/:id', deleteProduk);

export default router;