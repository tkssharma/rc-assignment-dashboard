import Autosuggest from 'react-autosuggest';
import React, { Component } from 'react';




const getSuggestionValue = function(suggestion) {
  return suggestion.first_name;
}

// Use your imagination to render suggestions.
const renderSuggestion = function(suggestion){
  return (
    <div>
    {suggestion.first_name}
    </div>
  )
}



export default class AutoSuggest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      suggestions: []
    };
    this.onChange = this.onChange.bind(this);
    this.onSuggestionsFetchRequested = this.onSuggestionsFetchRequested.bind(this);
    this.onSuggestionsClearRequested = this.onSuggestionsClearRequested.bind(this);
    this.getSuggestions = this.getSuggestions.bind(this);
    this.onSuggestionSelected = this.onSuggestionSelected.bind(this);
  }

   onSuggestionSelected(event, { suggestion, suggestionValue, suggestionIndex, sectionIndex, method }){
    this.props.handleNameChange(suggestionValue);
  }


  getSuggestionValue(suggestion) {
    return suggestion.first_name;
  }

  getSuggestions(value){
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    if(this.props.userNames){
      if(inputLength === 0) {
        return [];
      } else {
        return this.props.userNames.filter(function(lang){
          return lang.first_name.toLowerCase().slice(0, inputLength) === inputValue
        });
    }

  }
};

onChange(event,{ newValue }) {
  this.setState({
    value: newValue
  });
};

onSuggestionsFetchRequested({ value }){
  this.setState({
    suggestions: this.getSuggestions(value)
  });
};

// Autosuggest will call this function every time you need to clear suggestions.
onSuggestionsClearRequested() {
  this.setState({
    suggestions: []
  });
};

render() {
  const { value, suggestions } = this.state;

  // Autosuggest will pass through all these props to the input.
  const inputProps = {
    placeholder: 'search..',
    value,
    onChange: this.onChange
  };

  // Finally, render it!
  return (
    <Autosuggest
    suggestions={suggestions}
    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
    getSuggestionValue={this.getSuggestionValue}
    onSuggestionSelected ={this.onSuggestionSelected}
    renderSuggestion={renderSuggestion}
    inputProps={inputProps}
    />
  );
}
}
