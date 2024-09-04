import { Button } from "@/components/ui/button";
import ReactDOM from "react-dom";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { loadUser } from "@/redux/features/user/userSlice";
import { addBookedEvents } from "@/api/user";
type Props = {
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  userId:string;
};

const Modal = ({ setModal, userId }: Props) => {
   const dispatch = useDispatch();
  return ReactDOM.createPortal(
    <div className="fixed overflow-hidden top-0 left-0 z-3 bg-black bg-opacity-80 bg-transparent h-[100%] w-[100%] flex justify-center items-center ">
      <div className="w-[500px] h-[207px] rounded-[14px] bg-white flex flex-col py-[30px] px-[22px] gap-[12px]">
        <div className="flex">
          <h1 className="font-[500] text-[18px] leading-[21px] text-[#313336]">
            Are you sure?
          </h1>
        </div>
        <div className="flex">
          <p className="font-[400] text-[14px] leading-[22px] text-[#737475]">
            Once clicking on confirmation means, you have agreed to attend the
            session so that the slot won't be alloted to others
          </p>
        </div>
        <div className="flex mt-[25px] justify-end gap-[10px]">
          <Button
            onClick={() => {
              setModal(false);
            }}
          >
            Close
          </Button>
          <Button
            className="bg-[#2080F6] text-white"
            onClick={async () => {
              let response = await addBookedEvents(userId as string);
              if (response?.data.status === 201) {
                setModal(false);
                toast.success(response.data.message);
                dispatch(loadUser({ payload: response.data.data }));
              }
            }}
          >
            Confirm
          </Button>
        </div>
      </div>
    </div>,
    document.getElementById("root-modal") as HTMLElement
  );
};

export default Modal;
