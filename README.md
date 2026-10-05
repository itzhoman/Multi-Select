# Multi-Select — React Tag Input

A reusable TypeScript multi-select component with removable tags, preset options, and free-text entry. The example app renders the component and logs selection changes to the console.

**Stack:** React 19 · TypeScript · Vite 6 · SCSS

## Highlights

- Add preset options from a dropdown or custom values with Enter.
- Trim values and prevent empty or duplicate selections.
- Remove individual tags using their remove buttons.
- Backspace removes the last selected item when the input is empty.
- Close the dropdown on an outside mouse click.
- Component props for placeholder, custom class, dropdown height, and disabled input.
- SCSS modules keep component styles separate from the example page.

## Run locally

Install Node.js and npm, then:

```sh
git clone https://github.com/itzhoman/Multi-Select.git
cd Multi-Select
npm ci
npm run dev
```

Open the local URL printed by Vite (normally http://localhost:5173). 

## Development commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the development server |
| `npm run build` | Type-check and build the production bundle |
| `npm run lint` | Run the configured lint command |
| `npm run preview` | Preview the Vite production bundle |

No automated test script is currently defined in `package.json`.

## Project structure

| Path | Responsibility |
| --- | --- |
| `src/components/multiselect/MultiSelect.tsx` | Selection state, dropdown, tags, and event handlers |
| `src/components/multiselect/types.ts` | Public component props |
| `src/components/multiselect/MultiSelect.module.scss` | Scoped component styles |
| `src/App.tsx` | Example usage and onChange callback |
| `src/main.tsx` | React application entry point |
| `tsconfig.app.json` | Application TypeScript settings |

## Component usage

```tsx
import MultiSelect from "./components/multiselect/MultiSelect";

<MultiSelect
  options={["React", "TypeScript", "Next.js"]}
  onChange={(selected) => console.log(selected)}
  placeholder="Add skills…"
  maxHeight={180}
/>
```

| Prop | Type | Default | Purpose |
| --- | --- | --- | --- |
| `options` | `string[]` | Required | Available preset options |
| `onChange` | `(selected: string[]) => void` | Required | Receives the full selection after changes |
| `placeholder` | `string` | `"Try to add..."` | Empty-state input text |
| `className` | `string` | None | Additional wrapper class |
| `maxHeight` | `number` | `150` | Dropdown maximum height in pixels |
| `disabled` | `boolean` | `false` | Disables the input and opening interaction |

## Customize

- Pass your own string options and handle the `onChange` callback.
- Style the component through its SCSS module or `className` prop.
- Use `maxHeight` to adjust the dropdown scroll area.

## Current scope

Selection state is internal: there is no controlled `value` prop. Typed text is added with Enter; it does not filter the preset dropdown. Arrow-key option navigation is not implemented. `disabled` disables the input/open interaction, but existing tag remove buttons remain active.

## Repository

[Source on GitHub](https://github.com/itzhoman/Multi-Select) · [Hooman Hajimohamadi](https://github.com/itzhoman)

Documentation reviewed against source commit [`7ed055c`](https://github.com/itzhoman/Multi-Select/commit/7ed055cfa1ae2aeeacc6d9a324acad6b7f451608).
