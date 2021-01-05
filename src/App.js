
import './App.css';
import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Avatar from '@material-ui/core/Avatar';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Buscar from '@material-ui/icons/SearchRounded';
import Resumo from '@material-ui/icons/ErrorRounded';
import DePara from '@material-ui/icons/SyncAltRounded'
import Agenda from '@material-ui/icons/ScheduleRounded';
import { Link,BrowserRouter,Route,Routes } from "react-router-dom";

import Sig from './components/Cadastro/Sig/index';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));









function App() {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const Open = () => {
    setOpen(true);
  };

  const Close = () => {
    setOpen(false);
  };

  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={Open}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            SIG
          </Typography>
        </Toolbar>
      </AppBar>
      <BrowserRouter>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={Close}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>

          <Avatar src="/broken-image.jpg" style={{ textAlignVertical: "center", textAlign: "center", }} />

        </List>
        <Divider />
        <ListItem >
          <ListItemText primary={'Geral'} />
        </ListItem>
        <List>
          <ListItem button key={'Resumo'}>
            <ListItemIcon>
              <Resumo />
              <ListItemText primary={'Resumo'} />
            </ListItemIcon>
          </ListItem>
          <ListItem button key={'Consultar Requisição'}>
            <ListItemIcon>
              <Buscar />
              <ListItemText primary={'Consultar Requisição'} />
            </ListItemIcon>
          </ListItem>
          <ListItem button key={'Relatórios'}>
            <ListItemIcon>
              <AssignmentIcon />
              <ListItemText primary={'Relatórios'} />
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        <ListItem >
          <ListItemText primary={'Configuração'} />
        </ListItem>

        <List>

          <ListItem button key={'De / Para'}>
            <ListItemIcon>
              <DePara />
              <ListItemText primary={'De / Para'} />
            </ListItemIcon>
          </ListItem>
          <ListItem button key={'Agenda'}>
            <ListItemIcon>
              <Agenda />
              <ListItemText primary={'Agenda'} />
            </ListItemIcon>
          </ListItem>
        </List>
        <Divider />
        <ListItem >
          <ListItemText primary={'Cadastrar'} />
        </ListItem>
        <List>

        
          <ListItem button  component={Link} to={"/Sig"} >
            <ListItemIcon>
              <InboxIcon />
              <ListItemText primary={'Sig'} />

            </ListItemIcon>

          </ListItem>
          <ListItem button key={'Processo'}>
            <ListItemIcon>
              <InboxIcon />
              <ListItemText primary={'Processo'} />
            </ListItemIcon>
          </ListItem>
          <ListItem button key={'Entidade'}>
            <ListItemIcon>
              <AssignmentIcon />
              <ListItemText primary={'Entidade'} />
            </ListItemIcon>
          </ListItem>
          <ListItem button key={'Situação'}>
            <ListItemIcon>
              <AssignmentIcon />
              <ListItemText primary={'Situação'} />

            </ListItemIcon>
          </ListItem>

        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}

      >
        <div className={classes.drawerHeader} />
        <Routes>
        <Route exact path="/" render={() => <div>Home Page</div>} />
            <Route path="/Sig" element={<Sig />} />
        </Routes>
        
           



      </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
