import React from "react";
import matchSorter from 'match-sorter'

export const Names = [
  {  
    Header: "First Name",
    accessor: "first_name",
    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["first_name"] }),
    filterAll: true
  },
    {
    Header: "Last Name",
    id: "last_name",
    accessor: "last_name",
    filterMethod: (filter, rows) => matchSorter(rows, filter.value, { keys: ["last_name"] }),
    filterAll: true
  }       
];


export const Status = {
  Header: "Info",
  columns: [
    {
      Header: "Alcohol?",
      accessor: "alcohol",
      Cell: ({ value }) => (value === true? "Yes" : "No"),
      filterMethod: (filter, row) => {
        if (filter.value === "all") {
          return true;
        }
        if (filter.value === 'true') {
          return row[filter.id] === true;
        }
        return row[filter.id] === false;
      },
      Filter: ({ filter, onChange }) =>
        <select
          onChange={event => onChange(event.target.value)}
          style={{ width: "100%", height: '100%' }}
          value={filter ? filter.value : "all"}
        >
          <option value="all">Show All</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
    },
    
    {
      Header: "Tabacco?",
      accessor: "tabacco",
      Cell: ({ value }) => (value === true? "Yes" : "No"),
      filterMethod: (filter, row) => {
        if (filter.value === "all") {
          return true;
        }
        if (filter.value === 'true') {
          return row[filter.id] === true;
        }
        return row[filter.id] === false;
      },
      Filter: ({ filter, onChange }) =>
        <select
          onChange={event => onChange(event.target.value)}
          style={{ width: "100%", height: '100%' }}
          value={filter ? filter.value : "all"}
        >
          <option value="all">Show All</option>
          <option value="true">Yes</option>
          <option value="false">No</option>
        </select>
    }
  ]
}