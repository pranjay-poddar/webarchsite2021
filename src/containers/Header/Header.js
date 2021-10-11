import "./Header.css";

import $ from "jquery";

const Header = ({ title, id, alt }) => {
  $(".Header-hr").each(function (index) {
    if (
      $(window).scrollTop() + $(window).height() >
      $(this).offset().top + $(this).outerHeight()
    ) {
      $(this).queue(function () {
        $(this).addClass("hr-animation");
      });
    }
  });

  $(window).scroll(function () {
    $(".Header-hr").each(function (index) {
      if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
        $(this).queue(function () {
          $(this).addClass("hr-animation");
        });
      }
    });
  });

  return (
    <div id={id} className={alt ? "Header alt" : "Header"}>
      <p className="Header-text">/ {title}</p>
      {title === "Testimonials" ? (
        <hr
          className="Header-hr"
          style={{ maxWidth: `${title.length + 300}px` }}
        />
      ) : title === "Contact Us" ? (
        <hr
          className="Header-hr"
          style={{ maxWidth: `${title.length + 250}px` }}
        />
      ) : (
        <hr
          className="Header-hr"
          style={{ maxWidth: `${title.length + 200}px` }}
        />
      )}
    </div>
  );
};

export default Header;
