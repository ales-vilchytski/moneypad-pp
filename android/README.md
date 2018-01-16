# Android WebView based app for MoneypadPP application

## Build app

This app depends on web app (see ``../web-app``) which is bundled and placed under VCS.
To update bundled web-app use gradle task ``app:webAppSync`` which builds and copies all needed artifacts.

## Debug app

- Start web-app (../web-app, see README.md of project)
  > $ npm start
- Open Chrome on PC and go to ``chrome://inspect``. Setup port forwarding to get web app on localhost
- Open Chrome on phone for port forwarding to work
- Build and run application with ``debug`` build variant
- WebView is set up for debug, so Chrome on PC should see it, refresh ``chrome://inspect`` if needed.

Useful articles:
- https://developers.google.com/web/tools/chrome-devtools/remote-debugging/webviews
- https://developer.chrome.com/multidevice/webview/gettingstarted

There is another useful build variant ``debugPrebuilt``, which runs bundled web-app version
