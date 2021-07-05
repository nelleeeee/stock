import { useEffect, useState } from "react";
import StockTableRow from "./StockTableRow";
import { db } from "../../firebase";

function Stocktable() {
  // 전체주문조회 [1. 클릭해서 들어오면 db에서 수집]
  // 전체주문조회 [2. 동기화 클릭하면 수집후 db에 저장 후 성공메시지]
  // const [status, setStatus] = useState([]);
  // async function callApi() {
  //   return await axios.get("stores/7uw7zc08qw/v2/orders/count", {
  //     // params: { order_id: 41264 },
  //     headers: {
  //       "x-auth-token": "23t2vx6zwiq32xa8b0uspfo7mb7181x",
  //       "access-control-allow-origin": "*",
  //       accept: "application/json",
  //       "content-type": "application/json",
  //     },
  //   });
  // }

  // useEffect(() => {
  //   //   빅커머스 총 오더갯수 호출
  //   callApi()
  //     .then(res => setStatus(res), console.log("call"))
  //     .catch(error => console.log(error));
  // }, []);

  return (
    <>
      <div className="grid grid-cols-4 gap-2 grid-flow-col">
        <div>번호</div>
        <div className="col-span-2">앨범명</div>
        <div>수량</div>
      </div>
      <div>
        {/* {albumLists?.map(({ id, data: { quan, number, albumTitle } }) => (
          <StockTableRow
            key={id}
            id={id}
            quan={quan}
            number={number}
            albumTitle={albumTitle}
          />
        ))} */}
      </div>
    </>
  );
}

export default Stocktable;
