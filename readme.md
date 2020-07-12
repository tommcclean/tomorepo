# tomorepo
> Easy to use components for your VueJS projects, or a place you can put yours!

Resource | Description | Link
-------- | -------- | --------
Component Demos | Using our live Storybook instance | https://cmpct.io/sujTtP6TF
Our Components | The source code for each component | https://cmpct.io/sYZajcDsw
Our Collections | Curated groups of components | https://cmpct.io/yOICSQPKX

## Develop Locally
1. Setup: `cd /src`, `yarn` - Only ever run yarn from the `src` folder; Yarn Workspaces looks after all sub projects
2. Storybook: `cd /src`, `yarn dev` - To run the storybook instance, when developing components use Storybook
3. Create Component: copy an existing component and modify the `package.json`, `export.js` and `Index.vue` to do what you want.

## What is tomorepo?
- A mono-repo of VueJS components. We build a ton of websites using VueJS and often find that a component in one project can be used in another.
- The `/components` directory stores all the individual components we publish - based around a modified Vue CLI
- The `/collections` directory is a nice way to bunch related components together; to make importing them easier

## Can I use tomorepo?
- Sure, if you want to improve an existing component, or add your own feel free to fork the repo and send us a PR
- If you want your own mono repo; feel free to take our code and modify it to your liking.
