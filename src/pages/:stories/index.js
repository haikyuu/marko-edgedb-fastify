import Template from "./index.marko";

export default async (request, reply) => {
  const { params, query, hostname, protocol } = request;
  await reply.marko(Template, { params, query, pathname: `${protocol}://${hostname}` });
};
