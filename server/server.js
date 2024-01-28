const express =require('express');
const connectDB = require('./config/database');
const PORT = process.env.PORT || 5000;
const userRoutes = require('./routes/UserRoutes')

const app = express();
connectDB();

app.use(express.json());
app.use("/user",userRoutes);


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});