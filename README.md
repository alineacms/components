# Alinea Components

- [Button](https://react-spectrum.adobe.com/react-aria/Button.html)
- [Checkbox](https://react-spectrum.adobe.com/react-aria/Checkbox.html)
- [CheckboxGroup](https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html)
- [ColorSwatch](https://react-spectrum.adobe.com/react-aria/ColorSwatch.html)
- [ColorSwatchPicker](https://react-spectrum.adobe.com/react-aria/ColorSwatchPicker.html)
- [ComboBox](https://react-spectrum.adobe.com/react-aria/ComboBox.html)
- [DateField](https://react-spectrum.adobe.com/react-aria/DateField.html)
- [Dialog](https://react-spectrum.adobe.com/react-aria/Dialog.html)
- [DropZone](https://react-spectrum.adobe.com/react-aria/DropZone.html)
- [Icon](https://react-spectrum.adobe.com/react-aria/Icon.html)
- [Label](https://react-spectrum.adobe.com/react-aria/Label.html)
- [Link](https://react-spectrum.adobe.com/react-aria/Link.html)
- [Menu](https://react-spectrum.adobe.com/react-aria/Menu.html)
- [Modal](https://react-spectrum.adobe.com/react-aria/Modal.html)
- [NumberField](https://react-spectrum.adobe.com/react-aria/NumberField.html)
- [Popover](https://react-spectrum.adobe.com/react-aria/Popover.html)
- [RadioGroup](https://react-spectrum.adobe.com/react-aria/RadioGroup.html)
- [SearchField](https://react-spectrum.adobe.com/react-aria/SearchField.html)
- [Select](https://react-spectrum.adobe.com/react-aria/Select.html)
- [Table](https://react-spectrum.adobe.com/react-aria/Table.html)
- [Tabs](https://react-spectrum.adobe.com/react-aria/Tabs.html)
- [TagGroup](https://react-spectrum.adobe.com/react-aria/TagGroup.html)
- [TextField](https://react-spectrum.adobe.com/react-aria/TextField.html)
- [TimeField](https://react-spectrum.adobe.com/react-aria/TimeField.html)
- [Tooltip](https://react-spectrum.adobe.com/react-aria/Tooltip.html)

## Local development

To get started, run the following commands:

```shell
bun i
bun dev
```

Install the Biome VSCode extension to format your code.

## Publishing (npm OIDC trusted publishing)

This package is published from GitHub Actions using npm trusted publishing (OIDC).

Release flow:

1. Run `bun release` (or `bun release <semver>`) from a clean, up-to-date `main` branch.
2. This creates and pushes a `v*` tag.
3. `.github/workflows/ci.yml` publishes on tag:
   - stable tags -> `npm publish --provenance --access public`
   - prerelease tags -> `npm publish --provenance --tag preview`
