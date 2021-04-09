# TaskSpa

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.0.7.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Description

Product catalog task with the following functionality:
- list 3 categories - `Software`, `Mobile Devices`, `Fashion`
- list products
    - By default list products from all categories
    - If a category is selected - list products from that category only
    - 6 products per page
    - `load more` button loads more products. If there are no more - hide button
- open modal with complete product info on product item click
- responsive:
    - content is centered with 2 product items per page from desktop (width > 800px)
    - with width < 800px page begins to get responsive
