# WyncodeAssets

This gem extracts common assets (currently only styles) from Goodmeasure to be shared accross all wyncode applications.

## Usage
Add to Gemfile:

```ruby
gem 'wyncode_assets', git: 'git://github.com/wyncode/wyncode_assets.git'
```

And to application.css:

```ruby
// = require wyncode_styles
```

or, if using Sass & want to use variables, etc:

```ruby
@import "wyncode_styles";
```

##Known Issues

- Currently is just a rip of all of Goodmeasure's styles. Ideally, would contain only shared business styles while Goodmeasure/GoodAdmission/etc specific styles would remain in their requisite applications.

- Currently is just stylesheets. Ideally, would contain images and scripts (if necessary) as well.
