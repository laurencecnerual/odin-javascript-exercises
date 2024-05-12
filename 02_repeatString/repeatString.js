const repeatString = function(s, n) {
    if (s == "" || n == 0) {
        return "";
    } else if (n < 0) {
        return "ERROR";
    } else {
        return s.repeat(n);
    } 
};

// Do not edit below this line
module.exports = repeatString;
