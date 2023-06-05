function pr(num) {
    if (num == 0)
        return 0
    else {
        console.log(num)
        pr(num - 1)
    }
}
pr(4)