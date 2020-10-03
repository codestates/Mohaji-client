import React from 'react';
import Tag from './Tag';
import axios from 'axios';


// 해당 Component를 렌더할 경우 반드시
// default와 selected 를 props로 [true, false]값을 넣어야 한다.
// 예: <SortTags default={false} selected={false}/>
// user가 선택한 tag는 props로 usertags에 배열로 전달한다.
// (userinfo API를 호출할 경우 tag부분이 이미 배열로 존재한다.)
// usertags가 길이가1이상인 배열로 전달되면 default설정은 무시된다.

// output에 함수가 전달되면 해당 함수에 현재 Tag의 선택된 상태들을 object로 전달한다.

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
    let usertags = this.props.usertags || [];
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
          select: {
            ...this.state.select,
            [i.id]: usertags.length > 0 ?
            false :
            this.props.default
          }
        });
      }

      for (let i of usertags) {
        this.setState({
          select: { ...this.state.select, [i]: true }
        });
      }

      if (this.props.output) {
        this.props.output({...this.state.select})
      }
    })()
  }

  click(id) {
    return () => {
      this.setState({
        select: {...this.state.select, [id]: !this.state.select[id]}
      });
      if (this.props.output) {
        this.props.output({
          ...this.state.select, [id]: !this.state.select[id]
        });
      }
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