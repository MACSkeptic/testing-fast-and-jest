import React from 'react';
import './App.css';
import { 
  FASTDesignSystemProvider, 
  FASTCard, 
  FASTButton,
  FASTTab,
  FASTTabs,
  FASTTabPanel
} from '@microsoft/fast-components';
import reactifyWc from 'reactify-wc';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

FASTDesignSystemProvider; // eslint-disable-line
FASTCard; // eslint-disable-line
FASTButton; // eslint-disable-line
FASTTab; // eslint-disable-line
FASTTabPanel; // eslint-disable-line
FASTTabs; // eslint-disable-line

const FProvider = reactifyWc('fast-design-system-provider');
const FButton = reactifyWc('fast-button');
const FCard = reactifyWc('fast-card');
const FTabs = reactifyWc('fast-tabs');
const FTab = reactifyWc('fast-tab');
const FTabPanel = reactifyWc('fast-tab-panel');


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export const AppWithMaterial = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Tab One" {...a11yProps(0)} />
          <Tab label="Tab Two" {...a11yProps(1)} />
          <Tab label="Tab Three" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        Tab Panel 1
      </TabPanel>
      <TabPanel value={value} index={1}>
        Tab Panel 2
      </TabPanel>
      <TabPanel value={value} index={2}>
        Tab Panel 3
      </TabPanel>
    </div>
  );
};

export const AppWithFastRaw = () => {
  return (
    <div>
      <fast-design-system-provider use-defaults>
        <fast-button>
          Hello
        </fast-button>
        <fast-card>
          Card
        </fast-card>
        <fast-tabs>
          <fast-tab slot="tab" slot="tab">Tab one</fast-tab>
          <fast-tab slot="tab" slot="tab">Tab two</fast-tab>
          <fast-tab slot="tab" slot="tab">Tab three</fast-tab>
          <fast-tab-panel slot="tabpanel" slot="tabpanel">Tab panel 1</fast-tab-panel>
          <fast-tab-panel slot="tabpanel" slot="tabpanel">Tab panel 2</fast-tab-panel>
          <fast-tab-panel slot="tabpanel" slot="tabpanel">Tab panel 3</fast-tab-panel>
        </fast-tabs>
      </fast-design-system-provider>

    </div>
  );
};


export const AppWithFast = () => {
  return (
    <div>
      <FProvider use-defaults>
        <FButton>
          Hello
        </FButton>
        <FCard>
          Card
        </FCard>
        <FTabs>
          <FTab slot="tab" slot="tab">Tab one</FTab>
          <FTab slot="tab" slot="tab">Tab two</FTab>
          <FTab slot="tab" slot="tab">Tab three</FTab>
          <FTabPanel slot="tabpanel" slot="tabpanel">Tab panel 1</FTabPanel>
          <FTabPanel slot="tabpanel" slot="tabpanel">Tab panel 2</FTabPanel>
          <FTabPanel slot="tabpanel" slot="tabpanel">Tab panel 3</FTabPanel>
        </FTabs>
      </FProvider>

    </div>
  );
};

const App = () => {
  return (
    <div>
      <AppWithFast />
      <AppWithMaterial />
    </div>
  )
};

export default App;
