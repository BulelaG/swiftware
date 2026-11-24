import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import authRoutes from './routes/auth.js';
import leadRoutes from './routes/leads.js';
import projectRoutes from './routes/projects.js';
import invoiceRoutes from './routes/invoices.js';
import productRoutes from './routes/products.js';
import orderRoutes from './routes/orders.js';
import payfastRoutes from './routes/payfast.js';
import uploadRoutes from './routes/upload.js';
import messageRoutes from './routes/messages.js';
import adminRoutes from './routes/admin.js';

const app = express();
app.use(cors({ origin: process.env.CLIENT_ORIGIN || 'http://localhost:5173', credentials: true }));
app.use(express.json({ limit: '1mb' }));
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/leads', leadRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/invoices', invoiceRoutes);
app.use('/api/products', productRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/payfast', payfastRoutes);
app.use('/api/upload', uploadRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/admin', adminRoutes);

app.get('/api/health', (_req, res) => res.json({ status: 'ok', service: 'swiftware-api' }));

const port = Number(process.env.PORT || 5000);
app.listen(port, () => console.log(`Swiftware API listening on port ${port}`));
