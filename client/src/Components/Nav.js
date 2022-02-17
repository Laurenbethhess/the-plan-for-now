import React from "react";
import { Link } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom'

function Nav( { user, onLogout } ) {
    const navigate = useNavigate();

    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
            if (r.ok) {
                onLogout(null);
            }
            navigate('/')
        });
    }

    return (
            <Box sx={{ flexGrow: 1 }}>
            <AppBar style={{backgroundColor: "#16006F"}} position="fixed">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "sans-serif", color: "#FFFFF3"}}>
                    {user?
                        <>Hello, {user.first_name} !</>
                    :
                        <></>
                    }  
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "sans-serif"}}>
                    <Link style={{color: "white"}} to="/">Main</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "sans-serif"}}>
                    <Link style={{color: "white"}} to="/chores">Chores</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "sans-serif"}}>
                    <Link style={{color: "white"}} to="/school">School</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "sans-serif"}}>
                    <Link style={{color: "white"}} to="/work">Work</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "sans-serif"}}>
                    <Link style={{color: "white"}} to="/exercise">Exercise</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "sans-serif"}}>
                    <Link style={{color: "white"}} to="/misc">Misc</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "sans-serif"}}>
                    <Link style={{color: "white"}} to="/groceries">Groceries</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "sans-serif", color: "#FFFFF3"}}>
                    {user?
                        <Button variant="outlined" style={{fontFamily: "sans-serif", fontSize: 20 }} onClick={handleLogoutClick} color="inherit">Logout</Button>
                    :
                        <></>
                    } 
                </Typography>
                </Toolbar>
            </AppBar>
            </Box>
    )
}

export default Nav

