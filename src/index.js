import path from "path";
import fastify from "fastify"
import fastifyStatic from "fastify-static";
import fastifyCompress from "fastify-compress";
import fastifyMarko from "@marko/fastify";
import buildNameMiddleware from "./middleware/build-name";
// import indexPage from "./pages_old/index/index";
import storiesPage from "./pages/:stories/index.js";
import usersService from "./services/users";

const port = process.env.PORT || 3000;

fastify()
  .register(fastifyCompress)
  .register(fastifyStatic, {
    root: path.resolve("dist/client"),
    prefix: "/static"
  })
  .register(fastifyMarko)
  .addHook("onRequest", buildNameMiddleware)
  .get("/", storiesPage)
  .get("/services/users", usersService)
  .listen(port, (err, address) => {
    if (err) {
      throw err;
    }

    if (port !== "0") {
      console.log(`Listening on port ${address}`);
    }
  })
