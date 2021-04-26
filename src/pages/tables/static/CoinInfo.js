import React, { Component } from "react";
import { connect } from 'react-redux';
import axios from "axios";

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class CoinInfo extends Component {

  constructor(props){
    super(props);
    this.state = {
      coinListFromHome: [],
    };
  }
  
  getpost = async() => {
    const {data} = await axios.get('http://localhost:8000/main');
    this.setState({coinListFromHome: {data}.data});
  }
  
  async componentDidMount() {
    this.getpost();
  }
  
  render() {
    return (
      <tbody>
        {this.state.coinListFromHome.map((row) => (
          <tr key={row.id}>
            <td>{row.id}</td>
            <td>
              <img
                src={"https://static.upbit.com/logos/" + row.id + ".png"}
                alt={row.id}
                title={row.id}
                height="16"
              ></img>
              <span class="text-muted fw-semi-bold">{row.id}</span>
            </td>
            <td>
              <span class="text-muted fw-semi-bold">
                {row.name_kr}({row.name_en})
              </span>
            </td>
            <td>{numberWithCommas(row.standard.market_KRW)}</td>
            <td>{numberWithCommas(row.target[0].market_KRW)}</td>
            <td>
            {row.target[0].diff_percent}% ({numberWithCommas(row.target[0].diff_KRW)})
            </td>
          </tr>
        ))}
      </tbody>
    );
  }
}

function mapStateToProps(store) {
  // 코인 리스트가 뜸
  console.log(store.coin.coinList)
  return {
      coinList: store.coin.coinList
  };
}

export default connect(mapStateToProps)(CoinInfo);
