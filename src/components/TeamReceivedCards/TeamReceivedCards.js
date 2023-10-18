import React, { useEffect } from "react";
import { Avatar, Box, Divider, IconButton, Tooltip } from "@mui/material";
import { useState } from "react";
import { Dialog, DialogTitle, DialogContent } from "@mui/material";
import Typography from "@mui/joy/Typography";
import {
  TextField,
  Paper,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableSortLabel,
  TablePagination,
} from "@mui/material";
import DownloadIcon from "@mui/icons-material/Download";
import { connect } from "react-redux";
import VisibilityIcon from "@mui/icons-material/Visibility";
import InputAdornment from "@mui/material/InputAdornment";
import Menu from "@mui/material/Menu";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import { Logout } from "@mui/icons-material";
import ListItemIcon from "@mui/material/ListItemIcon";
import SearchIcon from "@mui/icons-material/Search";
import { Received } from "../../data/Received";
const TeamReceivedCards=(props)=> {
  const Received1 = Received;
  const username = "Sumaja Gurlinka";
  const maxRowsToShowWithoutScrollbar = 5;
  const maxHeight = `${maxRowsToShowWithoutScrollbar * 90}px`;
  const [timeOfDay, setTimeOfDay] = useState("");
  const[dialog,setDialog]=useState(false);
  const [sortOrder, setSortOrder] = useState(true);
  const [page, setPage] = useState(0);
  const [selectedCard, setSelectedCard] = useState(null);
  const [rowsPerPage, setRowsPerPage] = useState(5);
 
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const {
  
    user,

   
  } = props;
 
  const base64Image = user.image;

 
  
  const columns = [
   

    { accessor: "Card ID", label: "Card ID" },

    { accessor: "Received Time", label: "Received Time" },



    { accessor: "Sender", label: "Sender" },



    { accessor: "Category", label: "Category" },



    { accessor: "Actions", label: "Actions" },
  ];

  useEffect(() => {
    console.log("base:",Image);
     
   
  }, []);
 
  
  
  


  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleAvatarClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(event.target.value);
    setPage(0);
  };
  const handleView=(card)=>{
    setDialog(true);
    setSelectedCard(card);
    console.log(Received1);
  }
  return (
    <Box
    className="signup1_container"
      style={{
        background: "#f5f5f5",
        width: "100vw",
        marginTop: "60px",
        height: "100vh",
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
            "@media (max-width: 600px)": {
              fontSize:"18px",
             
             },
          }}
        >
          Sent Cards
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
          "@media (max-width: 600px)": {
            fontSize: "18px",
          },
        }}
      >
        Team Received Cards
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
              fontSize: "20px",
            },
          }}
        >
          Appreciation can change a day, even change a life. Your willingness to
          put it into words is all that is necessary. — Margaret Cousins
        </Typography>
      </Box>
      {/* <Box sx={{display:"flex",flexWrap:"wrap",justifyContent:"flex-end",marginRight:"130px"}}>
<Button style={{textTransform:"none" ,  background: "#0071e3",color:"#FCFCFC",gap:"10px",borderRadius:"6px"}}>
<CloudDownloadIcon/>
<Typography sx={{color:"#FCFCFC"}}>Download All</Typography></Button>
      </Box> */}
      <Box
        sx={{
          marginLeft: "30px",
          marginRight: "30px",
          marginTop: "14px",
          marginBottom: "10px",
          
        }}
      >
        <TableContainer component={Paper} style={{ maxHeight }}>
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
            {/* Other elements */}

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
                    borderColor:  "#0071e3",
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

          <Table>
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
                        background:"#FCFCFC",
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
                    You have not sent any card yet.
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <TableBody className="custom-table-body">
                {Received1.slice(
                  page * rowsPerPage,
                  (page + 1) * rowsPerPage
                ).map((row, index) => (
                  <TableRow
                    key={index}
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
                          <IconButton onClick={() => handleView(row)}>
                          <VisibilityIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
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
      <Dialog open={dialog}>
  <DialogContent
    style={{
      width: '300px',
      height: '300px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundImage: base64Image
        ? `url(data:image/jpeg;base64,${base64Image})`
        : 'none',
    }}
  >
 gggggggggg
  </DialogContent>
</Dialog>


    </Box>
  );
}
const mapStateToProps = (state) => ({
    user: state.user,
  
  
  });
export default connect(mapStateToProps)(TeamReceivedCards);
