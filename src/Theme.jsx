import { createTheme } from "@material-ui/core";
import React from "react";
import blue from '@material-ui/core/colors/purple';


export const theme = createTheme({
    palette:{
        primary:{
            main:'#0288d1',
        }
    },
    mybutton:{
        backgroundColor:"#0288d1",
        color:'#0288d1',
        border: '1px solid black'
    }
})