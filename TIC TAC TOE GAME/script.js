let currentPlayer = "X";
let arr = Array(9).fill(null);

function checkWinner() {
  if (
    (arr[0] !== null && arr[0] == arr[1] && arr[1] == arr[2]) ||
    (arr[3] !== null && arr[3] == arr[4] && arr[4] == arr[5]) ||
    (arr[6] !== null && arr[6] == arr[7] && arr[7] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[3] && arr[3] == arr[6]) ||
    (arr[1] !== null && arr[1] == arr[4] && arr[4] == arr[7]) ||
    (arr[2] !== null && arr[2] == arr[5] && arr[5] == arr[8]) ||
    (arr[0] !== null && arr[0] == arr[4] && arr[4] == arr[8]) ||
    (arr[2] !== null && arr[2] == arr[4] && arr[4] == arr[6])
  ) {
    document.write(` Winner is ${currentPlayer}`);
    return;
  }
  if (!arr.some((e) => e === null)) {
    document.write(` Draw!!!!`);
    return;
  }
}

function handleClick(el) {
  const id = Number(el.id);
  if (arr[id] !== null) return;
  arr[id] = currentPlayer;
  el.innerText = currentPlayer;
  checkWinner();
  currentPlayer = currentPlayer === "X" ? "O" : "X";
}



// Game state variables
// let board = ["", "", "", "", "", "", "", "", ""];
// let currentPlayer = "X";
// let gameActive = true;
// let gameMode = "2player"; // "2player" or "vsAI"

// // Winning combinations
// const winningConditions = [
//     [0, 1, 2], // Top row
//     [3, 4, 5], // Middle row
//     [6, 7, 8], // Bottom row
//     [0, 3, 6], // Left column
//     [1, 4, 7], // Middle column
//     [2, 5, 8], // Right column
//     [0, 4, 8], // Diagonal
//     [2, 4, 6]  // Anti-diagonal
// ];

// // Handle cell click
// function handleClick(cell) {
//     const cellId = parseInt(cell.id);
    
//     // Check if cell is already filled or game is not active
//     if (board[cellId] !== "" || !gameActive) {
//         return;
//     }
    
//     // Make move
//     makeMove(cellId, cell);
    
//     // If game mode is vsAI and game is still active and current player is O (AI's turn)
//     if (gameMode === "vsAI" && gameActive && currentPlayer === "O") {
//         setTimeout(aiMove, 500); // AI moves after 0.5 sec delay
//     }
// }

// // Make a move
// function makeMove(cellId, cell) {
//     // Update board array
//     board[cellId] = currentPlayer;
    
//     // Update cell display
//     cell.textContent = currentPlayer;
    
//     // Check win or draw
//     checkResult();
    
//     // Switch player if game is still active
//     if (gameActive) {
//         currentPlayer = currentPlayer === "X" ? "O" : "X";
//         updateTurnDisplay();
//     }
// }

// // AI Move (Simple - picks first empty cell)
// function aiMove() {
//     if (!gameActive) return;
    
//     // Find all empty cells
//     const emptyCells = [];
//     for (let i = 0; i < board.length; i++) {
//         if (board[i] === "") {
//             emptyCells.push(i);
//         }
//     }
    
//     // If there are empty cells, AI makes a move
//     if (emptyCells.length > 0) {
//         // Simple AI: pick random cell
//         // For smarter AI, you can implement minimax algorithm
//         const randomIndex = Math.floor(Math.random() * emptyCells.length);
//         const aiCellId = emptyCells[randomIndex];
//         const aiCell = document.getElementById(aiCellId);
        
//         makeMove(aiCellId, aiCell);
//     }
// }

// // Check win or draw
// function checkResult() {
//     let roundWon = false;
    
//     // Check all winning conditions
//     for (let i = 0; i < winningConditions.length; i++) {
//         const [a, b, c] = winningConditions[i];
        
//         if (board[a] !== "" && board[a] === board[b] && board[a] === board[c]) {
//             roundWon = true;
//             highlightWinningCells([a, b, c]);
//             break;
//         }
//     }
    
//     if (roundWon) {
//         gameActive = false;
//         showMessage(`Player ${currentPlayer} wins! 🎉`);
//         return;
//     }
    
//     // Check for draw
//     if (!board.includes("")) {
//         gameActive = false;
//         showMessage("Game Draw! 🤝");
//         return;
//     }
// }

// // Highlight winning cells
// function highlightWinningCells(cells) {
//     cells.forEach(cellId => {
//         const cell = document.getElementById(cellId);
//         cell.style.backgroundColor = "#90EE90";
//         cell.style.transition = "0.3s";
//     });
// }

// // Update turn display (optional - add a div in HTML)
// function updateTurnDisplay() {
//     let turnDisplay = document.getElementById("turnDisplay");
//     if (!turnDisplay) {
//         // Create turn display if not exists
//         turnDisplay = document.createElement("div");
//         turnDisplay.id = "turnDisplay";
//         turnDisplay.style.margin = "20px 0";
//         turnDisplay.style.fontSize = "20px";
//         turnDisplay.style.fontWeight = "bold";
//         turnDisplay.style.textAlign = "center";
//         document.querySelector(".container").prepend(turnDisplay);
//     }
    
//     if (gameActive) {
//         turnDisplay.textContent = `Current Player: ${currentPlayer}`;
//         turnDisplay.style.color = currentPlayer === "X" ? "#2196F3" : "#FF9800";
//     }
// }

// // Show message
// function showMessage(msg) {
//     let messageDiv = document.getElementById("message");
//     if (!messageDiv) {
//         messageDiv = document.createElement("div");
//         messageDiv.id = "message";
//         messageDiv.style.margin = "20px 0";
//         messageDiv.style.fontSize = "18px";
//         messageDiv.style.fontWeight = "bold";
//         messageDiv.style.textAlign = "center";
//         document.querySelector(".container").appendChild(messageDiv);
//     }
    
//     messageDiv.textContent = msg;
//     messageDiv.style.color = "#4CAF50";
// }

// // Reset game
// function resetGame() {
//     board = ["", "", "", "", "", "", "", "", ""];
//     currentPlayer = "X";
//     gameActive = true;
    
//     // Clear all cells
//     for (let i = 0; i < 9; i++) {
//         const cell = document.getElementById(i);
//         cell.textContent = "";
//         cell.style.backgroundColor = "";
//     }
    
//     // Clear messages
//     const messageDiv = document.getElementById("message");
//     if (messageDiv) messageDiv.textContent = "";
    
//     updateTurnDisplay();
// }

// // Change game mode
// function setGameMode(mode) {
//     gameMode = mode;
//     resetGame();
    
//     // Update mode display
//     let modeDisplay = document.getElementById("modeDisplay");
//     if (!modeDisplay) {
//         modeDisplay = document.createElement("div");
//         modeDisplay.id = "modeDisplay";
//         modeDisplay.style.margin = "10px 0";
//         modeDisplay.style.fontSize = "14px";
//         modeDisplay.style.textAlign = "center";
//         document.querySelector(".container").prepend(modeDisplay);
//     }
    
//     modeDisplay.textContent = `Mode: ${mode === "2player" ? "2 Player" : "VS Computer"}`;
//     modeDisplay.style.color = "#666";
// }

// // Initialize game
// function initGame() {
//     // Add reset button
//     const resetBtn = document.createElement("button");
//     resetBtn.textContent = "Reset Game";
//     resetBtn.style.margin = "20px 10px";
//     resetBtn.style.padding = "10px 20px";
//     resetBtn.style.fontSize = "16px";
//     resetBtn.style.cursor = "pointer";
//     resetBtn.style.backgroundColor = "#4CAF50";
//     resetBtn.style.color = "white";
//     resetBtn.style.border = "none";
//     resetBtn.style.borderRadius = "5px";
//     resetBtn.onclick = resetGame;
    
//     // Add 2 Player button
//     const twoPlayerBtn = document.createElement("button");
//     twoPlayerBtn.textContent = "2 Player Mode";
//     twoPlayerBtn.style.margin = "20px 10px";
//     twoPlayerBtn.style.padding = "10px 20px";
//     twoPlayerBtn.style.fontSize = "16px";
//     twoPlayerBtn.style.cursor = "pointer";
//     twoPlayerBtn.style.backgroundColor = "#2196F3";
//     twoPlayerBtn.style.color = "white";
//     twoPlayerBtn.style.border = "none";
//     twoPlayerBtn.style.borderRadius = "5px";
//     twoPlayerBtn.onclick = () => setGameMode("2player");
    
//     // Add VS AI button
//     const vsAIBtn = document.createElement("button");
//     vsAIBtn.textContent = "VS Computer";
//     vsAIBtn.style.margin = "20px 10px";
//     vsAIBtn.style.padding = "10px 20px";
//     vsAIBtn.style.fontSize = "16px";
//     vsAIBtn.style.cursor = "pointer";
//     vsAIBtn.style.backgroundColor = "#FF9800";
//     vsAIBtn.style.color = "white";
//     vsAIBtn.style.border = "none";
//     vsAIBtn.style.borderRadius = "5px";
//     vsAIBtn.onclick = () => setGameMode("vsAI");
    
//     // Add buttons to container
//     const container = document.querySelector(".container");
//     const buttonContainer = document.createElement("div");
//     buttonContainer.style.textAlign = "center";
//     buttonContainer.appendChild(twoPlayerBtn);
//     buttonContainer.appendChild(vsAIBtn);
//     buttonContainer.appendChild(resetBtn);
//     container.appendChild(buttonContainer);
    
//     // Initialize turn display
//     updateTurnDisplay();
//     setGameMode("2player");
// }

// // Start game when page loads
// window.onload = initGame;