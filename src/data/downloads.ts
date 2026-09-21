const VERSION = "11.1.0";

export const PLATFORMS = [
	{
		name: "Linux",
		path: "/download/linux",
		key: "linux",
		icon: "simple-icons:linux",
	},
	{
		name: "macOS",
		path: "/download/macos",
		key: "macos",
		icon: "simple-icons:apple",
	},
	{
		name: "Windows",
		path: "/download/windows",
		key: "windows",
		icon: "simple-icons:windows",
	},
	{
		name: "SteamOS",
		path: "/download/steam-deck",
		key: "steam-deck",
		icon: "simple-icons:steam",
	},
] as const;

export const DOWNLOADS = {
	windows: [
		{
			title: "x86-64",
			downloads: [
				{
					title: "Installer (.exe)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Windows-MSVC-Setup-${VERSION}.exe`,
					type: "primary" as const,
					icon: "simple-icons:windows",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Portable (.zip)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Windows-MinGW-w64-Portable-${VERSION}.zip`,
					type: "secondary" as const,
					icon: "simple-icons:windows",
					secondaryIcon: "lucide:download",
				},
			],
		},
		{
			title: "ARM64",
			downloads: [
				{
					title: "Installer (.exe)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Windows-MSVC-arm64-Setup-${VERSION}.exe`,
					type: "secondary" as const,
					icon: "simple-icons:windows",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Portable (.zip)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Windows-MinGW-arm64-Portable-${VERSION}.zip`,
					type: "secondary" as const,
					icon: "simple-icons:windows",
					secondaryIcon: "lucide:download",
				},
			],
		},
	],

	linux: [
		{
			title: "x86-64",
			downloads: [
				{
					title: "Flathub",
					href: "https://flathub.org/apps/details/org.prismlauncher.PrismLauncher",
					type: "primary" as const,
					icon: "simple-icons:flathub",
					secondaryIcon: "lucide:link",
				},
				{
					title: "Nightly Flatpak for testers",
					href: "https://flatpak.prismlauncher.org/prismlauncher-nightly.flatpakref",
					type: "nightly" as const,
					icon: "simple-icons:flatpak",
					secondaryIcon: "lucide:link",
				},
				{
					title: "AppImage (.appimage)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Linux-x86_64.AppImage`,
					type: "secondary" as const,
					icon: "simple-icons:linux",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Portable (tar.gz)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Linux-Qt6-Portable-${VERSION}.tar.gz`,
					type: "secondary" as const,
					icon: "simple-icons:linux",
					secondaryIcon: "lucide:download",
				},
			],
		},
		{
			title: "ARM64",
			downloads: [
				{
					title: "Flathub",
					href: "https://flathub.org/apps/details/org.prismlauncher.PrismLauncher",
					type: "primary" as const,
					icon: "simple-icons:flathub",
					secondaryIcon: "lucide:link",
				},
				{
					title: "Nightly Flatpak for testers",
					href: "https://flatpak.prismlauncher.org/prismlauncher-nightly.flatpakref",
					type: "nightly" as const,
					icon: "simple-icons:flatpak",
					secondaryIcon: "lucide:link",
				},
				{
					title: "AppImage (.appimage)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Linux-aarch64.AppImage`,
					type: "secondary" as const,
					icon: "simple-icons:linux",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Portable (tar.gz)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Linux-aarch64-Qt6-Portable-${VERSION}.tar.gz`,
					type: "secondary" as const,
					icon: "simple-icons:linux",
					secondaryIcon: "lucide:download",
				},
			],
		},
	],

	macos: [
		{
			title: "Monterey or later",
			downloads: [
				{
					title: "Universal (.zip)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-macOS-${VERSION}.zip`,
					type: "primary" as const,
					icon: "simple-icons:apple",
					secondaryIcon: "lucide:download",
				},
			],
		},
	],

	"steam-deck": [
		{
			title: "Deck & Machine",
			downloads: [
				{
					title: "Flathub",
					href: "https://flathub.org/apps/details/org.prismlauncher.PrismLauncher",
					type: "primary" as const,
					icon: "simple-icons:flathub",
					secondaryIcon: "lucide:link",
				},
				{
					title: "Nightly Flatpak for testers",
					href: "https://flatpak.prismlauncher.org/prismlauncher-nightly.flatpakref",
					type: "nightly" as const,
					icon: "simple-icons:flatpak",
					secondaryIcon: "lucide:link",
				},
				{
					title: "Controller Mods Setup",
					href: "/wiki/getting-started/controller-support/",
					type: "accent" as const,
					icon: "lucide:book-open-text",
				},
			],
		},
		{
			title: "Frame Standalone",
			downloads: [
				{
					title: "AppImage (.appimage)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Linux-aarch64.AppImage`,
					type: "secondary" as const,
					icon: "simple-icons:linux",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Portable (tar.gz)",
					href: `https://github.com/PrismLauncher/PrismLauncher/releases/download/${VERSION}/PrismLauncher-Linux-aarch64-Qt6-Portable-${VERSION}.tar.gz`,
					type: "secondary" as const,
					icon: "simple-icons:linux",
					secondaryIcon: "lucide:download",
				},
				{
					title: "Frame Standalone VR Setup",
					href: "http://localhost:4321/wiki/getting-started/controller-support/",
					type: "accent" as const,
					icon: "lucide:book-open-text",	
				}
			],
		},
	],
};
