{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShellNoCC {
  buildInputs = [
    pkgs.bun
    pkgs.astro-language-server
    pkgs.typescript-language-server
  ];
}
