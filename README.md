

```javascript
var Gateway = require('stream-gateway');

function transformation() {
  var gateway = new Gateway();
  
  gateway.input
    .pipe( dothis() )
    .pipe( dothat() )
    .pipe( gateway.output );
    
  return gateway;
}

streamSource.pipe( transformation() ).pipe( streamDestination );

```
