import React, { Component } from "react";
import axios from "axios";

class UpbitNotices extends Component {

  constructor(props){
    super(props);
    this.state = {
      notices: [],
    };
  }
      
  getpost = async() => {
    const {data} = await axios.get('http://localhost:8000/news');
    this.setState({notices: {data}.data});
  }

  async componentDidMount() {
    this.getpost();
  }

  render() {
    console.log(this.state.notices)
    return (
      <tbody>
        {this.state.notices.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>
              <span class="text-muted fw-semi-bold">{row.title}</span>
            </td>
            <td>
              <span class="text-muted fw-semi-bold">
                {row.date}</span>
            </td>
            <td>
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

export default UpbitNotices;
