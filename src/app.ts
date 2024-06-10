import express from 'express';
import estadisticaRoutes from './routes/estadistica.route';

const app = express();
const port = process.env.PORT || 8080;

app.use(express.json());

// Configurar las rutas
app.use('/api', estadisticaRoutes);

// Iniciar el servidor
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

export default app;