## 📺 Customize your terminal

For this project, you will see more modules of NodeJS like 'OS' and 'util'

0. Clone the repo then generate a `package.json` using the command `npm init` ; create an empty `index.js`. Add the shebang to launch it from the console when running `/index.js`.

1. Write a function that display the date and the time. The time should refresh automatically every second. By now you should know how to create an action that repeats at regular intervals...!.

2. Write a function to track how much memory the system is currently using. It will display the % of memory currently used, out of the total system memory. You will need the module [OS](https://nodejs.org/api/os.html) 

##### BONUS

* The memory will be printed in green if memory usage is decreasing and in red if it's increasing.
The time interval to refresh the data is up to you, pick something that makes sense!
You will need to see the module [util](https://nodejs.org/api/util.html#utilformatwithoptionsinspectoptions-format-args) 

* Write a function that displays the exchange rate of the BTC. It will prompt the user for the currency to display the exchange rate in.. (see [prompt package](https://www.npmjs.com/package/prompt))
To fetch data you can use node-fetch or axios, as you wish.
The look & feel (color? ASCII art or icons?) is up to you !

* Why not add a progress bar that increase whith time ?