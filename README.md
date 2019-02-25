## Miscellaneous

Open this file with `typora`.

## Devlogs

The `table-component` will have the main table element, display options, and page selection. The `table-row-component` will contain row data, an indicator of the current page, and the **pop-up modal**.

~~The `table-row-editor-component` will contain the innerHTML of a .~~

## Structure

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
- [x] Make up the 121 entires of mock data; store it as `json`
- [x] Use `httpClient` to get data from local path and set it to `localstorage` 
- [ ] set up **modal** and **route** for "Add Task" button
- [ ] showing current page (child)
- [ ] pagination (select page) to be parents
- [ ] decide whether the modal need to be a componnent
- [ ] research about **Angular Material**
- [ ] View Button - Sketch/finish the layout of the pop-up modal
- [ ] Edit Button - contents in the table
- [ ] Save Button - save updated information

------

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



## Bug Fix