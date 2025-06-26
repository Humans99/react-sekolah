// TeacherRow.tsx
import { useNavigate } from "react-router-dom";
import { FormModal } from "../../components";

type Props = {
  item: {
    id: number;
    code: string;
    nip: string;
    name: string;
    photo: string;
    phone: string;
    address: string;
    subject: { name: string };
    user: { email: string };
  };
  role: string | null;
  onSuccessDelete: () => void;
};

const TeacherRow = ({ item, role, onSuccessDelete }: Props) => {
  const navigate = useNavigate();

  return (
    <tr className="border-b border-gray-300 even:bg-slate-50 text-sm hover:bg-slate-200">
      <td className="flex gap-4 items-center p-4">
        <div className="h-10 w-10 bg-gray-400 rounded-full hidden md:table-cell"></div>
        <div className="flex flex-col">
          <h3 className="font-semibold whitespace-nowrap">{item.name}</h3>
          <h3 className="text-sm text-gray-500">{item?.user?.email}</h3>
        </div>
      </td>
      <td className="whitespace-nowrap hidden lg:table-cell">{item.nip}</td>
      <td className="whitespace-nowrap hidden md:table-cell">{item.code}</td>
      <td className="whitespace-nowrap hidden md:table-cell">
        {item.subject.name}
      </td>
      <td className="whitespace-nowrap hidden xl:table-cell">{item.phone}</td>
      <td className="whitespace-nowrap hidden 2xl:table-cell">{item.address}</td>
      <td className="">
        <div className="flex items-center gap-2">
          <button
            className="w-9 h-9 bg-warning-500 rounded-full shadow items-center justify-center cursor-pointer"
            onClick={() => navigate(`/teachers/code/${item.code}`)}
          >
            <i className="ri-eye-line text-lg text-slate-100"></i>
          </button>
          {role === "admin" && (
            <FormModal
              table="teacher"
              type="delete"
              data={item}
              code={item.code}
              onSuccessDelete={onSuccessDelete}
            />
          )}
        </div>
      </td>
    </tr>
  );
};

export default TeacherRow;
