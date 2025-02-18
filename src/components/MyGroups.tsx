import { Grid, Avatar, Box } from "@mui/material";
import { deepOrange, deepPurple } from "@mui/material/colors";

const MyGroups = () => {
  const avatarNames = [
    "John Doe",
    "Jane Smith",
    "Sam Wilson",
    "Robert Johnson",
    "Mary Davis",
    "Linda Moore",
    "Michael Brown",
    "James Garcia",
    "Patricia Taylor",
    "Charles Anderson",
    "Jane Smith",
    "Sam Wilson",
    "Robert Johnson",
    "Mary Davis",
    "Linda Moore",
    "Michael Brown",
    "James Garcia",
    "Patricia Taylor",
    "Charles Anderson",
    "Jane Smith",
    "Sam Wilson",
    "Robert Johnson",
    "Mary Davis",
    "Linda Moore",
    "Michael Brown",
    "James Garcia",
    "Patricia Taylor",
    "Charles Anderson",
  ];
  return (
    <Box
      // center the items
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "top",
        justifyContent: "center",
        width: "100%",
        height: "100%",
        overflowY: "scroll",
        backgroundColor: "#f4f6f8",
        paddingBottom: "20px"
      }}
    >
      <Grid container spacing={2} style={{ height: "100%", width: "100%" }}>
        {avatarNames.map((name, index) => (
          <Grid item xs={3} sm={3} md={3} lg={3} key={index}>
            <Avatar
              sx={{
                bgcolor: index % 2 === 0 ? deepOrange[500] : deepPurple[500],
                width: 56,
                height: 56,
                fontSize: 20,
              }}
            >
              {name.charAt(0)}
            </Avatar>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default MyGroups;
