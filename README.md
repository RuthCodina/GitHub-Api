
# GitHub-API

This project was crated with React App Created[Create React App](https://github.com/facebook/create-react-app), [Bootswatch](https://bootswatch.com/), and [ChartJS](https://www.chartjs.org/) using the GitHub Users API

### API Rate Limit

The Search API has a custom rate limit. For requests using Basic Authentication, OAuth, or client ID and secret, you can make up to 30 requests per minute. For unauthenticated requests, the rate limit allows you to make up to 10 requests per minute. So after some time the request to see the graph per page will give you a 403 Error message through console. Then be wise!

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.


### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Endpoints
this simple App has two endPoints
[] http://localhost:3000
[] http://localhost:3000/{profileName} to see the profile detail

## Usage
the first point allows you to write at least three characters to browse the profile in the API, an if you click in 'Click here to see....' then  you could se the graph, but remember the API rate Limit. 

After write the name, a list with the first ten of the search list will be displayed and you can switch to the other ten, with the arrows next to the numbers of the page you are in. 

As the API only brings info of 30 then you will be able to see maximum information of 30 profiles for each search, to see others, you will have to change the search name or be more specific. 





