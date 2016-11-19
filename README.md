# reptar-excerpt
A Reptar plugin for creating a post excerpt.

### Default plugin configuration
In your project's _config.yml file you should already have a part with looks like the following:

```
plugins:
  excerpt:
    enabled: true
    options:
      textOnly: false
      charLimit: false
```
      
If you don't, then just add the above configuration to the bottom of your _config.yml file. This will let you make use of the plugin in your project.

### Plugin options explained
`enabled: true`  
This part toggles the plugin on or off. Simply set the value to `true` (on) or `false` (off).

`textOnly: false`  
This option lets you either use html enhanced excerpts (meaning links, boldness, italicization, and so on will be there) by setting the value to `false`. You can use plain text in your excerpt by changing the value to `true`.

`charLimit: false`  
This option can limit your excerpt length to your specified amount of characters. Use the value `false` to disable it or a number value such as `250` to set a max limit.
Example: `charLimit: 250`.
