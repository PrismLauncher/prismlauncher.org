---
title: FTB Modpack Downloading Removal.
description: Why FTB Modpack Downloading was Removed.
date: 2023-06-08
tags:
  - News
---

At the request of Slowpoke, representing the FTB team, we have removed the feature that allows downloading FTB modpacks from Prism Launcher. [GitHub PR][pr-ftb-removal]

Existing instances of FTB Modpacks will remain functional, but with the next release, downloading FTB packs within the launcher will no longer be possible.

A way to import FTB Modpacks from the FTB App is planned, though no work was done yet. If you think you can help out, [join the development over here][issue-ftb-app-import]!

The reason for this request from the FTB team seems to be related to some launchers attempting to monetize FTB Packs.

## Conversations With FTB Team

Note some parts have been removed due to privacy concerns.

Raw screenshots can be found here: [Raw Screenshots][raw-screenshots]

### People Involved in these conversations shown below

> IThundxr
> Discord ID: 694604709591384226

<br/>

> Scrumplex
> Discord ID: 138352803906191360

<br/>

> Mikey
> Discord ID: 196688486357663744

<br/>

> Slowpoke
> Discord ID: 104950896491823104

### Initial Permission Request

> Hi,
> I’m a mod from prism and just confirming that your okay with us using the ftb api as we already do
>
> - IThundxr

<br/>

> Thank you for reaching out. Right now, the kinda, "official" statement is that other launchers shouldn't be using our API as it bypasses our ads and thus causes financial loss... I can take this up to my boss and get you an official response.
>
> Do you know the exact way you use our API? The details are kinda important at this stage as how you use it depends on where the line is drawn. We have some relatively strict restrictions on how we're allow to use the Curse API and that propagates down to our API.
>
> - Mikey

<br/>

> we use it for modpacks but CF mods are downloaded through the official curseforge API so it shows a dialog for mods with mod distribution disabled
>
> - IThundxr

<br/>

> Using the curseforge object inside our files array?
>
> - Mikey

<br/>

> Do u mean like using the curse forge array to find mods with the official api?
>
> - IThundxr

<br/>

> This Object
> <img alt="image of the modpacks.ch modpack mod object" src="https://cdn.discordapp.com/attachments/1064872603237498930/1064899187130507284/Screenshot_2023-01-17_at_13.29.01.png" style="width: 30em">
>
> - Mikey

<br/>

> Yea we use that for searching stuff in the official cf api
>
> - IThundxr

<br/>

> Then you're not breaking CF's policy. Where that stands with us, I honestly don't know. I'm only the lead software dev, I don't actually deal with business decisions but I'll happily get you an answer to your question.
>
> - Mikey

<br/>

> Thanks as we wanna comply with legal rules and regulations and tos
> We don’t wanna end up doing or using smt that we aren’t allowed to use
>
> - IThundxr

<br/>

> Forwarded this up the chain and I'm being told that as long as you're doing it the way you've said you're doing it then you're all good 👍
>
> - Mikey

<br/>

> Ok good to know!
>
> - IThundxr

<br/>

> Obviously, this us just saying that what you're doing isn't breaking any official rules. It's not explicit permission. It's just not us revoking permission if that makes sense.
> Effectively, it's only confirmation for your use case very specifically 👍
>
> - Mikey

### Request to Remove FTB Modpack Downloading

> Hi, I see your a community manager, but do you also work on Prism Launcher?
>
> - Slowpoke

<br/>

> Hi, yes i do
>
> - Scrumplex

<br/>

> Hi, I am not sure if you can point me in the direction of someone who can help me. I work for Feed The Beast (the pack developers) We have recently been contacted by our legal advisors and been told that we unfortunately going to have to change some things that we have overlooked in the past when it comes to other launchers that have been downloading FTB modpacks without permission. Due to this I am contacting the developers of launchers that are currently distributing our packs in the hopes of resolving this without having to take it any further. Can you find out weather you are open to voluntarily removing our packs from the Prism Launcher for me. If you need me to send something official I can do that, but I am hoping we can do this in the easiest way possible.
> I was hoping that this was something we would be able to continue to overlook, however that is apparently no longer possible.
>
> - Slowpoke

<br/>

> I assume this is similar to what MultiMC did last year already?
>
> Our main reasoning for not following MultiMC was that we were not contacted ourselves yet. Though we did confirm with FTB team members if our implementations were fine.
>
> Of course i am sad to hear the situation has changed since then, but we would of course comply. We always try to respect upstreams even if it means that we lose a feature or two
> Is it okay if I screenshot this and send it to the other maintainers?
>
> - Scrumplex

<br/>

> Of course
> and as I said, nothing you have done has led to this in any way
> We have just found out that there are other launchers on the horizon that intent to make financial gains from the installation of our modpacks and that can cause issues for us, especially if we have no history of being seen to be protecting our IP.
> As long as launchers were operating for free, we were able to overlook things. But thats not the case any more.
>
> - Slowpoke

### Additional

> Hi,
>
> Reaching out for Prism and I’m wondering what’s lead to us not being allowed to use the api for what we are doing.
> Since we got permission before that said we were allowed, anyway I’m not saying we won’t comply just want some more info about this
>
> - IThundxr

<br/>

> Hi there
> Sorry I was in a meeting.  With regards to the issue, As I told Scrumplex, it is nothing that anyone at Prism has done wrong. We have been informed however that there are several new launchers in development and at least 1 existing launcher that is moving to a model that includes getting income from the installation of mods and modpacks. We have been advised by our legal advisors that because of this, we effectively have to start asking other launchers to no longer allow our packs to be listed. The problem is something to do with it makes it much harder to prevent other launchers from just doing what they want if we have no history of enforcing the protection of our copyright and IP.
> I am not a legal expert, so I don’t really have much to say on this other than that this is the advice we have been given so we have to follow it
> With regards to permission, as far as I know the only thing that has ever been said is we wont actively chase after people. I don’t think (unless I am remembering wrong and I would in that case want to see evidence of this) we have ever
> We have never given anyone permission to distribute our packs other than Curseforge and we don’t upload our packs there any more either
>
> - Slowpoke

<br/>

> Basically Mikey told me the way we were using the api is fine and we are good to continue using it
>
> - IThundxr

<br/>

> This is not what he is saying, he is saying that your not breaking the terms of CurseForge. Also as things stand modpacks.ch is also open.  We are going to be making changes to our packs so that they are clearly covered under an appropriate licence.  Once this has all been done then everything will be much clearer legally. That is why what I sent today was a request at this point. We are going to be making changes to make sure that everything is clear legally with regards to distribution of our packs. But I didn’t want to do this in that order. I thought it was much better to come to you in advance and see if there was a way of us preempting these changes so that it wasn’t just dumped on you without any form of communication.
> I don’t really have any issues with any of the other launchers or the people running them. Way back in the day, just so you are aware of how this all happened, we had an arrangement with Forkk where he was able to have packs on his launcher, our only condition was that the modpacks were downloaded through the FTB Launcher. He respected that to start with. Later on down the line the ability to download the packs was added, but that was never done with our consent, By the time it was added, it was already
> Established and our main reason at the time for the insistence of downloading though our launcher didn’t really apply to Forkk as we knew him so we let it slide. Since then we have continued with that policy. However the situation has changed dramatically since then and whilst in principle I have no beef with launchers like prism that don’t have any form of income, that cant apply to launchers designed to make income.  Unfortunately the none income making launchers are just getting caught up in the effect that this is going to have on the community.
> This is not going to be good for us either.
> People will assume its about making as much money as we can, and in reality that does not really have anything to do with it.
> The percentage of downloads and plays of our packs from launchers other than our own is less than 10%
>
> - Slowpoke

<br/>

> So for now you just want us to remove ftb modpack downloading and later that might change?
>
> - IThundxr

<br/>

> To be clear this only applies to anything that comes from modpacks.ch. If you get it from api.feed-the-beast.com then it is OK. We are not going to lock off access to the legacy packs. If you choose to continue to support those packs then your OK to allow those.
>
> - Slowpoke

## Raw screenshots

<img alt="Reaching out to FTB to ask for permission to use FTB modpacks in prism and they ask for more info how we use the api." src="/img/news/ftb-removal/request1.png" style="width: 40em">
<br/>
<img alt="Info on how we use the api is provided and they forwarded it to higher ups and reply saying how we use it is fine." src="/img/news/ftb-removal/request2.png" style="width: 40em">
<br/>
<img alt="They clarify its only confirmation that how we use it is fine." src="/img/news/ftb-removal/request3.png" style="width: 40em">
<br/>
<img alt="Scrumplex is reached by slowpoke where slowpoke asks for FTB modpack downloading to be removed" src="/img/news/ftb-removal/request4.png" style="width: 40em">
<br/>
<img alt="Slowpoke clarifies that prism hasn't done anything wrong that has ended up causing this" src="/img/news/ftb-removal/request5.png" style="width: 40em">
<br/>
<img alt="IThundxr reaches out to slowpoke for further clarification" src="/img/news/ftb-removal/request6.png" style="width: 40em">
<br/>
<img alt="Slowpoke says overwolf has nothing to do with this decision to make launchers remove FTB modpack downloading" src="/img/news/ftb-removal/request7.png" style="width: 40em">
<br/>
<img alt="More info is given and basically the decision was made due to a launcher trying to monetize ftb packs." src="/img/news/ftb-removal/request8.png" style="width: 40em">

[pr-ftb-removal]: https://github.com/PrismLauncher/PrismLauncher/pull/1040
[issue-ftb-app-import]: https://github.com/PrismLauncher/PrismLauncher/issues/235
[raw-screenshots]: https://prismlauncher.org/news/ftb-removal/#raw-screenshots
