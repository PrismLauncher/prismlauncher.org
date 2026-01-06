{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShellNoCC {
  packages = with pkgs; [
    nodejs_24
    corepack

    astro-language-server
    typescript-language-server
  ];
}
