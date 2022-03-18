
# jQuery serialcookie - Lightweight cookie consent banner

## About jQuery serialcookie
The plugin provides an easy way to implement a cookie consent banner to your website. The messages are easily customisable and new language translations can be added. This is a lightweight version of the cookie consent, for large companies they might need the "Edit preferences" option to let the user customize what he wants to accept/reject. Additional languages can be added by using the settings. Note that jQuery serialcookie is shared for inspirational and development purpose.


## Demonstration
See the [project page](https://github.meunierkevin.com/jquery-serialcookie/) for a demonstration.


## Compatibility
jQuery serialcookie has been tested in: IE, Edge, Chrome (mobile included), Firefox (mobile included), and Safari (mobile included).


## Self-Hosted
[Download](https://github.com/kevinmeunier/jquery-serialcookie/archive/master.zip) and save one of two available files to include serialcookie to your page, either the [development](https://github.com/kevinmeunier/jquery-serialcookie/blob/main/dist/jquery.serialcookie.js) or the [minified](https://github.com/kevinmeunier/jquery-serialcookie/blob/main/dist/jquery.serialcookie.min.js) version. Also, you can visit the [project page](https://github.meunierkevin.com/jquery-serialcookie/) to copy what you need.
```HTML
<script src="jquery.serialcookie.min.js" type="text/javascript"></script>
<link href="jquery.serialcookie.css" type="stylesheet">
```
Due to the lightweight CSS code, it's recommended to copy/paste the CSS code into your general stylesheet.

Make sure [jQuery](http://jquery.com) is properly loaded before using jQuery serialcookie. 


## Basic Usage
The basic usage of serialcookie is pretty easy, just start using jQuery serialcookie by calling it after page load.
```JS
$(document).ready(function(){
  // jquery.serialcookie initialisation
  $.serialcookie({
    callback: function(isAccepted){
      if( isAccepted ){
        // Google Analytics
        console.log('Loading Google Analytics script..');
      }
    }
  });
});
```

  
## Configuration Parameters
The following configurations is available by default:

Name               | Type       | Default                             | Description
------------------ | ---------- | ----------------------------------- | -----------
lanug              | *string*   | *'auto'*                            | The autodetection is based on the LANG attribute of the HTML tag
callback           | *function* | *'function(isAccepted){}'*          | Essential fn to call the script that are using cookies
template           | *string*   | See [jquery.serialcookie.js](https://github.com/kevinmeunier/jquery-serialcookie/blob/main/dist/jquery.serialcookie.js) | The HTML template where the translations will be injected
translations       | *object*   | See [jquery.serialcookie.js](https://github.com/kevinmeunier/jquery-serialcookie/blob/main/dist/jquery.serialcookie.js) | The translations in each language


## Bugs / Feature request
Please [report](http://github.com/kevinmeunier/jquery-serialcookie/issues) bugs and feel free to [ask](http://github.com/kevinmeunier/jquery-serialcookie/issues) for new features directly on GitHub.


## License
jQuery serialcookie is licensed under [MIT](http://www.opensource.org/licenses/mit-license.php) license.
