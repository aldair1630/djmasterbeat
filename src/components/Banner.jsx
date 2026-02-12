import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useSpring, animated, config } from "react-spring";
import TrackVisibility from "react-on-screen";

import headerImg from "../assets/img/astrodj3.png";

const Banner = () => {
  const [loopNum, setLoopNum] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const toRotate = ["Deejay", "Productor Musical", "Show Maker"];
  const [text, setText] = React.useState("");
  const [delta, setDelta] = React.useState(100);
  const period = 1500;

  React.useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(50);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(200);
    }
  };

  const floatingAnimation = useSpring({
    from: { transform: 'translateY(0px) rotate(0deg)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translateY(-50px) rotate(3deg)' });
        await next({ transform: 'translateY(0px) rotate(0deg)' });
      }
    },
    config: {
      duration: 4000,
      easing: (t) => t * t * (3 - 2 * t) // Efecto suave de entrada/salida
    },
  });

  const fadeIn = useSpring({
    from: { opacity: 0, transform: 'translateX(-50px)' },
    to: { opacity: 1, transform: 'translateX(0px)' },
    config: config.molasses,
  });

  return (
    <Box
      component="section"
      className="banner"
      id="home"
      sx={{
        minHeight: { xs: "auto", md: "100vh" },
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
        pt: { xs: 20, md: 15 },
        pb: { xs: 10, md: 10 }
      }}
    >
      <Container>
        <Grid container alignItems="center" spacing={{ xs: 6, md: 4 }}>
          <Grid item xs={12} md={7}>
            <animated.div style={fadeIn}>
              <Box sx={{ mb: 2, textAlign: { xs: "center", md: "left" } }}>
                {/* <Typography
                  variant="overline"
                  sx={{
                    color: "var(--primary)",
                    fontWeight: 800,
                    letterSpacing: { xs: 2, md: 4 },
                    fontSize: { xs: "0.8rem", md: "1.1rem" },
                    border: "1px solid var(--primary)",
                    px: 2,
                    py: 0.5,
                    borderRadius: "4px",
                    display: "inline-block",
                    mb: 3,
                    boxShadow: "0 0 15px rgba(0, 242, 255, 0.3)"
                  }}
                >
                  DJ MASTER BEAT
                </Typography> */}
                <Typography
                  variant="h1"
                  sx={{
                    color: "white",
                    fontWeight: 800,
                    fontSize: { xs: "2rem", sm: "3rem", md: "5rem" },
                    lineHeight: 1.1,
                    fontFamily: "var(--font-display)",
                    mb: 2,
                    wordBreak: "break-word"
                  }}
                >
                  {`MASTER `}
                  <span style={{ color: "var(--secondary)", WebkitTextStroke: "1px var(--primary)", textShadow: "0 0 20px var(--secondary)" }}>
                    BEAT
                  </span>
                </Typography>
                <Typography
                  variant="h2"
                  sx={{
                    color: "white",
                    fontWeight: 700,
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                    mb: 4,
                    height: "1.2em"
                  }}
                >
                  {text}
                  <span className="cursor">|</span>
                </Typography>
              </Box>

              <Typography
                variant="body1"
                sx={{
                  color: "rgba(255,255,255,0.7)",
                  fontSize: "1.2rem",
                  maxWidth: "600px",
                  mb: 5,
                  lineHeight: 1.8
                }}
              >
                Elevando la experiencia musical a otro nivel. Más de una década creando atmósferas inolvidables y ritmos que conectan almas en la pista de baile.
              </Typography>

              <Box sx={{ display: "flex", gap: 3, flexWrap: "wrap" }}>
                <Button
                  variant="contained"
                  size="large"
                  startIcon={<WhatsAppIcon />}
                  href="https://wa.me/573128022330"
                  target="_blank"
                  sx={{
                    px: { xs: 4, md: 6 },
                    py: 2,
                    borderRadius: "50px",
                    bgcolor: "var(--primary)",
                    color: "black",
                    fontWeight: 800,
                    fontSize: { xs: "0.9rem", md: "1rem" },
                    transition: "all 0.3s ease",
                    "&:hover": {
                      bgcolor: "var(--secondary)",
                      transform: "translateY(-5px)",
                      boxShadow: "0 10px 20px rgba(0, 242, 255, 0.4)"
                    }
                  }}
                >
                  CONTRATAR AHORA
                </Button>
              </Box>
            </animated.div>
          </Grid>

          <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "center" }}>
            <Box
              component="img"
              src={headerImg}
              alt="DJ Astro"
              className="floating-astronaut"
              sx={{
                width: "100%",
                maxWidth: "500px",
                filter: "drop-shadow(0 0 50px var(--secondary))",
              }}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Background Decorative Elements */}
      <Box
        sx={{
          position: "absolute",
          top: "10%",
          right: "-5%",
          width: "300px",
          height: "300px",
          background: "var(--secondary)",
          filter: "blur(150px)",
          opacity: 0.2,
          zIndex: -1
        }}
      />
    </Box>
  );
};

export default Banner;
