import { useState, useEffect } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { useNavigate, useOutlet } from "react-router-dom";
import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "./Logo.js";
import InboxIcon from "@mui/icons-material/Inbox";
import SendIcon from "@mui/icons-material/Send";
import { styled, createTheme, ThemeProvider } from "@mui/material/styles";
import EditNoteIcon from "@mui/icons-material/EditNote";
import {
  Box,
  CssBaseline,
  Toolbar,
  List,
  Divider,
  IconButton,
  Container,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Button,
  ListItemText,
  Tooltip,
  Typography,
} from "@mui/material";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Home from "./Home.js";
import teamsent from "../../assets/images/tea.png";
import selected from "../../assets/images/selected.png";
import { theme } from "../../index.js";
import received from "../../assets/images/recieved.png";
import sent from "../../assets/images/sent.png";
const drawerWidth = 205;

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: prop => prop !== 'open'
})(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        })
    })
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
    '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        border: 'none',
        marginTop: '64px',
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen
        }),
        boxSizing: 'border-box',
        ...(!open && {
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
            width: theme.spacing(7),
            [theme.breakpoints.up('sm')]: {
                width: theme.spacing(8)
            }
        })
    }
}));

const useStyles = makeStyles({
  image: {
    height: "1.6em",
    width: "1.6em",
  },
  chatimage: {
    height: "1.3em",
    width: "1.3em",
  },
  iconButton: {
    color: "#2E2C32!important",
    "&:hover": {
      color: "#0071e3 !important",
    },
  },
});

const mdTheme = createTheme();

const Header1 = (props) => {
  const [selectedIndex, setSelectedIndex] = useState(
    parseInt(sessionStorage.getItem("selectedIndex")) || 1
  );
  const [receivedCardsCount, setReceivedCardsCount] = useState("3");
  const outlet = useOutlet();
  const [open, setOpen] = useState(true);

  const classes = useStyles();
  const navigate = useNavigate();

  // const fetchQueriedChannels = async () => {
  //     try {
  //         const pagination = ApiUtils.setPagination(0, 5);
  //         const sorting = ApiUtils.setSorting(2, false);
  //         const channelsRequest = ApiUtils.getChannelsRequest('', pagination, 5, sorting, []);
  //         await queryChannelsAsync(channelsRequest);
  //     } catch (error) {
  //         snackbarShowMessage('Unable to get queried channels.' + error, 'error');
  //     }
  // };

  // useEffect(() => {
  //     fetchQueriedChannels();
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const toggleDrawer = () => {
    setOpen(!open);
  };

  const handleSendClick = () => {
    navigate("/sendcard");
    sessionStorage.setItem("selectedIndex", 4);
    setSelectedIndex(4);
  };

  const handleReceivedClick = () => {
    navigate("/home");
    sessionStorage.setItem("selectedIndex", 1);
    setSelectedIndex(1);
  };
  const handleSentClick = () => {
    navigate("/sentcards");
    sessionStorage.setItem("selectedIndex", 2);
    setSelectedIndex(2);
  };
  const handleTeamReceivedClick = () => {
    navigate("/teamReceived");
    sessionStorage.setItem("selectedIndex", 5);
    setSelectedIndex(5);
  };
  const handleTeamSentClick = () => {
    navigate("/teamSent");
    sessionStorage.setItem("selectedIndex", 6);
    setSelectedIndex(6);
  };

  const handleDraftClick = () => {
    navigate("/drafts");
    sessionStorage.setItem("selectedIndex", 3);
    setSelectedIndex(3);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex", height: "calc(100vh - 65px)" }}>
        <CssBaseline />
        <AppBar
          position="absolute"
          sx={{
            backgroundColor: "#FFFFFF",
            boxShadow: "0px 0px 4px -2px rgba(33, 33, 33, 0.1)",
          }}
        >
          {/* <MuiAppBar position='static'> */}
          <Container
            sx={{
              backgroundColor: "#FFFFFF",
              maxWidth: "none!important",
            }}
          >
            <Toolbar
              disableGutters
              sx={{
                pr: "24px", // keep right padding when drawer closed
              }}
            >
              <IconButton
                edge="start"
                aria-label="open drawer"
                onClick={toggleDrawer}
                className={classes.iconButton}
                sx={{
                  padding: "none",
                  margin: "none",
               //   ...(open && { display: 'none' }),
                }}
              >
                <MenuIcon />
              </IconButton>
              <Logo />
              <Box sx={{ flexGrow: 1, display: { xs: "flex" } }}>
                <Home />
              </Box>
            </Toolbar>
          </Container>
        </AppBar>

        <Drawer variant="permanent" open={open}>
          <Box style={{ marginLeft: "15px", marginBottom: "10px" }}>
      
          </Box>
          <List sx={{ paddingTop: "0px" }}>
            <>
              <ListItem
                disablePadding
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "initial",
                }}
                onClick={handleReceivedClick}
              >
                <div
                  style={{
                    width: "100%",
                  }}
                ></div>
                <ListItemButton
                  sx={{
                    color: selectedIndex === 1 ? "#0071e3" : null,
                  }}
                >
                  <Tooltip title="Received Cards">
                    <ListItemIcon
                      sx={{
                        minWidth: "48px",
                        color: selectedIndex === 1 ? "#0071e3" : null,
                      }}
                    >
                      <InboxIcon />
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText
  sx={{ display: "flex", 
    "& .MuiTypography-root": {
      fontWeight: selectedIndex === 1 ? "700" : "",
    },
  }} 
  primary={
   
    <span>
      Received Cards
    </span>
  } 
  secondary={
    <Tooltip title="Unviewed Cards">
      <Box
        component="span"
        sx={{
          display: "inline",
          background: "green",
          marginTop: "40px",
          marginBottom: "30px",
          marginLeft: "20px",
          color: "white",
          padding: "2px 9px",
          borderRadius: "4px",
        }}
      >
        {receivedCardsCount}
      </Box>
    </Tooltip>
  }
/>

                </ListItemButton>
              </ListItem>
            </>

            <>
              <ListItem disablePadding onClick={handleSentClick}>
                <ListItemButton
                  sx={{
                    color: selectedIndex === 2 ? "#0071e3" : null,
                  }}
                >
                  <Tooltip title="Sent Cards">
                    <ListItemIcon
                      sx={{
                        minWidth: "48px",
                        color: selectedIndex === 2 ? "#0071e3" : null,
                      }}
                    >
                      <SendIcon />
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText
                    primary={"Sent Cards"}
                    sx={{
                      "& .MuiTypography-root": {
                        fontWeight: selectedIndex === 2 ? "700" : "",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </>

            <>
              <ListItem disablePadding onClick={handleTeamReceivedClick}>
                <ListItemButton
                  sx={{
                    color: selectedIndex === 5 ?"#0071e3" : null,
                  }}
                >
                  <Tooltip title="Team Received Cards">
                    <ListItemIcon
                      sx={{
                        minWidth: "48px",marginLeft:"1px",
                        color: selectedIndex === 5 ? "#0071e3" : null,
                      }}
                    >  <img
                    src={selectedIndex === 5 ? sent: received }
                                      style={{
                                        width: "25px",
                                        height: "28px",
                                        filter: selectedIndex !== 5 ? "brightness(54%)" : "none",
                                      
                                      }}
                                      alt="Team Received Cards"
                                    />
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText
                    primary={"Team Received Cards"}
                    sx={{
                      "& .MuiTypography-root": {
                        fontWeight: selectedIndex === 5 ? "700" : "",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </>

            <>
              <ListItem disablePadding onClick={handleTeamSentClick}>
                <ListItemButton
                  sx={{
                    color: selectedIndex === 6 ? "#0071e3" : null,
                  }}
                >
                  <Tooltip title="Team Sent Cards">
                    <ListItemIcon
                      sx={{
                        minWidth: "48px",marginLeft:"5px",
                        color: selectedIndex === 6 ? "#0071e3" : null,
                      }}
                    >
                  <img
                    src={selectedIndex === 6 ?selected  :  teamsent}
                                      style={{
                                        width: "25px",
                                        height: "25px",
                                        filter: selectedIndex !== 6 ? "brightness(54%)" : "none",
                                      
                                      }}
                                      alt="Team Sent Cards"
                                    />
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText
                    primary={"Team Sent Cards"}
                    sx={{
                      "& .MuiTypography-root": {
                        fontWeight: selectedIndex === 6 ? "700" : "",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </>

            <>
              <ListItem disablePadding onClick={handleDraftClick}>
                <ListItemButton
                  sx={{
                    color: selectedIndex === 3 ? "#0071e3" : null,
                  }}
                >
                  <Tooltip title="Drafts">
                    <ListItemIcon
                      sx={{
                        minWidth: "48px",marginLeft:"5px",
                        color: selectedIndex === 3 ? "#0071e3" : null,
                      }}
                    >
                      <EditNoteIcon
                        sx={{ fontSize: "35px",  }}
                      />
                    </ListItemIcon>
                  </Tooltip>
                  <ListItemText
                    primary={"Drafts"}
                    sx={{marginLeft: "5px",
                      "& .MuiTypography-root": {
                        fontWeight: selectedIndex === 3 ? "700" : "400",
                      },
                    }}
                  />
                </ListItemButton>
              </ListItem>
            </>
          </List>
        </Drawer>
      </Box>
    </ThemeProvider>
  );
};

export default Header1;
