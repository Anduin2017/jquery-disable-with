# jquery-disable-with

[![npm](https://img.shields.io/npm/v/jquery-disable-with.svg?style=flat)](https://www.npmjs.com/package/jquery-disable-with)

Add-on to jQuery to enable auto-disable options when submitting a form in data-disable-with attributes.

See a demo [here](https://developer.aiursoft.com/Samples/DisableWithForm)

## How to install

```bash
$ npm install --save jquery-disable-with
```

And check your reference. jQuery is required!

```html
<script src="node_modules/jquery/dist/jquery.min.js"></script>
<script src="node_modules/jquery-disable-with/src/jquery-disable-with.js"></script>
```

## How to use

Create a form

```html
<form action="//slowaction" method="post">
    <input type="email" name="email" required/>
    <input type="password" name="password" />
    <input type="submit" value="Sign in" />
</form>
```

Add a submit button:

```html
<input type="submit" value="Sign in" data-disable-with="Signing in..." />
```

Or a simple button like this:

```html
<button type="submit" data-disable-with="Signing in...">Sign in</button>
```

Run your app and click sign in button. When user is submitting the form, the sign in button will be disabled, and the text will be changed to 'Signing in...' so that the user won't press it again until the server response.

* Support with jQuery validation. Please view document [here](https://github.com/jquery-validation/jquery-validation)
* Support with `required` attribute. Won't action when required fields are empty.
