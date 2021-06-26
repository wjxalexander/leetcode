var reverseBetween = function (head, left, right) {
    let toReverseHeader = null;
    let toReveseTail = null;
    let toReverseFront = null;
    let toReverseEnd = null;
    // define reverse range
    let headCache = head;
    let i = 1;
    while (i <= right) {
        if (i === left - 1) {
            toReverseFront = headCache
        }
        if (i === left) {
            toReverseHeader = headCache
        }
        if (i === right) {
            toReveseTail = headCache
        }
        headCache = headCache.next;
        i++;
    }
    toReverseEnd = headCache;
    let temp = toReverseHeader
    let nextTemp = toReverseHeader.next
    // reverse target list in range
    while (nextTemp && nextTemp !== toReverseEnd) {
        let cached = nextTemp.next;
        nextTemp.next = temp;
        temp = nextTemp;
        nextTemp = cached;
    }
    if (toReverseFront) {
        toReverseFront.next = toReveseTail
    } else {
        head = toReveseTail
    }

    toReverseHeader.next = toReverseEnd
    return head
};