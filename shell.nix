{
  pkgs ? import <nixpkgs> { },
}:

pkgs.mkShell {
  packages = with pkgs; [
    nodejs_24
    (pnpm.override {nodejs = nodejs_24;})

    astro-language-server
    typescript-language-server
  ];
}
