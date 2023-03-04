import { useColorMode } from "../hooks/UseColorMode";

function DarkmodeToggle() {
  const mode = useColorMode((state) => state.mode);
  const toggleMode = useColorMode((state) => state.toggleMode);

  return (
    <>
      <li className=" my-auto">
        <span
          className={`${
            mode ? "bg-slate-900 text-white" : "bg-white"
          } ml-3 text-sm font-medium text-gray-900 dark:text-gray-300`}
        >
          Dark Mode
        </span>
      </li>
      <li className="mt-1 !ml-2">
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            value=""
            className="sr-only peer"
            onClick={() => {
              toggleMode(!mode);
            }}
          />
          <div
            className={`
          w-11 h-6 ${
            mode
              ? "!bg-white after:bg-slate-400  "
              : "!bg-slate-400 after:bg-white"
          } rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-gray-400 after:content-[''] after:absolute after:top-[2px] after:left-[2px]  after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-slate-300`}
          ></div>
        </label>
      </li>
    </>
  );
}

export default DarkmodeToggle;
