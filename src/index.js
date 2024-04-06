import app from "./app.js";
import config from "./config.js";

const PORT = config.app.port || 3000;

app.listen(PORT, () => {
    console.log(`App listen at ${PORT}`);
})