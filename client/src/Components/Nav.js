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
            <AppBar style={{backgroundColor: "#88D1D1"}} position="fixed">
                <Toolbar>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Papyrus", color: "black"}}>
                    {user?
                        <>Hello, {user.first_name} !</>
                    :
                        <></>
                    }  
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Papyrus"}}>
                    <Link style={{color: "black"}} to="/">Main</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Papyrus"}}>
                    <Link style={{color: "black"}} to="/chores">Chores</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Papyrus"}}>
                    <Link style={{color: "black"}} to="/school">School</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Papyrus"}}>
                    <Link style={{color: "black"}} to="/work">Work</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Papyrus"}}>
                    <Link style={{color: "black"}} to="/exercise">Exercise</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Papyrus"}}>
                    <Link style={{color: "black"}} to="/misc">Misc</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Papyrus"}}>
                    <Link style={{color: "black"}} to="/groceries">Groceries</Link>
                </Typography>
                <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} style={{fontFamily: "Papyrus", color: "#FFFFF3"}}>
                    {user?
                        <Button variant="outlined" style={{fontFamily: "Papyrus", fontSize: 20, color: "black" }} onClick={handleLogoutClick} color="inherit">Logout</Button>
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

