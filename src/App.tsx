import { Icon, IconName } from "./icon";
import { icons } from "./icon/icons";

function App() {
  return (
    <div className="w-full h-full">
      <div className="grid gap-4 p-4 grid-cols-[repeat(auto-fill,minmax(170px,_1fr))]">
        {Object.keys(icons).map((icon) => (
          <div key={icon} className="flex flex-col items-center">
            <Icon icon={icon as IconName} />
            <span>{icon}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
