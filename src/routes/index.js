import userRoutes from "./user.js";

const routes = (app) => {
    app.use("/users", userRoutes);
}

export default routes