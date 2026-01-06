# post guide

this is a little guide to making posts in the site. you just have to make a new markdown file in the `src/content/news` directory, and then write your content and metadata (see the other posts as an example).

## callouts

you can use callouts/alerts in your posts! you have to turn your `.md` file into a `.mdx` file, and then import it by adding this _below_ the frontmatter:

```md
import Callout from "../../components/ui/Callout.astro";
```

and then use that Callout component like this:

```md
<Callout type="info">
	lalala this is my alert or note or whatever. lorem ipsum dolor sit amet i forgot the rest
</Callout>
```

should hopefully render fine. idk if astro has a better way to do this without mdx, i'd really like to be able to format it like:

```md
::: warning
this is a warning box
:::
```

but once again i dont know if astro can do this easily or if the components way is better. if you know how to do that, please make an issue on the repo! thx :)
