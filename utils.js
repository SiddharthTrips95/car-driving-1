function lerp(A,B,t){
    return A+(B-A)*t;
    // when t = 0, output = A
    // when t = 1, output = B
    // when t = some middle value, output = B-A
}