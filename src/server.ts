import dotenv from "dotenv";
import ExpressConfig from "./Express/express.config"

if (process.env.NODE_ENV !== "production") {
    dotenv.config();
}

const app = ExpressConfig()
const PORT = process.env.PORT;

app.get('/', (req, res) => {
    res.send({ msg: 'Hello World!' });
  });

app.listen(PORT, () => console.log("Server Running on Port " + PORT));


export default app;