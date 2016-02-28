var Marked = {
  renderAll: function() {
    $(".marked-render").each(function(i) {
      $( this ).html(marked($( this ).data("raw")));
      Marked.highlightAll();
    });
  },
  highlightAll: function() {
    $('pre code').each(function(i, block) {
      hljs.highlightBlock(block);
    });
  }
}
