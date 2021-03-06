import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";
import Operations from "../Operations";
import { Names, Status } from './columns';
import Pie from '../Chart/Pie.js'
import _ from 'lodash';
import axios from 'axios';

class LandingPage extends React.Component {
  constructor() {
    super();
    this.state = { selected: {}, selectAll: 0 };
    this.toggleRow = this.toggleRow.bind(this);
  }

  componentDidMount() {
    axios.get('/api/all').then((res)=> this.setState({ 
			data: res.data, 
			alcoholNo: _.filter(res.data, ['alcohol', false]).length,
			alcoholYes: _.filter(res.data, ['alcohol', true]).length,
			tabaccoNo: _.filter(res.data, ['tabacco', false]).length,
			tabaccoYes: _.filter(res.data, ['tabacco', true]).length,
		})
	)}


  toggleRow(id) {
		const newSelected = Object.assign({}, this.state.selected);
		newSelected[id] = !this.state.selected[id];
		this.setState({
			selected: newSelected,
			selectAll: 2
		});
	}

	toggleSelectAll() {
		let newSelected = {};

		if (this.state.selectAll === 0) {
			this.state.data.forEach(x => {
				newSelected[x.id] = true;
			});
		}

		this.setState({
			selected: newSelected,
			selectAll: this.state.selectAll === 0 ? 1 : 0
		});
	}
  

		
  render() {
		console.log(this.state)
    const columns = [
			{
				Header: "Name",
				columns: [
					{
						id: "checkbox",
            accessor: "",
            Filter: () => <div></div>,
						Cell: ({ original }) => {
							return (
								<input
									type="checkbox"
									className="checkbox"
									checked={this.state.selected[original.id] === true}
									onChange={() => this.toggleRow(original.id)}
								/>
              );
              
						},
						Header: x => {
							return (
								<input
									type="checkbox"
									className="checkbox"
									checked={this.state.selectAll === 1}
									ref={input => {
										if (input) {
											input.indeterminate = this.state.selectAll === 2;
										}
									}}
									onChange={() => this.toggleSelectAll()}
								/>
							);
						},

						width: 45
					},
					...Names
				]
			},
			{...Status}
		];

    const { data } = this.state;
    const listToggled = _.reduce(this.state.selected, (result, value, key) => {
          (result[value] || (result[value] = [])).push(key);
          return result;
      }, {}
		);
    const extractTruesOnly = listToggled === {} ? [] : listToggled.true;
		const countTrue =  extractTruesOnly === undefined ? 'none' :  extractTruesOnly.length;
    const operationList = [
      {name: 'upload', route: '/createrecord'}, 
      {name: 'add', route: '/addrecord'}, 
      {name: 'edit', disabled: countTrue !== 1? true : false, route: `/editrecord/${extractTruesOnly}` }, 
      {name: 'delete', disabled: countTrue !== 1? true : false, route: `/deleterecord/${extractTruesOnly}`}
    ];

    return (
      <div style={{margin: '30px'}}>

				
        <Operations list={operationList} />

        <ReactTable
          style={{marginTop: '5px'}}
          data={data}
          columns={columns}
          defaultPageSize={10}
          className="-striped -highlight"
          showPageSizeOptions={false}
          showPageJump={false}
          filterable
          defaultFilterMethod={(filter, row) =>String(row[filter.id]) === filter.value}
        />
							<div style={{display: 'flex',
        flexDirection: 'row',
				marginTop: '10px',
				justifyContent: 'space-between'}}>
				<Pie style={{ margin: '10px'}} title={'Alcohol'} 
						data={[
                { title: 'Yes', value: this.state.alcoholYes, color: '#E38627' },
                { title: 'No', value: this.state.alcoholNo, color: '#C13C37' },
            ]}
				/>
				<Pie style={{ margin: '10px'}} title={'Tabacco'}
					data={[
						{ title: 'Yes', value: this.state.tabaccoYes, color: '#E38627' },
						{ title: 'No', value: this.state.tabaccoNo, color: '#C13C37' },
					]}
			/>
			</div>
      </div>
    );
  }
}
export default LandingPage;