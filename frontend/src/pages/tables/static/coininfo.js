import React, { Component } from "react";
import { connect } from 'react-redux';

function numberWithCommas(x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

class CoinInfo extends Component {

  render() {
    return (
      <tbody>
        {this.props.coinList.map((row) => (
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
            <td>{numberWithCommas(row.standard.market_KRW)} 원</td>
            <td>{numberWithCommas(row.target[0].market_KRW)} 원</td>
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
