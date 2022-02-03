---
title: MultiMC Status Update
author: Drayshak
date: 2013-10-27T10:40:30+01:00
---

I thought I'd write a blog post discussing the current state of MultiMC, MultiMC 5 development progress, and the future.

First, we have a new, dedicated website, and you're looking at it! The idea was to keep it clean, simple and functional, and I think we've achieved that. Things might still change a bit but the framework is there for us to use.

So who is "us"? [peterix](https://twitter.com/peterixxx) and myself ([@Drayshak](https://twitter.com/drayshak)) are pushing development of MultiMC 5 forward, I've been working on the website, [Forkk](https://twitter.com/forkk13) is helping with infrastructure, and there have been notable contributions to the project from [@TakSuyu](https://twitter.com/TakSuyu), [Kilobyte](https://twitter.com/Stiepen22) and Orochimarufan. (If you think you've made a contribution that I've left out, tell me!).

Development of MultiMC 5 is going well, and we publish "test builds" regularly. We're changing our build system so for now you can find them on our IRC channel ([Esper/#MultiMC](http://webchat.esper.net/?nick=&channels=MultiMC)), but eventually they'll be published on this website.

The test builds have most of the core functionality implemented and should be fine for general use, but keep in mind that it might have some rough edges. Keep a copy of builds that work for you and report bugs (on IRC or using the [Issue Tracker](http://multimc.myjetbrains.com/youtrack/issues)). You can follow most of our progress on IRC or by using the [Dev Tracker](https://www.pivotaltracker.com/s/projects/869353).

If you find something broken (or missing) in MultiMC 5, chances are that we're working on it. The biggest omission right now is the lack of an updater, so be sure to check the download links for updated builds. We're working with Forkk to get a good build system going, the single links are just there so people can get access to builds as we make them. As of right now there are no OS X test builds because getting the build system set up for that is considerably more difficult than getting Windows and Linux working.

Forkk's posted before on his blog about the reasons for the lengthy delay in getting MultiMC 5 out, the main one being that Mojang fundamentally changed the way that Minecraft is launched (for the better). We were becoming increasingly unhappy with wxWidgets so the big change made it a good time for a rewrite in Qt, and we're having much more success with it.

That's everything I can think to talk about right now! If you like what we're doing throw us some love on Twitter, we've been working hard on moving towards stable builds and a little love is always appreciated.

Drayshak
