import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';

function Copyright(props: any) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        One Night Stand
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const tiers = [
  {
    title: 'Individual',
    price: '10',
    description: [
      '1 pessoa',
      'Casa de banho partilhada',
      'WiFi gratuito',
      'Mini frigorífico',
    ],
    buttonText: 'Reserve já',
    buttonVariant: 'outlined',
    breakfast: false,
    bedType: ['Individual'],
    peopleCount: 1,
  },
  {
    title: 'Duplo',
    subheader: 'Mais popular',
    price: '15',
    description: [
      '2 pessoas',
      'Casa de banho privada',
      'WiFi gratuito',
      'Mini frigorífico',
    ],
    buttonText: 'Reserve já',
    buttonVariant: 'contained',
    breakfast: false,
    bedType: ['Individual', 'Casal'],
    peopleCount: 2,
  },
  {
    title: 'Família',
    price: '25+',
    description: [
      '3+ pessoas',
      'Casa de banho privada',
      'WiFi gratuito',
      'Mini frigorífico',
    ],
    buttonText: 'Reserve já',
    buttonVariant: 'outlined',
    breakfast: false,
    bedType: [],
    peopleCoun: undefined,
  },
];
const footers = [
  {
    title: 'Sobre nós',
    description: ['Equipa', 'História', 'Entre em contato', 'Localizações'],
  },
  {
    title: 'Características',
    description: [
      'Quartos',
      'Pequeno-almoço',
      'Casas de banho',
      'Experiências sensoriais',
      'Seguro',
    ],
  },
  {
    title: 'Funcionalidades',
    description: ['Check-in/Check-out', 'Atendimento 24h', 'Depósito de malas'],
  },
  {
    title: 'Legal',
    description: ['Política de privacidade', 'Termos de utilização'],
  },
];

// TODO remove, this demo shouldn't need to reset the theme.
const defaultTheme = createTheme();

export default function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles styles={[
        { ul: { margin: 0, padding: 0, listStyle: 'none' } }, 
        {body: { backgroundColor: "#535878 !important" }},
        {header: { backgroundColor: "#535878 !important", borderBottom: "1px solid transparent !important" }}
      ]} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        <Toolbar sx={{ flexWrap: 'wrap' }}>
          <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            One Night Stand
          </Typography>
          <nav>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Características
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Sobre nós
            </Link>
            <Link
              variant="button"
              color="text.primary"
              href="#"
              sx={{ my: 1, mx: 1.5 }}
            >
              Suporte
            </Link>
          </nav>
          <Button href="#" variant="outlined" sx={{ my: 1, mx: 1.5, color: "#FEE1DD", borderColor: "#FEE1DD", "&:hover": {borderColor: "#E9C2C5", backgroundColor:"#E9C2C5", color:"#CEA0AA"} }}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Tipos de Quarto
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
          One Night Stand providencia três tipos de quarto, em que cada um possui uma experiência sensorial única e perfeitamente adaptada ao número de pessoas na estadia.
         {/* Encontre rapidamente alojamento num dos nossos hotéis cápsula e desfrute de variadas experiências sensoriais durante a sua breve estadia. */} 
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                      €{tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /noite
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button
                    fullWidth
                    variant={tier.buttonVariant as 'outlined' | 'contained'}
                  >
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Container>
      {/* End footer */}
    </ThemeProvider>
  );
}