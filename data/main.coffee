cafe = require('frenchpress').cafe

pageMod.PageMod {
    include: '*.example.com'
    contentScriptWhen: 'ready'
    contentScript: cafe 'example.coffee'
    onAttach: (worker) ->
        worker.on 'message', (msg) ->
            worker.postMessage {}
}
