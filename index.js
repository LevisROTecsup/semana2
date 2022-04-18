// import express from "express";

// const app = express();

// Como creo una ruta en express?

// app.get('/', (req, res) => {
//     res.json({
//         data: "success",
//     });
// });

// app.get('/test', (req, res) => {
//     res.json({
//         data: "test",
//     });
// }); 

// app.listen(3000);

import {app} from "./src/app.js";

app.listen(3000);