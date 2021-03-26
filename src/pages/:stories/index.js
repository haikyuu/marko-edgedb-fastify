import Template from "./index.marko";

export default async (request, reply) => {
  const { params, query } = request;
  await reply.marko(Template, { params, query });
};
