# Task Management System

## Miscellaneous

Open this file with [typora](https://typora.io) (an elegant markdown editor) to view the sequence diagram below. (or you can use other markdown editors that support [JS Sequence Diagrams](https://bramp.github.io/js-sequence-diagrams/).) Additional information can be found on [Draw Diagrams With Markdown](https://support.typora.io/Draw-Diagrams-With-Markdown/).

## Devlogs

*(Outdated)*

~~The `table-component` will have the main table element, display options, and page selection. The `table-row-component` will contain row data, an indicator of the current page, and the **pop-up modal**.~~

~~The `table-row-editor-component` will contain the innerHTML of a .~~

#### Used Libraries

- Font Awesome
- Bootstrap
- Angular Materials

## Structure

#### List of Components

`AddTaskComponent`

`TableComponent`

`TableRowComponent`

`TableRowComponentDialog` (*EntryComponent*)

#### Sequence Diagram

*(Outdated)*

```sequence
Note left of tableComponent: analyze Options & search
Note left of tableComponent: make page selector for user
tableComponent->>tableRowComponent: pass data-selecting commands 
Note right of tableRowComponent: Show Rows Accordingly
Note right of tableRowComponent: Indicate Current page
tableRowComponent->>tableRowComponent: Click -> Show
Note right of tableRowComponent: Show Details
```

## TODOs

- [x] decouple `table` component from `table-row` component. 
- [x] Make up 121 entires of mock data; store it as `json`
- [x] Use `httpClient` to get data from local path and set it to `localstorage` 
- [x] research about **Angular Material**
- [x] Edit Button - contents in the table
- [x] Figure out what `<router-outlet/>` does
- [x] Add Task Page with route
- [ ] Link to Add Task Page
- [ ] Two-way bindings & Submit Form on Add Task Page
- [ ] <u>Form Validations for adding and updating</u>
- [ ] <u>pagination in parents</u> (currently using `MatPaginator`, having issues of communication & styling)
- [ ] <u>Search</u> (probably need to get indices)
- [ ] <u>Order by ...</u> (sort alphabetically)
- [ ] showing current page number (`TableRowComponent`)
- [ ] Save Button - save updated information; eventually save changes in `localStorage`; return to '/'
- [x] set up *modal* or **Angular Material Dialog** for "<u>View</u>" button
- [x] set up new **route** & **page** for "<u>Add Task</u>"
- [x] decide whether the modal(**dialog**) need to be a componnent (*It ends up being a **EntryComponent***)
- [ ] View Button - Sketch/finish the layout of the pop-up modal
- [x] <u>Use pipe(filter) title case</u> 

------

## Bug Fix/Re-design

- [ ] <u>Fix Dialog opened with View Button</u> 
- [ ] <u>Remove `TableRowDetailsComponent`</u>
- [ ] Make the write of initial data to `localStorage` **one-time**
- [ ] read from `localStorage` every time changes are saved
- [ ] only updata **edited entries** to `localStorage`
- [ ] Make button clicks apply to its current row only
- [ ] connect pagination length to length of data in `localStorage`
- [ ] Lazy Loading: only read desired data entries for current display from `localStorage`

## UI/UX Refinement

- [ ] <u>Fix Table Margins</u>
- [ ] On the Add Task Page, make Quote Type and Quote# inline with each other
- [ ] Responsive Design using **Angular Material**

## Future Work

- [ ] Smart 404 Page

## Notes

In **`angular-fontawesome`** (not using original CDNs),  

```html
<i class="fa fa-coffee" aria-hidden="true"></i>
```

is written as in `src/app/app.component.html`

```html
<div style="text-align:center">
  <fa-icon [icon]="faCoffee"></fa-icon>
</div>
```

--find more information on [Using a Package Manager](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers) and [fa-coffee](https://fontawesome.com/v4.7.0/icon/coffee).

There's an Angular-based Bootstrap called [NgBootstrap](https://ng-bootstrap.github.io/#/home).