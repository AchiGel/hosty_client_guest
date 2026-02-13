import { useNavigate } from "react-router-dom";
import ConfirmationModalIcon from "../../assets/ConfirmationModalIcon";
import ConfirmationModalAddMore from "../../assets/ConfirmationModalAddMore";
import ConfirmationModalSendNow from "../../assets/ConfirmationModalSendNow";
import { useCartStore } from "../../store/cartStore";
import toast from "react-hot-toast";
import AmenitiesToastIcon from "../../assets/AmenitiesToastIcon";
import { useCreateRequest } from "../../hooks/useCreateRequest";

const ConfirmationModal = ({
  onClose,
  setFormIsSent,
}: {
  onClose: () => void;
  setFormIsSent: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { items, clearCart, setLastOrder } = useCartStore();
  const navigate = useNavigate();

  const { mutate: createRequest, isPending } = useCreateRequest();

  const submitOrder = () => {
    createRequest(
      { room: "101", items },
      {
        onSuccess: () => {
          setLastOrder(items);
          clearCart();
          toast("Request sent successfully", {
            icon: <AmenitiesToastIcon />,
          });
          setFormIsSent(false);
          onClose();
          navigate("/success");
        },
        onError: (err) => {
          toast.error("Failed to send request");
          console.error(err);
        },
      },
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

      <div
        onClick={(e) => e.stopPropagation()}
        className="relative bg-white rounded-2xl w-full max-w-84.5 mx-4 shadow-xl flex flex-col overflow-hidden"
      >
        <div className="p-6 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-amber-100 flex items-center justify-center mb-3">
            <ConfirmationModalIcon />
          </div>
          <h2 className="font-playfair text-lg font-semibold text-[#111111]">
            Anything else?
          </h2>
          <p className="text-sm text-neutral-500 text-center">
            You can add more items before we send your request
          </p>
        </div>
        <div className="p-4 bg-white border-t border-neutral-100">
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                setFormIsSent(false);
                onClose();
                navigate("/categories");
              }}
              disabled={isPending}
              className="cursor-pointer whitespace-nowrap text-sm ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 shadow-sm hover:shadow-md h-10 px-4 w-full py-3.5 bg-[#111111] hover:bg-black text-white font-medium rounded-xl flex items-center justify-center gap-2"
            >
              <ConfirmationModalAddMore />
              <span>Yes, add more</span>
            </button>
            <button
              onClick={() => submitOrder()}
              disabled={isPending}
              className="cursor-pointer whitespace-nowrap text-sm ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border-input hover:bg-accent hover:text-accent-foreground h-10 px-4 sm:mt-0 w-full py-3.5 bg-[#C6A667] hover:brightness-95 text-[#111111] font-medium rounded-xl border-0 flex items-center justify-center gap-2 mt-0"
            >
              <ConfirmationModalSendNow />
              <span>No, send now</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;
