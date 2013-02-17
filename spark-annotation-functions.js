if (Meteor.isClient) {

  /* template event handlers */
  Template.greetingButton.events({
    "click button": function (e, tmpl) {
      console.log("clicked!");
    }
  });


  /* custom annotation */
  function customAnnotation (htmlFunc) {
    var renderer = Spark._currentRenderer.get();
    var html;

    var materializeFunc = function (liveRange) {
      console.log("Now parsing the annotations is done and we're materializing");
    };

    if (!renderer)
      return htmlFunc();

    html = renderer.annotate(
      htmlFunc(),
      "chris-custom-annotation",
      materializeFunc
    );

    console.log(html);
    return html;
  }

  function customRender () {
    return customAnnotation(function () {
      return "<div>Hello</div>";
    });
  }

  Meteor.startup(function () {
    document.body.appendChild(Spark.render(customRender));  
  });


}
