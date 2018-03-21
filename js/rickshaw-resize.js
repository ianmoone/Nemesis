$(window).on('resize', function(){
    graph.configure({
    width: window.innerWidth,
    // height: window.innerHeight - 20
    });
    graph.render();
});
