function jobscheduler(fn, n) {
    console.log("Scheduler launched");
    setTimeout(fn, n);
}

jobscheduler(() => { console.log("I have been called!!!"); }, 2000);