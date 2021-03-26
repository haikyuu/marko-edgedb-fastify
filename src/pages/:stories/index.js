import Template from "./index.marko";

export default async (request, reply) => {
  console.log("here 2")
  await reply.marko(Template, {});
};
