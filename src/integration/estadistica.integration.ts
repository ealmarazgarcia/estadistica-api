import axios, { AxiosResponse } from 'axios';
import IMatrizRequest from '../entities/IMatrizRequest.entity';
import IMatrizResponse from '../entities/IMatrizResponse.entity';

const apiUrl = 'https://factorizacion-qr-api-pcpic6uyha-uc.a.run.app/factorizacionQR';

export const postFactorizacionQR = async (matriz: IMatrizRequest): Promise<IMatrizResponse> => {
    try {
        const response: AxiosResponse<IMatrizResponse> = await axios.post(apiUrl, matriz);
        return response.data;
    } catch (error) {
        console.error('Error al consumir el servicio Factorizacion QR:', error);
        throw error;
    }
};