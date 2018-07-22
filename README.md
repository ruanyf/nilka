usu is a very simple command-line utility to resize images in batches.

## How to use

```bash
$ npm install -g usu
$ usu [image dir]
```

usu will convert all images under the specified dir into JPEG files, and put them in a sub-directory named 'build'.

If the width of an image is larger than 800px, it will be resized to 800px.

If the image dir is omitted, usu will use the current directory.

## License

MIT
