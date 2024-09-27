import fastify from "fastify";
import cors from "@fastify/cors";

const server = fastify({ logger: true });

server.register(cors, {
    origin: '*'
});

const teams = [
    { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
    { id: 2, name: "Mercedes", base: "Brackley, United kingdom" },
    { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United kingdom" }
];

const drives = [
    { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
    { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
    { id: 3, name: "Lando Norris", team: "McLaren" }
];

interface DirverParams {
    id: string
};

server.get("/teams", async (req, res) => {
    res.type("application/json").code(200)

    return { teams };
});

server.get("/drives", async (req, res) => {
    res.type("application/json").code(200)

    return { drives };
});

server.get<{ Params: DirverParams }>("/drives/:id", async (req, res) => {
    const id = parseInt(req.params.id);
    const driver = drives.find((d) => d.id === id);

    if (!driver) {
        res.type("application/json").code(404);
        return { message: "Driver Not Found" }
    } else {
        res.type("application/json").code(200);
        return driver;
    }
});


server.listen({ port: 3333 }, () => {
    console.log("Server init")
})