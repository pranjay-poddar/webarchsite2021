import React from "react";
import $ from "jquery";
import "./SectionHead.scss";

function SectionHead({ value }) {
  $(".has-animation").each(function (index) {
    if (
      $(window).scrollTop() + $(window).height() >
      $(this).offset().top + $(this).outerHeight()
    ) {
      $(this)
        .delay($(this).data("delay"))
        .queue(function () {
          $(this).addClass("animate-in");
        });
    }
  });

  $(window).scroll(function () {
    $(".has-animation").each(function (index) {
      if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
        $(this)
          .delay($(this).data("delay"))
          .queue(function () {
            $(this).addClass("animate-in");
          });
      }
    });
  });

  return (
    <div className="SectionHead">
      <div className="has-animation animation-ltr" data-delay="50">
        <p className="bigger">{"/" + value}</p>
      </div>
    </div>
  );
}

export default SectionHead;
