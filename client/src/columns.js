
export default 
    [
        {
          Header: "Name",
          columns: [
            {
              Header: "First Name",
              accessor: "firstName"
            },
            {
              Header: "Last Name",
              id: "lastName",
              accessor: d => d.lastName
            }
          ]
        },
        {
          Header: "Info",
          columns: [
            {
              Header: "Age",
              accessor: "age"
            }
            ,
            {
              Header: "Tabacco?",
              accessor: "status"
            },
            
            {
              Header: "Alcohol?",
              accessor: "status"
            }
          ]
        }
      ];