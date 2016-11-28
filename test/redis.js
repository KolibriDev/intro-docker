var assert = require('assert');
const redis = require('redis');
describe('Redis', function() {
  it('should set value', function(done) {
    let client = redis.createClient({'host':'localhost','port':6379})
    client.set("docker","container",(set_err,set_result) => {
      client.get("docker",(get_err,get_result) => {
        assert.equal("container",get_result);
        done()
      })
    })
  });
});
