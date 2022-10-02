import { Icon, IconName } from "./components/icon";
import { icons } from "./components/icon/icons";

function App() {
  return (
    <div className="flex flex-wrap gap-4 p-4">
      {Object.keys(icons).map((icon) => (
        <div className="flex flex-col items-center">
          <Icon icon={icon as IconName} />
          <span>{icon}</span>
        </div>
      ))}
    </div>
  );
}

export default App;
