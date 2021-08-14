# SwaOne

Install the CLI

`npm install -g @azure/static-web-apps-cli`

In the root folder, run:

`swa start http://localhost:4200 --api=http://localhost:7071`

# Notes

Setting up local development environment

`https://docs.microsoft.com/en-us/azure/static-web-apps/local-development`

Notes on `text/plain` responses

`https://angular.io/guide/http`

```Typescript
    const headers = new HttpHeaders().set(
      'Accept',
      'text/plain; charset=utf-8'
    );

    const response$: Observable<string> = this.http.get(
      '/api/Greetings?name=Bob',
      {
        headers,
        responseType: 'text',
      }
    );
```

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
