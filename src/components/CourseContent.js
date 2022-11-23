import React ,{Component}from "react";
import{PageHeader,Typography} from 'antd';
import { DataGrid } from '@mui/x-data-grid';
import CourseData from "./CourseData";

const{Title} = Typography;

const columns = [

  { field: 'id', headerName: 'ID', width: 90 },

    { field: 'courseNum', 
      headerName: 'Course Number', 
      editable: true,
      width: 200,
    },
    {
      field: 'CourseName',
      headerName: 'Course Name',
      width: 350,
      editable: true,
    },
    {
      field: 'Fall',
      headerName: 'Fall',
      width: 200,
      editable: true,
      sortable:false,
    },
    {
      field: 'Winter',
      headerName: 'Winter',
      //type: 'number',
      width: 200,
      sortable:false,
    },
    {
        field: 'Summer',
        headerName: 'Summer',
        //type: 'number',
        width: 200,
        editable: true,
        sortable:false,
      },
    {
      field: 'Instructor',
      headerName: 'Instructor',
      width:200
      
    },
    {
        field: 'Prereq',
        headerName: 'Prerequisite(s)',
        //type: 'number',
        width: 500,
        editable: true,
      },
  ];

 /*
  const rows = [
    
    {id: 1, courseNum:'COMP3400', CourseName:'Object-Oriented Programming', Fall:'Close', Summer:'Open', Winter:'Open', Instructor:'Paul Preney', Prereq:'COMP1400'},
    {id: 2, courseNum:'COMP1400', CourseName:'Programming Language using C', Fall:'Open', Summer:'Open', Winter:'Close', Instructor:'Saead Samet', Prereq:'None'},
  ];
*/
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
                rows={CourseData}
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