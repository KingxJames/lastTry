import * as React from 'react';
import Box from '@mui/material/Box';
import {
  DataGrid, GridColDef, GridRenderCellParams, GridRowSelectionModel
} from '@mui/x-data-grid';
import {
  Link, TextField, InputAdornment, Button, Dialog, DialogActions, DialogContent, DialogTitle, MenuItem, Select, FormControl, InputLabel, Typography, DialogContentText
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/system';
import { closeSidebar } from '../../utils';

// Initial rows data
const initialRows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 4, lastName: 'Stark', firstName: 'Arya', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 6, lastName: 'Melisandre', firstName: null, status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 10, lastName: 'Snow', firstName: 'Jon', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 11, lastName: 'Lannister', firstName: 'Cersei', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 12, lastName: 'Lannister', firstName: 'Jaime', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 13, lastName: 'Stark', firstName: 'Arya', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 14, lastName: 'Targaryen', firstName: 'Daenerys', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 15, lastName: 'Melisandre', firstName: 'James', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 16, lastName: 'Clifford', firstName: 'Ferrara', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 17, lastName: 'Frances', firstName: 'Rossini', status: 'Active', email: 'james.faber@ub.edu.bz' },
  { id: 18, lastName: 'Roxie', firstName: 'Harvey', status: 'Active', email: 'james.faber@ub.edu.bz' },
];

// Define columns after initial rows data
const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 110 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 110,
    editable: false,
  },
  {
    field: 'status',
    headerName: 'Status',
    type: 'boolean',
    width: 150,
    editable: false,
  },
  {
    field: 'email',
    headerName: 'Email',
    type: 'number',
    width: 180,
    editable: false,
    headerAlign: 'center',
  },
  {
    field: 'viewDetails',
    headerName: '',
    width: 200,
    renderCell: (params: GridRenderCellParams) => (
      <StyledLink href={`/user/${params.row.id}`}>View Details</StyledLink>
    ),
    align: 'center',
    headerAlign: 'right',
  },
];

const StyledLink = styled(Link)({
  textDecoration: 'none',
  '&:hover': {
    textDecoration: 'underline',
  },
});

const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    borderRadius: 30,
  },
});

export const Users: React.FC = () => {
  const [searchText, setSearchText] = React.useState('');
  const [openNewUserDialog, setOpenNewUserDialog] = React.useState(false);
  const [openDeleteConfirmDialog, setOpenDeleteConfirmDialog] = React.useState(false);
  const [selectedRows, setSelectedRows] = React.useState<GridRowSelectionModel>([]);
  const [rows, setRows] = React.useState(initialRows);
  const [newUser, setNewUser] = React.useState({
    firstName: '',
    lastName: '',
    address: '',
    accessGroup: '',
  });

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(event.target.value);
  };

  const handleNewUser = () => {
    setOpenNewUserDialog(true);
  };

  const handleNewUserClose = () => {
    setOpenNewUserDialog(false);
  };

  const handleNewUserSave = () => {
    const newId = rows.length ? Math.max(...rows.map(row => row.id)) + 1 : 1;
    const newRow = {
      id: newId,
      lastName: newUser.lastName,
      firstName: newUser.firstName,
      status: 'Active', // Assuming the status is active for new users
      email: newUser.address, // Assuming email is used as address in this context
    };
    setRows([...rows, newRow]);
    setNewUser({ firstName: '', lastName: '', address: '', accessGroup: '' });
    setOpenNewUserDialog(false);
  };

  const handleBulkUpdate = () => {
    // Implement the logic for bulk updating users
    console.log('Bulk update users');
  };

  const handleDeleteUsers = () => {
    setOpenDeleteConfirmDialog(true);
  };

  const handleDeleteConfirmClose = () => {
    setOpenDeleteConfirmDialog(false);
  };

  const handleDeleteConfirm = () => {
    const newRows = rows.filter(row => !selectedRows.includes(row.id));
    setRows(newRows);
    setOpenDeleteConfirmDialog(false);
  };

  const handleRowSelection = (newSelection: GridRowSelectionModel) => {
    setSelectedRows(newSelection);
  };

  const filteredRows = rows.filter((row) => {
    return (
      row.firstName?.toLowerCase().includes(searchText.toLowerCase()) ||
      row.lastName?.toLowerCase().includes(searchText.toLowerCase()) ||
      row.email?.toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <Box sx={{ height: 650, width: 1000 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
        <StyledTextField
          variant="outlined"
          placeholder="Search..."
          value={searchText}
          onChange={handleSearchChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        <Box>
          <Button variant="contained" color="primary" onClick={handleNewUser} sx={{ mx: 1 }}>
            New User
          </Button>
          <Button variant="contained" color="secondary" onClick={handleBulkUpdate} sx={{ mx: 1 }}>
            Bulk Update Users
          </Button>
          <Button variant="contained" color="error" onClick={handleDeleteUsers} sx={{ mx: 1 }}>
            Delete Users
          </Button>
        </Box>
      </Box>
      <DataGrid
        rows={filteredRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        pageSizeOptions={[10]}
        checkboxSelection
        disableRowSelectionOnClick
        onRowSelectionModelChange={handleRowSelection}
        sx={{
          '& .MuiDataGrid-row:hover': {
            backgroundColor: 'rgba(63, 81, 181, 0.04)',
          },
          '& .MuiDataGrid-columnHeaders': {
            backgroundColor: 'rgba(63, 81, 181, 0.04)',
          },
        }}
      />
      {/* New User Dialog */}
      <Dialog open={openNewUserDialog} onClose={handleNewUserClose}>
        <DialogTitle>New User</DialogTitle>
        <DialogContent>
          <TextField
            margin="dense"
            label="First Name"
            fullWidth
            value={newUser.firstName}
            onChange={(e) => setNewUser({ ...newUser, firstName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Last Name"
            fullWidth
            value={newUser.lastName}
            onChange={(e) => setNewUser({ ...newUser, lastName: e.target.value })}
          />
          <TextField
            margin="dense"
            label="Address"
            fullWidth
            value={newUser.address}
            onChange={(e) => setNewUser({ ...newUser, address: e.target.value })}
          />
          <FormControl fullWidth margin="dense">
            <InputLabel>Access Group</InputLabel>
            <Select
              value={newUser.accessGroup}
              onChange={(e) => setNewUser({ ...newUser, accessGroup: e.target.value })}
            >
              <MenuItem value="Admin">Admin</MenuItem>
              <MenuItem value="User">User</MenuItem>
              <MenuItem value="Guest">Guest</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleNewUserClose}>Cancel</Button>
          <Button onClick={handleNewUserSave} color="primary">Save</Button>
        </DialogActions>
      </Dialog>
      {/* Delete Confirmation Dialog */}
      <Dialog open={openDeleteConfirmDialog} onClose={handleDeleteConfirmClose}>
        <DialogTitle>Confirm Delete</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete the selected user(s)?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteConfirmClose}>Cancel</Button>
          <Button onClick={handleDeleteConfirm} color="error">Delete</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
}

export default Users;
