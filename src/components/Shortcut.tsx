type ShortcutType = "class" | "lesson" | "exam" | "student";

type Props = {
  type: ShortcutType;
};

const ShortcutData: Record<ShortcutType, { text: string; color: string }> = {
  class: {
    text: "Daftar kelas",
    color: "bg-sky-400 hover:bg-sky-500",
  },
  student: {
    text: "Daftar siswa",
    color: "bg-teal-400 hover:bg-teal-500",
  },
  lesson: {
    text: "Daftar pelajaran",
    color: "bg-fuchsia-400 hover:bg-fuchsia-500",
  },
  exam: {
    text: "Daftar latihan",
    color: "bg-yellow-400 hover:bg-yellow-500",
  },
};

const Shortcut = ({ type }: Props) => {
  const { text, color } = ShortcutData[type];
  return (
    <button
      className={`p-3 rounded-md ${color} text-slate-50 font-medium cursor-pointer shadow-lg`}
    >
      {text}
    </button>
  );
};

export default Shortcut;
