
# Vodoo
Vodoo is a task management application with user registration, WYSIWYG editor and task scheduling capability 
built using Laravel 8 REST API and Vue 3.
## Preview
<img src="https://i.imgur.com/KpsqF0w.png" />

## Tech stack
* Laravel 8
* Vue 3 (Composition API)
* Vue Router
* Vuex
* SCSS
### External libraries
* [Tiptap Editor](https://tiptap.dev/)
* [Day.js](https://day.js.org/)
* [Litepicker](https://litepicker.com/)
* [VeeValidate](https://vee-validate.logaretm.com/v4/)
## Installation
1. Run `composer install`
2. Copy `.env.example` to `.env` file
3. Set your database in `.env` file
4. Run `php artisan key:generate`
5. Run `npm install`
6. Start local server `php artisan serve`
7. Visit `localhost:8000`
 ## Roadmap
 - [x] User authentication
 - [x] CRUD operations for tasks
 - [x] Dashboard view
 - [x] WYSIWYG editor for task descriptions
 - [x] History of completed tasks
 - [x] Datepicker for task deadlines
 - [x] Popup notifications
 - [x] Form validation
 - [ ] Grouping tasks in folders
 - [ ] Sorting/filtering tasks
 - [ ] Statistics
 - [ ] User settings
 - [ ] Email notifications
 - [ ] Attaching files to tasks
 - [ ] Sharing tasks with other users
