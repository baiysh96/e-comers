import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import {Button, CardMedia, Checkbox, FormControlLabel, Paper, TextField} from "@mui/material";
import Grid from "@mui/material/Grid";
import logo from "../../assets/images/Logo.png"

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgColor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    h: "auto"
};

 const  SignModal = ({ setOpenModal, openModal }) => {
    const close = () => {
        setOpenModal(false)
    }

    return (
            <Modal
                open={openModal}
                onClose={close}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ padding: 30 }}>
                        <Paper>
                            <Grid
                                container
                                spacing={3}
                                direction={'column'}
                                justify={'center'}
                                alignItems={'center'}
                            >
                                <CardMedia
                                    image={logo}
                                    component="img"
                                    sx={{
                                        height: "40px",
                                        width: "150px",
                                        m: " 0 auto",
                                        mb: 1,
                                        mt: 2
                                    }}

                                />
                                <Grid item xs={12}>
                                    <TextField
                                        sx={{
                                            width:"200px"

                                        }}
                                        label="Username">
                                    </TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField label="Password" type={'password'}></TextField>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                // checked={checked}
                                                // onChange={handleChange}
                                                label={'Keep me logged in'}
                                                inputProps={{ 'aria-label': 'primary checkbox' }}
                                            />
                                        }
                                        label="Keep me logged in"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Button
                                        fullWidth variant="outlined"
                                        color="secondary"
                                        sx={{
                                            marginBottom: 2,
                                        }}
                                    >
                                        Login
                                    </Button>
                                </Grid>
                            </Grid>
                        </Paper>
                    </div>
                </Box>
            </Modal>
    );
}
export default SignModal;
