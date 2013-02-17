if (Meteor.isClient) {

  /* plain html with no annotations */
  function plainHtml() {
    return Template.greetingButton();
  }

  /* show what annotated html looks like. step 1 in materialization process */
  function annotatedHtml() {
    var renderer = new Spark._Renderer;
    var html = Spark._currentRenderer.withValue(
      renderer,
      Template.greetingButton
    );
    return html;
  }

  /* this is exactly what Spark.render does except the materialize method
   * creates the annotated html first and then does the materialization all
   * in one step. We've broken it out for demonstration
  */
  function materializedHtml() {
    var renderer = new Spark._Renderer;
    var materializedHtmlFrag = renderer.materialize(Template.greetingButton);
    return materializedHtmlFrag;
  }

  /* same as document.body.appendChild(Spark.render(Template.greetingButton)) */
  function appendTemplateToBody() {
    document.body.appendChild(materializedHtml());
  }

  /* define a simple event handler on the greetingButton template */
  Template.greetingButton.events({
    "click button": function (e, tmpl) {
      console.log("clicked!");
    }
  });
}
