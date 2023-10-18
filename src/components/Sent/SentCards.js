import React, { useEffect } from "react";
import { Avatar, Box, Button, Divider, Tooltip } from "@mui/material";
import { useState } from "react";
import Typography from "@mui/joy/Typography";
import {
  TextField,
  Paper,
  Select,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
} from "@mui/material";
import InputAdornment from "@mui/material/InputAdornment";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import DraftsOutlinedIcon from "@mui/icons-material/DraftsOutlined";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import FilterListIcon from "@mui/icons-material/FilterList";
import { Received } from "../../data/Received";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Logout } from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import SearchIcon from "@mui/icons-material/Search";
import { IconButton } from "@mui/material";
import CustomizedIconButton from "../common/CustomizedIconButton";
import pics1 from "../../assets/images/pics1.jpg";
import DownloadIcon from "@mui/icons-material/Download";
import VisibilityIcon from "@mui/icons-material/Visibility";

function SentCards() {
  const Received1 = Received;
  const username = "Sumaja Gurlinka";
  const [timeOfDay, setTimeOfDay] = useState("");
  const maxRowsToShowWithoutScrollbar = 5;
  const maxHeight = `${maxRowsToShowWithoutScrollbar * 90}px`;
  const [sortOrder, setSortOrder] = useState(true);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [received, setReceived] = useState(Received1);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const columns = [
    { accessor: "Card ID", label: "Card ID" },



    { accessor: "Sent Time", label: "Sent Time" },



    { accessor: "Receiver", label: "Receiver" },



    { accessor: "Category", label: "Category" },



    { accessor: "Actions", label: "Actions" },
  ];

  const [showTextbox, setShowTextbox] = useState(false);
  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime >= 5 && currentTime < 12) {
      setTimeOfDay("Good Morning");
    } else if (currentTime >= 12 && currentTime < 18) {
      setTimeOfDay("Good Afternoon");
    } else {
      setTimeOfDay("Good Evening");
    }
  }, []);
  const handleClick = () => {
    setShowTextbox(!showTextbox);
  };
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleAvatarClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  const handleViewCard = (index) => {
    // Create a copy of the Received1 array
    const updatedReceived1 = [...Received];

    // Toggle the 'viewed' property for the clicked row
    updatedReceived1[index].viewed = !updatedReceived1[index].viewed;

    console.log("Clicked index:", index);
    console.log("Updated Received1:", updatedReceived1);

    // Update the state of Received1 with the modified data
    setReceived(updatedReceived1);
  };

  return (
    <Box
      className="signup2_container"
      style={{
        background: "#f5f5f5",
        width: "100vw",
        height: "100vh",
        marginTop: "60px",
        paddingTop: "14px",
      }}
    >
      {/* <Box
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        {" "}
        <Typography
          level="title-md"
          sx={{
            color: "black",
            fontSize: "20px",
            fontFamily: "Manrope, sans-serif",
            fontWeight: "bold",
            marginLeft: "30px",
            marginBottom: "4px",
          }}
        >
          Received Cards
        </Typography>
        <Box sx={{ display: "flex", flexwrap: "wrap" }}>
        
          <div style={{position:"absolute",top:"11px",right:"370px"}}>
          <TextField
    sx={{
    
      padding: "0px",
      marginLeft: "20px",
      "& label.Mui-focused": {
        color: "#8B5CF6",
      },
      "& .MuiOutlinedInput-root": {
        height: "34px",
        width: "200px",
        borderColor: "transparent",
        "&:hover fieldset": {
          borderColor: "#8B5CF6",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#8B5CF6",
        },
      },
    }}
    placeholder="Enter CardID..."
    variant="outlined"
    
  /></div>
  <Box style={{position:"absolute",top:"12px",right:"320px",background:"#0071e3",padding:"0px",borderRadius:"4px"}}>
     
    <IconButton sx={{color:"#FCFCFC"}}>
       
          <SearchIcon />
      
     
          </IconButton>
 
          </Box>
          <Typography
            level="title-md"
            sx={{
              fontSize: "16px",
              fontFamily: "Manrope, sans-serif",
              color: "black",
            
              marginRight: "90px",
            }}
          >
            Welcome, {username}
          </Typography>
          <Tooltip title="Account Settings">
            <Avatar
              sx={{
                width: "32px",
                height: "30px",
                position: "absolute",
                top: "12px",
                right: "35px",
                fontSize: "15px",color:"black"
              }}
              onClick={handleAvatarClick}
            >
              SG
            </Avatar>
          </Tooltip>
        </Box>
      </Box> */}
      {/* <Box
        style={{
          fontSize: "16px",
          marginTop: "8px",
          marginLeft: "30px",
          fontFamily: "Manrope, sans-serif",
        }}
      >
        {timeOfDay}
      </Box> */}
      <Typography
        level="title-md"
        sx={{
          color: "black",
          fontSize: "20px",
          fontFamily: "Manrope, sans-serif",
          fontWeight: "bold",
          marginLeft: "30px",
          marginBottom: "4px",
        }}
      >
        Sent Cards
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginTop: "5px",
        }}
      >
        <Typography
          sx={{
            fontSize: "14.5px",
            width: "520px",
            fontFamily: "Manrope, sans-serif",
            marginLeft: "30px",
            marginTop: "5px",
            "@media (max-width: 600px)": {
              fontsize: "2px",
            },
          }}
        >
          Appreciation can change a day, even change a life. Your willingness to
          put it into words is all that is necessary. — Margaret Cousins
        </Typography>
        {/* <Box
          sx={{
            height: "45px",
            display: "flex",

            flexWrap: "wrap",

            justifyContent: "flex-end",

            marginRight: "32px",
          }}
        >
          <Button
            style={{
              textTransform: "none",

              background: "#0071e3",

              color: "#FCFCFC",

              gap: "10px",

              borderRadius: "6px",
            }}
          >
            <CloudDownloadIcon />

            <Typography sx={{ color: "#FCFCFC" }}>Download All</Typography>
          </Button>
        </Box> */}
      </Box>

      <Box
        sx={{
          marginLeft: "30px",
          marginRight: "30px",
          marginTop: "14px",
          marginBottom: "10px"
        }}
      >
        <TableContainer component={Paper} style={{ maxHeight,
 
  // '@media (maxWidth: 768px)': {
  //   maxWidth: '300px',
  // },
  }}>
          <div
            style={{
              display: "flex",
              marginTop: "5px",
              marginBottom: "5px",

              marginRight: "20px",
              alignItems: "center",
              fontWeight: "bold",
              justifyContent: "flex-end",
            }}
          >
            <TextField
              sx={{
                marginTop: "10px",
                padding: "0px",
                marginLeft: "20px",
                "& label.Mui-focused": {
                  color: "#8B5CF6",
                },
                "& .MuiOutlinedInput-root": {
                  height: "45px",
                  width: "350px",
                  borderColor: "transparent",
                  "&:hover fieldset": {
                    borderColor:  "#0071e3",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "#0071e3",
                  },
                },
              }}
              placeholder="Enter to Search..."
              variant="outlined"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
            />
          </div>

          <Table >
            <TableHead>
              <TableRow>
                {columns.map((column) => {
                  return (
                    <TableCell
                      key={column.accessor}
                      sx={{
                        padding: "12px 32px !important",
                        fontWeight: "600",
                        position: "sticky",
                        background: "#FCFCFC",
                        top: 0,
                        zIndex: 1,
                      }}
                    >
                      <TableSortLabel
                        direction={sortOrder === true ? "asc" : "desc"}
                      >
                        {column.label}
                      </TableSortLabel>
                    </TableCell>
                  );
                })}
              </TableRow>
            </TableHead>
            {Received1.length === 0 ? (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={columns.length} align="center">
                    You have not received any card yet.
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <TableBody className="custom-table-body">
                {Received1.slice(
                  page * rowsPerPage,
                  (page + 1) * rowsPerPage
                ).map((row, rowIndex) => {
                  // Calculate the actual index
                  const actualIndex = page * rowsPerPage + rowIndex;

                  return (
                    <TableRow

                  

                    sx={{ "&:hover": { backgroundColor: "#f5f5f5!important" } }}

                  >

                    <TableCell sx={{ padding: "12px 32px !important" }}>

                      {row.card}

                    </TableCell>

                    <TableCell sx={{ padding: "12px 32px !important" }}>

                      {row.date}

                    </TableCell>

                    <TableCell sx={{ padding: "12px 32px !important" }}>

                      {row.name}

                    </TableCell>

                    <TableCell sx={{ padding: "12px 32px !important" }}>

                      {row.category}

                    </TableCell>

                    <TableCell sx={{ padding: "8px 36px !important" }}>

                      <Box sx={{ display: "flex", flexWrap: "wrap" }}>

                        <Tooltip title="View Card">

                          <IconButton>

                            <VisibilityIcon />

                          </IconButton>

                        </Tooltip>

                      </Box>

                    </TableCell>

                  </TableRow>
                  );
                })}
              </TableBody>
            )}
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 20]}
          component="div"
          count={Received1.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Box>
      <Menu
        placement="bottom-end"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        sx={{ marginTop: "1.43em" }}
      >
        <MenuItem>
          <div>
            <Typography sx={{ color: "black" }}>Sumaja Gurlinka</Typography>
            <Typography sx={{ fontSize: "14px", marginTop: "5px" }}>
              Associate
            </Typography>
            <Typography sx={{ color: "black" }}>
              sumajagurlinka22@gmail.com
            </Typography>
          </div>
        </MenuItem>

        <Divider></Divider>
        <MenuItem>
          {" "}
          <ListItemIcon sx={{ marginRight: "5px", fontSize: "20px" }}>
            <Logout size="sm" />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default SentCards;
