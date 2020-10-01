import React from 'react';
import Tag from './Tag';
import axios from 'axios';


// 해당 Component를 렌더할 경우 반드시
// default와 selected 를 props로 [true, false]값을 넣어야 한다.
// 예: <SortTags default={false} selected={false}/>
class SortTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tag: [],
      select: {}
    };
    this.click = this.click.bind(this);
  }

  componentDidMount() {
    (async () => {
      let result = await axios({
        method: 'get',
        url: 'http://localhost:4000/spot/taginfo',
        withCredentials: true
      });
      this.setState({
        tag: result.data
      })
      for (let i of result.data) {
        this.setState({
          select: {...this.state.select, [i.id]: this.props.default}
        })
      }
    })()
  }

  click(id) {
    return () => {
      this.setState({
        select: {...this.state.select, [id]: !this.state.select[id]}
      });
    }
  }

  render() {
    return (
      <div>
        {this.state.tag.map(val => (
        <Tag
          key={val.id}
          tagName={val.tag_name}
          isSelect={this.state.select[val.id]}
          click={this.click(val.id)}
          selected={this.props.selected}
        />
        ))}
      </div>
    );
  }
}

export default SortTags;