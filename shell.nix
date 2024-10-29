{
  pkgs ? import <nixpkgs> {
    inherit system;
    config = { };
    overlays = [ ];
  },
  system ? builtins.currentSystem,
}:

pkgs.mkShellNoCC {
  packages = with pkgs; [
    # Node tools
    nodejs
    corepack
    nrr

    # Language servers
    astro-language-server
    typescript-language-server
    nil

    # Nix tools
    deadnix
    nixfmt-rfc-style
    statix
  ];
}
