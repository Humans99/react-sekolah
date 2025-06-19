import { toast } from "sonner";

const SuccessToast = ({ message }: { message: string }) => {
  return toast.success("Success", {
    duration: 3000,
    description: message,
    style: {
      backgroundColor: "#ecfdf3",
      outline: "#12b76a solid 1px",
      cursor: "pointer",
    },
    classNames: {
      title: "!font-semibold !text-gray-800 !text-sm",
      description: "!text-gray-500 !font-medium !text-sm",
      icon: "!text-success-500",
      closeButton:
        "!text-success-500 !bg-success-50 !border !border-success-500",
    },
  });
};

export default SuccessToast;
