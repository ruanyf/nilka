Nilka is a very simple command-line utility to resize images in batches.

**Attention**: I wrote it for my website. Convenience and saving bandwidth is my first concern, not image quality. 

## How to use

```bash
$ npm install -g nilka
$ nilka [image dir]
```

Nilka will convert all images under the specified dir into JPEG files, and put them in a sub-directory named 'build'.

If the width of an image is larger than 800px, it will be resized to 800px.

If the image dir is omitted, nilka will use the current directory.

## License

MIT
