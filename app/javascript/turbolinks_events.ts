document.addEventListener('turbolinks:click', () => {
  console.log('turbolinks:click')
  // fires when you click a Turbolinks-enabled link. The clicked element is the event target. Access the requested location with event.data.url. Cancel this event to let the click fall through to the browser as normal navigation.
})

document.addEventListener('turbolinks:before-visit', () => {
  console.log('turbolinks:before-visit')
  // fires before visiting a location, except when navigating by history. Access the requested location with event.data.url. Cancel this event to prevent navigation.
})

document.addEventListener('turbolinks:visit', () => {
  console.log('turbolinks:visit')
  // fires immediately after a visit starts.
})

document.addEventListener('turbolinks:request-start', () => {
  console.log('turbolinks:request-start')
  // fires before Turbolinks issues a network request to fetch the page. Access the XMLHttpRequest object with event.data.xhr.
})

document.addEventListener('turbolinks:request-end', () => {
  console.log('turbolinks:request-end')
  // fires after the network request completes. Access the XMLHttpRequest object with event.data.xhr.
})

document.addEventListener('turbolinks:before-cache', () => {
  console.log('turbolinks:before-cache')
  // fires before Turbolinks saves the current page to cache.
})

document.addEventListener('turbolinks:before-render', () => {
  console.log('turbolinks:before-render')
  // fires before rendering the page. Access the new <body> element with event.data.newBody.
})

document.addEventListener('turbolinks:render', () => {
  console.log('turbolinks:render')
  // fires after Turbolinks renders the page. This event fires twice during an application visit to a cached location: once after rendering the cached version, and again after rendering the fresh version.
})

document.addEventListener('turbolinks:load', () => {
  console.log('turbolinks:load')
  // fires once after the initial page load, and again after every Turbolinks visit. Access visit timing metrics with the event.data.timing object.
})
