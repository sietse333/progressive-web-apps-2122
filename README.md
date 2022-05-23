# Rijksmuseum PWA

link: rijksmuseumserverside.herokuapp.com

## Description of project

This is a project i made for the Rijkssmuseum. It uses the API from Rijkssmuseum to display pieces of art online. People can type in searchcommands to see pieces they want to see. It now also uses a service worker that caches different information on the page so the page still works when you are offline. 

## User story

As an art lover, I want to be able to search and view art from the Rijksmuseum at home, so that I can still enjoy art during a lockdown Rijksmuseum - RijksData API

![homescreen](https://user-images.githubusercontent.com/43068118/157267609-a4a87824-a5ac-4b62-ab5f-66203afd5096.png)

![offline](https://user-images.githubusercontent.com/43068118/161515230-cf140d80-1b45-43c8-8894-11cf9a83262e.png)


## How to install

To run this program you need node en npm installed.

To run this project locally you can clone it from this github. Run the code on a local server otherwise the modules wont work

Now type in npm install in the terminal to install all the packages.

Change the API key to your own. You can request one from the Rijksmuseum website.

Run the application on localhost:3000 with npm run dev

## Running as a web app

You can also run this project as a web application. In chrome in your searchbar there is a icon that starts the project as a webapp.

## External data source?

I have used the Rijkssmuseum api. You can get it by creating a account on their website. Then you can request it and you get it in the mail. I use this api by

## Activity diagram

![wirelaatste](https://user-images.githubusercontent.com/43068118/162408292-13383a78-3f94-4154-b511-0e1acb327be1.jpg)

## My Service worker

The service worker has a couple of CORE_ASSETS. I save my "offline" "style" and "manifest" into a cache which is named CORE_CACHE_ VERSION. It also saves the pages you have visited into a separate HTML cache. So when your internet switches off you can still use the page. However if you try to visit a page which you havent visited yet you will be forwarded to the offline page which shows you that your internet might not be working

```
const CORE_CACHE_VERSION = 'v1'
const CORE_ASSETS = [
  '/offline',
  '/css/style.css',
  'manifest.json'
]
```

## Critical rendering path / Optimizations

Om de snelheid van mijn pagina heb ik meerdere dingen gedaan. Ik heb een Compression package en een minify package toegevoegd om mijn code kleiner te maken in size. Daarna begon ik met lighthouse tests te doen. De resultaten daarvan zie je hieronder.

### Speed wafs client side

This is the speed of my original wafs project. There are no improvements made here at all.

![og wafs](https://user-images.githubusercontent.com/43068118/161925566-201151ac-ff80-47b6-825e-c78536127992.png)


### Speed progressive wafs

After some improvements i learned in the lessons i got it down to 99. But i just scaled the images down to a few pixels so it was kind of cheating. I did this by mapping the images and then slicing ".slice(0, -3) + "=s500" after the url for example. The s500 is the amount of pixels the image has. However to make a real difference i had to set it too low. But atleast now i know it was the fault of my images. I also had some orange stats left that i wanted to take care of.

![snelheid voorbeeld](https://user-images.githubusercontent.com/43068118/161925688-66c0fb0b-025f-440c-a6d2-cbde44a0156f.png)


### Final speed progressive wafs

Finally i got it down to a 100 consistently. I only miss the 100 for best practices because i dont scale the images dynamically. But i didnt get that to work in time sadly. The problem was that my images didnt have a set width and height. The result of this was really heavy images that weren`t scaled right. So i gave them a set width and height and it fixed my problem.

![final desktop](https://user-images.githubusercontent.com/43068118/161926051-c22442a8-c7a2-414a-b32d-80143d487d2b.png)



## What is a service worker (explained)

A service worker is a type of web worker. It's essentially a JavaScript file that runs separately from the main browser thread, intercepting network requests, caching or retrieving resources from the cache, and delivering push messages.

Service workers enable applications to control network requests, cache those requests to improve performance, and provide offline access to cached content. Caching resources will make content load faster under most network conditions.

A service worker goes through three steps in its lifecycle:
- Registration
- Installation
- Activation

To install a service worker, you need to register it in your main JavaScript code. Registration tells the browser where your service worker is located, and to start installing it in the background.

Once the the browser registers a service worker, installation can be attempted. This occurs if the service worker is considered to be new by the browser, either because the site currently doesn't have a registered service worker, or because there is a byte difference between the new service worker and the previously installed one.

A service worker installation triggers an install event in the installing service worker. We can include an install event listener in the service worker to perform some task when the service worker installs.

Once a service worker has successfully installed, it transitions into the activation stage. If there are any open pages controlled by the previous service worker, the new service worker enters a waiting state. The new service worker only activates when there are no longer any pages loaded that are still using the old service worker. This ensures that only one version of the service worker is running at any given time.

## Client side vs server side rendering

In Server side rendering, when the user makes a request to the webpage, the server prepares the HTML page by fetching the required data from the database and sends to the user's machine over the internet. Then the browser presents all the requested actions on the user UI. All these processes of fetching data from the database to creating an HTML page and sending it to the client are done in mere milliseconds.

Client-side rendering means that a website’s JavaScript is rendered in your browser, rather than on the website’s server. So now, instead of getting all the content from the HTML doc, only the required HTML with the JS files will be rendered. The rendering time for the first upload is a bit slow. However, the next page loads will be very fast as we don't have to wait for every page render. Moreover, there is no need to reload the entire UI after every call to the server. The client-side framework manages to update UI with changed data by re-rendering only that particular DOM element.

Benefits of Server Side rendering

- The initial page of the website load is faster as there are fewer codes to render.
- Good for minimal and static sites.
- Search engines can crawl the site for better SEO.

Downsides of Server side rendering

- the site interactions are less.
- Slow page rendering.
- Full UI reloads.
- Frequent server requests.

Benefits of Clientside rendering

- The app feels more responsive and users do not see the flash between page navigations due to full-page refreshes.
- Fewer HTTP requests are made to the server, as the same assets do not have to be downloaded again for each page load.
- API contract is not broken.

Downsides of Clientside rendering

- Heavier initial page load due to loading of the framework, app code, and assets required for multiple pages.
- There's an additional step to be done on your server which is to configure it to route all requests to a single entry point and allow client-side routing to take over from there.
- In most cases, requires an external library.



## Wishlist

- Adding better error states and loading state
- Improving images.
- Adding more of my old javascript modules
- Better overal styling on my page


## Resources
- https://www.w3schools.com/
- https://stackoverflow.com/
- https://developer.mozilla.org/en-US/
- https://dev.to/codewithtee/server-side-rendering-ssr-vs-client-side-rendering-csr-3m24
- https://developers.google.com/web/ilt/pwa/introduction-to-service-worker#:~:text=the%20Service%20Worker-,What%20is%20a%20service%20worker%3F,cache%2C%20and%20delivering%20push%20messages.
- Docenten
- Klasgenoten
