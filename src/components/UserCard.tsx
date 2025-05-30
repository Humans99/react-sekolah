const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-xl p-4 flex-1 min-w-[130px] odd:bg-success-500 even:bg-brand-500 shadow-lg">
      <div className="flex justify-between">
        <span className="text-[8px] self-center px-2 py-1 rounded-xl font-semibold bg-white">
          2025/26
        </span>
        <i className="ri-more-2-fill text-lg cursor-pointer text-white"></i>
      </div>
      <h1 className="text-2xl font-bold my-4 text-white">1,234</h1>
      <h1 className="text-sm font-medium text-white">{type}</h1>
    </div>
  );
};

export default UserCard;
