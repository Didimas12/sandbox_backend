const express = require('express');
const app = express();
const PORT = 3000;
app.use(express.json());

const { sequelize } = require("./src/models");
//force:true berguna agar semua table didrop dulu , lalu creat table lagi
// sequelize.sync({ force: true });

const sandboxRoute = require("./src/routes/sandboxRoute");
app.use("/sandboxtest", sandboxRoute);

const userRoute = require("./src/routes/userRoute");
app.use("/user", userRoute);

const typeBookRoute = require("./src/routes/typeBookRoute")
app.use("/tipe", typeBookRoute);

const bookRouter = require('./src/routes/bookRouter');
app.use('/book', bookRouter);

const orderRouter = require('./src/routes/orderRoute')
app.use('/order', orderRouter);

// server
app.listen(PORT, () => {
    console.log('ini dari http://localhost:' + PORT);
});