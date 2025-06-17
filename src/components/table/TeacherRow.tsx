// TeacherRow.tsx
import { useNavigate } from "react-router-dom";
import { FormModal } from "../../components";

type Props = {
  item: {
    id: number;
    code: string;
    name: string;
    photo: string;
    phone: string;
    address: string;
    subject: { name: string };
    user: { email: string };
  };
  role: string | null;
};

const TeacherRow = ({ item, role }: Props) => {
  const navigate = useNavigate();

  return (
    <tr
      className="border-b border-gray-300 even:bg-slate-50 text-sm hover:bg-slate-200"
      key={item.id}
    >
      <td className="flex gap-4 items-center p-4">
        <div className="h-10 w-10 bg-gray-400 rounded-full hidden md:table-cell"></div>
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <h3 className="text-sm text-gray-400">{item?.user?.email}</h3>
        </div>
      </td>
      <td className="whitespace-nowrap hidden md:table-cell">{item.code}</td>
      <td className="whitespace-nowrap hidden md:table-cell">
        {item.subject.name}
      </td>
      <td className="whitespace-nowrap hidden xl:table-cell">{item.phone}</td>
      <td className="whitespace-nowrap hidden xl:table-cell">{item.address}</td>
      <td className="">
        <div className="flex items-center gap-2">
          <button
            className="w-9 h-9 bg-warning-500 rounded-full shadow items-center justify-center cursor-pointer"
            onClick={() => navigate(`/teachers/${item.code}`)}
          >
            <i className="ri-eye-line text-lg text-slate-100"></i>
          </button>
          {role === "admin" && (
            <FormModal table="teacher" type="delete" id={item.id} />
          )}
        </div>
      </td>
    </tr>
  );
};

export default TeacherRow;
