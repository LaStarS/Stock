import { Link } from "react-router-dom";

function stockData () {

    <div>
    {stocks.map((stockInfo) => (
    <Link key={stockInfo.id} to={`/Stock/${stockInfo.id}`}>
      <stockInfo key={stockInfo.id} stocks={stockInfo} />
    </Link>
    ))}
    </div>
}