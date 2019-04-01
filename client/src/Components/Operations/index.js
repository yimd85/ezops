import React from "react";
import { Link } from 'react-router-dom';
import "react-table/react-table.css";

class Operations extends React.Component {
  state = {}
  
    renderValues() {
        return (
            this.props.list.map((value, index) => (
                <Link key={index} style={{ color: '#337ab7' }} className="" to={value.route}>
                    <button 
                        key={index} 
                        type="button" 
                        className="btn btn-secondary"
                        disabled={value.disabled}
                        style={{marginRight: '5px'}}
                    >
                        {value.name}
                    </button>
                </Link>
            ))
        );
    }

    


    render() {
        return (
            <div className="btn-group" role="group" aria-label="Basic example">
                {this.renderValues()}
            </div>
        );
    }
}


export default Operations;


