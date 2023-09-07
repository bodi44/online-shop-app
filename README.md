# Mini Online Shopping App

Implemented due to requirements: https://gist.github.com/luigircruz/84bbc460a2e9a0a457b1038de98cfd6b

## Getting Started

1. Install proper Node version.
   ```
    nvm use
   ```
2. Install deps.
   ```
   npm install
   ```
3. Install deps.
   ```
   npm run dev
   ```

## Project structure

- `/api` - the folder with all API stuff like services, models, hooks, etc.
- `/components` - the folder with sharable components.
- `/modules` - the business logic grouped by modules.<br/>
All the stuff relate to specific feature entity should be stored there, like components, utils, store, types, etc.
- `providers` - the folder with global app providers.
- `constants.ts` - global constants.
- `store.tsx` - global store config.

All the other structure is same as in recommendations https://nextjs.org/docs/getting-started/project-structure
