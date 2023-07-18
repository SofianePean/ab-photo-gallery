import { Icon } from "./Icon";

interface MenuIconProps {
  onClick: () => void;
  isOpen: boolean;
}

export const MenuIcon: React.FC<MenuIconProps> = ({ onClick, isOpen }) => {
  return (
    <div className="p-4" onClick={onClick}>
      {isOpen ? (
        <Icon icon="x" color="#FFFFFF" size="2em" />
      ) : (
        <Icon icon="list" color="#FFFFFF" size="2em" />
      )}
    </div>
  );
};
