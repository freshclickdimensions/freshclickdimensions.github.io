  var cdAnalytics = new clickdimensions.Analytics('analytics-eu.clickdimensions.com'); 
  cdAnalytics.setAccountKey('axhkovisiEO9U5zmMFiMNg'); 
  cdAnalytics.setDomain('github.io'); 
  cdAnalytics.setScore(typeof(cdScore) == "undefined" ? 0 : (cdScore == 0 ? null : cdScore)); 
  cdAnalytics.trackPage(); 