# Custom Tempating Engine

This is my attempt at making a simple templating engine. The basic features it provides are -

-   Replace variables in HTML files with their corresponding values.
-   Option to extend templates. Like for example if you have a similar initial header file setup and don't want to repeat that for all your other HTML files then you can just extent that common HTML file to all your other files.

To demarkate something as a variable in the HTML file write it as follows -

```
${variable_name_here}
```

And to extend a template you can use similar syntax

```
${variable_name_assigned_to_common_template}
```

And as for the values for all these variables that is defined in index [.] js file and the code for the templating engine can be found in engine [.] js file.
