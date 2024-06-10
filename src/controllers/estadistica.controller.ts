import { Request, Response } from 'express';
import { calcularEstadistica } from '../services/estadistica.service';
import IResultadoEstadistico from '../entities/IResultadoEstadistico.entity';

// Funciones del controller

// Función Procesar Estadistica
export const procesarEstadistica = async (request: Request, response: Response) => {
    //const { matrizQ, matrizR } = request.body;
    const { matriz } = request.body;

    // Consume la función del servicio
    const resultadoEstadistica: IResultadoEstadistico = await calcularEstadistica(matriz);

    return response.json(resultadoEstadistica);
};