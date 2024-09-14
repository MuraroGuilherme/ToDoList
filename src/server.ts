import express from 'express';
import { PrismaClient } from '@prisma/client';
import { routes } from './routes/router';
import swaggerUi from 'swagger-ui-express';
import swaggerJsDoc from 'swagger-jsdoc';
import { swaggerOptions } from './utils/swagger';


const app = express();
const prisma = new PrismaClient();

app.use(express.json());

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.use('/', routes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  console.log(`Documentation available on http://localhost:${PORT}/docs`)
});
