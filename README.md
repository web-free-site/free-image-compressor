# Free Image Compressor

Batch image compression and conversion in the browser for [free-image-compressor.web-free.site](https://free-image-compressor.web-free.site).

Based on [Sethispr/image-compressor](https://github.com/Sethispr/image-compressor) (MIT), using jSquash WebAssembly codecs from the Squoosh ecosystem. Images are processed locally — they are not uploaded to a server.

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Produces static assets in `dist/`, prerendered HTML for key routes, and `sitemap.xml`.

## Deploy

Deployment is handled separately (Cloudflare Workers static assets). See `wrangler.toml` — do not deploy from this agent run.

## License

MIT — see [LICENSE](LICENSE). Upstream credit: Sethispr/image-compressor.