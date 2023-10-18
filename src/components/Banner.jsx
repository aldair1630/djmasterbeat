import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import TrackVisibility from "react-on-screen";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { useSpring, animated } from "react-spring";

import headerImg from "../assets/img/astrodj3.png";

const Banner = () => {
  const [loopNum, setLoopNum] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);
  const toRotate = ["Deejay", "Productor Musical"];
  const [text, setText] = React.useState("");

  const [index, setIndex] = React.useState(1);
  const [delta, setDelta] = React.useState(300 - Math.random() * 100);
  const period = 2000;

  React.useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  });

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Define una animación de flotación suave con react-spring
  const floatingAnimation = useSpring({
    from: { translateY: 0 },
    to: async (next) => {
      while (true) {
        await next({ translateY: -10 });
        await next({ translateY: 0 });
      }
    },
    config: { tension: 20, friction: 5 }, // Ajusta estos valores para una flotación más suave
  });

  return (
    <section className="banner" id="home">
      <Container sx={{ marginTop: "150px" }}>
        <Grid container alignItems="center">
          <Grid item xs={12} md={6} xl={7}>
            <TrackVisibility>
              <div>
                <Typography
                  variant="h2"
                  color="white"
                  sx={{ fontWeight: "500" }}
                >
                  {`Hola... Soy Alexander,  `}
                  <span
                    className="txt-rotate"
                    data-rotate='[ "Deejay", "Producer Musical"]'
                  >
                    <span className="wrap" style={{ fontWeight: "500" }}>
                      {text}
                    </span>
                  </span>
                </Typography>
                <Typography variant="body1" color="white">
                  <p>
                    Soy un apasionado DJ de música electrónica con una
                    trayectoria que se extiende por más de años. Mi amor por la
                    música comenzó desde temprana edad y se ha convertido en mi
                    forma de vida.
                  </p>

                  <p>
                    Mi estilo musical abarca desde el vibrante mundo del techno
                    y house, hasta los ritmos hipnóticos del trance y el bass.
                    Me enorgullezco de ser un DJ versátil que puede adaptarse a
                    cualquier tipo de audiencia y evento.
                  </p>

                  <p>
                    Desde 2005, he estado dejando mi huella en la escena musical
                    local e internacional, actuando en algunos de los lugares
                    más emblemáticos y festivales reconocidos. Mi pasión por la
                    música me ha llevado a explorar y crear mezclas únicas que
                    fusionan diferentes géneros para mantener a la audiencia en
                    constante movimiento y sorpresa.
                  </p>

                  <p>
                    Cuando no estoy en el escenario, me dedico a la producción
                    musical, creando pistas originales que reflejan mi estilo y
                    pasión. Mi objetivo es llevarte a un viaje sonoro
                    inolvidable con cada actuación y cada pista que produzco.
                  </p>

                  <p>
                    Gracias por ser parte de esta increíble travesía musical
                    conmigo. Espero verte pronto en uno de mis próximos eventos.
                    ¡La música nunca se detiene!
                  </p>

                  <p>
                    ¡Sígueme en mis redes sociales para mantenerte actualizado
                    sobre mis próximas actuaciones y lanzamientos musicales!
                  </p>
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  sx={{
                    marginTop: "20px",
                    backgroundColor: "#231059",
                  }}
                  onClick={() => {
                    const phoneNumber = "+573218978096"; // Reemplaza esto con el número de WhatsApp que desees
                    window.open(`https://wa.me/${phoneNumber}`, "_blank");
                  }}
                >
                  <span>
                    <WhatsAppIcon sx={{ margin: "5px 5px 0 0" }} />
                  </span>
                  Contactame <KeyboardArrowRightIcon />
                </Button>
              </div>
            </TrackVisibility>
          </Grid>
          <Grid item xs={12} md={6} xl={5}>
            <TrackVisibility>
              <animated.div
                style={{
                  transform: floatingAnimation.translateY.interpolate(
                    (ty) => `translateY(${ty}px)`
                  ),
                }}
              >
                <img
                  src={headerImg}
                  alt="Header Img"
                  style={{
                    width: "500px",
                    marginLeft: "100px",
                  }}
                />
              </animated.div>
            </TrackVisibility>
          </Grid>
        </Grid>
      </Container>
    </section>
  );
};

export default Banner;
