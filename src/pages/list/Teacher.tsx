import { FormModal, Table, TableSearch } from "../../components";
import { role, teachersData } from "../../lib/data";
import { teacherColumns } from "../../lib/list";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

function renderRow(item: Teacher) {
  return (
    <tr
      className="border-b border-gray-300 even:bg-slate-50 text-sm hover:bg-slate-200"
      key={item.id}
    >
      <td className="flex gap-4 items-center p-4">
        <img
          src={item.photo}
          alt="Image"
          width={40}
          height={40}
          className="rounded-full md:hidden xl:block w-10 h-10 object-cover"
        />
        <div className="flex flex-col">
          <h3 className="font-semibold">{item.name}</h3>
          <h3 className="text-sm text-gray-400">{item?.email}</h3>
        </div>
      </td>
      <td className="whitespace-nowrap hidden md:table-cell">
        {item.teacherId}
      </td>
      <td className="whitespace-nowrap hidden md:table-cell">
        {item.subjects.join(",")}
      </td>
      <td className="whitespace-nowrap hidden md:table-cell">
        {item.classes.join(",")}
      </td>
      <td className="whitespace-nowrap hidden xl:table-cell">{item.phone}</td>
      <td className="whitespace-nowrap hidden xl:table-cell">{item.address}</td>
      <td className="">
        <div className="flex items-center gap-2">
          <a href="#">
            <button className="w-9 h-9 bg-warning-500 rounded-full shadow items-center justify-center cursor-pointer">
              <i className={`ri-eye-line text-lg text-slate-100`}></i>
            </button>
          </a>
          {role === "admin" && (
            <>
              <FormModal table="teacher" type="delete" id={item.id} />
            </>
          )}
        </div>
      </td>
    </tr>
  );
}

const TeacherPage = () => {
  return (
    <div>
      <p>Teacher page</p>
    </div>
  );
};

export default TeacherPage;
