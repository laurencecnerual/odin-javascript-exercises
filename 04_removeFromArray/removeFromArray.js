const removeFromArray = function(oldList, ...removeMe) {
    const newList = [];

    for (e of oldList) {
        let isFound = false;

        for (r of removeMe) {
            if (e === r) {
                isFound = true;
            }
        }

        if (!isFound) {
            newList.push(e);
        }
    }

    return newList;
};

// Do not edit below this line
module.exports = removeFromArray;
