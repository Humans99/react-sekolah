const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl p-4 flex-1 min-w-[130px] bg-white border border-gray-300 ">
      <div className="flex justify-between">
        <span className="text-[10px] px-2 py-1 rounded-full text-gray-700">
          2025/26
        </span>
        <i className="ri-more-2-fill text-lg cursor-pointer text-gray-500"></i>
      </div>
      <h1 className="text-2xl font-bold my-4">1,234</h1>
      <h1 className="text-sm font-medium text-gray-500">{type}</h1>
    </div>
  );
};

export default UserCard;
