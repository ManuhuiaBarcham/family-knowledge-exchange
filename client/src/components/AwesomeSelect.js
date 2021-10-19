import React, { Component } from 'react';


class AwesomeSelect extends Component {
  
  render() {
    const componentOptions = this.props.options;
    const placeholder = `Select ${this.props.name}`
    const renderDefaultOption =
        this.props.renderDefaultOption == null 
            ? true 
            : this.props.renderDefaultOption;

    return <select name={this.props.name} id={this.props.name} className="form-input" placeholder={placeholder} >
       {renderDefaultOption && (
        <option value="">{placeholder} </option>)
       }
       {componentOptions.map( ( opt ) => (
					<option
                    key={opt.id}
                    value={opt.name}
                    >{opt.name}</option>
				) )}
    </select>
  }
}

export default AwesomeSelect;