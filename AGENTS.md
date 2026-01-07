This TypeScript library is a theme on top of React Aria.
React Aria docs are found at: https://react-aria.adobe.com/llms.txt

Finished components are placed in the `src/components` folder.
Unfinished or experimental components are placed in the `src/todo` folder.

Each component is accompanied by a story named `<ComponentName>.stories.tsx` 
located in the same folder as the component.

Local development uses Bun and Ladle:
- Install: `bun i`
- Run stories: `bun dev`
- Build: `bun build`
- Package: `bun package`
- Check types: `bunx tsc --noEmit`

Formatting uses Biome. Prefer the VSCode extension or run `bunx biome check --write`.

Component structure conventions:
- Co-locate `<Component>.tsx`, `<Component>.css`, and `<Component>.stories.tsx` in the same folder.
- Components import their CSS file directly.
- Use `alinea-rac-<Component>` class prefixes and theme variables from `src/theme.css`.
- Use `clsx` to combine class names.
