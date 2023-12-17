###### Episode 1 Notes ####
React code can be used in any part of the application given we include react library in the program 


React and ReactDOM is two different thing , created to handle different case --- React is base and React DOM is built for DOM manipulation for web apps. 

-- Working on react routes 
    - need to use createBrowserRouter from react don
    -- need to define paths and elements in createBrowserRouter
    -- In order to handle error case , we can use errorElement 
    -- we get hook useRouteError() from react-router-dom that can help to get error object defining 
    -- Link can be used to route to different pages without making page reload or browser refresh 
    --- Links are also provided by react-route-dom
    -- Diiffrence between client side routing and server side routing 
    -- In client side routing , we are not makeing new network calls to fetch html pages and load on screen but in server side 
    we need to fetch html pages from server and load on browser .
*/

/*
   ----React Class Based Component---
          - we need to use class keyword that will be extended from React.Component 
          - we will need to initialize constructor function , and using super(props), props can be passed to child component 
          -- props can be use using -> this.props
          -- state variable can be created using this.state and this.setState can be used to update the state of variable 

          ----- LifeCycle Method ---------
            - 1st constructor function willl be called 
            -- after that render will be called to load application on browser 
            -- after that, componentDidMount willbe called , that can be used to handle api calls and any state change 
            -- Whenever state is updated , componentDidUpdate() will be callled , in this 1st render () will be called and then componentDidUpdate will be called 
            -- At the end componentWillUnMount() will be called - when the compoent is unmounted from the DOM.

            -- good website to understand this 
            https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/

*/


