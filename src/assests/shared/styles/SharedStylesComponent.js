import React from "react";

import { Button, styled, InputBase, Box } from "@mui/material";
export const TeamHeaderWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down('sm')]: {
        width: '58%',
        flexDirection: 'column !important',
        justifyContent: 'flex-start !important',

    },
}));

export const SearchInput = styled(InputBase)(({ theme }) => ({
    margin: theme.spacing(0, 3),
    width: '14rem',
    cursor: 'pointer',
    fontStyle: 'italic',
    borderBottom: `1px solid ${theme.palette.common.black}`,
    [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(2, 0, 0, 0),
        width: '11rem',
    },
}));
export const PaginateWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
}));
export const TableWrapper = styled(Box)(({ theme }) => ({
    height: '700px',
}));
export const MainTable = styled('div')(({ theme }) => ({
    width: '60%'
}));
export const SearchWrapper = styled('div')(({ theme }) => ({
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
}));