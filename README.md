# WyncodeAssets

This gem extracts common assets from Goodmeasure to be shared accross all wyncode applications.

## Installation
Add to Gemfile:

```ruby
gem 'wyncode_assets', git: 'git://github.com/wyncode/wyncode_assets.git'
```

Now load the stylesheets and javascripts.
Add this to application.css:

```css
// = require wyncode_assets/wyncode_styles
```

or, if using Sass & want to use variables, etc:

```sass
@import "wyncode_assets/wyncode_styles";
```

And add this to application.js:

```coffee
# //= require wyncode_assets/wyncode_javascripts
```

## Usage

Develop with stylesheets/scripts natively in the app as necessary. If a style or script is needed in another app, pull it into a matching directory here. Keep all files namespaced so they do not colide with files in the parent app.

### Markdown Rendering

Use the `render_markdown` view helper. Ex:

```html
<%= render_markdown @task.prompt_raw %>
```

Includes full syntax highlighting for HTML/CSS/Ruby/Javascript/HTTP/SQL/Markdown
##Known Issues

- Currently the styles are just a rip of all of Goodmeasure's styles. Ideally, would contain only shared business styles while Goodmeasure/GoodAdmission/etc specific styles would remain in their requisite applications.

