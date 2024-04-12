
import {AppBar, Toolbar, Box, styled } from "@mui/material"
import {Menu} from '@mui/icons-material';

// MenuIcon is customized icon 
const MenuIcon = styled(Menu)`
  color: #000;
`
const url = 'https://assets.inshorts.com/website_assets/images/logo_inshorts.png'

const Image = styled('img')({
  height: 55,
  margin: 'auto',
  paddingRight : 70
})

const Header = () => {
  return (
    <>
    <AppBar
    sx={{
        background : "#fff",
        height: "70px",
        position : "static"
    }}
    >
        <Toolbar>
          <MenuIcon/>
          <Image src={url} alt="logo" />
        </Toolbar>
    </AppBar>
    </>
  )
}

export default Header