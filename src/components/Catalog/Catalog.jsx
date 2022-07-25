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
    CircularProgress, Select,
    FormControl,
    MenuItem,
    InputLabel, ToggleButtonGroup,
    ToggleButton
} from "@mui/material";

import {addCart, getProducts} from "../../redux/actions";
import {totalRating} from "../../utilits";
import {useState, useEffect} from "react";
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewListIcon from '@mui/icons-material/ViewList';
import GridViewIcon from '@mui/icons-material/GridView';


const Catalog = () => {
    const {products} = useSelector((s) => s)
    const [ratingVal, setRatingVal] = useState(1.2)
    const [isLoading, setIsLoading] = useState(null)
    const dispatch = useDispatch()
    const [alignment, setAlignment] = useState('auction');
    const [category, setCategory] = useState("")
    const [switchClass, setSwitchClass] = useState(false)

    const handleChange = (event) => {
        setCategory(event.target.value);
    };
    const argChange = (event, newAlignment) => {
        setAlignment(newAlignment);
    };
    const ratingChange = (e) => {
        setRatingVal(e.target.value)
    }
    useEffect(() => {
        dispatch(getProducts())
        setIsLoading(false)
    }, [dispatch])
    const addToCart = ( index) => {
        dispatch(addCart(index))
        toast.success("Order successfully added to cart", {
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
    if (isLoading) {
        return <div style={{display: "flex", justifyContent: "center"}}>
            <CircularProgress sx={{
                display: "flex",
                justifyContent: "center",

            }} disableShrink/>
        </div>
    }

    return (
        <Container maxWidth="lg" sx={{mb: 5}}>
            <CardContent sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between"
            }}>
                <FormControl sx={{m: 4, minWidth: 150}} size="small">
                    <InputLabel id="demo-select-small">SORT BY</InputLabel>
                    <Select
                        labelId="demo-select-large"
                        id="demo-select-large"
                        value={category}
                        label="SORT BY"
                        onChange={handleChange}
                    >
                        <MenuItem value="">
                            <em>None</em>
                        </MenuItem>
                        <MenuItem value={5}>Dresses</MenuItem>
                        <MenuItem value={7}>Home</MenuItem>
                        <MenuItem value={6}>Life things</MenuItem>
                    </Select>
                </FormControl>
                <CardActions>
                    <ToggleButtonGroup
                        color="primary"
                        value={alignment}
                        exclusive
                        onChange={argChange}
                    >
                        <ToggleButton value="Show all">Show all</ToggleButton>
                        <ToggleButton value="auction">Auction</ToggleButton>
                        <ToggleButton value="Buy now">Buy now</ToggleButton>
                    </ToggleButtonGroup>
                        <Button onClick={() => setSwitchClass(true)} sx={{
                            ml: 3
                        }}>
                            <ViewListIcon
                                sx={{
                                    fontSize: "30px"
                                }}
                            />
                        </Button>
                  <Button onClick={() => setSwitchClass(false)} >
                      <GridViewIcon/>
                  </Button>
                    <ToastContainer/>
                </CardActions>
            </CardContent>
            <Grid theme={theme} container spacing={3}>
                {
                    products.map((product, index) => (
                        <Grid key={product.id} item lg={switchClass? 12 : 3} md={4} xs={12}>
                            <Card sx={{
                                minHeight: "100%"
                            }}
                            >
                                <CardMedia
                                    component="img"
                                    height={switchClass?"300":"200"}
                                    image={product.image}
                                    alt="img"
                                />
                                <CardContent sx={{
                                    padding: "0 16px",
                                    marginTop: "20px"
                                }}>
                                    <Typography variant="p" component="span" color="text.primary">
                                        {product.title}
                                    </Typography>
                                </CardContent>
                                <CardContent>
                                    <Typography gutterBottom variant="h6" component="h5">
                                        {product.price} $
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {product.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Rating
                                        name="half-rating"
                                        value={ratingVal}
                                        precision={0.5}
                                        onChange={ratingChange}
                                    />
                                    <span color="text.secondary">{totalRating(product.rating)}</span>
                                    <Button size="small" variant="outlined"
                                            sx={{
                                                textTransform: "capitalize",
                                                textDecoration: "lowerCase",
                                                ml: 3, fontSize: "14px",
                                                padding: "3px 3px"
                                            }}
                                            onClick={() => {
                                                addToCart(index)
                                            }}
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