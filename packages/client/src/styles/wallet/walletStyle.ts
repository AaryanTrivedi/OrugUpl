const cssString: string = `
:host {
    display: block;
    margin: 0;
}
input {
    color: yellowgreen;
    width: 90%;
    background: black;
    outline: none;
    border: 1px solid yellowgreen;
    font-family: 'Courier', sans-serif;
    font-size: 16px;
    box-sizing: border-box;
    margin-bottom: 8px;
    margin-left: 4px;
    margin-right: 4px;
}
.wallet {
    width: 100%;
    height: 100%;
    overflow-y: auto;
    color: yellowgreen;
    background: black;
    border: 1px solid yellowgreen;
    border-radius: 4px;
    font-family: 'Courier', sans-serif;
    font-size: 16px;
    padding: 10px;
}
::-webkit-scrollbar {
    width: 11px; /* Includes the "border" */
}
::-webkit-scrollbar-track {
  background: black; /* Dark grey track */
  border-left: 2px solid yellowgreen; /* Simulates left border */
  border-right: 1px solid yellowgreen; /* Simulates right border */
}
::-webkit-scrollbar-thumb {
  background: yellowgreen; /* Yellow thumb */
  border-radius: 2px; /* Makes the thumb rectangular but slightly rounded */
}
.output {
    width: 100%;
    height: 100%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 8px;
    margin-bottom: 8px;
    text-align: left;
    white-space: pre-wrap;
}`;
export default cssString;
