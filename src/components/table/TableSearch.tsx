const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-md ring-[1px] ring-gray-300 px-2">
      <i className="ri-search-line text-lg text-gray-500"></i>
      <input
        type="text"
        name="search"
        id="search"
        autoComplete="off"
        placeholder="Cari ..."
        className="w-52 p-3 bg-transparent outline-none"
      />
    </div>
  );
};

export default TableSearch;
