import 'dotenv/config';

if (!process.env.MONGODB_URI) {
  console.error('Set MONGODB_URI before running the seed script.');
  process.exitCode = 1;
} else {
  console.log('Seed data is not configured yet.');
}
