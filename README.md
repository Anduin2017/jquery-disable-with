# jquery-disable-with

Add-on to jQuery to enable auto disable options when submitting form in data-disable-with attributes.

## How to install

```bash
$ npm install jquery-disable-with
```

## How to use

Create a form

```html
<form action="/post" method="post">
    <input type="email" name="email" />
    <input type="password" name="password" />
    <input type="submit" value="sign in" />
</form>
```

Add an attribute to the submit button.

```html
<input type="submit" value="sign in" data-disable-with="Signing in..." />
```

Run your app and click sign in button.