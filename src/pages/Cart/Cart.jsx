
import {useDispatch, useSelector} from "react-redux";
import "./cart.css"
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Container,
    createTheme, IconButton,
    Rating, Tooltip,
    Typography
} from "@mui/material";
import Grid from "@mui/material/Grid";
// import StarBorderIcon from "@mui/icons-material/StarBorder";
import {removeInCart} from "../../redux/actions";
import DeleteIcon from '@mui/icons-material/Delete';
import {totalRating} from "../../utilits";

const Cart = () => {
    const {cart} = useSelector((s) => s)
    const dispatch = useDispatch()
    const theme = createTheme({
        button: {
            subtitle1: {
                fontSize: 12,
            },
            body1: {
                fontWeight: 500,
            },
            button: {
                fontStyle: 'italic',
            },

        },
    })
    const removeFromCart = (id) => {
        dispatch(removeInCart(id))
    }
    return cart.length?(
        <Container maxWidth="lg">
            <Grid theme={theme} container spacing={3}>
                {
                    cart.map((product) => (
                        <Grid key={product.id} item xs={3}>
                            <Card  sx={{
                                minHeight: "100%"
                            }}>
                                <CardMedia
                                    component="img"
                                    height="170"
                                    width="100%"
                                    image={product.image}
                                    alt="green iguana"
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="p" component="div">
                                        {product.title}
                                    </Typography>
                                    <Typography gutterBottom variant="h6" component="div">

                                         {product.price} $
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Rating
                                        name="half-rating"
                                        defaultValue={2.5}
                                        precision={0.5}
                                    />
                                    <span
                                        color="text.secondary"
                                    >
                                        { totalRating(product.rating)}
                                    </span>
                                   <Tooltip title="Delete" >
                                       <IconButton
                                           size="small" variant="p"
                                           sx={{
                                               ml: 4
                                           }}
                                           onClick={() =>
                                               removeFromCart(product.id, product)}
                                       >
                                           <DeleteIcon
                                               sx={{
                                                   display: "flex",
                                                   flexGrow: "2",
                                                   textTransform: "capitalize",
                                                   fontSize: "34px",
                                                   color: "red"
                                               }}
                                           />
                                       </IconButton>
                                   </Tooltip>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    ): <Typography sx={{
        ml: 5
    }} gutterBottom variant="h6" component="h5">Корзина пуста!</Typography>
};

export default Cart;