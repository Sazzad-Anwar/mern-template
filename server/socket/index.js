const socketHandler = (io, socket) => {
    //log of the user who has joined with the socket id
    console.log(`New client connected`, socket.id);
}

export default socketHandler;