function printBoard(liveCells = []) {
  const toPrint = [];
  const rows = liveCells.map(elem => elem.row);
  const minRow = Math.min(...rows);
  const maxRow = Math.max(...rows);

  const cols = liveCells.map(elem => elem.col);

  const minCol = Math.min(...cols);
  const maxCol = Math.max(...cols);

  for (let i = minRow; i <= maxRow; i++) {
    const currentRow = [];
    for (let j = minCol; j <= maxCol; j++) {
      if (liveCells.findIndex(elem => elem.row === i && elem.col === j) >= 0) {
        currentRow.push('*');
      } else {
        currentRow.push('.');        
      }
    }
    toPrint.push(currentRow);
  }
  console.log(toPrint);
}

function getNumberOfLiveNeighbours(cells, cell) {
  let liveNeighbours = 0;
  for (let i = 0; i < cells.length; i++) {
    const liveCell = cells[i];
    if (Math.abs(liveCell.row - cell.row) > 1 || Math.abs(liveCell.col - cell.col) > 1) {
      continue;
    }
    if (liveCell.row === cell.row && liveCell.col === cell.col) {
      continue;
    }
    liveNeighbours++;
  }
  return liveNeighbours;
}

function getNeighbours(cell) {
  const neighbours = [];
  neighbours.push({ row: cell.row-1, col: cell.col-1 });
  neighbours.push({ row: cell.row-1, col: cell.col });
  neighbours.push({ row: cell.row-1, col: cell.col+1 });
  neighbours.push({ row: cell.row, col: cell.col-1 });
  neighbours.push({ row: cell.row, col: cell.col+1 });
  neighbours.push({ row: cell.row+1, col: cell.col-1 });
  neighbours.push({ row: cell.row+1, col: cell.col });
  neighbours.push({ row: cell.row+1, col: cell.col+1 });
  return neighbours;
}

function gameOfLife(cells = [], steps = 0) {
  let newCells = cells;
  for (let step = 1; step <= steps; step++) {    
    console.log("Step " + step);
    printBoard(newCells);
    const auxCollection = [];
    newCells.forEach(cell => {
      const liveNeighbours = getNumberOfLiveNeighbours(newCells, cell);
      if (liveNeighbours === 2 || liveNeighbours === 3) {
        auxCollection.push(cell);
      }
      const neighbours = getNeighbours(cell);
      neighbours.forEach(neighbour => {
        const nbOfLiveNeighbours = getNumberOfLiveNeighbours(newCells, neighbour);
        if (newCells.findIndex(c => c.row === neighbour.row && c.col === neighbour.col) < 0) { // neighbour was dead
          if (nbOfLiveNeighbours === 3) {
            auxCollection.push(neighbour);
          }
        }
      });
    });
    newCells = auxCollection;
  }
}

const initialLiveCells = [
  { row: 1, col: 1 }, { row: 1, col: 2 }, { row: 2, col: 2 }, { row: 2, col: 3 }, { row: 3, col: 2 },
  { row: 3, col: 3 }, { row: 6, col: 5 }, { row: 7, col: 5 }, { row: 7, col: 6 }, { row: 8, col: 6 } 
];

gameOfLife(initialLiveCells, 10);