## src/application.js

`application.js` implements a function for playing Ticktacktoe on a field comprising 9 cells (implemented as a table).

The field is generated by the `generateField()` function. The field is then appended to the `.root` element.

Players play at the same computer and take turns clicking on the cells. When cells are clicked, the game alternates `x` and `o` values on the screen.

The initial HTML looks like this.

```html
<div class="root">
  <table class="table-bordered">
    <tbody>
      <tr>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
      </tr>
      <tr>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
      </tr>
      <tr>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

After a player clicks the cell in the middle, the HTML becomes like this.

```html
<div class="root">
  <table class="table-bordered">
    <tbody>
      <tr>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
      </tr>
      <tr>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3">x</td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
      </tr>
      <tr>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
        <td class="py-2 px-3"><span class="invisible">s</span></td>
      </tr>
    </tbody>
  </table>
</div>
```

Clicking on a displayed cell means a player has taken their turn. However, 
the open value doesn't change. 
