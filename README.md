# reptar-excerpt
A Reptar plugin for creating a post excerpt.

This plugin comes with some additional features listed below:
* Toggle between html enhanced excerpts or plain text excerpts.
* Limit the length of your excerpts.

### How to use the different plugin options
In your _config.yml file you should already have a part with looks like the following:

```
plugins:
  excerpt:
    enabled: true
    options:
      textOnly: false
      charLimit: false
```
      
If you don't, then just add the above configuration to the bottom of your _config.yml file.

### Plugin options explained
`enabled: true`  
This part toggles the plugin on or off. Simplt set the value to `true` or `false`.

`textOnly: false`  
This option lets you either use html enhanced excerpts (meaning all links, bold, italicized, etc will be there) by setting the value for `false`. Or you can use plain text in your excerpt by using the value `true`.

`charLimit: false`  
This option can limit your excerpt length to your specified amount of characters. Use the value `false` to disable it or a number value such as `250` to set a limit.
Example: `charLimit: 250`.
