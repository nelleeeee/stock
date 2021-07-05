import { useEffect, useState } from "react";
import axios from "axios";
import Reload from "../reload/Reload";

export default function Sidebar() {
  // 빅커머스
  // 총 오더갯수
  const [status, setStatus] = useState(["hi"]);
  async function callApi() {
    return await axios.get("stores/7uw7zc08qw/v2/orders/count", {
      // params: { order_id: 41264 },
      headers: {
        "x-auth-token": "23t2vx6zwiq32xa8b0uspfo7mb7181x",
        "access-control-allow-origin": "*",
        accept: "application/json",
        "content-type": "application/json",
      },
    });
  }

  useEffect(() => {
    //   빅커머스 총 오더갯수 호출
    callApi()
      .then(res => setStatus(res), console.log("call"))
      .catch(error => console.log(error));
  }, []);
  return (
    //   사이드 바
    <div className=" flex-col items-center ">
      {/* 사명 */}
      <div
        className="text-2xl font-mono font-bold text-center text-gray-200 bg-blue-900
p-6"
      >
        InterAsia
      </div>

      {/* 총 주문갯수들 */}
      <div
        className="py-8 text-gray-300 bg-blue-900 leading-7
p-6"
      >
        <div className="flex justify-between cursor-pointer hover:text-gray-50">
          <div className="pr-4">total</div>
          <div>{status?.data?.count}</div>
        </div>
        <div className="flex justify-between cursor-pointer hover:text-gray-50">
          <div className="pr-4">{status?.data?.statuses[0]?.name} </div>
          <div>{status?.data?.statuses[0]?.count}</div>
        </div>
        <div className="flex justify-between cursor-pointer hover:text-gray-50">
          <div className="pr-4">{status?.data?.statuses[1]?.name} </div>
          <div>{status?.data?.statuses[1]?.count}</div>
        </div>
        <div className="flex justify-between cursor-pointer hover:text-gray-50">
          <div className="pr-4">{status?.data?.statuses[2]?.name} </div>
          <div>{status?.data?.statuses[2]?.count}</div>
        </div>
        <div className="flex justify-between cursor-pointer hover:text-gray-50">
          <div className="pr-4">{status?.data?.statuses[3]?.name} </div>
          <div>{status?.data?.statuses[3]?.count}</div>
        </div>
        <div className="flex justify-between cursor-pointer hover:text-gray-50">
          <div className="pr-4">{status?.data?.statuses[4]?.name} </div>
          <div>{status?.data?.statuses[4]?.count}</div>
        </div>
        <div className="flex justify-between cursor-pointer hover:text-gray-50">
          <div className="pr-4">{status?.data?.statuses[5]?.name} </div>
          <div>{status?.data?.statuses[5]?.count}</div>
        </div>{" "}
        <div className="flex justify-between cursor-pointer hover:text-gray-50">
          <div className="pr-4">{status?.data?.statuses[6]?.name} </div>
          <div>{status?.data?.statuses[6]?.count}</div>
        </div>
        <div className="flex justify-between cursor-pointer hover:text-gray-50">
          <div className="pr-4">{status?.data?.statuses[7]?.name} </div>
          <div>{status?.data?.statuses[7]?.count}</div>
        </div>{" "}
        <div className="flex justify-between cursor-pointer hover:text-gray-50">
          <div className="pr-4">{status?.data?.statuses[8]?.name} </div>
          <div>{status?.data?.statuses[8]?.count}</div>
        </div>
        <div className="flex justify-between cursor-pointer hover:text-gray-50">
          <div className="pr-4">{status?.data?.statuses[9]?.name} </div>
          <div>{status?.data?.statuses[9]?.count}</div>
        </div>
        {/* <Reload /> */}
      </div>

      {/* 사이드바 좌하단 메뉴들 */}
      <div className="bg-gray-600 p-12 pb-96 text-lg text-gray-300 leading-10">
        <div className="cursor-pointer hover:text-gray-50">상품관리</div>
        <div className="cursor-pointer hover:text-gray-50">재고관리</div>
        <div className="cursor-pointer hover:text-gray-50">메뉴들 1</div>
        <div className="cursor-pointer hover:text-gray-50">메뉴들 2</div>
        <div className="cursor-pointer hover:text-gray-50">메뉴들 3</div>
      </div>
    </div>
  );
}
