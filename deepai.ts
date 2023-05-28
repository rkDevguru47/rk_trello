const deepai = require('deepai');

deepai.setApiKey('6a7656b9-c288-49e9-a9cd-2390e284fc60');

// https://www.deepai.org/docs/text-generator
(async function() {
    var resp = await deepai.callStandardApi("text-generator", {
            text: "tell me about my day.",
    });
    console.log(resp);
})()