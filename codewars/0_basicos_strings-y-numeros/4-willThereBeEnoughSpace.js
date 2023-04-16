//First approach
const enough = (cap, on, wait) => cap - on < wait ? wait + on - cap : 0 ;

//Second approach
const enough2 = (cap, on, wait) => wait + on - cap > 0 ? wait + on - cap : 0;

//Third approach
const enough3 = (cap, on, wait) => (cap - on > wait) ? 0 : (cap - on - wait)* -1;

//Fourth approach
const enough4 = (cap, on, wait) => cap - on >= wait ? 0 : wait + on - cap;