import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Immune from './Immune';
import Table from './Table';

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
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}


const Header = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <>
            <nav className="navbar bg-dark">
                <div className="container">
                    <div className="nav">
                        <a className="navbar-brand" href="#">iData</a>
                        <div className="right">
                            <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                Launch demo modal
                            </button>
                            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog modal-fullscreen">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h5 className="modal-title" id="exampleModalLabel">Alets</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <Table />
                                            {/* <Box sx={{ width: '100%', justifyContent: 'flex-end' }}>
                                                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                                                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                                                        <Tab label="Immunisation Alerts" {...a11yProps(0)} />
                                                        <Tab label="Lab Alerts" {...a11yProps(1)} />
                                                        <Tab label="DI Alerts" {...a11yProps(2)} />
                                                        <Tab label="Procedure Alerts" {...a11yProps(3)} />
                                                        <Tab label="RX Specific Alerts" {...a11yProps(4)} />
                                                        <Tab label="DX Specific Alerts" {...a11yProps(5)} />
                                                        <Tab label="Patient Specific Alerts" {...a11yProps(6)} />

                                                    </Tabs>
                                                </Box>
                                                <TabPanel value={value} index={0}>
                                                    <Table />
                                                </TabPanel>
                                                <TabPanel value={value} index={1}>
                                                    Lab Alerts
                                                </TabPanel>
                                                <TabPanel value={value} index={2}>
                                                    DI Alerts
                                                </TabPanel>
                                                <TabPanel value={value} index={3}>
                                                    Procedure Alerts
                                                </TabPanel>
                                                <TabPanel value={value} index={4}>
                                                    RX Specific Alerts
                                                </TabPanel>
                                                <TabPanel value={value} index={5}>
                                                    DX Specific Alerts
                                                </TabPanel>
                                                <TabPanel value={value} index={6}>
                                                    Patient Specific Alerts
                                                </TabPanel>

                                            </Box> */}
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Cancel</button>
                                            <button type="button" className="btn btn-primary">Ok</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </nav>
        </>
    )
}

export default Header