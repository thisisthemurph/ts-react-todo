import "./Header.scss";

interface HeaderProps {
  onButtonClick(): void;
}

export const Header = ({ onButtonClick }: HeaderProps) => {
  return (
    <header className="header">
      <h1>Notes</h1>
      <button className="fetchBtn" onClick={onButtonClick}>
        Fetch
      </button>
    </header>
  );
};
