import "./Header.css";

const Header = ({ title, id, alt }) => {
  return (
    <div id={id} className={alt ? "Header alt" : "Header"}>
      <p className="Header-text"><span className="Header-slash">/</span> {title}</p>
      {title === "Testimonials" ? (
        <hr
          className="Header-hr"
          style={{ maxWidth: `${title.length + 300}px`, minWidth: "240px", background: "#fff" }}
        />
      ) : title === "Contact Us" ? (
        <hr
          className="Header-hr"
          style={{ maxWidth: `${title.length + 300}px`, minWidth: "240px", background: "#fff" }}
        />
      ) : (
        <hr
          className="Header-hr"
          style={{ maxWidth: `${title.length + 210}px`, minWidth: "240px", background: "#fff" }}
        />
      )}
    </div>
  );
};

export default Header;
