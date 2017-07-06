const levelNone = 0,
      levelError = 1,
      levelInfo = 2,
      levelDebug = 3;

const appenderConsole = 1,
      appenderDom = 2,
      appenderAlert = 4;

const log = function(level, logAppender) {

  const appenderDomId = 'test-result-list';
  const currentLogLevel = levelDebug;

  return function (msg) {
    if (level > currentLogLevel) {
      return;
    }

    if (logAppender & appenderAlert) {
      window.alert(msg);
      return; // ignore other appenders in case of alert
    }

    if (logAppender & appenderConsole) {
      console.log(msg);
    }
    
    if (logAppender & appenderDom) {
      let rootElement = document.getElementById(appenderDomId);
      let itemElement = document.createElement('li');
      itemElement.appendChild(document.createTextNode(msg));
      rootElement.appendChild(itemElement);
    }
  }
}

export const error = log(levelError, appenderAlert);
export const info = log(levelInfo, appenderConsole | appenderDom);
export const debug = log(levelDebug, appenderConsole);

export function assert(expected, actual, message) {
  if (expected == actual) {
    return;
  } else {
    throw Error(message || `expect ${expected}, but was ${actual}`);
  }
}

export function assertArray(expected, actual) {
  if (expected === actual) {
    return;

  } else if (expected.length != actual.length) {
    throw Error(`expect array length ${expected.length}, but was ${actual.length}`);

  } else {

    for (var i = 0; i < expected.length; i++) {
      assert(expected[i], actual[i], `expect ${expected[i]} at position ${i}, but was ${actual[i]}`);
    }
  }
}
