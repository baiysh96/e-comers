
import {useDispatch, useSelector} from "react-redux";
import Grid from '@mui/material/Grid';
import {
    Card,
    CardMedia,
    Typography,
    CardActions,
    CardContent,
    Button,
    Container,
    createTheme,
    Rating,
    CircularProgress,
} from "@mui/material";
import {addCart, getProducts} from "../../redux/actions";
import {totalRating} from "../../utilits";
import {useState, useEffect} from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Catalog = () => {
    const { products } = useSelector((s) => s)
    const [ratingVal, setRatingVal] = useState(1.2)
    const [isLoading, setIsLoading] = useState(null)
    const dispatch = useDispatch()

    const ratingChange = (e) => {
     setRatingVal(e.target.value)
    }
    useEffect(() => {
        dispatch(getProducts())
        setIsLoading(false)
    }, [dispatch])
    const addToCart = (id,product) => {
        dispatch(addCart(id,product))
        toast.success("Order successfully added to cart",{
            position: "top-center",
            autoClose: 500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        })
    }
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
                fontSize: 12,
                textTransform: "capitalize"
            },

        },
    });
    if(isLoading) {
        return <div style={{display: "flex",justifyContent: "center"}}>
            <CircularProgress sx={{
                display:"flex",
                justifyContent: "center",

            }} disableShrink/>
        </div>
    }

       return (
        <Container  maxWidth="lg" >
            <ToastContainer />
            <Grid  theme={theme}  container spacing={3}>
                {
                    products.map((product) => (
                        <Grid key={product.id} item lg={3} md={4} xs={12}>
                            <Card  sx={{
                              minHeight: "100%"
                            }}>
                                <CardMedia
                                    component="img"
                                    height="200"
                                    image={product.image}
                                    alt="img"
                                />
                                <CardContent sx={{
                                    padding:"0 16px",
                                    marginTop: "20px"
                                }}>
                                    <Typography  variant="p" component="span" color="text.primary">
                                        {product.title}
                                    </Typography>
                                </CardContent>
                                <CardContent >
                                <Typography gutterBottom  variant="h6" component="h5">
                                        {product.price} $
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <CardActions  >
                                    <Rating
                                        name="half-rating"
                                        value={ratingVal}
                                        precision={0.5}
                                        onChange={ratingChange}
                                    />
                                    <span  color="text.secondary">{ totalRating(product.rating)}</span>
                                    <Button  size="small" variant="outlined"
                                             sx={{
                                                 textTransform: "capitalize",
                                                 textDecoration:"lowerCase",
                                                 ml: 3, fontSize: "14px",
                                                 padding: "3px 3px"
                                             }}
                                             onClick={() => {
                                                 addToCart(product.id, product)
                                             } }
                                    > Add cart</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>

    );
};

export default Catalog;