import io from "socket.io-client";

const SOCKET_API = "https://sih-email.herokuapp.com";

const getSocket = () => {
    return io(SOCKET_API);
}

export default getSocket;