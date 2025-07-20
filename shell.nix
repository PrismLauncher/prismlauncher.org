{
  pkgs ? import <nixpkgs> {
    inherit system;
    config = { };
    overlays = [ ];
  },
  system ? builtins.currentSystem,
}:

pkgs.mkShellNoCC {
  packages = [
    # Node tools
    pkgs.nodejs
    pkgs.pnpm
    pkgs.nrr

    # Nix tools
    pkgs.deadnix
    pkgs.nil
    pkgs.nixfmt-rfc-style
    pkgs.statix
  ];
}
