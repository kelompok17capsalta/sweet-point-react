import * as React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductCategoryCard from "../ProductCategoryCard";
import CardCompany from "../Card/CardCompany";
import { Grid } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function FullWidthTabs() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box p="5vw" boxShadow={3} my="3vh" borderRadius="30px" bgcolor="#F6F9FF">
      <Box sx={{ bgcolor: "background.paper" }}>
        <AppBar
          position="static"
          sx={{
            borderTopRightRadius: "10px",
            borderTopLeftRadius: "10px",
            backgroundColor: "white",
          }}
        >
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="primary"
            variant="fullWidth"
            aria-label="full width tabs example"
          >
            <Tab
              sx={{ textTransform: "none" }}
              label="Online Store"
              {...a11yProps(0)}
            />
            <Tab
              sx={{ textTransform: "none" }}
              label="Tradisional Store"
              {...a11yProps(1)}
            />
          </Tabs>
        </AppBar>
        <Box my="3vh" bgcolor="#F6F9FF">
          {value === 0 ? (
            <Grid container spacing={2}>
              <Grid item>
                <CardCompany
                  image={"/logo.png"}
                  title="title"
                  cashback="Cashback 100 Point"
                />
              </Grid>
              <Grid item>
                <CardCompany
                  image={"/logo.png"}
                  title="title"
                  cashback="Cashback 100 Point"
                />
              </Grid>
              <Grid item>
                <CardCompany
                  image={"/logo.png"}
                  title="title"
                  cashback="Cashback 100 Point"
                />
              </Grid>
              <Grid item>
                <CardCompany
                  image={"/logo.png"}
                  title="title"
                  cashback="Cashback 100 Point"
                />
              </Grid>
              <Grid item>
                <CardCompany
                  image={"/logo.png"}
                  title="title"
                  cashback="Cashback 100 Point"
                />
              </Grid>
            </Grid>
          ) : (
            <Grid container spacing={2}>
              <Grid item>
                <CardCompany
                  image={"/logo.png"}
                  title="title2"
                  cashback="Cashback 100 Point"
                />
              </Grid>
              <Grid item>
                <CardCompany
                  image={"/logo.png"}
                  title="title2"
                  cashback="Cashback 100 Point"
                />
              </Grid>
              <Grid item>
                <CardCompany
                  image={"/logo.png"}
                  title="title2"
                  cashback="Cashback 100 Point"
                />
              </Grid>
              <Grid item>
                <CardCompany
                  image={"/logo.png"}
                  title="title2"
                  cashback="Cashback 100 Point"
                />
              </Grid>
              <Grid item>
                <CardCompany
                  image={"/logo.png"}
                  title="title2"
                  cashback="Cashback 100 Point"
                />
              </Grid>
              <Grid item>
                <CardCompany
                  image={"/logo.png"}
                  title="title2"
                  cashback="Cashback 100 Point"
                />
              </Grid>
            </Grid>
          )}
          <div class="d-grid py-3">
            <button
              class="btn border rounded-pill"
              type="button"
              style={{ backgroundColor: "white" }}
            >
              Lihat Toko Lainnya
            </button>
          </div>
        </Box>
      </Box>
    </Box>
  );
}
