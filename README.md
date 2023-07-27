# Angular Supabase Data

* Angular frontend data entry form with a Supabase PostgreSQL database backend
* **Note:** to open web links in a new window use: _ctrl+click on link_

![GitHub repo size](https://img.shields.io/github/repo-size/AndrewJBateman/angular-supabase-data?style=plastic)
![GitHub pull requests](https://img.shields.io/github/issues-pr/AndrewJBateman/angular-supabase-data?style=plastic)
![GitHub Repo stars](https://img.shields.io/github/stars/AndrewJBateman/angular-supabase-data?style=plastic)
![GitHub last commit](https://img.shields.io/github/last-commit/AndrewJBateman/angular-supabase-data?style=plastic)

## :page_facing_up: Table of contents

* [Angular Supabase Data](#angular-supabase-data)
  * [:page\_facing\_up: Table of contents](#page_facing_up-table-of-contents)
  * [:books: General info](#books-general-info)
  * [:camera: Screenshots](#camera-screenshots)
  * [:signal\_strength: Technologies](#signal_strength-technologies)
  * [:floppy\_disk: Setup](#floppy_disk-setup)
  * [:flashlight: Testing](#flashlight-testing)
  * [:computer: Code Examples](#computer-code-examples)
  * [:cool: Features](#cool-features)
  * [:clipboard: Status \& To-Do List](#clipboard-status--to-do-list)
  * [:clap: Inspiration](#clap-inspiration)
  * [:file\_folder: License](#file_folder-license)
  * [:envelope: Contact](#envelope-contact)

## :books: General info

* Supabase is an open-source alternative to Firebase, but uses PostgreSQL instead of document database. Database is realtime & can use SQL joins. Realtime notifications via Websockets. RESTful API requires no backend code.
* RxJS was not required for Observables etc.

## :camera: Screenshots

![Example screenshot](./img/table.png)
![Example screenshot](./img/supabase.png)

## :signal_strength: Technologies

* [Angular v16](https://angular.io/)
* [Supabase public v2](https://supabase.io/) Postgres alternative to Firebase
* [Bootstrap v5](https://getbootstrap.com/) responsive styling, including ready-made [forms](https://getbootstrap.com/docs/5.0/forms/overview/)
* [Font Awesome v4](https://fontawesome.com/v4.7/icons/) free icons

## :floppy_disk: Setup

* `npm i` to install dependencies then...
* Create free account with Supabase and create table using SQL option. Do not enable RLS (Row Level Security)
* Add Supabase credentials to `utils/initSupabase.ts`
* `ng serve` for a dev server. Navigate to `http://localhost:4200/` - app will automatically reload if you change any of the source files
* `npm run lint` to eslint typescript, `npm run lint:fix` to eslint and fix
* `npm run prettier` to check and fix code formatting
* `ng build --prod` for a build folder

## :flashlight: Testing

* `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).
* `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## :computer: Code Examples

* This creates a table in Supabase SQL option

```typescript
create table todos (
 id bigint generated by default as identity primary key,
 name text check (char_length(name) > 0),
 done boolean default false,
);
```

## :cool: Features

* Supabase user interface is cool to work with and they have SQL templates to create tables etc.

## :clipboard: Status & To-Do List

* Status: Working
* To-Do: Add fields like created & updated dates. Set strict mode to true and correct type error
* To-Do: use Angular routing to add more Supabase tables etc. or remove

## :clap: Inspiration

* [Diligent Dev: Supabase - The Open-source Alternative to Firebase](https://www.youtube.com/watch?v=RpnDkUMNzK0)
* [Fireship: Is Supabase Legit? Firebase Alternative Breakdown](https://www.youtube.com/watch?v=WiwfiVdfRIc)

## :file_folder: License

* This project is licensed under the terms of the MIT license.

## :envelope: Contact

* Repo created by [ABateman](https://github.com/AndrewJBateman), email: `gomezbateman@yahoo.com`
