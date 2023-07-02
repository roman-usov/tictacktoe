import '@testing-library/jest-dom';
import fs from 'fs';
import path from 'path';
import testingLibraryDom from '@testing-library/dom';
import userEvent from '@testing-library/user-event';

import run from '../src/application.js';

const { screen } = testingLibraryDom;

const getCell = (rowIndex, cellIndex) => {
  const table = document.querySelector('table');
  return table.rows.item(rowIndex).cells.item(cellIndex);
};

beforeAll(() => {
  const initHtml = fs.readFileSync(path.join('__fixtures__', 'index.html')).toString();
  document.body.innerHTML = initHtml;
  run();
});

test('application', () => {
  const root = screen.getByTestId('root');
  const table = screen.getByRole('table');
  expect(root).toContainElement(table);
  expect(getCell(0, 0)).toHaveTextContent('s');
  expect(getCell(1, 1)).toHaveTextContent('s');
  expect(getCell(2, 2)).toHaveTextContent('s');
});

const cells = [
  [2, 2, 'x'],
  [1, 1, 'o'],
  [1, 2, 'x'],
  [2, 1, 'o'],
  [2, 1, 'o'],
  [0, 0, 'o'],
  [1, 0, 'x'],
  [2, 0, 'o'],
  [0, 2, 'x'],
];

test.each(cells)('Row %s, column %s, set "%s"', async (row, column, symbol) => {
  const cellBeforeClick = getCell(row, column);
  await userEvent.default.click(cellBeforeClick);
  const cellAfterClick = getCell(row, column);
  const regex = new RegExp(`^${symbol}$`);
  expect(cellAfterClick).toHaveTextContent(regex);
});
