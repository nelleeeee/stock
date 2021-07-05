function StockTableRow({ quan, number, albumTitle }) {
  return (
    <div className="grid grid-cols-4 gap-2">
      <div>{number}</div>
      <div className="col-span-2">{albumTitle}</div>
      <div>{quan}</div>
    </div>
  );
}

export default StockTableRow;
