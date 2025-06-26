import { useNavigate } from "react-router-dom";
import FormModal from "../FormModal";

type Props = {
  item: {
    id: number;
    nis: string;
    name: string;
    phone: string;
    bloodType: string;
    gender: string;
    user: { username: string; email: string };
    parent: { address: string };
    grade: { level: string };
    class: { name: string };
  };
  role: string | null;
  onSuccessDelete: () => void;
};

const StudentRow = ({ item, role, onSuccessDelete }: Props) => {
  const navigate = useNavigate();
  return (
    <tr className="border-b border-gray-300 even:bg-slate-50 text-sm hover:bg-slate-200">
      <td className="flex gap-4 items-center p-4">
        <div className="h-10 w-10 bg-gray-400 rounded-full hidden md:table-cell"></div>
        <div className="flex flex-col">
          <h3 className="font-semibold whitespace-nowrap">{item.name}</h3>
          <h3 className="text-sm text-gray-500">
            {item?.user?.email ?? "johndoe@gmail.com"}
          </h3>
        </div>
      </td>
      <td className="whitespace-nowrap hidden md:table-cell">
        {item.nis ?? "1103204012"}
      </td>
      <td className="whitespace-nowrap hidden md:table-cell">
        {`${item?.grade?.level.split(" ")[1]}${item?.class.name}`}
      </td>
      <td className="whitespace-nowrap hidden xl:table-cell">{item.phone}</td>
      <td className="whitespace-nowrap hidden 2xl:table-cell">
        {item?.parent?.address}
      </td>
      <td className="">
        <div className="flex items-center gap-2">
          <button
            className="w-9 h-9 bg-warning-500 rounded-full shadow items-center justify-center cursor-pointer"
            onClick={() => navigate(`/students/nis/${item.nis}`)}
          >
            <i className="ri-eye-line text-lg text-slate-100"></i>
          </button>
          {role === "admin" && (
            <FormModal
              table="student"
              type="delete"
              data={item}
              code={item.nis ?? "1103204012"}
              onSuccessDelete={onSuccessDelete}
            />
          )}
        </div>
      </td>
    </tr>
  );
};

export default StudentRow;
