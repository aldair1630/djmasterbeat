import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import logo from "../assets/img/logo.webp";
import { Link, useLocation } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { TikTokIcon } from "./TikTokIcon"; // We'll create this or use a generic one

const drawerWidth = 240;
const navItems = [
  { label: "Inicio", path: "/" },
  { label: "Servicios", path: "/services" },
  { label: "Sobre Mí", path: "/about" }
];

const socialLinks = [
  { icon: <FacebookIcon />, url: "https://www.facebook.com/profile.php?id=61561577709534" },
  { icon: <InstagramIcon />, url: "https://www.instagram.com/mastterbeat" },
  { icon: <YouTubeIcon />, url: "https://www.youtube.com/@DJAlexMasterBeat" },
  { icon: <TikTokIcon />, url: "https://www.tiktok.com/@mastterbeat" },
  { icon: <WhatsAppIcon />, url: "https://wa.me/573128022330" },
];


import { Avatar } from "@mui/material";

function DrawerAppBar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window?.scrollY > 50 || document.documentElement.scrollTop > 50);
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  }, [window]);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        bgcolor: "#0a0a0c",
        height: "100%",
        color: "white",
        display: "flex",
        flexDirection: "column",
        p: 3
      }}
    >
      <Box sx={{ mb: 4, display: "flex", flexDirection: "column", alignItems: "center" }}>
        <Link to="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <Avatar
            src={logo}
            alt="Logo"
            sx={{
              width: "80px",
              height: "80px",
              mb: 2,
              border: "2px solid var(--primary)",
              boxShadow: "0 0 15px var(--primary)",
              transition: "all 0.3s ease"
            }}
          />
          <Typography
            variant="h6"
            sx={{
              fontFamily: "var(--font-display)",
              fontWeight: 800,
              letterSpacing: 2,
              color: "white"
            }}
          >
            MASTER BEAT
          </Typography>
        </Link>
      </Box>
      <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", mb: 2 }} />
      <List sx={{ mb: "auto" }}>
        {navItems.map((item) => (
          <ListItem key={item.label} disablePadding>
            <ListItemButton
              component={Link}
              to={item.path}
              sx={{
                textAlign: "center",
                borderRadius: "10px",
                mb: 1,
                bgcolor: location.pathname === item.path ? "rgba(0, 242, 255, 0.1)" : "transparent",
                color: location.pathname === item.path ? "var(--primary)" : "white",
                "&:hover": { bgcolor: "rgba(255,255,255,0.05)" }
              }}
            >
              <ListItemText
                primary={item.label}
                primaryTypographyProps={{
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  letterSpacing: 1
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>

      <Box sx={{ mt: 4 }}>
        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.3)", display: "block", mb: 2, letterSpacing: 2 }}>
          SÍGUEME
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          {socialLinks.map((social, index) => (
            <IconButton
              key={index}
              href={social.url}
              target="_blank"
              sx={{
                color: "white",
                bgcolor: "rgba(255,255,255,0.05)",
                "&:hover": { color: "var(--primary)", bgcolor: "rgba(0, 242, 255, 0.1)" }
              }}
            >
              {social.icon}
            </IconButton>
          ))}
        </Box>
      </Box>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          background: scrolled ? "rgba(10, 10, 12, 0.8)" : "transparent",
          backdropFilter: scrolled ? "blur(15px)" : "none",
          boxShadow: scrolled ? "0 4px 30px rgba(0, 0, 0, 0.5)" : "none",
          transition: "all 0.3s ease-in-out",
          padding: scrolled ? "5px 0" : "20px 0",
          borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.05)" : "none"
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ display: "flex", alignItems: "center", flexGrow: { xs: 1, sm: 0 } }}>
            <Link to="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
              <Avatar
                src={logo}
                alt="Logo"
                sx={{
                  width: scrolled ? "50px" : "65px",
                  height: scrolled ? "50px" : "65px",
                  border: "2px solid var(--primary)",
                  boxShadow: scrolled ? "0 0 10px var(--primary)" : "0 0 20px var(--primary)",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05) rotate(5deg)",
                    boxShadow: "0 0 30px var(--primary)"
                  }
                }}
              />
              <Typography
                variant="h5"
                sx={{
                  ml: 2,
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  letterSpacing: 2,
                  display: { xs: "none", md: "block" },
                  color: "white"
                }}
              >
                MASTER BEAT
              </Typography>
            </Link>
          </Box>

          <Box sx={{ display: { xs: "none", sm: "flex" }, gap: 3, alignItems: "center" }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                component={Link}
                to={item.path}
                sx={{
                  color: location.pathname === item.path ? "var(--primary)" : "white",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textTransform: "none",
                  position: "relative",
                  "&::after": {
                    content: '""',
                    position: "absolute",
                    bottom: 0,
                    left: "50%",
                    width: location.pathname === item.path ? "80%" : "0%",
                    height: "2px",
                    background: "var(--primary)",
                    transition: "all 0.3s ease",
                    transform: "translateX(-50%)"
                  },
                  "&:hover": {
                    background: "transparent",
                    color: "var(--primary)",
                    "&::after": { width: "80%" }
                  }
                }}
              >
                {item.label}
              </Button>
            ))}
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  href={social.url}
                  target="_blank"
                  sx={{
                    color: "white",
                    transition: "all 0.3s ease",
                    "&:hover": {
                      color: "var(--primary)",
                      transform: "translateY(-3px)"
                    }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
