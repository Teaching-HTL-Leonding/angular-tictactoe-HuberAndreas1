import { Component } from '@angular/core';
import {SquareComponent} from "../square/square.component";

@Component({
  selector: 'app-grid',
  standalone: true,
  imports: [
    SquareComponent,
  ],
  templateUrl: './grid.component.html',
  styleUrl: './grid.component.css'
})
export class GridComponent {
  squares: string[] = Array(9).fill(null);
  xIsNext: boolean = true;
  gameOver: boolean = false;
  turn: string = 'Turn X';
  onSquareClick(index: number) {
    if (this.gameOver) {
      return;
    }
    if (this.squares[index]) {
      return;
    }
    this.squares[index] = this.xIsNext ? 'X' : 'O';
    this.xIsNext = !this.xIsNext;
    this.turn = this.xIsNext ? 'Turn X' : 'Turn O';
    this.checkForWinner();
  }

  checkForWinner() {
    // make a list of all possible winning lines
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    // check if any of the winning lines have all X's or all O's
    for (const line of lines) {
      const [a, b, c] = line;
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        this.turn = (`${this.squares[a]} wins!`);
        this.gameOver = true;
        return;
      }
    }
    if (this.squares.every((square) => square)) {
      this.turn = 'It\'s a draw!';
      this.gameOver = true
    }
    this.gameOver = false
  }
  reset() {
    this.squares = Array(9).fill(null);
    this.xIsNext = true;
    this.gameOver = false;
    this.turn = 'Turn X';
  }
}
