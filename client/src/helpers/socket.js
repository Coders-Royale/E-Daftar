import io from "socket.io-client";

const SOCKET_API = "your-socket-api";

const getSocket = () => {
    return io(SOCKET_API);
}

export default getSocket;