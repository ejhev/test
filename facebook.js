XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;

XMLHttpRequest.prototype.send = function(value) {

    console.log("intercepting");

    this.realSend(value);
};
