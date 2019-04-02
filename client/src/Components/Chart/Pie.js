import React from "react";
import PieChart from 'react-minimal-pie-chart';

const PieGraph = props => {
    return (
        <div>
            <h3>{props.title}</h3>
        <PieChart
            style={{width: '500px'}}
            data={props.data}
            label={({ data, dataIndex}) =>
                data[dataIndex].title+': '+data[dataIndex].percentage + '%'
            }
            labelStyle={{
                fontSize: '5px',
                fontFamily: 'sans-serif',
                fill: 'white'
              }}
            animate
        />
        </div>
    );
};
export default PieGraph;