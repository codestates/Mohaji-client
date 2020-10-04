import React from 'react';
import SortTags from './SortTags';
import './FilterOfTags.css'
import { connect } from 'react-redux';
import { setSelectTag } from '../actions';

class FilterOfTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    }
    this.toggle = this.toggle.bind(this);
    this.tagclick = this.tagclick.bind(this);
  }

  toggle() {
    this.setState({
      show: !this.state.show
    })
  }

  tagclick(obj) {
    this.props.dispatch(setSelectTag(obj));
  }

  render() {
    let selected = [];
    for (let i in this.props.filter_selected) {
      if (this.props.filter_selected[i]) {
        selected.push(i);
      }
    }
    return (
      <div>
        <div className='map-filter'
          onClick={this.toggle}
        >
          검색필터
        </div>
        {this.state.show ?
          <div>
            <div
              className='modal'
              onClick={this.toggle}
            />
            <div
              style={{
                position: 'fixed', top: '50px', right: '40px',
                backgroundColor: '#ffffff', width: 'auto', zIndex: '13',
                padding: '10px', borderRadius: '5px', maxWidth: '15%'
              }}
            >
              <SortTags
                default={true}
                selected={false}
                usertags={selected}
                output={this.tagclick}
              />
            </div>
          </div> :
          undefined}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  ...state.filterTagReducer
})

export default connect(mapStateToProps)(FilterOfTags);