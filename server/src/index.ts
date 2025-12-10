import express from 'express';
import cors from 'cors';

import employeesRoutes from './routes/employeesRoutes';

const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));

app.use('/api', employeesRoutes);

const PORT = 5000;
app.listen(PORT, () => console.log(`Backend running on http://localhost:${PORT}`));

