# prismlauncher.org

## Development Environment

### Nix devShell

A devShell is provided in `shell.nix`. It is also exposed in the flake in the
root of this repository. You may use [`nix-direnv`][nix-direnv] by copying
`.envrc.example` to `.envrc`.

### Manual

Install [pnpm][pnpm-install].

clone repository:
```sh
git clone https://github.com/PrismLauncher/prismlauncher.org.git
```

run local build:
```sh
pnpm run dev
```
[pnpm-install]: https://pnpm.io/installation
[nix-direnv]: https://github.com/nix-community/nix-direnv
