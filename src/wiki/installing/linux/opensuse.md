---
eleventyNavigation:
  parent: Linux
  key: openSUSE
--- 
# <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/OpenSUSE_Logo.svg" height="20"> openSuse

An RPM package is available on [Copr](https://copr.fedorainfracloud.org/coprs/sentry/polymc/).

```
. /etc/os-release

curl "https://copr.fedorainfracloud.org/coprs/sentry/polymc/repo/$ID/sentry-polymc-$ID.repo" | sudo tee "/etc/zypp/repos.d/sentry-polymc-$ID.repo"
```
