module WyncodeHelpers
  module ApplicationHelper
    def render_markdown(raw_string, opts = {})
      tag = opts[:tag] || "div"
      classes = ["marked-render"]
      classes << opts[:class] if opts[:class]
      classes = classes.join(" ")
      id = opts[:id] || ""
      <<-HTML.html_safe
        <#{tag} class="#{classes}" id="#{id}" data-raw="#{h raw_string}"></#{tag}>
      HTML
    end
  end
end
