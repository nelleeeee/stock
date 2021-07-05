import Stocktable from "./page/stockTable/StockTable";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="flex bg-gray-50 h-auto">
      <Sidebar />
      <Stocktable />
    </div>
  );
}

export default App;
