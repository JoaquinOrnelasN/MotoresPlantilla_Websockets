import express from 'express'
import productRoute from './routes/product_routes.js'
import cartRoute from './routes/cart_routes.js'

const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api/products', productRoute);
app.use('/api/carts', cartRoute);

app.listen(8080, () => {
    console.log('Server running on port 8080');
});