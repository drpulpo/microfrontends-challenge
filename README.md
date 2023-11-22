# Characters Encyclopedia Microfrontends Challenge Example

This is a Microfrontends example which shows a Host Web Application and two catalogs of characters, one for Rick and Morty and the other for Harry Potter. 

The target of the exercise is to show the way a Frontend can be composed by different web applications using ReactJS. 

To start the example

Start the three projects from the root directory

cd rick-morty
npm install
npm run build
npm run build:start
(This will start the Rick and Morty application at 4001 port)

cd harry-potter
npm install
npm run build
npm run build:start
(This will start the Rick and Morty application at 4002 port)

cd host
npm install
npm run build
npm run build:start
(This will start the Host application at 8080 port)