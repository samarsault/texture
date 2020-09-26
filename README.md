# HWSUK FAQ

[A simple FAQ site to answer commonly-asked questions in the HardwareSwapUK community.](https://faq.hardwareswap.uk)

[Based on Texture theme by thelehhman](https://github.com/thelehhman/texture)

## Development dependencies
- A working Ruby installation, with bundler
- Optional: a proper markdown editor, or a text editor with markdown preview built in, such as Visual Studio Code (Ctrl/Cmd+K, V to enable markdown preview)

## Development

With Ruby installed, run `bundle install` to install all of the required gems, should you wish to start a local copy of the FAQ. 

Then, executing:

```
bundle exec jekyll serve
```

will start the server on port 4000, go to http://localhost:4000 to see the local copy of the site. 

The server will watch for changes to posts, but you may need to restart with `^C` if you modify theme-related files.

## Contributing

When raising a pull request, please make sure to use a sensible branch name and provide a reasonable description, highlighting at a high level what you hope to achieve with the change.

Once your pull request has been raised, the Netlify hook will create a preview deployment for you, which you can see in the pull request actions. Please verify that this looks as you expect before merging.

After merging a pull request, it is automatically deployed to the Netlify production site within a couple of minutes, and will be viewable [on the production site.] (https://faq.hardwareswap.uk)

## Queries

Should you encounter a problem when using the site, or if you wish to suggest a change without directly making code contributions, please raise a GitHub issue so we can prioritise and track the aforementioned changes. Please provide a detailed description of your suggested change, or the problem you encountered and reproduction steps in the case of bug reports, so that we can better understand the issue at hand.
