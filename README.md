Movie-app is a basic react application which display the movie posters in home page based on user search and filter applied.
On clicking the poster or name of the movie in home page it will direct to moviedetail page, where we can see the details of that specific movie like(poster, title, release year, genre, actors, short summar as plot and imdbID ranting) with a back button.


Work flow:
Home page:
1. This page consists a bard name,search bar, filter
2. By default avenger value is present so the movie continer shows the respective movie of the user search and filter applied
3. If movie name, keyword, imdbID is invalid or wrong it shows respective error msg
4. The movies are displayed with their poster. on hover the poster we can see the short desc of the movie with view detail button. On clicking  view detail we will directed to another page were we can see the brief detail of that specific movie alone

Moviedetail page:
1. In this page the respective movies poster, title, rating, actors... are displayed
2. Below the poster and movie-detail there is rating option with stars, user can click the stars to arte the movie on scale of 5 based on the stars the ui updats dynamically
3. Go back button is present so that we can get back to home page

Error page:
If the url of the pge is wrong is not match with path provided by the routers it will re direct to error page


# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is enabled on this template. See [this documentation](https://react.dev/learn/react-compiler) for more information.

Note: This will impact Vite dev & build performances.

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
