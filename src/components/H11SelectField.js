import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

class H11SelectField extends Component {
  props: {
    type: string,
    fields: Array | Object,
    value: string | number,
    floatingLabelText: string,
    onChange: Function,
  }

  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    };

    this.onFieldChange = this.onFieldChange.bind(this);
  }

  onFieldChange(event, index, value) {
    this.setState({ value });
    if (this.props.onChange) this.props.onChange(event, index, value);
  }

  renderFieldItems() {
    return this.props.fields.map((value, key) => (
      <MenuItem
        key={`${this.props.type}-item-${key}`}
        value={value}
        primaryText={value}
      />
    ));
  }

  render() {
    return (
      <SelectField
        floatingLabelText={this.props.floatingLabelText}
        value={this.state.value}
        onChange={this.onFieldChange}
      >
        {this.renderFieldItems()}
      </SelectField>
    );
  }
}

export default H11SelectField;
