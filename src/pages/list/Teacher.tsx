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
    <div className="bg-white p-4 rounded-xl m-4 flex-1 shadow border border-gray-200">
      {/*  */}
      <div className="flex justify-between items-center">
        <h1 className="hidden md:block text-lg font-semibold">Daftar Guru</h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-4 self-end">
            <button className="w-10 h-10 bg-brand-500 flex items-center justify-center rounded-full shadow-xl cursor-pointer hover:bg-brand-600">
              <i className="ri-equalizer-line text-white text-lg"></i>
            </button>
            <button className="w-10 h-10 bg-brand-500 flex items-center justify-center rounded-full shadow-xl cursor-pointer hover:bg-brand-600">
              <i className="ri-sort-desc text-white text-lg"></i>
            </button>
            {role === "admin" && <FormModal table="teacher" type="create" />}
          </div>
        </div>
      </div>

      {/*  */}
      <Table
        columns={teacherColumns}
        renderRow={renderRow}
        data={teachersData}
      />
    </div>
  );
};

export default TeacherPage;
