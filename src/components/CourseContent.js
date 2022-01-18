import React ,{Component}from "react";
import{PageHeader,Typography} from 'antd';
import { DataGrid } from '@mui/x-data-grid';

const{Title} = Typography;

const columns = [
    { field: 'couseNum#', 
      headerName: 'Course Number#', 
      width: 200 
    },
    {
      field: 'CourseName',
      headerName: 'Course Name',
      width: 200,
      editable: true,
    },
    {
      field: 'Fall',
      headerName: 'Fall',
      width: 200,
      editable: true,
    },
    {
      field: 'Winter',
      headerName: 'Winter',
      //type: 'number',
      width: 200,
      editable: true,
    },
    {
        field: 'Summer',
        headerName: 'Summer',
        //type: 'number',
        width: 200,
        editable: true,
      },
    {
      field: 'Instructor',
      headerName: 'Instructor',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 200,
      valueGetter: (params) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
    {
        field: 'Prereq',
        headerName: 'Prerequisite(s)',
        //type: 'number',
        width: 200,
        editable: true,
      },
  ];


  const rows = [
      /*
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
    */
  ];


class CourseContent extends Component { 
   
    render() { 
        return (
            <div>
                <div>
                <PageHeader
                style={{border: '1px solid rgb(235, 237, 240)'}}
                className="site-page-header"
                onBack={() => window.history.back()}
                title="Student Course Guide"
                subTitle="Courses for year"
                />
                <Title level={3} style={{marginLeft:55,marginTop:30}}>Couses Updating for current semester</Title>
                <Title level={4} style={{marginLeft:55,marginTop:30}}>Use the filters to filter down the requirements for each Course</Title>
                </div>

                <div style={{ height: 600, width: '100%',marginTop:50 }}>
                <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick/>
                </div>  
            </div> 
        );
    }
}

export default CourseContent;