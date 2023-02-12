import MapBoxWrapper from "@/components/map";
import {
  Box,
  Grid,
  Button,
  Divider,
  Typography,
  ListItem,
  ListItemText,
  List,
} from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";

export default function Home() {
  return (
    <>
      {/* MAP COMPONENT */}
      <Box height={450} overflow="hidden">
        <MapBoxWrapper />
      </Box>
      {/* START SECTION */}
      <Box marginTop={3} padding={1} bgcolor={"GrayText"} color="white">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={8} alignItems="center" display={"flex"} spacing={3}>
            <RemoveIcon />
            <span>Select Field Information</span>
          </Grid>
          <Grid item xs={4} textAlign="end">
            <Button variant="contained" color="secondary">
              Request Service
            </Button>
          </Grid>
        </Grid>
      </Box>
      {/* EMD */}
      {/* START SECTION */}
      <Box marginTop={3}>
        <Grid container spacing={2}>
          <Grid item xs={6.5}>
            <Grid container spacing={2}>
              <Grid item xs={7}>
                <Box
                  color="secondary"
                  display={"block"}
                  bgcolor={"lightgray"}
                  padding={1}
                  textAlign="center"
                  fontWeight={"bold"}>
                  My Fields
                </Box>
              </Grid>
              <Grid item xs={5}>
                <Box
                  color="secondary"
                  display={"block"}
                  bgcolor={"lightblue"}
                  padding={1}
                  textAlign="center"
                  fontWeight={"bold"}>
                  Field Data
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5.5}>
            <Grid container spacing={2}>
              <Grid item xs>
                <Box
                  color="secondary"
                  display={"block"}
                  bgcolor={"lightgray"}
                  padding={1}
                  textAlign="center"
                  fontWeight={"bold"}>
                  Field Monitor
                </Box>
              </Grid>
              <Grid item xs>
                <Box
                  color="secondary"
                  display={"block"}
                  bgcolor={"lightgray"}
                  padding={1}
                  textAlign="center"
                  fontWeight={"bold"}>
                  Field Insight
                </Box>
              </Grid>
              <Grid item xs>
                <Box
                  color="secondary"
                  display={"block"}
                  bgcolor={"lightgray"}
                  padding={1}
                  textAlign="center"
                  fontWeight={"bold"}>
                  Field Notes
                </Box>
              </Grid>
              <Grid item xs>
                <Box
                  color="secondary"
                  display={"block"}
                  bgcolor={"lightgray"}
                  padding={1}
                  textAlign="center"
                  fontWeight={"bold"}>
                  Share Status
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      {/* END */}
      {/* START SECTION */}
      <Box marginTop={3} mb={2}>
        <Grid container direction="row" alignItems="stretch" spacing={2}>
          <Grid item xs={6.5}>
            <Grid container spacing={2} height="100%" mt={0}>
              <Grid item xs={7} style={{ paddingTop: "0" }}>
                <Box
                  color="secondary"
                  bgcolor={"lightgray"}
                  textAlign="center"
                  fontWeight={"bold"}
                  justifyContent="center"
                  alignItems="center"
                  display={"flex"}
                  height="100%">
                  Field List Dropdown View
                </Box>
              </Grid>
              <Grid item xs={5} style={{ paddingTop: "0" }}>
                <Box
                  bgcolor={"lightcyan"}
                  fontWeight={"bold"}
                  p={1}
                  justifyContent="space-between"
                  display={"flex"}
                  height="100%">
                  <Box flex={1}>
                    <Typography
                      variant="subtitle1"
                      fontWeight={"bold"}
                      mb={0}
                      color={"GrayText"}
                      lineHeight="1.2"
                      gutterBottom>
                      Drainage Classification
                    </Typography>
                    <List dense={false}>
                      <ListItem disablePadding>
                        <ListItemText primary="Soil" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary="Tile" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary="Yield" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary="Wetlands" />
                      </ListItem>
                    </List>
                  </Box>
                  <Divider
                    orientation="vertical"
                    style={{ margin: "0 15px 0 5px" }}
                    flexItem
                  />
                  <Box flex={1}>
                    <List dense={false}>
                      <ListItem disablePadding>
                        <ListItemText primary="Weather" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary="Crop History" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary="Hail History" />
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemText primary="NDVI" />
                      </ListItem>
                    </List>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={5.5}>
            <Box
              color="white"
              bgcolor={"lightslategray"}
              textAlign="center"
              fontWeight={"bold"}
              justifyContent="center"
              alignItems="center"
              display={"flex"}
              height="250px">
              Data, Graph, Table
            </Box>
          </Grid>
        </Grid>
      </Box>
      {/* END */}
    </>
  );
}
