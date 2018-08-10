# jquery-disable-with

[![npm](https://img.shields.io/npm/v/jquery-disable-with.svg?style=flat)](https://www.npmjs.com/package/jquery-disable-with)

Add-on to jQuery to enable auto-disable options when submitting a form in data-disable-with attributes.

Latest version: `1.1.0`

## How to install

```bash
$ npm install jquery-disable-with
```

And add your reference:

```html
<script src="node_modules/jquery/dist/jquery.min.js"></script>
<script src="node_modules/jquery-disable-with/src/jquery-disable-with.js"></script>
```

## How to use

Create a form

```html
<form action="example.html" method="post">
    <input type="email" name="email" />
    <input type="password" name="password" />
    <input type="submit" value="Sign in" />
</form>
```

Add an attribute to the submit button.

```html
<input type="submit" value="sign in" data-disable-with="Signing in..." />
```

Run your app and click sign in button. When user is submitting the form, the sign in button will be disabled, and the text will be changed to 'Signing in...' so that user won't press it again until the server resposne.

Support with jQuery validation.
