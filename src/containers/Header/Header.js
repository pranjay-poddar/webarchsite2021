import "./Header.css";
import $ from "jquery";

const Header = ({ title, id }) => {

    $(".Header-hr").each(function (index) {
        if (
          $(window).scrollTop() + $(window).height() >
          $(this).offset().top + $(this).outerHeight()
        ) {
          $(this)
            .queue(function () {
              $(this).addClass("hr-animation");
            });
        }
    });
    
    $(window).scroll(function () {
    $(".Header-hr").each(function (index) {
        if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
        $(this)
            .queue(function () {
            $(this).addClass("hr-animation");
            });
        }
    });
    });

    return (
        <div id={id} className="Header">
            <p className="Header-text">/ {title}</p>
            <hr className="Header-hr" />
        </div>
    )
}

export default Header;