import React from 'react';
import SortTags from './SortTags';

class FilterOfTags extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <SortTags default={true} selected={false}/>
      </div>
    );
  }
}

export default FilterOfTags;