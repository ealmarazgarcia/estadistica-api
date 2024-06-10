import IResultadoEstadistico from "../entities/IResultadoEstadistico.entity";
import { postFactorizacionQR } from '../integration/estadistica.integration';
import IMatrizRequest from '../entities/IMatrizRequest.entity';
import { log } from "console";

// Funciones del service

export const calcularEstadistica = async (informacionMatriz: number[][]) => {
    var matrizQ: number[];
    var matrizR: number[];

    const matrizRequest: IMatrizRequest = {
        matriz: informacionMatriz
    };

    const matrices = await postFactorizacionQR(matrizRequest);

    matrizQ = matrices.matrices[0];
    matrizR = matrices.matrices[1];

    // Se crea una sola matriz
    const allValues = [...matrizQ.flat(), ...matrizR.flat()];

    // Se calcula la estadística
    const resultado: IResultadoEstadistico = {
        maximo: Math.max(...allValues),
        minimo: Math.min(...allValues),
        sumaTotal: allValues.reduce((acc, val) => acc + val, 0),
        promedio: (allValues.reduce((acc, val) => acc + val, 0)) / allValues.length
    };

    return resultado;
};