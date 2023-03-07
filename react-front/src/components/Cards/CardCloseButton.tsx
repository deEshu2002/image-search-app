import { SelectedIdStore } from "../../hooks/SelectedIdStore";

export default function CardCloseButton() {

  const removeSelectedId = SelectedIdStore((state) => state.emptySelectedId);

  return (
    <div className="flex w-fit float-right cursor-pointer -right-4 -top-4 absolute z-50"
    onClick={() => removeSelectedId()}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="black"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="black"
        className="w-10 h-10 bg-white rounded-full p-1 border"
        data-modal-hide="popup-modal"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
      <span className="sr-only">Close modal</span>
    </div>
  );
}
