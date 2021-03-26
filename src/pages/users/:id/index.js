import Template from "./index.marko";

export default async (request, reply) => {
  const { params } = request;
  await reply.marko(Template, { params });
};
