{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShellNoCC {
  packages = with pkgs; [
    nodejs
    pnpm

    astro-language-server
    typescript-language-server
  ];
}
