{
  description = "prismlauncher.org";

  inputs = {
    nixpkgs.url = "github:NixOS/nixpkgs/nixos-unstable";
    flake-utils.url = "github:numtide/flake-utils";
  };

  outputs = { self, nixpkgs, flake-utils }:
    flake-utils.lib.simpleFlake {
      inherit self nixpkgs;
      name = "prismlauncher.org";
      shell = ./shell.nix;
      systems = ["x86_64-linux" "aarch64-linux" "aarch64-darwin"];
    };
}
