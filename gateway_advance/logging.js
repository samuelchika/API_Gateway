import morgan from "morgan";

const setUpLogging = (app) => {
    app.use(morgan('combined'));
}
export default setUpLogging;