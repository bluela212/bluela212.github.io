window.addEventListener('scroll', function(){

    let d = document.documentElement; 
    // biore dokument calej strony

    let innerHeight = window.innerHeight;
    // okno brauzera

    let offsetHeight = d.offsetHeight;
    // cale okno

    let scrollTop = d.scrollTop;
    // ile odjechalismy od gory strony

    let sumScrollTopInnerHeight = Math.ceil(scrollTop + innerHeight);

    console.log(`offset: ${offsetHeight}`);

    console.log("scrollTop + innerHeight: " + sumScrollTopInnerHeight);
})