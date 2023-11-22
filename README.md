# Characters Encyclopedia Microfrontends Challenge Example

This is a Microfrontends example which shows a Host Web Application and two catalogs of characters, one for Rick and Morty and the other for Harry Potter. 

The target of the exercise is to show the way a Frontend can be composed by different web applications using ReactJS. 

To start the example

Start the three projects from the root directory

cd rick-morty <br />
npm install <br />
npm run build <br />
npm run build:start <br />
(This will start the Rick and Morty application at 4001 port) <br />

cd harry-potter <br />
npm install <br />
npm run build <br /> 
npm run build:start <br />
(This will start the Rick and Morty application at 4002 port) <br />

cd host <br />
npm install <br />
npm run build <br />
npm run build:start <br />
(This will start the Host application at 8080 port) <br />

Open the Browser and navigate to 
http://localhost:8080/



What is accessibility? How do you achieve it?
● What is the difference between session storage, local storage, and cookies?
Session storage, local storage, and cookies are all mechanisms for storing data on a user's computer.

Session storage is temporary storage that is only available for the current browser session. When the browser is closed, all session storage data is deleted. This makes session storage ideal for storing data that is only needed for the current visit to the website, such as user preferences or form data.

Local storage is persistent storage that is available across browser sessions. This means that data stored in local storage will not be deleted when the browser is closed, and it will be available the next time the user visits the website. Local storage is ideal for storing data that the user needs to access on a regular basis, such as login credentials or user preferences.

Cookies are small pieces of data that are stored on the user's computer by a website. Cookies can be used to store a variety of information, such as user preferences, login credentials, and tracking information. Cookies can be set to expire after a certain period of time, or they can be set to persist indefinitely.


● Explain the javascript event loop (also may explain how promises or async await work in javascript)
The JavaScript event loop is a mechanism that allows JavaScript to handle multiple asynchronous events concurrently. It is  part of JavaScript's single-threaded nature, enabling the language to handle asynchronous operations without blocking the main thread.

The event loop consists of two main components:

Call Stack: The call stack is a stack-like data structure that keeps track of the currently executing functions. When a function is called, it is pushed onto the call stack. When the function returns, it is popped from the call stack.

Callback Queue: The callback queue is a FIFO (first-in, first-out) queue that stores functions that need to be executed later. 

The event loop continuously checks for new events.

Check for Call Stack Completion: If the call stack is empty, the event loop moves on to the next step.

Process Next Callback: If the call stack is not empty, the event loop continues executing the current function. Once the current function returns, the event loop pops it from the call stack.

Check for New Events: The event loop checks for new events, such as user interactions or network responses. If there are new events, their corresponding callbacks are added to the callback queue.

Process Callbacks: If there are callbacks in the queue, the event loop moves the oldest callback to the call stack and starts executing it. This process continues until the callback queue is empty.

Promises and async/await are two powerful tools for managing asynchronous operations in JavaScript. Promises provide a way to represent the eventual completion (or failure) of an asynchronous operation. Async/await allows you to write asynchronous code in a more synchronous-like style.

A promise is an object that represents the eventual completion (or failure) of an asynchronous operation. It has three states: pending, fulfilled, and rejected. When the asynchronous operation completes successfully, the promise is resolved and transitions to the fulfilled state. If the operation fails, the promise is rejected and transitions to the rejected state.

Async/await is a syntactic alternative for working with promises. It allows you to write asynchronous code in a more synchronous-like style. The async keyword is used to mark a function as asynchronous, and the await keyword is used to wait for a promise to resolve before continuing execution.


● If you are getting too many API calls being made from your hooks, what can you do to prevent this?
When the fetch function is being called from a useEffect Hook, It's recommended to adjust the control vector in order to trigger the effect when certain control variables get the values which will allow the effect to be triggered again. Also is recommended to use the useMemo, memo and useCallback hooks in order to improve the performance and avoid recalculating values.

● How do you manage the global state? And why in that way?
The Context API in conjunction with useContext are the mechanisms that React provides to deal with gloval variables. The context exposes a provider which can be consumed by children elements in order to avoid dealing with profoundly nested props.

● What is progressive rendering?
Progressive rendering is a technique for rendering a web page in which the most important content is displayed first, and then the rest of the content is loaded gradually as the user interacts with the page. This can improve the perceived performance of the page, as the user is able to see something useful almost immediately, even if the entire page has not yet finished loading. It's possible to render the application progressively in React using the lazy function. 