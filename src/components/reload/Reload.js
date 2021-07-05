import { useEffect, useState } from "react";
import axios from "axios";
import { db } from "../../firebase";

function Reload() {
  // 특정 오더 호출
  const [orders, setOrders] = useState([]);
  async function callOrders() {
    return await axios.get("stores/7uw7zc08qw/v2/orders/", {
      params: { max_id: 120, min_id: 100 },
      headers: {
        "x-auth-token": "23t2vx6zwiq32xa8b0uspfo7mb7181x",
        "access-control-allow-origin": "*",
        accept: "application/json",
        "content-type": "application/json",
      },
    });
  }

  //   호출한 데이터 db에 저장
  const reload = () => {
    console.log(orders);
    db.collection("orders").set("hi");
  };
  useEffect(() => {
    //   빅커머스 총 오더갯수 호출
    callOrders()
      .then(res => setOrders(res), console.log("re"))
      .catch(error => console.log(error));
  }, []);
  return <button onClick={reload()}>reload</button>;
}

export default Reload;
