## Local Development

This project is run in the [Bun runtime](https://bun.sh/). Run the following command (instructions from the official website) to install it:

```sh
curl -fsSL https://bun.sh/install | bash
```

This is supported on MacOS, Linux, and in WSL. Bun does not work well with Windows natively.

To run this locally, make sure you first install everything using `bun i` (Bun should be pretty familiar as most of its commands are the same as NPM's) and then run `bun dev` to start the project on localhost. If you need to use a different port than the default (`3000`), you can do `PORT=5000 bun dev`.

To use ESLint, run `bun lint` to get linter warnings and errors. You can also do `bun lint:fix` to automatically fix any errors that can be corrected by the linter.

## Previewing a Production Deployment

To build the project, run `bun run build`. This will also give you linter warnings/errors. Make sure you do not do `bun build` (it will just output usage instructions for `bun build` and do nothing). Then, use `bun start` to run the built project. You can also do `bun preview` to do both together. Again, you can do `PORT=5000 bun start` or `PORT=5000 bun preview`.

## Contributing

Implement changes on your own branch. The preferred branch naming scheme is `name/ticket/description`; for example, `alex/CSP-1234/fix-the-bug`, but this isn't really a big deal and won't be enforced. The `main` branch is protected and requires a PR with one approval to merge to it. Once you push to `main`, your changes will be automatically deployed to https://class-profile-2023.vercel.app/.
