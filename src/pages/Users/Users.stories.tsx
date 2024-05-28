// Users.stories.tsx
import type { Meta, StoryObj } from "@storybook/react";
import  { Users } from './Users'; // Make sure to use PascalCase for component names
import { GridColDef, GridRenderEditCellParams } from '@mui/x-data-grid';
// import Button from '@mui/material/Button';



const meta: Meta<typeof Users> = {
  title: 'pages/Users',
  component: Users,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;
  

const defaultColumns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
    filterable: false,
    sortable: false,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
    editable: true,
  },
  // {
  //   field: 'actions',
  //   headerName: 'Actions',
  //   width: 150,
  //   renderCell: (params) => (
  //     <Button
  //       variant="contained"
  //       color="primary"
  //       onClick={() => console.log(`Action button clicked for row with id: ${params.row.id}`)}
  //     >
  //       Action
  //     </Button>
  //   ),
  // },
];



export const Default: Story = {
  args: {
  columns: [
      { field: 'id', headerName: 'ID', width: 90 },
      {
          field: 'firstName',
          headerName: 'First name',
          width: 150,
          editable: true,
          filterable: false,
          sortable: false,
      },
      {
          field: 'lastName',
          headerName: 'Last name',
          width: 150,
          editable: true,
      },
      {
          field: 'email',
          headerName: 'Email',
          width: 150,
          editable: true,
      },
      // {
      //     field: 'actions',
      //     headerName: 'Actions',
      //     width: 150,
      //     renderCell: (params: GridRenderEditCellParams) => (
      //         <Button
      //             variant="contained"
      //             color="primary"
      //             onClick={() => handleActionClick(params.row.id)}
      //         >
      //             Action
      //         </Button>
      //     ),
      // },
  ],

  Rows: [
    { id: 1, lastName: 'Snow', firstName: 'Jon', email: 'fake@gmail.com', actions: 'sfsdf' },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', email: 'fake@gmail.com', actions: 'sfsdf' },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', email: 'fake@gmail.com', actions: 'sfsdf' },
    { id: 4, lastName: 'Stark', firstName: 'Arya', email: 'fake@gmail.com', actions: 'sfsdf' },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', email: 'fake@gmail.com', actions: 'sfsdf' },
    { id: 6, lastName: 'Melisandre', firstName: null, email: 'fake@gmail.com', actions: 'sfsdf' },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', email: 'fake@gmail.com', actions: 'sfsdf' },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', email: 'fake@gmail.com', actions: 'sfsdf' },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', email: 'fake@gmail.com', actions: 'sfsdf' },
],
  },
};