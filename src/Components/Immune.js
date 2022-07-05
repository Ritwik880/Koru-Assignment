import React, { useState, useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { MainTable, PaginateWrapper, SearchInput, SearchWrapper, TeamHeaderWrapper, TableWrapper } from '../../src/assests/shared/styles/SharedStylesComponent';
import { Typography, Stack, ToggleButtonGroup, ToggleButton, Button } from '@mui/material';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';

function CustomUnsortedIcon() {
    return <UnfoldMoreIcon sx={{ color: '#F46A03' }} />;
}


const columns = [
    {
        field: 'id',
        headerName: 'S.no.',
        minWidth: 130,
        flex: 1,
        sortable: false,
        align: 'center',
        headerAlign: 'center',
        renderCell: (params) => <p>{params.row.id}</p>,
    },
    {
        field: 'title',
        headerName: 'Name',
        minWidth: 130,
        flex: 1,
        headerAlign: 'center',
        align: 'center',
        sortable: false,
        renderCell: (params) => {
            let filterName = params.row.title.slice(0, 10);
            return filterName
        }
    },
    {
        field: 'body',
        headerName: 'Description',
        minWidth: 180,
        flex: 1,
        headerAlign: 'center',
        align: 'center',
        sortable: false,
        renderCell: (params) => {
            let filterBody = params.row.title.slice(0, 20);
            return filterBody
        }
    },


];

const Immune = () => {
    const [items, setItems] = useState([])
    const [tableData, setTableData] = useState([]);
    const [click, setClick] = useState('');
    const [teamPage, setTeamPage] = useState(1);
    const [checkPage, setCheckPage] = useState({});
    const [searchValue, setSearchValue] = useState('');
    const [selectStatus, setSelectStatus] = useState('');
    const selectChange = async (event) => {
        // selectUser(event.target.value);
        setSelectStatus(event.target.value);
    };
    const handleSearch = (e) => {
        setSearchValue(e.target.value);
    }
    const clearInput = () => {
        setSearchValue('');
    };
    const handlePaginate = (newClick) => {
        setClick(newClick);
    };
    let limit = 10;
    const getData = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=1&_limit=${limit}`);
        const data = await res.json();
        const total = res.headers.get("x-total-count");
        console.log(data);
        setItems(data);
        // setTableData(total);
        setTableData(Math.ceil(total / limit));

    }
    useEffect(() => {
        getData()
    }, [])

    return (
        <>

            <MainTable>
                <TeamHeaderWrapper>
                    <SearchWrapper>
                        <Typography variant='h6'>
                            Find
                        </Typography>
                        <SearchInput
                            onChange={handleSearch}
                            value={searchValue}
                            size="small"
                            placeholder="Search"


                        />

                    </SearchWrapper>
                    <Button>
                        Delete
                    </Button>



                </TeamHeaderWrapper>
                <TableWrapper>
                    <DataGrid
                        sx={{
                            pl: 0.4,
                            ".MuiDataGrid-columnSeparator": {
                                display: 'none !important',
                            },

                            '.MuiDataGrid-iconButtonContainer': {
                                visibility: 'visible !important'
                            },

                        }}

                        rows={items}
                        columns={columns}
                        checkboxSelection={true}
                        disableSelectionOnClick
                        rowHeight={60}
                        disableColumnMenu={true}
                        hideFooter={true}
                        hideFooterPagination={true}

                        components={{
                            ColumnUnsortedIcon: CustomUnsortedIcon,
                            ColumnSortedDescendingIcon: CustomUnsortedIcon,
                            ColumnSortedAscendingIcon: CustomUnsortedIcon,
                            NoRowsOverlay: () => (
                                <Stack height="100%" alignItems="center" justifyContent="center">
                                    <Typography color="primary" variant="h5">
                                        No Data Found!
                                    </Typography>
                                </Stack>
                            ),
                        }}
                    />
                </TableWrapper>
                <PaginateWrapper>
                    <div>
                        <p>
                            Total Results: {tableData}
                        </p>
                        <p>
                            Page {tableData} of {tableData}
                        </p>
                    </div>
                    <ToggleButtonGroup
                        sx={{
                            background: 'none',
                            border: 'none',
                        }}
                        value={click}
                        exclusive
                        onChange={handlePaginate}
                    >
                        <ToggleButton
                            onClick={() => setTeamPage(teamPage - 1)}
                            disabled={checkPage.prev === null}
                            value="prev"
                        >
                            <ArrowBackIosIcon fontSize="small" />
                        </ToggleButton>
                        <ToggleButton
                            onClick={() => setTeamPage(teamPage + 1)}
                            disabled={checkPage.next === null}
                            value="next"
                        >
                            <ArrowForwardIosIcon fontSize="small" />
                        </ToggleButton>
                    </ToggleButtonGroup>
                </PaginateWrapper>
            </MainTable>



        </>
    )
}

export default Immune