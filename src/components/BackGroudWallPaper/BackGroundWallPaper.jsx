import { Box } from '@mui/material'
import wallpaper from '../../assets/images/wallpaper.png'

export default function BackGroudWallPaper (){

    return (
        <>
            <Box
            id="BackGroudWallPaper-box-1"
            sx={{
                height: "45vh",
                backgroundImage: `url(${wallpaper})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                position: "relative",
            }}
            >
            <Box
            id="BackGroudWallPaper-box-2"
                sx={{
                position: "absolute",
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.5)",
                
                }}
            />
            </Box>
        </>
    )
}