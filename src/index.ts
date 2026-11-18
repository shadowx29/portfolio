import index from "../index.html";

const port = Number(process.env.PORT ?? 3000);

const server = Bun.serve({
  port,
  development: process.env.NODE_ENV !== "production",
  routes: {
    "/api/status": () =>
      Response.json({
        alias: "shadowx29",
        status: "operational",
        uptime: Number(process.uptime().toFixed(2)),
      }),
    "/*": index,
  },
});

console.log(`shadowx29 portfolio online at ${server.url}`);
