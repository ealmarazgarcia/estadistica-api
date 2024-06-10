import { Router } from 'express';
import { procesarEstadistica } from '../controllers/estadistica.controller';

const router = Router();

// Definición de los routes

// Ruta para procesar estadistica
router.post('/procesar-estadistica', procesarEstadistica);

export default router;