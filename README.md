# Task Management System

## Miscellaneous

Open this file with [typora](https://typora.io) (an elegant markdown editor) to view the sequence diagram below. (or you can use other markdown editors that support [JS Sequence Diagrams](https://bramp.github.io/js-sequence-diagrams/).) Additional information can be found on [Draw Diagrams With Markdown](https://support.typora.io/Draw-Diagrams-With-Markdown/).

## Devlogs

*(Outdated)*

The `table-component` will have the main table element, display options, and page selection. The `table-row-component` will contain row data, an indicator of the current page, and the **pop-up modal**.

~~The `table-row-editor-component` will contain the innerHTML of a .~~

## Structure

#### List of Components

`AddTaskComponent`

`TableComponent`

`TableRowComponent`

`TableRowDetailsComponent`

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
- [ ] pagination in parents
- [ ] showing `current-page` (child)
- [ ] Save Button - save updated information; eventually save changes in `localStorage`
- [ ] set up **modal** and **route** for "<u>View</u>" button
- [ ] set up new **route** & **page** for "<u>New Task</u>"
- [ ] 
- [ ] decide whether the modal need to be a componnent
- [ ] View Button - Sketch/finish the layout of the pop-up modal

------

## Bug Fix/Redesign

- [ ] Make the write of initial data to `localStorage` **one-time**
- [ ] read from `localStorage` every time changes are saved
- [ ] only updata **edited entries** to `localStorage`
- [ ] Make button clicks apply to its current row only
- [ ] connect pagination length to length of data in `localStorage`
- [ ] Lazy Loading: only read desired data entries for current display from `localStorage`

## UI/UX Refinement

## Notes

In **`angular-fontawesome`** (not using CDNs),  

```html
<i class="fa fa-coffee" aria-hidden="true"></i>
```

is written as in `src/app/app.component.html`

```html
<div style="text-align:center">
  <fa-icon [icon]="faCoffee"></fa-icon>
</div>
```

Find more information on [Using a Package Manager](https://fontawesome.com/how-to-use/on-the-web/setup/using-package-managers) and [fa-coffee](https://fontawesome.com/v4.7.0/icon/coffee).

## Future Work