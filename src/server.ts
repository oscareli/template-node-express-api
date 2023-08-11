import dotenv from 'dotenv';
import ExpressConfig from './Express/express.config';

if (process.env.NODE_ENV !== 'production') {
  dotenv.config();
}

const app = ExpressConfig();
const { PORT } = process.env;

app.get('/', (_req, res) => {
  res.send({ msg: 'Hello World!' });
});

// eslint-disable-next-line no-console
app.listen(PORT, () => console.log(`Server Running on Port ${PORT}`));

export default app;
